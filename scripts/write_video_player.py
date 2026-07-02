import os

p = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project\src\components\VideoPlayer.tsx'
content = '"use client";\n'
content += '\n'
content += 'import type { Video } from "@/lib/types";\n'
content += '\n'
content += 'interface VideoPlayerProps { video: Video; className?: string; }\n'
content += '\n'
content += 'export default function VideoPlayer({ video, className }: VideoPlayerProps) {\n'
content += '  return (\n'
content += '    <div className={`rounded-lg overflow-hidden border border-[var(--color-border)] ${className || ""}`}>\n'
content += '      <div className="aspect-video bg-[var(--color-bg-secondary)] flex items-center justify-center text-4xl">\U0001f3ac</div>\n'
content += '      <div className="px-4 py-2 text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)]">\U0001f4f9 {video.title}</div>\n'
content += '    </div>\n'
content += '  );\n'
content += '}\n'

open(p, 'w', encoding='utf-8').write(content)
print('VideoPlayer rewritten')
