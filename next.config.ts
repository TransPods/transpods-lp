import type { NextConfig } from "next";
import { getStudioUrl } from "./src/lib/studio-url";

const studioUrl = getStudioUrl();

const nextConfig: NextConfig = {
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
