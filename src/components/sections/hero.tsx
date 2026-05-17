import { ButtonLink } from "@/components/ui/button-link";
import { landing } from "@/content/landing";

/**
 * 1. ヒーローセクション（ファーストビュー）。
 * フェーズ1プレースホルダー — ビジュアル/アニメーションはフェーズ2で実装。
 */
export function Hero() {
  const { hero } = landing;

  return (
    <section className="w-full px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
          {hero.badge}
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
          {hero.title}
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="#cta" size="lg">
            {hero.primaryCta}
          </ButtonLink>
          <ButtonLink href="#features" size="lg" variant="outline">
            {hero.secondaryCta}
          </ButtonLink>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">{hero.note}</p>
      </div>
    </section>
  );
}
