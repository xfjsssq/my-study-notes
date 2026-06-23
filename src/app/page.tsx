"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import SearchModal from "@/components/SearchModal";
import SettingsModal from "@/components/SettingsModal";
import { loadProgressFromLocal, loadProgressFromGitHub, saveProgressToLocal } from "@/lib/progress";
import type { ContentTree } from "@/lib/content";
import { getAllContentTrees } from "@/lib/content";

export default function Home() {
  const [contentTrees, setContentTrees] = useState<ContentTree[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [syncStatus, setSyncStatus] = useState<"idle" | "syncing" | "done" | "error">("idle");
  const [overallProgress, setOverallProgress] = useState({ total: 0, done: 0, percent: 0 });

  useEffect(() => { setContentTrees(getAllContentTrees()); }, []);

  useEffect(() => {
    async function initProgress() {
      setSyncStatus("syncing");
      const remote = await loadProgressFromGitHub();
      if (remote) { saveProgressToLocal(remote); setSyncStatus("done"); }
      else { setSyncStatus("idle"); }
      const bundle = loadProgressFromLocal();
      let total = 0, done = 0;
      for (const tree of getAllContentTrees()) {
        for (const ch of tree.chapters) {
          total++;
          if (bundle.subjects[tree.subject.id]?.chapters?.[`${tree.subject.id}/${ch.id}`]?.status === "done") done++;
        }
      }
      setOverallProgress({ total, done, percent: total > 0 ? Math.round((done/total)*100) : 0 });
    }
    initProgress();
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setSearchOpen(true); }
      if ((e.metaKey || e.ctrlKey) && e.key === ",") { e.preventDefault(); setSettingsOpen(true); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar contentTrees={contentTrees} />
      <main className="flex-1 overflow-y-auto">
        <div className="content-width py-12 px-6">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2">📚 我的学习笔记</h1>
            <p className="text-[var(--color-text-secondary)]">系统化学习，可视化进度。让知识成为一种积累。</p>
            {overallProgress.total > 0 && (
              <div className="mt-6 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">总进度</span><span className="text-sm text-[var(--color-text-secondary)]">{overallProgress.done}/{overallProgress.total} 章</span></div>
                <div className="w-full h-2 bg-[var(--color-progress-empty)] rounded-full overflow-hidden"><div className="h-full bg-[var(--color-progress-done)] rounded-full transition-all duration-500" style={{ width: `${overallProgress.percent}%` }} /></div>
                <div className="mt-1 text-xs text-right text-[var(--color-text-tertiary)]">{overallProgress.percent}%</div>
              </div>
            )}
            {syncStatus !== "idle" && (
              <div className="mt-3 text-xs flex items-center gap-1" style={{ color: syncStatus === "done" ? "var(--color-progress-done)" : syncStatus === "syncing" ? "#d69e2e" : "#e53e3e" }}>
                <span className={`w-1.5 h-1.5 rounded-full ${syncStatus === "syncing" ? "animate-pulse bg-yellow-400" : syncStatus === "done" ? "bg-green-400" : "bg-red-400"}`} />
                {syncStatus === "syncing" ? "从 GitHub 同步进度..." : syncStatus === "done" ? "进度已同步 ✅" : "同步失败 ⚠️"}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentTrees.map(({ subject, chapters }) => {
              const bundle = loadProgressFromLocal();
              let done = 0;
              for (const ch of chapters) { if (bundle.subjects[subject.id]?.chapters?.[`${subject.id}/${ch.id}`]?.status === "done") done++; }
              const pct = chapters.length > 0 ? Math.round((done / chapters.length) * 100) : 0;
              return (
                <Link key={subject.id} href={`/subjects/${subject.id}`} className="group block p-5 rounded-lg border border-[var(--color-border)] hover:shadow-card hover:border-[var(--color-accent-muted)] transition-all">
                  <div className="flex items-center gap-3 mb-2"><span className="text-3xl">{subject.icon}</span><div><h3 className="font-semibold group-hover:text-[var(--color-accent)] transition-colors">{subject.name}</h3><p className="text-xs">{chapters.length} 个章节</p></div></div>
                  {chapters.length > 0 && (<div className="mt-3"><div className="w-full h-1 bg-[var(--color-progress-empty)] rounded-full overflow-hidden"><div className="h-full bg-[var(--color-progress-done)] rounded-full" style={{ width: `${pct}%` }} /></div><div className="mt-1 text-xs text-right">{pct}%</div></div>)}
                </Link>
              );
            })}
          </div>
          <div className="mt-12 pt-8 border-t border-[var(--color-border)] text-xs text-[var(--color-text-tertiary)] space-y-1">
            <p><kbd className="px-1.5 py-0.5 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">⌘K / Ctrl+K</kbd> 搜索 &nbsp;&nbsp;<kbd className="px-1.5 py-0.5 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">⌘, / Ctrl+,</kbd> 设置</p>
          </div>
        </div>
      </main>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
}