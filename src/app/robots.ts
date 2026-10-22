import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/** 本番以外（開発ドメイン・*.vercel.app のプレビュー）は検索エンジンに登録させない */
const isProduction = process.env.VERCEL_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
