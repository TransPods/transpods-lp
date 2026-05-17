import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/sections/section";
import { landing } from "@/content/landing";

/**
 * 3. 特徴セクション（Features）。
 * フェーズ1プレースホルダー — アイコン/イラストはフェーズ2で実装。
 */
export function Features() {
  const { features } = landing;

  return (
    <Section id="features">
      <SectionHeading title={features.title} subtitle={features.subtitle} />

      <div className="grid gap-6 sm:grid-cols-2">
        {features.items.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
