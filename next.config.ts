import type { NextConfig } from "next";
import { getStudioUrl } from "./src/lib/studio-url";

const studioUrl = getStudioUrl();

/**
 * 本番以外は検索エンジンに登録させない。
 * Vercel は *.vercel.app のプレビューには自動で noindex を付けるが、
 * 本番以外のブランチに割り当てた独自ドメイン（development.kotoriva.com）には付けないため、自分で付ける。
 */
const isProduction = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  async headers() {
    if (isProduction) return [];

    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },

  /** 利用規約・プライバシーポリシーの正本は Studio にあるので、308 で転送する */
  async redirects() {
    return ["/terms", "/privacy"].map((path) => ({
      source: path,
      destination: `${studioUrl}${path}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
