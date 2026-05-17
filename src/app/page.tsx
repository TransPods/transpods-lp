import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

/**
 * LP トップページ。
 * 各セクションを縦に並べるだけ。文言は src/content/landing.ts に集約。
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Features />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
