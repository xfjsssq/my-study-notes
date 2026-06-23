"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import type { ContentTree } from "@/lib/content";
import type { ChapterIndex } from "@/lib/types";
import { loadProgressFromLocal } from "@/lib/progress";

interface SidebarProps {
  contentTrees: ContentTree[];
  currentSubject?: string;
  currentChapter?: string;
}

export default function Sidebar({ contentTrees, currentSubject, currentChapter }: SidebarProps) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chapterStatuses, setChapterStatuses] = useState<Record<string, "done" | "empty">>({});

  useEffect(() => {
    const bundle = loadProgressFromLocal();
    const statuses: Record<string, "done" | "empty"> = {};
    for (const [subjId, subjProgress] of Object.entries(bundle.subjects)) {
      for (const [key, cp] of Object.entries(subjProgress.chapters)) {
        statuses[cp.chapterPath] = cp.status;
      }
    }
    setChapterStatuses(statuses);
  }, []);

  const toggleSubject = useCallback((subjectId: string) => {
    setCollapsed((prev) => ({ ...prev, [subjectId]: !prev[subjectId] }));
  }, []);

  const ProgressIcon = ({ subjectId, chapterId }: { subjectId: string; chapterId: string }) => {
    const isDone = chapterStatuses[`${subjectId}/${chapterId}`] === "done";
    if (isDone) {
      return (
        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-progress-done)] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5L9.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      );
    }
    return <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-[var(--color-progress-empty)]" />;
  };

  const sidebarContent = (
    <nav className="flex flex-col w-full h-full overflow-y-auto">
      <div className="px-4 py-4 border-b border-[var(--color-border)]">
        <Link href="/" className="text-lg font-bold text-[var(--color-text)] no-underline hover:no-underline">📚 My Study Notes</Link>
      </div>
      <div className="flex-1 py-2 overflow-y-auto">
        {contentTrees.map(({ subject, chapters }) => (
          <div key={subject.id} className="mb-0.5">
            <button onClick={() => toggleSubject(subject.id)} className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] transition-colors text-left">
              <span className="text-xs transition-transform">{(collapsed[subject.id] ?? false) ? "▸" : "▾"}</span>
              <span>{subject.icon || "📖"}</span>
              <span className="flex-1 truncate">{subject.name}</span>
              <span className="text-xs text-[var(--color-text-tertiary)]">{chapters.length}章</span>
            </button>
            {!(collapsed[subject.id] ?? false) && (
              <div className="ml-2">
                {chapters.map((chapter) => {
                  const href = `/subjects/${subject.id}/${chapter.id}`;
                  const isActive = currentSubject === subject.id && currentChapter === chapter.id;
                  return (
                    <Link key={chapter.id} href={href} className={`flex items-center gap-2 px-4 py-1.5 text-sm transition-colors group border-l-2 ml-2 ${isActive ? "border-[var(--color-accent)] bg-[var(--color-accent-light)] text-[var(--color-accent)] font-medium" : "border-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text)]"}`}>
                      <ProgressIcon subjectId={subject.id} chapterId={chapter.id} />
                      <span className="flex-1 truncate text-xs">{chapter.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-[var(--color-border)] text-xs text-[var(--color-text-tertiary)]">
        <div className="flex items-center justify-between"><span>Agnes ❤️</span><a href="/settings" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors">⚙️</a></div>
      </div>
    </nav>
  );

  return (
    <>
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="fixed top-3 left-3 z-50 p-2 rounded-md bg-[var(--color-bg-secondary)] border border-[var(--color-border)] md:hidden" aria-label="Toggle sidebar">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/></svg>
      </button>
      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/30 md:hidden" />}
      <aside className={`fixed md:sticky top-0 z-40 h-screen w-[var(--sidebar-width)] bg-[var(--sidebar-bg)] border-r border-[var(--color-border)] transition-transform duration-300 overflow-hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        {sidebarContent}
      </aside>
    </>
  );
}