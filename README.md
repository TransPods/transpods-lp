# TransPods Landing

TransPods 公式サイト（`transpods.app`）の実装。
Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui。

## 開発

```bash
npm install
npm run dev
# http://localhost:3000
```

## ビルド

```bash
npm run build
npm run start
```

## デプロイ

Vercel（無料 tier）に GitHub 連携で自動デプロイ。`main` への push でデプロイされる。

## コンテンツの更新

LP の全テキストは [`src/content/landing.ts`](src/content/landing.ts) に集約されている。
原稿の更新は原則このファイルの編集だけで完結する。

詳細は [`CLAUDE.md`](CLAUDE.md) を参照。
