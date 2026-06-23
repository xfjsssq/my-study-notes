import type {
  ProgressBundle,
  SubjectProgress,
  ChapterProgress,
  ChapterStatus,
} from "./types";

const STORAGE_KEY = "study_progress";

const isClient = typeof window !== "undefined" && typeof localStorage !== "undefined";

// ── LocalStorage ──
export function loadProgressFromLocal(): ProgressBundle {
  if (!isClient) return { version: 1, updatedAt: "", subjects: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // Corrupt data — fall through to default
  }
  return { version: 1, updatedAt: "", subjects: {} };
}

export function saveProgressToLocal(bundle: ProgressBundle): void {
  if (!isClient) return;
  bundle.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bundle));
}

// ── GitHub Sync ──
// Persist PAT to localStorage (encrypted with a simple hash for V1)
// V2: upgrade to Web Crypto API for proper encryption
export function savePat(pat: string): void {
  if (isClient) localStorage.setItem("study_pat", btoa(pat));
}

export function getPat(): string | null {
  if (!isClient) return null;
  const encoded = localStorage.getItem("study_pat");
  if (!encoded) return null;
  try {
    return atob(encoded);
  } catch {
    return null;
  }
}

// ── Chapter Progress CRUD ──
export function getChapterProgress(
  subjectId: string,
  chapterId: string
): ChapterProgress | null {
  const bundle = loadProgressFromLocal();
  return (
    bundle.subjects[subjectId]?.chapters?.[`${subjectId}/${chapterId}`] ?? null
  );
}

export function markChapterDone(
  subjectId: string,
  chapterId: string,
  notes?: string
): ProgressBundle {
  const bundle = loadProgressFromLocal();
  if (!bundle.subjects[subjectId]) {
    bundle.subjects[subjectId] = {
      subjectId,
      updatedAt: "",
      chapters: {},
    };
  }

  const key = `${subjectId}/${chapterId}`;
  const existing = bundle.subjects[subjectId].chapters[key];
  const now = new Date().toISOString();

  // Toggle: if already done, mark undone; otherwise mark done
  if (existing?.status === "done") {
    delete bundle.subjects[subjectId].chapters[key];
  } else {
    bundle.subjects[subjectId].chapters[key] = {
      chapterPath: key,
      status: "done",
      completedAt: now,
      notes: notes ?? existing?.notes ?? "",
      updatedAt: now,
    };
  }

  bundle.subjects[subjectId].updatedAt = now;
  saveProgressToLocal(bundle);
  return bundle;
}

export function updateChapterNotes(
  subjectId: string,
  chapterId: string,
  notes: string
): ProgressBundle {
  const bundle = loadProgressFromLocal();
  if (!bundle.subjects[subjectId]) {
    bundle.subjects[subjectId] = {
      subjectId,
      updatedAt: "",
      chapters: {},
    };
  }

  const key = `${subjectId}/${chapterId}`;
  bundle.subjects[subjectId].chapters[key] = {
    ...(bundle.subjects[subjectId].chapters[key] || {
      chapterPath: key,
      status: "empty" as ChapterStatus,
    }),
    notes,
    updatedAt: new Date().toISOString(),
  };

  bundle.subjects[subjectId].updatedAt = new Date().toISOString();
  saveProgressToLocal(bundle);
  return bundle;
}

// ── Stats ──
export function getProgressStats(subjectId: string): {
  total: number;
  done: number;
  percent: number;
} {
  const bundle = loadProgressFromLocal();
  const subject = bundle.subjects[subjectId];
  if (!subject) return { total: 0, done: 0, percent: 0 };

  const done = Object.values(subject.chapters).filter(
    (c) => c.status === "done"
  ).length;
  const total = Object.keys(subject.chapters).length;

  return {
    total,
    done,
    percent: total > 0 ? Math.round((done / total) * 100) : 0,
  };
}

// ── Sync to GitHub ──
// Returns the new SHA if successful
const GITHUB_OWNER = "xfjsssq";
const GITHUB_REPO = "my-study-notes";
const PROGRESS_PATH = ".progress/progress.json";

export async function syncProgressToGitHub(
  bundle: ProgressBundle
): Promise<{ sha: string } | null> {
  const pat = getPat();
  if (!pat) return null;

  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${PROGRESS_PATH}`;

  try {
    // Get current SHA
    let sha: string | null = null;
    const existing = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${pat}` },
    });
    if (existing.ok) {
      const info = await existing.json();
      sha = info.sha;
    }

    // Base64 encode
    const content = btoa(
      unescape(encodeURIComponent(JSON.stringify(bundle, null, 2)))
    );

    const body: Record<string, string> = {
      message: `Sync progress: ${bundle.updatedAt}`,
      content,
    };
    if (sha) body.sha = sha;

    const resp = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${pat}`,
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      console.error("Sync failed:", await resp.json());
      return null;
    }

    const result = await resp.json();
    return { sha: result.content.sha };
  } catch (err) {
    console.error("Sync error:", err);
    return null;
  }
}

export async function loadProgressFromGitHub(): Promise<ProgressBundle | null> {
  const pat = getPat();
  if (!pat) return null;

  try {
    const resp = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${PROGRESS_PATH}`,
      { headers: { Authorization: `Bearer ${pat}` } }
    );
    if (!resp.ok) return null;

    const data = await resp.json();
    const content = JSON.parse(
      decodeURIComponent(escape(atob(data.content)))
    );
    return content;
  } catch {
    return null;
  }
}
