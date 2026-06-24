"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import SearchModal from "@/components/SearchModal";
import SettingsModal from "@/components/SettingsModal";
import ProgressButton from "@/components/ProgressButton";
import VideoPlayer from "@/components/VideoPlayer";
import {
  loadProgressFromLocal,
  updateChapterNotes,
  syncProgressToGitHub,
} from "@/lib/progress";
import type { ContentTree } from "@/lib/content";
import type { SubjectIndex, ChapterIndex, Video } from "@/lib/types";
import { parseVideoList } from "@/lib/video";
import {
  getAllContentTrees,
  getChapterRoute,
  getKnowledgeContent,
} from "@/lib/content";

export default function ChapterPageClient() {
  const params = useParams();
  const subjectId = params?.slug?.[0] as string;
  const chapterId = params?.slug?.[1] as string;

  const [contentTrees, setContentTrees] = useState<ContentTree[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [subject, setSubject] = useState<SubjectIndex | undefined>();
  const [chapter, setChapter] = useState<ChapterIndex | undefined>();
  const [mdxContent, setMdxContent] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [notes, setNotes] = useState("");
  const [notesDirty, setNotesDirty] = useState(false);

  useEffect(() => { setContentTrees(getAllContentTrees()); }, []);

  useEffect(() => {
    if (!subjectId || !chapterId) return;
    const { subject: s, chapter: c } = getChapterRoute(subjectId, chapterId);
    setSubject(s);
    setChapter(c);
    setMdxContent(getKnowledgeContent(subjectId, chapterId));
    async function loadVideos() {
      let videoData: any[] = [];
      if (subjectId === "math" && chapterId === "chapter1") {
        videoData = (await import("@/subjects/math/chapter1/videos.json")).default;
      } else if (subjectId === "python" && chapterId === "chapter1") {
        videoData = (await import("@/subjects/python/chapter1/videos.json")).default;
      }
      setVideos(parseVideoList(videoData));
    }
    loadVideos();
    const bundle = loadProgressFromLocal();
    const cp = bundle.subjects[subjectId]?.chapters?.[`${subjectId}/${chapterId}`];
    setNotes(cp?.notes || "");
  }, [subjectId, chapterId]);

  const handleSaveNotes = useCallback(async () => {
    if (!notesDirty) return;
    const bundle = updateChapterNotes(subjectId, chapterId, notes);
    await syncProgressToGitHub(bundle);
    setNotesDirty(false);
  }, [notes, notesDirty, subjectId, chapterId]);

  useEffect(() => {
    if (!notesDirty) return;
    const timer = setTimeout(() => handleSaveNotes(), 3000);
    return () => clearTimeout(timer);
  }, [notes, notesDirty, handleSaveNotes]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setSearchOpen(true); }
      if ((e.metaKey || e.ctrlKey) && e.key === ",") { e.preventDefault(); setSettingsOpen(true); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!subject || !chapter) {
    return (
      <div className="flex h-screen overflow-hidden">
        <Sidebar contentTrees={contentTrees} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-[var(--color-text-secondary)] mb-2">章节未找到</p>
            <Link href="/" className="text-sm text-[var(--color-accent)] hover:underline">← 返回首页</Link>
          </div>
        </main>
      </div>
    );
  }

  const renderedContent = mdxContent
    ? mdxContent
        .replace(/^---[\s\S]*?---\n?/, "")
        .replace(/^### (.*)/gm, "<h3>$1</h3>")
        .replace(/^## (.*)/gm, "<h2>$1</h2>")
        .replace(/^# (.*)/gm, "<h1>$1</h1>")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/`([^`\n]+)`/g, "<code>$1</code>")
        .replace(/^```(\w*)\n([\s\S]*?)```/gm, "<pre><code>$2</code></pre>")
        .replace(/\$\$([\s\S]*?)\$\$/g, '<div class="math-block">$1</div>')
        .replace(/\$([^$]+)\$/g, '<span class="math-inline">$1</span>')
        .replace(/^> (.*)/gm, "<blockquote>$1</blockquote>")
        .replace(/^- (.*)/gm, "<li>$1</li>")
        .split("\n\n")
        .map((p) => p.startsWith("<") ? p : `<p>${p}</p>`)
        .join("\n")
    : "";

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar contentTrees={contentTrees} currentSubject={subjectId} currentChapter={chapterId} />
      <main className="flex-1 overflow-y-auto">
        <article className="content-width py-12 px-6">
          <nav className="mb-8 text-sm text-[var(--color-text-tertiary)]">
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href={`/my-study-notes/subjects/${subjectId}`} className="hover:text-[var(--color-accent)] transition-colors">{subject.icon} {subject.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-text)]">{chapter.title}</span>
          </nav>

          <div className="flex items-start justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-1">{chapter.title}</h1>
              {chapter.summary && <p className="text-sm text-[var(--color-text-secondary)]">{chapter.summary}</p>}
            </div>
            <ProgressButton subjectId={subjectId} chapterId={chapterId} />
          </div>

          {renderedContent ? (
            <div className="prose-content" dangerouslySetInnerHTML={{ __html: renderedContent }} />
          ) : (
            <div className="p-8 text-center rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
              <p className="text-sm text-[var(--color-text-tertiary)] mb-2">📝 知识内容待填充</p>
              <p className="text-xs text-[var(--color-text-tertiary)]">在 <code>src/subjects/{subjectId}/{chapterId}/knowledge.ts</code> 中编写内容</p>
            </div>
          )}

          <hr className="my-8" />
          <h2 className="text-xl font-semibold mb-4">📺 视频讲解</h2>
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 mb-8">{videos.map((v, i) => <VideoPlayer key={i} video={v} />)}</div>
          ) : (
            <div className="p-4 text-center rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-8">
              <p className="text-xs text-[var(--color-text-tertiary)]">视频链接待添加（在 videos.json 中配置）</p>
            </div>
          )}

          <h2 className="text-xl font-semibold mb-4">✏️ 例题练习</h2>
          <div className="p-4 text-center rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-8">
            <p className="text-xs text-[var(--color-text-tertiary)]">练习题待添加（在 exercises.md 中编辑）</p>
          </div>

          <hr className="my-8" />
          <h2 className="text-xl font-semibold mb-4">📝 学习笔记</h2>
          <textarea
            value={notes}
            onChange={(e) => { setNotes(e.target.value); setNotesDirty(true); }}
            placeholder="在这里记录你的思考和心得…（自动保存到 GitHub）"
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-muted)]"
          />
          {notesDirty && <p className="mt-1 text-xs text-[var(--color-text-tertiary)]">笔记未保存，将在 3 秒后自动保存…</p>}
        </article>
      </main>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
}
