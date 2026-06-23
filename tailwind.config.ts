import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./subjects/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          secondary: "var(--color-bg-secondary)",
          hover: "var(--color-bg-hover)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
        },
        border: {
          DEFAULT: "var(--color-border)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          light: "var(--color-accent-light)",
          muted: "var(--color-accent-muted)",
        },
        progress: {
          empty: "var(--color-progress-empty)",
          done: "var(--color-progress-done)",
          review: "var(--color-progress-review)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Noto Sans SC"',
          '"Microsoft YaHei"',
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "Menlo",
          "Monaco",
          '"Fira Code"',
          "monospace",
        ],
      },
      maxWidth: {
        content: "800px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.04)",
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        float:
          "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;