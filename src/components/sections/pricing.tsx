import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/sections/section";
import { cn } from "@/lib/utils";
import { landing } from "@/content/landing";

/**
 * 4. 料金セクション（Pricing）。
 * フェーズ1プレースホルダー。
 */
export function Pricing() {
  const { pricing } = landing;

  return (
    <Section id="pricing" className="bg-muted/40">
      <SectionHeading title={pricing.title} subtitle={pricing.subtitle} />

      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        {pricing.plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(plan.highlighted && "border-primary shadow-md")}
          >
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-semibold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">
                  {plan.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <ul className="flex flex-col gap-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#cta"
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </ButtonLink>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
