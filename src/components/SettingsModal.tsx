"use client";

import { useState, useCallback } from "react";
import { savePat, getPat } from "@/lib/progress";

interface SettingsModalProps { isOpen: boolean; onClose: () => void; }

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [pat, setPat] = useState(() => getPat() || "");
  const [saved, setSaved] = useState(false);

  const handleSave = useCallback(() => {
    if (pat.trim()) savePat(pat.trim()); else localStorage.removeItem("study_pat");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }, [pat]);

  const toggleDarkMode = useCallback(() => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) { document.documentElement.classList.remove("dark"); localStorage.setItem("theme", "light"); }
    else { document.documentElement.classList.add("dark"); localStorage.setItem("theme", "dark"); }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/40">
      <div className="w-full max-w-md bg-[var(--color-bg)] rounded-lg shadow-float border border-[var(--color-border)] animate-fadein p-6">
        <h2 className="text-lg font-semibold mb-4">⚙️ 设置</h2>
        <div className="mb-4">
          <label className="text-sm font-medium text-[var(--color-text)]">深色模式</label>
          <button onClick={toggleDarkMode} className="mt-1 w-full text-left px-3 py-2 rounded-md border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] transition-colors">🌓 切换浅色/深色模式</button>
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-[var(--color-text)]">GitHub 个人访问令牌 (PAT)</label>
          <input type="password" value={pat} onChange={(e) => setPat(e.target.value)} placeholder="ghp_..." className="mt-1 w-full px-3 py-2 rounded-md border border-[var(--color-border)] text-sm bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-muted)]" />
          <p className="mt-1 text-xs text-[var(--color-text-tertiary)]">需要 <code>repo</code> 权限。令牌仅存储在浏览器本地。</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">关闭</button>
          <button onClick={handleSave} className={`px-4 py-2 text-sm rounded-md transition-all ${saved ? "bg-[var(--color-progress-done)]/10 text-[var(--color-progress-done)]" : "bg-[var(--color-accent)] text-white hover:opacity-90"}`}>{saved ? "✅ 已保存" : "保存设置"}</button>
        </div>
      </div>
    </div>
  );
}