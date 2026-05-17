import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/sections/section";
import { landing } from "@/content/landing";

/**
 * 6. 最終 CTA セクション。
 * フェーズ1プレースホルダー。
 */
export function Cta() {
  const { cta } = landing;

  return (
    <Section id="cta" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {cta.title}
        </h2>
        <p className="mt-3 text-primary-foreground/80 md:text-lg">
          {cta.subtitle}
        </p>

        <div className="mt-8">
          {/* TODO(phase2): href を App Store / Google Play リンクに差し替え */}
          <ButtonLink href="#" size="lg" variant="secondary">
            {cta.primaryCta}
          </ButtonLink>
        </div>

        <p className="mt-4 text-sm text-primary-foreground/70">{cta.note}</p>
      </div>
    </Section>
  );
}
