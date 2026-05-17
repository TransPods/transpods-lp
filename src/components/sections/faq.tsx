import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/sections/section";
import { landing } from "@/content/landing";

/**
 * 5. よくある質問セクション（FAQ）。
 * フェーズ1プレースホルダー。
 */
export function Faq() {
  const { faq } = landing;

  return (
    <Section id="faq">
      <SectionHeading title={faq.title} subtitle={faq.subtitle} />

      <div className="mx-auto max-w-2xl">
        <Accordion>
          {faq.items.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
