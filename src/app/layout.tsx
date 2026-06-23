import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Study Notes",
  description: "Personal learning platform with progress tracking",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var d=document.documentElement;var m=localStorage.getItem('theme');if(m==='dark'||(!m&&window.matchMedia('(prefers-color-scheme:dark)').matches))d.classList.add('dark')}catch(e){}})()` }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}