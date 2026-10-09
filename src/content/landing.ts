/**
 * ===========================================================================
 * LP 全テキストの集約ファイル
 * ===========================================================================
 *
 * このファイルが Kotoriva 公式サイトのすべての文言を保持します。
 * 各セクションコンポーネント (src/components/sections/*) は、ここから
 * 値を import するだけで、自身にはハードコードされた文言を持ちません。
 *
 * 2026-08: 事業方針の転換に伴い、リスナー向けアプリ LP から
 * 「ポッドキャスト配信制作支援プラットフォーム」(クリエイター向け) の
 * プレローンチ LP へ全面刷新。
 *
 * 2026-10: TransPods → Kotoriva へのリネームに伴いブランド表記を更新。
 */

export const landing = {
  /**
   * プレローンチ告知。
   * enabled が true の間はバナーを表示し、CTA がストアボタンの代わりに
   * 先行アクセス登録 (site.ts の earlyAccessForm) になる。
   * 正式リリース時は enabled を false にする（CTA の再設計もあわせて行う）。
   */
  notice: {
    enabled: true,
    /** バナー本文（1 行想定） */
    message: "正式リリースに向けて開発中です。先行アクセスの事前登録を受付中。",
    /** プレローンチ中の download セクション見出し（enabled のとき download.title / subtitle の代わりに使う） */
    downloadTitle: "先行アクセス受付中",
    downloadSubtitle: "あなたの番組づくりを、いちばん最初に",
    /** プレローンチ中に表示する先行アクセス登録 CTA のラベル（リンク先は site.ts の earlyAccessForm） */
    earlyAccessLabel: "先行アクセスに登録",
  },

  /** ヘッダー / ナビゲーション */
  nav: {
    logoAlt: "Kotoriva",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
    ],
    cta: "先行アクセス",
  },

  /** 1. ヒーロー（ファーストビュー） */
  hero: {
    title: "テキストから、\nあなたの番組へ。",
    subtitle: "書くだけで、AIが台本も声も配信も。",
    /**
     * ストアリンクは正式リリース後 (notice.enabled === false) にのみ表示される。
     * リスナー向け聴取アプリ Kotoriva の配信リンク。
     */
    primaryCta: {
      label: "Download on the App Store",
      icon: "Apple",
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
      "誰でもポッドキャストを届けられる、\n配信制作支援プラットフォームです。\n\nテキストを書くだけで、AIが音声番組に。\n台本づくりから音声化、配信まで、\n番組運営のすべてをまるごと支援します。",
  },

  /** 3. サービス機能（Services） */
  services: {
    title: "Services",
    /**
     * 紹介動画の埋め込み。旧アプリのデモ動画のため、新サービスの
     * 動画ができるまで非表示 (enabled: false)。
     */
    video: {
      enabled: false,
      youtubeId: "J-U6t8PeKJI",
    },
    /** 事業説明資料（Kotoriva_事業説明_20260920）のプロダクトフロー 4 ステップに対応 */
    items: [
      {
        title: "ソースを渡す",
        englishTitle: "Step 01",
        description:
          "メモ・記事・物語を渡すだけ。すでに書いた記事から、番組を始められます。",
        icon: "Source",
      },
      {
        title: "ホストを選ぶ",
        englishTitle: "Step 02",
        description:
          "テーマや雰囲気に合わせて、AIキャラクターを選択。驚き方や共感のしかたまで、そのキャラクターらしく話します。",
        icon: "Host",
      },
      {
        title: "エピソード生成",
        englishTitle: "Step 03",
        description:
          "台本も音声も、AIが生成。修正はテキストを直すだけ。録り直しは、ありません。",
        icon: "Episode",
      },
      {
        title: "ワンクリック配信",
        englishTitle: "Step 04",
        description:
          "Spotify・Apple Podcasts・YouTube・RSSへ、ワンクリックで配信できます。",
        icon: "Publish",
      },
    ],
  },

  /** 4. 先行アクセス / ダウンロード (CTA) */
  download: {
    /** 正式リリース後 (notice.enabled === false) に表示される文言 */
    title: "無料で番組をつくる",
    subtitle: "あなたの言葉を、ポッドキャストに",
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
      /** 公式アカウント開設までは代表の個人アカウントを掲載（公式と誤解されないよう label を表示） */
      { platform: "X", label: "代表 山田", href: "https://x.com/yamatetsu0703", icon: "X" },
    ],
    copyright: `©︎ Kotoriva`,
  },
} as const;

export type LandingContent = typeof landing;
