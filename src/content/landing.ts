/**
 * ===========================================================================
 * LP 全テキストの集約ファイル
 * ===========================================================================
 *
 * このファイルが TransPods 公式サイトのすべての文言を保持します。
 * 各セクションコンポーネント (src/components/sections/*) は、ここから
 * 値を import するだけで、自身にはハードコードされた文言を持ちません。
 */

export const landing = {
  /**
   * サービス休止のお知らせ。
   * 再リリース時は enabled を false にするだけで告知バナーが消え、
   * ダウンロードボタンも通常の有効状態に戻る。
   */
  notice: {
    enabled: true,
    /** バナー本文（1 行想定） */
    message: "現在サービスを一時休止しています。2026年9月頃の再リリースに向けて準備中です。",
    /** ダウンロードボタンが無効化されているときのラベル */
    ctaDisabledLabel: "準備中",
    /** 休止中の download セクション見出し（enabled のとき download.title / subtitle の代わりに使う） */
    downloadTitle: "再リリースに向けて準備中",
    downloadSubtitle: "2026年9月頃の再開をお楽しみに",
  },

  /** ヘッダー / ナビゲーション */
  nav: {
    logoAlt: "TransPods",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
    ],
    cta: "アプリを入手",
  },

  /** 1. ヒーロー（ファーストビュー） */
  hero: {
    title: "世界の情報を\n耳でスマートに。",
    subtitle: "Smartly hear the world's information.",
    primaryCta: {
      label: "Download on the App Store",
      icon: "Apple", // We will use a react icon or SVG
      href: "https://apps.apple.com/jp/app/transpods/id6755274570",
    },
    secondaryCta: {
      label: "GET IT ON Google Play",
      icon: "Play",
      href: "https://play.google.com/store/apps/details?id=com.transpod.podstudy&hl=ja",
    },
  },

  /** 2. アバウト（About） */
  about: {
    title: "About",
    description:
      "海外のポッドキャストを深くまで学べる\nAIポッドキャストアプリです。\n\n個人の興味、それぞれの分野の理解度に応じた\nレコメンド、学習コンテンツの生成を行い、\n各個人に合わせた学習支援を行います。",
  },

  /** 3. サービス機能（Services） */
  services: {
    title: "Services",
    items: [
      {
        title: "翻訳",
        englishTitle: "Translation",
        description: "海外のポッドキャストも言語の壁なく、知識やアイデアにアクセスできます。",
        icon: "Translation", // placeholder for icon mapping
      },
      {
        title: "図解",
        englishTitle: "Diagram",
        description: "内容をわかりやすい図や構造で整理し、複雑なテーマも直感的に理解できます。",
        icon: "Diagram",
      },
      {
        title: "要約",
        englishTitle: "Summary",
        description: "AIが重要なポイントを抽出し、忙しい日でも効率よく学べます。",
        icon: "Summary",
      },
      {
        title: "メモ",
        englishTitle: "Memo",
        description: "聞きながらメモを保存し、自分だけの知識としてストックできます。",
        icon: "Memo",
      },
    ],
  },

  /** 4. ダウンロード (CTA) */
  download: {
    title: "今すぐダウンロード",
    subtitle: "ポッドキャスト体験を、次のステージへ",
    primaryCta: {
      label: "Download on the App Store",
      href: "https://apps.apple.com/jp/app/transpods/id6755274570",
    },
    secondaryCta: {
      label: "GET IT ON Google Play",
      href: "https://play.google.com/store/apps/details?id=com.transpod.podstudy&hl=ja",
    },
  },

  /** 5. フッター */
  footer: {
    links: [
      { label: "お問い合せ", href: "https://docs.google.com/forms/d/e/1FAIpQLSf-dLsHo7Al2x4tLaapsY2H0ZZKXfwpuxC2zYWvRPqwY4FwTg/viewform?usp=dialog" },
    ],
    socials: [
      { platform: "X", href: "https://x.com/transpods_app", icon: "X" },
    ],
    copyright: `©︎ TransPods`,
  },
} as const;

export type LandingContent = typeof landing;
