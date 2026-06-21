import type { MetadataRoute } from "next";
import { siteUrl, nav } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["/", ...nav.map((n) => n.href)];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
