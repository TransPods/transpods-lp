/**
 * サイト全体で共有する不変のメタ情報。
 * URL やドメインなど「テキスト原稿」ではない設定値はここに置く。
 * LP の本文テキストは src/content/landing.ts に分離している。
 */

import { getStudioUrl } from "./studio-url";

/** Kotoriva Studio（アプリ本体）。環境ごとに NEXT_PUBLIC_STUDIO_URL で切り替える */
const studioUrl = getStudioUrl();

export const siteConfig = {
  name: "Kotoriva",
  /** 本番ドメイン。Vercel で www をプライマリにしている（kotoriva.com・transpods.app からは 308 で転送） */
  url: "https://www.kotoriva.com",
  /** <title> や OGP のデフォルトタイトル */
  title: "Kotoriva — あなたの知識と想いを、好きになれる声に乗せて。",
  description:
    "AIキャラクターと一緒にポッドキャストを作れるサービス。メモ・記事・物語を渡すだけで台本と音声をAIが生成し、Spotify・Apple Podcasts・YouTube・RSSへワンクリックで配信できます。",
  locale: "ja_JP",
  /** OGP 画像（1200x630）。public/ に配置予定 */
  ogImage: "/og-image.png",
  links: {
    /** CTA の遷移先（Studio の新規登録） */
    signup: `${studioUrl}/signup`,
    twitter: "https://x.com/yamatetsu0703",
  },
} as const;

export type SiteConfig = typeof siteConfig;
