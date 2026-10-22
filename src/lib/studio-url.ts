/**
 * Kotoriva Studio（アプリ本体）の URL を環境変数から読む。
 * next.config.ts からも import するため、パスエイリアス（@/）は使わない。
 *
 * 未設定のままビルドするとリンク切れの LP が公開されるので、例外で止める。
 */
export function getStudioUrl(): string {
  const raw = process.env.NEXT_PUBLIC_STUDIO_URL;

  if (!raw) {
    throw new Error(
      "NEXT_PUBLIC_STUDIO_URL が設定されていません（例: https://studio.kotoriva.com）",
    );
  }

  return raw.replace(/\/+$/, "");
}
