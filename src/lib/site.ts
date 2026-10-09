/**
 * サイト全体で共有する不変のメタ情報。
 * URL やドメインなど「テキスト原稿」ではない設定値はここに置く。
 * LP の本文テキストは src/content/landing.ts に分離している。
 */

export const siteConfig = {
  name: "Kotoriva",
  /** kotoriva.com — 本番ドメイン（transpods.app からは 308 で転送する） */
  url: "https://kotoriva.com",
  /** <title> や OGP のデフォルトタイトル */
  title: "Kotoriva — テキストから、あなたの番組へ。",
  description:
    "誰でもポッドキャストを作成・配信できるAIプラットフォーム。テキストから台本・音声・翻訳版・図解動画をAIが生成し、Spotify・Apple Podcasts・YouTube・RSSへワンクリックで配信できます。",
  locale: "ja_JP",
  /** OGP 画像（1200x630）。public/ に配置予定 */
  ogImage: "/og-image.png",
  /** App Store / Google Play 等の配信リンク（公開時に確定） */
  links: {
    appStore: "#",
    googlePlay: "#",
    twitter: "https://x.com/transpods",
    /** 先行アクセス登録フォーム（Google フォーム） */
    earlyAccessForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSe9tBixw7ASdDvQ3B4J11YwPG5EoruDB7Suj2Y3Nggxb48N2g/viewform",
  },
} as const;

export type SiteConfig = typeof siteConfig;
