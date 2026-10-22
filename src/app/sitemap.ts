import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/** /terms と /privacy は Studio へリダイレクトするので載せない */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
