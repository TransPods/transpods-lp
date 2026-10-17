# LP の要件（Kotoriva Studio との連携）

Kotoriva の公開サイト（このリポジトリ）が満たすべき要件。アプリ本体の Kotoriva Studio は別リポジトリ（[TransPods/kotoriva](https://github.com/TransPods/kotoriva)）で、`studio.kotoriva.com` で動く。

この文書は「LP と Studio の境目」で決まっていることを書く。LP の文言・デザインの要件は扱わない（文言は `src/content/landing.ts` が正本）。

「現状」は 2026-10-17 時点の実装と DNS の状態。「要対応」は、まだこのリポジトリで満たしていないもの。

## 1. 役割の分担

| 担当 | LP（このリポジトリ） | Studio（kotoriva リポジトリ） |
| --- | --- | --- |
| ホスト | `www.kotoriva.com`（正規）、`kotoriva.com` | `studio.kotoriva.com` |
| 配信 | Vercel | Cloud Run + Cloudflare Worker |
| 中身 | サービスの紹介、先行アクセスの受付、Studio への導線 | ログイン・新規登録、番組づくり、利用規約・プライバシーポリシー |
| ログイン状態 | 持たない・判定しない | セッション Cookie を `studio.kotoriva.com` だけに置く |

- LP は、誰に対しても同じ内容を返す静的なページにする。ログイン済みかどうかで表示を変えたり、Studio へ自動でリダイレクトしたりしない
- Studio のセッション Cookie には Domain 属性が無いため、LP には届かない。届かせる変更もしない（外部サービスである Vercel にセッションを渡さないため）

## 2. ドメインと環境

| 環境 | LP | Studio |
| --- | --- | --- |
| 本番 | `https://www.kotoriva.com` | `https://studio.kotoriva.com` |
| 開発 | `https://development.kotoriva.com` | `https://studio.development.kotoriva.com` |
| プレビュー | `*.vercel.app` | 開発の Studio を使う |

- **本番の正規 URL は `www.kotoriva.com`**（現状どおり）。`kotoriva.com` と `transpods.app` からは 308 で www へ転送する
- **開発環境（要対応）**：Vercel に `development.kotoriva.com` を追加し、固定ブランチ（例：`develop`）のデプロイを割り当てる。`www.development.kotoriva.com` からは 308 で転送する
- **DNS** は Cloudflare（ゾーン `kotoriva.com`）に置き、proxy は通さない（DNS only）。証明書は Vercel が発行する
  - レコードは、kotoriva リポジトリの Terraform（`infra/cloudflare/modules/lp_domains`）が管理する。向け先は、Vercel の Domains 画面に出る値を kotoriva 側の tfvars（`lp_dns_target`）に入れる
  - 現状、本番の apex（A レコード）と www（CNAME）は Cloudflare の画面から手で作られていて、Terraform の管理外にある。Terraform へ移すときは kotoriva 側で import する

## 3. Studio への導線

| ボタン | 遷移先 |
| --- | --- |
| 新規登録（「無料で始める」など） | `${STUDIO_URL}/signup` |
| ログイン | `${STUDIO_URL}/login` |

- Studio の URL は環境変数で受け取り、コードに直接書かない（「6. 環境変数」）。値は `src/lib/site.ts` に寄せる
- 別ホストへの遷移なので、`next/link` ではなく普通の `<a href>` でよい。新しいタブでは開かない
- ログイン済みの人が `/login` や `/signup` を開くと、Studio がホームへリダイレクトする。そのため LP 側でログイン状態を気にする必要はない
- 計測のためにクエリ（`utm_source=lp` など）を付けてもよい。Studio はこれを読まずに無視する
- **プレローンチ中**（`landing.notice.enabled === true`）は、今の先行アクセスの登録フォームを CTA のままにする。Studio への導線は、正式リリースで `notice.enabled` を false にするときに入れる
- **要確認**：`download` のストアボタンは、旧 TransPods のアプリ（`id6755274570` / `com.transpod.podstudy`）を指している。Kotoriva の正式リリース後に表示する CTA は、Studio の新規登録に置き換える想定

## 4. 利用規約・プライバシーポリシー

- 正本は Studio（`https://studio.kotoriva.com/terms`、`/privacy`）に置く
  - 利用規約の末尾には、BGM のライセンスが求めるクレジットを載せる。その正本（曲の一覧）が kotoriva リポジトリにあるため、規約もそちらに置く
- **LP の `/terms` と `/privacy` は Studio の同じパスへ 308 でリダイレクトする（要対応）**
  - 今ある `src/app/terms` と `src/app/privacy`（プレースホルダー）は削除し、`next.config.ts` の `redirects` で転送する
  - 転送先は、環境ごとの Studio の URL から組み立てる
  - 外部に載せる URL（Google ログインの OAuth 同意画面など）に `https://www.kotoriva.com/terms` と書いても、最終的に Studio の規約が開く
- `sitemap.ts` から `/terms` と `/privacy` を外す（要対応。リダイレクトする URL は sitemap に載せない）
- フッターに「利用規約」「プライバシーポリシー」のリンクを置く場合は、Studio の URL を直接指す

## 5. SEO と計測

- canonical と OGP の URL は `siteConfig.url`（`https://www.kotoriva.com`）にする（現状どおり）
- **本番以外は検索エンジンに登録させない（要対応）**：`robots.ts` で、`VERCEL_ENV` が `production` 以外なら全体を disallow にする。開発のドメインと `*.vercel.app` が対象
- 計測（GA や Vercel Analytics など）を入れるときは、プライバシーポリシーへの記載が要る。プライバシーポリシーは Studio 側にあるので、kotoriva リポジトリ側で文面を更新する

## 6. 環境変数

Vercel の Environment Variables に、環境（Production / Preview）ごとに設定する。

| 名前 | 本番 | 開発・プレビュー | 用途 |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_STUDIO_URL` | `https://studio.kotoriva.com` | `https://studio.development.kotoriva.com` | Studio のログイン・新規登録へのリンク、`/terms` と `/privacy` のリダイレクト先 |

- 末尾のスラッシュは付けない
- 未設定のままビルドしたら失敗させる（リンク切れのまま公開しないため）

## 7. kotoriva リポジトリ側との対応

LP の URL やパスを変えるときは、kotoriva リポジトリ側の次の設定も合わせて直す。

| kotoriva 側 | 中身 |
| --- | --- |
| `LP_BASE_URL`（GCP の tfvars の `web_extra_env`） | Studio の規約ページのロゴから LP へ戻すときの URL |
| `infra/cloudflare` の `hosts.apex` / `hosts.www`、`lp_dns_target` | LP のホスト名と、Vercel への DNS レコード |

## 8. 対応の一覧

- [ ] Vercel に `development.kotoriva.com`（と `www.development.kotoriva.com`）を追加し、開発用のブランチを割り当てる
- [ ] `NEXT_PUBLIC_STUDIO_URL` を Vercel の環境ごとに設定し、`src/lib/site.ts` から読む
- [ ] `/terms` と `/privacy` を Studio へ 308 でリダイレクトし、プレースホルダーのページを削除する
- [ ] `sitemap.ts` から `/terms` と `/privacy` を外す
- [ ] `robots.ts` で、本番以外を disallow にする
- [ ] 正式リリースのとき、CTA を Studio の新規登録とログインに切り替え、旧アプリのストアボタンを外す
