"use client";

import { useState } from "react";
import type { Exercise } from "@/lib/types";

interface ExerciseCardProps {
  exercise: Exercise;
  className?: string;
}

export default function ExerciseCard({
  exercise,
  className,
}: ExerciseCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [marked, setMarked] = useState(false);

  const difficultyColor = {
    easy: "text-green-600",
    medium: "text-yellow-600",
    hard: "text-red-600",
  }[exercise.difficulty || "easy"];

  const difficultyLabel = {
    easy: "基础",
    medium: "进阶",
    hard: "挑战",
  }[exercise.difficulty || "easy"];

  return (
    <div
      className={`rounded-lg border border-[var(--color-border)] overflow-hidden transition-all ${className || ""}`}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[var(--color-bg-hover)] transition-colors"
      >
        <span className="text-lg">{expanded ? "▾" : "▸"}</span>
        <span className="flex-1 font-medium text-sm">{exercise.title}</span>
        {exercise.difficulty && (
          <span className={`text-xs px-2 py-0.5 rounded-full border border-current ${difficultyColor}`}>
            {difficultyLabel}
          </span>
        )}
        {marked && (
          <span className="text-xs text-[var(--color-progress-done)]">
            ✅ 已完成
          </span>
        )}
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-[var(--color-border)] animate-fadein">
          <div className="mt-3 text-sm text-[var(--color-text)]">
            {exercise.content}
          </div>

          {exercise.hint && (
            <div className="mt-3 p-3 rounded-md bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
              💡 提示：{exercise.hint}
            </div>
          )}

          {exercise.answer && (
            <div className="mt-3">
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="text-xs text-[var(--color-accent)] hover:underline"
              >
                {showAnswer ? "隐藏答案 ▲" : "查看答案 ▼"}
              </button>
              {showAnswer && (
                <div className="mt-2 p-3 rounded-md bg-[var(--color-accent-light)] border border-[var(--color-accent-muted)] text-sm animate-fadein">
                  {exercise.answer}
                </div>
              )}
            </div>
          )}

          <div className="mt-3 flex items-center justify-end">
            <button
              onClick={() => setMarked(!marked)}
              className={`text-xs px-3 py-1 rounded-full transition-colors
                ${
                  marked
                    ? "bg-[var(--color-progress-done)]/10 text-[var(--color-progress-done)] border border-[var(--color-progress-done)]/30"
                    : "border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }
              `}
            >
              {marked ? "✅ 已完成" : "标记完成"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
