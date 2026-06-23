"use client";

import { useState, useCallback } from "react";
import {
  markChapterDone,
  syncProgressToGitHub,
  loadProgressFromLocal,
} from "@/lib/progress";

interface ProgressButtonProps {
  subjectId: string;
  chapterId: string;
  onProgressChanged?: (newStatus: "done" | "empty") => void;
}

export default function ProgressButton({
  subjectId,
  chapterId,
  onProgressChanged,
}: ProgressButtonProps) {
  const [isDone, setIsDone] = useState(() => {
    const bundle = loadProgressFromLocal();
    const cp =
      bundle.subjects[subjectId]?.chapters?.[
        `${subjectId}/${chapterId}`
      ];
    return cp?.status === "done";
  });
  const [syncing, setSyncing] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);

  const handleClick = useCallback(async () => {
    setSyncing(true);
    const newBundle = markChapterDone(subjectId, chapterId);

    // Update local state
    const newStatus =
      newBundle.subjects[subjectId]?.chapters?.[
        `${subjectId}/${chapterId}`
      ]?.status === "done";
    setIsDone(newStatus);

    if (newStatus) {
      setJustCompleted(true);
      setTimeout(() => setJustCompleted(false), 2000);
    }

    // Fire and forget sync
    syncProgressToGitHub(newBundle).finally(() => {
      setSyncing(false);
    });

    onProgressChanged?.(newStatus ? "done" : "empty");
  }, [subjectId, chapterId, onProgressChanged]);

  return (
    <button
      onClick={handleClick}
      disabled={syncing}
      className={`group inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
        ${
          isDone
            ? "bg-[var(--color-progress-done)]/10 text-[var(--color-progress-done)] border border-[var(--color-progress-done)]/30 hover:bg-[var(--color-progress-done)]/20"
            : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        }
        ${
          justCompleted
            ? "scale-105 shadow-lg ring-2 ring-[var(--color-progress-done)]/30"
            : ""
        }
      `}
    >
      {/* Icon */}
      <span className="relative flex-shrink-0 w-5 h-5">
        {isDone ? (
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-progress-done)]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="animate-fadein"
            >
              <path
                d="M2.5 6l2.5 2.5L9.5 3.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        ) : (
          <span className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[var(--color-progress-empty)] group-hover:border-[var(--color-accent)] transition-colors" />
        )}
      </span>

      {/* Label */}
      <span>
        {syncing
          ? "同步中..."
          : isDone
          ? justCompleted
            ? "✅ 已完成！"
            : "已学完 ✓"
          : "标记为已学完"}
      </span>
    </button>
  );
}
