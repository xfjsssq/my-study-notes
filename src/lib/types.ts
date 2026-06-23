// ── Content Type Definitions ──

export interface Subject {
  id: string;
  name: string;
  icon?: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  order: number;
  summary?: string;
  path: string;
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
  chapterPath: string;
  status: ChapterStatus;
  completedAt?: string;
  notes?: string;
  updatedAt: string;
}

export interface SubjectProgress {
  subjectId: string;
  updatedAt: string;
  chapters: Record<string, ChapterProgress>;
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
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  duration?: string;
}

// ── Exercise Types ──
export interface Exercise {
  id: string;
  title: string;
  content: string;
  answer?: string;
  hint?: string;
  difficulty?: "easy" | "medium" | "hard";
}