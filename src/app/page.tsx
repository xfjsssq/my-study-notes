"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import SearchModal from "@/components/SearchModal";
import SettingsModal from "@/components/SettingsModal";
import {
  loadProgressFromLocal,
  loadProgressFromGitHub,
  saveProgressToLocal,
} from "@/lib/progress";
import type { ContentTree } from "@/lib/content";
import { getAllContentTrees } from "@/lib/content";
import type { ChapterIndex } from "@/lib/types";

export default function Home() {
  const [contentTrees] = useState(() => getAllContentTrees());
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [syncStatus, setSyncStatus] = useState<
    "idle" | "syncing" | "done" | "error"
  >("idle");
  const [overallProgress, setOverallProgress] = useState({
    total: 0,
    done: 0,
    percent: 0,
  });

  // Load and sync progress
  useEffect(() => {
    async function initProgress() {
      setSyncStatus("syncing");
      const remote = await loadProgressFromGitHub();
      if (remote) {
        // Remote wins (source of truth)
        saveProgressToLocal(remote);
        setSyncStatus("done");
      } else {
        // No remote progress yet — push local if exists
        const local = loadProgressFromLocal();
        if (local.subjects && Object.keys(local.subjects).length > 0) {
          // We'll sync on next mark
        }
        setSyncStatus("idle");
      }

      // Calculate stats
      const bundle = loadProgressFromLocal();
      let total = 0;
      let done = 0;
      for (const tree of getAllContentTrees()) {
        for (const ch of tree.chapters) {
          total++;
          const cp =
            bundle.subjects[tree.subject.id]?.chapters?.[
              `${tree.subject.id}/${ch.id}`
            ];
          if (cp?.status === "done") done++;
        }
      }
      setOverallProgress({
        total,
        done,
        percent: total > 0 ? Math.round((done / total) * 100) : 0,
      });
    }
    initProgress();
  }, []);

  // Cmd+K for search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === ",") {
        e.preventDefault();
        setSettingsOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar contentTrees={contentTrees} />

      <main className="flex-1 overflow-y-auto">
        <div className="content-width py-12 px-6">
          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2">
              📚 我的学习笔记
            </h1>
            <p className="text-[var(--color-text-secondary)]">
              系统化学习，可视化进度。让知识成为一种积累。
            </p>

            {/* Overall progress bar */}
            {overallProgress.total > 0 && (
              <div className="mt-6 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    总进度
                  </span>
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {overallProgress.done} / {overallProgress.total} 章
                  </span>
                </div>
                <div className="w-full h-2 bg-[var(--color-progress-empty)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--color-progress-done)] rounded-full transition-all duration-500"
                    style={{ width: `${overallProgress.percent}%` }}
                  />
                </div>
                <div className="mt-1 text-xs text-right text-[var(--color-text-tertiary)]">
                  {overallProgress.percent}%
                </div>
              </div>
            )}

            {/* Sync status */}
            {syncStatus !== "idle" && (
              <div className="mt-3 text-xs text-[var(--color-text-tertiary)] flex items-center gap-1">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    syncStatus === "syncing"
                      ? "bg-yellow-400 animate-pulse"
                      : syncStatus === "done"
                      ? "bg-green-400"
                      : "bg-red-400"
                  }`}
                />
                {syncStatus === "syncing" && "从 GitHub 同步进度..."}
                {syncStatus === "done" && "进度已同步 ✅"}
                {syncStatus === "error" && "同步失败 ⚠️"}
              </div>
            )}
          </div>

          {/* Subject cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentTrees.map(({ subject, chapters }) => {
              // Calculate subject progress
              let subjectDone = 0;
              const bundle = loadProgressFromLocal();
              for (const ch of chapters) {
                const cp =
                  bundle.subjects[subject.id]?.chapters?.[
                    `${subject.id}/${ch.id}`
                  ];
                if (cp?.status === "done") subjectDone++;
              }
              const subjectPercent =
                chapters.length > 0
                  ? Math.round((subjectDone / chapters.length) * 100)
                  : 0;

              return (
                <Link
                  key={subject.id}
                  href={`/subjects/${subject.id}`}
                  className="group block p-5 rounded-lg border border-[var(--color-border)] hover:shadow-card hover:border-[var(--color-accent-muted)] transition-all bg-[var(--color-bg)]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{subject.icon || "📖"}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                        {subject.name}
                      </h3>
                      <p className="text-xs text-[var(--color-text-tertiary)]">
                        {chapters.length} 个章节
                      </p>
                    </div>
                  </div>

                  {/* Mini progress */}
                  {chapters.length > 0 && (
                    <div className="mt-3">
                      <div className="w-full h-1 bg-[var(--color-progress-empty)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--color-progress-done)] rounded-full transition-all"
                          style={{ width: `${subjectPercent}%` }}
                        />
                      </div>
                      <div className="mt-1 text-xs text-right text-[var(--color-text-tertiary)]">
                        {subjectPercent}%
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Keyboard shortcuts hint */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)] text-xs text-[var(--color-text-tertiary)] space-y-1">
            <p>
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                ⌘K / Ctrl+K
              </kbd>{" "}
              搜索页面 &nbsp;&nbsp;
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                ⌘, / Ctrl+,
              </kbd>{" "}
              打开设置
            </p>
          </div>
        </div>
      </main>

      {/* Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
}
