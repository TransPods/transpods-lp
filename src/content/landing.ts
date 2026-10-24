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
  /** ヘッダー / ナビゲーション */
  nav: {
    logoAlt: "Kotoriva",
    links: [
      { label: "Kotorivaについて", href: "#about" },
      { label: "キャラクター", href: "#characters" },
    ],
    cta: "無料で始める",
  },

  /** 1. ヒーロー（ファーストビュー） */
  hero: {
    badge: "記事をもとに、AIがポッドキャストを作成・配信",
    title: "あなたの想いを、\n心に届くポッドキャストに。",
    subtitle: "記事のテーマにあったキャラクターと番組設定で、\n聴く人の理解と共感を深める会話に。",
    cta: "無料で始める",
    podcastSamples: [
      {
        id: "strategy",
        label: "ポッドキャストサンプル",
        title: "戦略の裏側",
        duration: "03:00",
        totalSeconds: 180,
        coverImage: "/podcast-cover.png",
      },
      {
        id: "tech",
        label: "ポッドキャストサンプル",
        title: "未来を創る",
        duration: "03:45",
        totalSeconds: 225,
        coverImage: "/podcast-cover-tech.jpg",
      },
      {
        id: "culture",
        label: "ポッドキャストサンプル",
        title: "夜更かしの読書室",
        duration: "02:30",
        totalSeconds: 150,
        coverImage: "/podcast-cover-culture.jpg",
      },
    ],
  },

  /** 2. アバウト & 5ステップ（About） */
  about: {
    badge: "簡単5ステップでポッドキャスト制作",
    steps: [
      {
        number: 1,
        title: "番組の構成の設定",
        description: "テーマや目的に合わせて、番組を作成。",
      },
      {
        number: 2,
        title: "ホストを選ぶ",
        description: "テーマや雰囲気に合わせて、AIキャラクターを選択。",
      },
      {
        number: 3,
        title: "記事を入力",
        description: "メモ・記事・物語を渡すだけ。すでに書いた記事から、番組を始められます。",
      },
      {
        number: 4,
        title: "エピソード生成・修正",
        description: "台本も音声も、AIが生成。修正はテキストを直すだけ。録り直しは、ありません。",
      },
      {
        number: 5,
        title: "ワンクリック配信",
        description: "Spotify・Apple Podcasts・YouTube・RSSへ、ワンクリックで配信できます。",
      },
    ],
    heading: {
      line1: "話したいテーマを、",
      gradient: "好きなAIキャラクター",
      line2: "と",
    },
    paragraphs: [
      "伝えたい知識や想いはあるけれど、自分で話すのも、続けるのも難しい。そんな方が、好きになれる声とキャラクターで発信できるように。",
      "誰もが自分の知識や想いを、好きになれる声とキャラクターに乗せて届けられる世界をつくる。",
    ],
  },

  /** 3. キャラクターサンプル */
  characters: {
    title: "キャラクターサンプル",
    items: [
      {
        id: "yuko",
        name: "森川優子",
        roman: "Morikawa Yuko",
        description: "52歳の女性カウンセラー。穏やかで包容力があり、相手の気持ちに寄り添いながら話を聞く。",
        image: "/character-yuko.png",
        audio: "/voice-yuko.wav"
      },
      {
        id: "tomoya",
        name: "黒瀬 智也",
        roman: "Kurose Tomoya",
        description: "老舗食品会社の創業家生まれのお嬢様。上品で穏やかな物腰を持ち、細やかな気配りで場を整える。",
        image: "/character-tomoya.png",
        audio: "/voice-tomoya.wav"
      },
      {
        id: "kirara",
        name: "星野きらら",
        roman: "Hoshino Kirara",
        description: "備えを重んじる戦国武将。慎重で責任感が強く、現代の暮らしにも順応。経験に基づき、冷静に物事を判断する。",
        image: "/character-kirara.png",
        audio: "/voice-kirara.wav"
      },
    ],
  },

  /** 4. 制作実績一例 */
  achievements: {
    title: "制作実績一例",
    items: [
      { id: "1", title: "テキスト" },
      { id: "2", title: "テキスト" },
      { id: "3", title: "テキスト" },
      { id: "4", title: "テキスト" },
    ],
  },

  /** 5. CTA（Studio の新規登録へ） */
  access: {
    subtitle: "あなたの番組づくりを、いちばん最初に",
    title: "今すぐはじめよう",
    cta: "無料で始める",
    symbolImage: "/kotoriva-symbol.png",
  },

  /** 6. フッター */
  footer: {
    contact: {
      label: "お問い合わせ",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSf-dLsHo7Al2x4tLaapsY2H0ZZKXfwpuxC2zYWvRPqwY4FwTg/viewform?usp=dialog",
    },
    socials: [
      { platform: "X", label: "代表 山田", href: "https://x.com/yamatetsu0703" },
    ],
    copyright: "© Kotoriva",
  },
} as const;

export type LandingContent = typeof landing;
