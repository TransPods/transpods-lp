import { landing } from "@/content/landing";

/**
 * サービス休止のお知らせバナー。
 * ページ最上部に固定表示する。landing.notice.enabled が false のときは
 * 何もレンダリングしない（再リリース時にフラグを戻すだけで消える）。
 */
export function NoticeBanner() {
  const { notice } = landing;

  if (!notice.enabled) return null;

  return (
    <div
      role="status"
      className="fixed top-0 z-[60] w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950"
    >
      <p className="mx-auto max-w-5xl px-6 py-2 text-center text-xs font-semibold tracking-wide sm:text-sm">
        {notice.message}
      </p>
    </div>
  );
}
