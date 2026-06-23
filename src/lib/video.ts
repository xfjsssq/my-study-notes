import type { Video, VideoPlatform } from "./types";

const BV_REGEX = /BV[a-zA-Z0-9]{10}/;
const YT_REGEX = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;

export function parseVideoUrl(url: string, title?: string): Video | null {
  const bvMatch = url.match(BV_REGEX);
  if (bvMatch) {
    return { platform: "bilibili", id: bvMatch[0], title: title || "B站视频", url };
  }
  const ytMatch = url.match(YT_REGEX);
  if (ytMatch) {
    return { platform: "youtube", id: ytMatch[1], title: title || "YouTube 视频", url };
  }
  return { platform: "other", id: url, title: title || "视频链接", url };
}

export function getBilibiliEmbedUrl(bvid: string): string {
  return `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1`;
}

export function getYoutubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

export interface VideoEntry {
  title: string;
  url: string;
  platform?: VideoPlatform;
}

export function parseVideoList(entries: VideoEntry[]): Video[] {
  return entries.map((e) => parseVideoUrl(e.url, e.title)).filter((v): v is Video => v !== null);
}