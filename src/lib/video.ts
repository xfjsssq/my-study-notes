import type { Video, VideoPlatform } from "./types";

// Bilibili BV號 regex
const BV_REGEX = /BV[a-zA-Z0-9]{10}/;
// YouTube regexes
const YT_REGEX =
  /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;

export function parseVideoUrl(
  url: string,
  title?: string
): Video | null {
  // Bilibili
  const bvMatch = url.match(BV_REGEX);
  if (bvMatch) {
    return {
      platform: "bilibili",
      id: bvMatch[0],
      title: title || "B站视频",
      url,
    };
  }

  // YouTube
  const ytMatch = url.match(YT_REGEX);
  if (ytMatch) {
    return {
      platform: "youtube",
      id: ytMatch[1],
      title: title || "YouTube 视频",
      url,
    };
  }

  // Other — include as link
  return {
    platform: "other",
    id: url,
    title: title || "视频链接",
    url,
  };
}

export function getBilibiliEmbedUrl(bvid: string): string {
  return `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1`;
}

export function getYoutubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

// Parse videos from a videos.json-like array
export interface VideoEntry {
  title: string;
  url: string;
  platform?: VideoPlatform;
}

export function parseVideoList(entries: VideoEntry[]): Video[] {
  return entries
    .map((e) => parseVideoUrl(e.url, e.title))
    .filter((v): v is Video => v !== null);
}
