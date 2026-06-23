import type { ChapterIndex, SubjectIndex } from "./types";
import subjectsIndex from "@/subjects/index.json";

import mathChapters from "@/subjects/math/chapters.json";
import englishChapters from "@/subjects/english/chapters.json";
import mechanicsChapters from "@/subjects/mechanics/chapters.json";
import electronicsChapters from "@/subjects/electronics/chapters.json";
import pythonChapters from "@/subjects/python/chapters.json";

import mathChapter1Knowledge from "@/subjects/math/chapter1/knowledge";
import pythonChapter1Knowledge from "@/subjects/python/chapter1/knowledge";

const CHAPTERS_MAP: Record<string, any> = {
  math: mathChapters,
  english: englishChapters,
  mechanics: mechanicsChapters,
  electronics: electronicsChapters,
  python: pythonChapters,
};

const KNOWLEDGE_MAP: Record<string, string> = {
  "math/chapter1": mathChapter1Knowledge,
  "python/chapter1": pythonChapter1Knowledge,
};

export interface ContentTree {
  subject: SubjectIndex;
  chapters: ChapterIndex[];
}

export function getAllSubjects(): SubjectIndex[] {
  return subjectsIndex.subjects.map((s: any) => ({
    id: s.id,
    name: s.name,
    icon: s.icon,
  }));
}

export function getSubjectById(id: string): SubjectIndex | undefined {
  return getAllSubjects().find((s) => s.id === id);
}

export function getChapters(subjectId: string): ChapterIndex[] {
  const data = CHAPTERS_MAP[subjectId];
  if (!data) return [];
  return (data.chapters || []).map((c: any) => ({
    ...c,
    subjectId,
  }));
}

export function getAllContentTrees(): ContentTree[] {
  return getAllSubjects().map((subject) => ({
    subject,
    chapters: getChapters(subject.id),
  }));
}

export function getChapterRoute(
  subjectId: string,
  chapterId: string
): {
  subject: SubjectIndex | undefined;
  chapter: ChapterIndex | undefined;
} {
  const subject = getSubjectById(subjectId);
  const chapters = getChapters(subjectId);
  const chapter = chapters.find((c) => c.id === chapterId);
  return { subject, chapter };
}

export function getKnowledgeContent(
  subjectId: string,
  chapterId: string
): string {
  return KNOWLEDGE_MAP[`${subjectId}/${chapterId}`]?.replace(/\\n/g, "\n") ?? "";
}

export function getAllRoutes(): Array<{
  subjectId: string;
  chapterId: string;
}> {
  const routes: Array<{ subjectId: string; chapterId: string }> = [];
  for (const subject of getAllSubjects()) {
    for (const chapter of getChapters(subject.id)) {
      routes.push({ subjectId: subject.id, chapterId: chapter.id });
    }
  }
  return routes;
}
