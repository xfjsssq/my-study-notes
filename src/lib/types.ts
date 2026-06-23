// ── Content Type Definitions ──

export interface Subject {
  id: string;          // directory name, e.g. "math"
  name: string;        // display name, e.g. "高等数学"
  icon?: string;       // emoji icon
  chapters: Chapter[];
}

export interface Chapter {
  id: string;          // directory name, e.g. "chapter1"
  title: string;       // e.g. "函数与极限"
  order: number;
  summary?: string;    // one-line description
  path: string;        // route path, e.g. "/subjects/math/chapter1"
}

export interface SubjectIndex {
  id: string;
  name: string;
  icon: string;
}

export interface ChapterIndex {
  subjectId: string;
  id: string;
  title: string;
  order: number;
  summary?: string;
  createdAt?: string;
  updatedAt?: string;
}

// ── Progress Types ──
export type ChapterStatus = "done" | "empty";

export interface ChapterProgress {
  chapterPath: string;      // e.g. "math/chapter1"
  status: ChapterStatus;
  completedAt?: string;     // ISO-8601
  notes?: string;           // user notes (markdown)
  updatedAt: string;
}

export interface SubjectProgress {
  subjectId: string;
  updatedAt: string;
  chapters: Record<string, ChapterProgress>;  // keyed by chapterPath
}

export interface ProgressBundle {
  version: 1;
  updatedAt: string;
  subjects: Record<string, SubjectProgress>;
}

// ── Video Types ──
export type VideoPlatform = "bilibili" | "youtube" | "other";

export interface Video {
  platform: VideoPlatform;
  id: string;              // BV号 or YouTube ID
  title: string;
  url: string;
  thumbnail?: string;
  duration?: string;       // e.g. "15:32"
}

// ── Exercise Types ──
export interface Exercise {
  id: string;
  title: string;
  content: string;         // MDX content
  answer?: string;         // hidden by default
  hint?: string;
  difficulty?: "easy" | "medium" | "hard";
}
