import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "var(--color-bg)", secondary: "var(--color-bg-secondary)", hover: "var(--color-bg-hover)" },
        text: { DEFAULT: "var(--color-text)", secondary: "var(--color-text-secondary)", tertiary: "var(--color-text-tertiary)" },
        border: { DEFAULT: "var(--color-border)" },
        accent: { DEFAULT: "var(--color-accent)", light: "var(--color-accent-light)", muted: "var(--color-accent-muted)" },
        progress: { empty: "var(--color-progress-empty)", done: "var(--color-progress-done)", review: "var(--color-progress-review)" },
      },
      maxWidth: { content: "800px" },
    },
  },
  plugins: [],
};

export default config;