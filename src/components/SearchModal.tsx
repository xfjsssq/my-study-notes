"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSearch = useCallback(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    // V1: simple DOM search on current page
    const text = document.body.innerText.toLowerCase();
    const pattern = query.toLowerCase();
    if (text.includes(pattern)) {
      const idx = text.indexOf(pattern);
      const start = Math.max(0, idx - 30);
      const snippet = text.slice(start, idx + query.length + 50);
      setResults([`...${snippet}...`]);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/40">
      <div className="w-full max-w-lg bg-[var(--color-bg)] rounded-lg shadow-float border border-[var(--color-border)] animate-fadein">
        {/* Input */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[var(--color-text-tertiary)]"
          >
            <circle
              cx="7"
              cy="7"
              r="5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M11 11l3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="搜索当前页面..."
            className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-tertiary)]"
          />
          <kbd className="text-xs px-1.5 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]">
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-60 overflow-y-auto p-2">
          {results.length > 0 ? (
            results.map((r, i) => (
              <div
                key={i}
                className="px-3 py-2 text-sm text-[var(--color-text-secondary)] rounded hover:bg-[var(--color-bg-hover)]"
              >
                {r}
              </div>
            ))
          ) : query ? (
            <div className="px-3 py-4 text-sm text-[var(--color-text-tertiary)] text-center">
              未找到匹配结果
            </div>
          ) : (
            <div className="px-3 py-4 text-sm text-[var(--color-text-tertiary)] text-center">
              输入关键词进行搜索
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
