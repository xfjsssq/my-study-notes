import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Study Notes",
  description: "Personal learning platform with progress tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.js"
          async
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/contrib/auto-render.min.js"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var d = document.documentElement;
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    d.classList.add('dark');
                  }
                  window.addEventListener('DOMContentLoaded', function() {
                    if (typeof renderMathInElement === 'function') {
                      renderMathInElement(document.body, {
                        delimiters: [
                          {left: '$$', right: '$$', display: true},
                          {left: '$', right: '$', display: false}
                        ],
                        throwOnError: false
                      });
                    }
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
