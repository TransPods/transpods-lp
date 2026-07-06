import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { landing } from "@/content/landing";
import { siteConfig } from "@/lib/site";

interface StoreButtonsProps {
  /** ボタン群のラッパーに付与する追加クラス（配置調整用） */
  className?: string;
  /** App Store / Google Play 各バッジ画像の高さクラス */
  iconClassName?: { appStore?: string; googlePlay?: string };
}

/**
 * ダウンロード CTA。hero と download の 2 箇所で共有する。
 *
 * - 通常時（notice.enabled === false）: App Store / Google Play のリンクボタン。
 * - 休止中（notice.enabled === true）: ストア配信がないため、代わりに
 *   「先行アクセスに登録」ボタン（Google フォーム）を表示する。
 *
 * 再リリース時は notice.enabled を false に戻すだけでストアボタンに戻る。
 */
export function StoreButtons({ className = "", iconClassName }: StoreButtonsProps) {
  const { hero, notice } = landing;

  // 休止中: 先行アクセス登録の 1 ボタンに差し替える。
  if (notice.enabled) {
    return (
      <div className={`flex flex-row items-center gap-4 ${className}`}>
        <div className="group relative rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-[2px] transition-all duration-200 hover:p-[3px]">
          <a
            href={siteConfig.links.earlyAccessForm}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 overflow-hidden rounded-[10px] bg-zinc-950 px-6 py-3 font-bold text-white transition-all active:scale-95 sm:px-8 lg:px-10"
          >
            <span className="text-sm sm:text-base whitespace-nowrap">
              {notice.earlyAccessLabel}
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    );
  }

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
      {stores.map((store) => (
        <div
          key={store.key}
          className={`group relative flex-1 rounded-xl bg-gradient-to-r p-[2px] transition-all duration-200 hover:p-[3px] lg:flex-none ${store.gradient}`}
        >
          <a
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 overflow-hidden rounded-[10px] bg-zinc-950 px-4 py-3 font-semibold text-white transition-all active:scale-95 sm:px-6 lg:px-10"
          >
            <Image
              src={store.image}
              alt={store.alt}
              width={24}
              height={24}
              className={`${store.iconHeight} w-auto`}
            />
            <div className="flex flex-col items-start leading-none text-left whitespace-nowrap">
              <span className="text-[9px] sm:text-[10px] text-zinc-400 font-normal">
                {store.smallLabel}
              </span>
              <span className="text-sm sm:text-base font-bold">{store.largeLabel}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
