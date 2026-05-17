import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/sections/section";
import { landing } from "@/content/landing";

/**
 * 2. 課題提起セクション（Problem）。
 * フェーズ1プレースホルダー。
 */
export function Problem() {
  const { problem } = landing;

  return (
    <Section id="problem" className="bg-muted/40">
      <SectionHeading title={problem.title} subtitle={problem.subtitle} />

      <div className="grid gap-6 md:grid-cols-3">
        {problem.items.map((item) => (
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
