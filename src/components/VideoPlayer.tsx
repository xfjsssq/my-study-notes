"use client";

import { getBilibiliEmbedUrl, getYoutubeEmbedUrl } from "@/lib/video";
import type { Video } from "@/lib/types";

interface VideoPlayerProps {
  video: Video;
  className?: string;
}

export default function VideoPlayer({ video, className }: VideoPlayerProps) {
  if (video.platform === "bilibili") {
    return (
      <div
        className={`rounded-lg overflow-hidden border border-[var(--color-border)] ${className || ""}`}
      >
        <iframe
          src={getBilibiliEmbedUrl(video.id)}
          title={video.title}
          className="w-full aspect-video"
          allowFullScreen
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
        <div className="px-4 py-2 text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)]">
          📺 {video.title}
        </div>
      </div>
    );
  }

  if (video.platform === "youtube") {
    return (
      <div
        className={`rounded-lg overflow-hidden border border-[var(--color-border)] ${className || ""}`}
      >
        <iframe
          src={getYoutubeEmbedUrl(video.id)}
          title={video.title}
          className="w-full aspect-video"
          allowFullScreen
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <div className="px-4 py-2 text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)]">
          📺 {video.title}
        </div>
      </div>
    );
  }

  // Other platforms: card with thumbnail
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-lg border border-[var(--color-border)] overflow-hidden group hover:shadow-card transition-shadow ${className || ""}`}
    >
      <div className="aspect-video bg-[var(--color-bg-secondary)] flex items-center justify-center text-4xl">
        🎬
      </div>
      <div className="px-4 py-2 text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)] group-hover:text-[var(--color-accent)] transition-colors">
        🔗 {video.title} →
      </div>
    </a>
  );
}
