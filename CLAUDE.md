@AGENTS.md

# TransPods Landing — プロジェクトガイド

TransPods 公式 LP（`transpods.app`）の実装。

## 技術スタック

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui**（style: `base-nova` / base color: `neutral`）
- ホスティング: **Vercel** 無料 tier（GitHub 連携で自動デプロイ）
- アイコン: `lucide-react`

> ⚠️ Next.js 16 は破壊的変更を含むバージョンです。コードを書く前に
> `node_modules/next/dist/docs/` の該当ガイドを参照してください。

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx       # ルートレイアウト + SEO/OGP メタデータ
│   ├── page.tsx         # LP トップ（各セクションを並べるだけ）
│   ├── robots.ts        # robots.txt 生成
│   ├── sitemap.ts       # sitemap.xml 生成
│   ├── privacy/         # プライバシーポリシー
│   └── terms/           # 利用規約
├── components/
│   ├── sections/        # LP のセクション単位コンポーネント
│   │   ├── section.tsx  # セクション共通ラッパー（最大幅・余白）
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── problem.tsx
│   │   ├── features.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   └── ui/              # shadcn/ui コンポーネント（直接編集しない）
├── content/
│   └── landing.ts       # ★ LP の全テキストを集約
└── lib/
    ├── site.ts          # サイト共通メタ情報（URL・ドメイン等）
    └── utils.ts         # shadcn 由来の cn() ヘルパー
```

## コンテンツ運用の原則（重要）

**LP の全テキストは `src/content/landing.ts` に集約する。**

- セクションコンポーネントは `landing.ts` から値を import するだけで、
  自身に文言をハードコードしない。
- 理由: 非エンジニアのライターが Notion で原稿を書き、その内容を
  `landing.ts` に反映するだけで更新が完結するようにするため。
- 文言の追加・変更時はキー名と構造を維持する。構造変更はエンジニア判断で。

`site.ts` はテキスト原稿ではない設定値（URL・OGP 画像パス等）を持つ。

## 開発フロー

| フェーズ | 内容 |
|---|---|
| フェーズ1 | 骨格スキャフォールド（仮テキスト）— **完了** |
| フェーズ2 | Figma スクショを元に 1 セクションずつ実装 |

## コマンド

```bash
npm run dev     # 開発サーバー（http://localhost:3000）
npm run build   # 本番ビルド
npm run start   # 本番サーバー
npm run lint    # ESLint
```

## コーディング規約

- イミュータブル（オブジェクトを変更せず新規生成）
- 1 ファイルは小さく保つ（200〜400 行目安）
- `console.log` を残さない
- ハードコードされた値を避け、`content/landing.ts` / `lib/site.ts` に寄せる
