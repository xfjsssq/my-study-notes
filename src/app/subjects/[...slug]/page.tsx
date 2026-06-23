import { getAllRoutes } from "@/lib/content";
import ChapterPageClient from "./ChapterPageClient";

export function generateStaticParams() {
  const routes = getAllRoutes();
  return routes.map((r) => ({ slug: [r.subjectId, r.chapterId] }));
}

export default function ChapterPage() {
  return <ChapterPageClient />;
}