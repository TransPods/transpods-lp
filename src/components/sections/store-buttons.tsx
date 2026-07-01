import Image from "next/image";
import { landing } from "@/content/landing";

interface StoreButtonsProps {
  /** ボタン群のラッパーに付与する追加クラス（配置調整用） */
  className?: string;
  /** App Store / Google Play 各バッジ画像の高さクラス */
  iconClassName?: { appStore?: string; googlePlay?: string };
}

/**
 * App Store / Google Play のダウンロードボタン群。
 * hero と download の 2 箇所で共有する。
 *
 * landing.notice.enabled が true（サービス休止中）のときは、
 * 両ボタンをクリック不可の「準備中」状態でレンダリングする。
 * 再リリース時は notice.enabled を false に戻すだけで通常のリンクに戻る。
 */
export function StoreButtons({ className = "", iconClassName }: StoreButtonsProps) {
  const { hero, notice } = landing;
  const disabled = notice.enabled;

  const stores = [
    {
      key: "app-store",
      href: hero.primaryCta.href,
      image: "/app-store.png",
      alt: "App Store",
      smallLabel: "Download on the",
      largeLabel: "App Store",
      gradient: "from-emerald-500 to-cyan-500",
      iconHeight: iconClassName?.appStore ?? "h-8 sm:h-9",
    },
    {
      key: "google-play",
      href: hero.secondaryCta.href,
      image: "/google-play.png",
      alt: "Google Play",
      smallLabel: "GET IT ON",
      largeLabel: "Google Play",
      gradient: "from-cyan-500 to-emerald-500",
      iconHeight: iconClassName?.googlePlay ?? "h-6 sm:h-7",
    },
  ] as const;

  return (
    <div className={`flex flex-row items-center gap-4 ${className}`}>
      {stores.map((store) => {
        const inner = (
          <>
            <Image
              src={store.image}
              alt={store.alt}
              width={24}
              height={24}
              className={`${store.iconHeight} w-auto ${disabled ? "opacity-50" : ""}`}
            />
            <div className="flex flex-col items-start leading-none text-left whitespace-nowrap">
              {disabled ? (
                <span className="text-sm sm:text-base font-bold text-zinc-400">
                  {notice.ctaDisabledLabel}
                </span>
              ) : (
                <>
                  <span className="text-[9px] sm:text-[10px] text-zinc-400 font-normal">
                    {store.smallLabel}
                  </span>
                  <span className="text-sm sm:text-base font-bold">{store.largeLabel}</span>
                </>
              )}
            </div>
          </>
        );

        return (
          <div
            key={store.key}
            className={`relative flex-1 lg:flex-none rounded-xl bg-gradient-to-r p-[2px] ${store.gradient} ${
              disabled ? "opacity-60" : "group transition-all duration-200 hover:p-[3px]"
            }`}
          >
            {disabled ? (
              <span
                aria-disabled="true"
                className="relative flex cursor-not-allowed items-center justify-center gap-2 overflow-hidden rounded-[10px] bg-zinc-950 px-4 py-3 sm:px-6 lg:px-10"
              >
                {inner}
              </span>
            ) : (
              <a
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-2 overflow-hidden rounded-[10px] bg-zinc-950 px-4 py-3 font-semibold text-white transition-all active:scale-95 sm:px-6 lg:px-10"
              >
                {inner}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}
