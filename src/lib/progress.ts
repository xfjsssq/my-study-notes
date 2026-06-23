import type { ProgressBundle, SubjectProgress, ChapterProgress, ChapterStatus } from "./types";

const STORAGE_KEY = "study_progress";
const isClient = typeof window !== "undefined" && typeof localStorage !== "undefined";

export function loadProgressFromLocal(): ProgressBundle {
  if (!isClient) return { version: 1, updatedAt: "", subjects: {} };
  try { const r = localStorage.getItem(STORAGE_KEY); if (r) return JSON.parse(r); } catch {}
  return { version: 1, updatedAt: "", subjects: {} };
}

export function saveProgressToLocal(bundle: ProgressBundle): void {
  if (!isClient) return;
  bundle.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bundle));
}

export function savePat(pat: string): void {
  if (isClient) localStorage.setItem("study_pat", btoa(pat));
}

export function getPat(): string | null {
  if (!isClient) return null;
  const e = localStorage.getItem("study_pat");
  if (!e) return null;
  try { return atob(e); } catch { return null; }
}

export function getChapterProgress(subjectId: string, chapterId: string): ChapterProgress | null {
  return loadProgressFromLocal().subjects[subjectId]?.chapters?.[`${subjectId}/${chapterId}`] ?? null;
}

export function markChapterDone(subjectId: string, chapterId: string, notes?: string): ProgressBundle {
  const b = loadProgressFromLocal();
  if (!b.subjects[subjectId]) b.subjects[subjectId] = { subjectId, updatedAt: "", chapters: {} };
  const k = `${subjectId}/${chapterId}`;
  const e = b.subjects[subjectId].chapters[k];
  const n = new Date().toISOString();
  if (e?.status === "done") { delete b.subjects[subjectId].chapters[k]; }
  else { b.subjects[subjectId].chapters[k] = { chapterPath: k, status: "done", completedAt: n, notes: notes ?? e?.notes ?? "", updatedAt: n }; }
  b.subjects[subjectId].updatedAt = n;
  saveProgressToLocal(b);
  return b;
}

export function updateChapterNotes(subjectId: string, chapterId: string, notes: string): ProgressBundle {
  const b = loadProgressFromLocal();
  if (!b.subjects[subjectId]) b.subjects[subjectId] = { subjectId, updatedAt: "", chapters: {} };
  const k = `${subjectId}/${chapterId}`;
  b.subjects[subjectId].chapters[k] = { ...(b.subjects[subjectId].chapters[k] || { chapterPath: k, status: "empty" as ChapterStatus }), notes, updatedAt: new Date().toISOString() };
  b.subjects[subjectId].updatedAt = new Date().toISOString();
  saveProgressToLocal(b);
  return b;
}

export function getProgressStats(subjectId: string): { total: number; done: number; percent: number } {
  const s = loadProgressFromLocal().subjects[subjectId];
  if (!s) return { total: 0, done: 0, percent: 0 };
  const d = Object.values(s.chapters).filter((c) => c.status === "done").length;
  const t = Object.keys(s.chapters).length;
  return { total: t, done: d, percent: t > 0 ? Math.round((d / t) * 100) : 0 };
}

const GITHUB_OWNER = "xfjsssq";
const GITHUB_REPO = "my-study-notes";
const PROGRESS_PATH = ".progress/progress.json";

export async function syncProgressToGitHub(bundle: ProgressBundle): Promise<{ sha: string } | null> {
  const pat = getPat();
  if (!pat) return null;
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${PROGRESS_PATH}`;
  try {
    let sha: string | null = null;
    const ex = await fetch(url, { headers: { Authorization: `Bearer ${pat}` } });
    if (ex.ok) { const i = await ex.json(); sha = i.sha; }
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(bundle, null, 2))));
    const body: Record<string, string> = { message: `Sync: ${bundle.updatedAt}`, content };
    if (sha) body.sha = sha;
    const r = await fetch(url, { method: "PUT", headers: { Authorization: `Bearer ${pat}`, "Content-Type": "application/json", "X-GitHub-Api-Version": "2022-11-28" }, body: JSON.stringify(body) });
    if (!r.ok) return null;
    return { sha: (await r.json()).content.sha };
  } catch { return null; }
}

export async function loadProgressFromGitHub(): Promise<ProgressBundle | null> {
  const pat = getPat();
  if (!pat) return null;
  try {
    const r = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${PROGRESS_PATH}`, { headers: { Authorization: `Bearer ${pat}` } });
    if (!r.ok) return null;
    const d = await r.json();
    return JSON.parse(decodeURIComponent(escape(atob(d.content))));
  } catch { return null; }
}