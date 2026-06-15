/**
 * サイト全体で共有する不変のメタ情報。
 * URL やドメインなど「テキスト原稿」ではない設定値はここに置く。
 * LP の本文テキストは src/content/landing.ts に分離している。
 */

export const siteConfig = {
  name: "TransPods",
  /** transpods.app — 本番ドメイン。Vercel 接続時にこの値で確定 */
  url: "https://transpods.app",
  /** <title> や OGP のデフォルトタイトル */
  title: "TransPods — 世界の情報を耳でスマートに。",
  description:
    "ポッドキャストをAIで深く学べる学習アプリ。翻訳音声・図解・要約と、あなたの興味や理解度に合わせたレコメンドで、世界の情報を耳からスマートにインプットできます。",
  locale: "ja_JP",
  /** OGP 画像（1200x630）。public/ に配置予定 */
  ogImage: "/og-image.png",
  /** App Store / Google Play 等の配信リンク（公開時に確定） */
  links: {
    appStore: "#",
    googlePlay: "#",
    twitter: "https://x.com/transpods",
  },
} as const;

export type SiteConfig = typeof siteConfig;
