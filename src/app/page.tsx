import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Characters } from "@/components/sections/characters";
import { Access } from "@/components/sections/access";
import { Footer } from "@/components/sections/footer";

/**
 * LP トップページ。
 * Figma デザイン (https://www.figma.com/design/hkEEhWyTWRNv11k4hxl4Y9/) に基づく実装。
 * 各セクションの文言は src/content/landing.ts に集約。
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#807EF1]/25 selection:text-[#292A41]">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Characters />
        <Access />
      </main>
      <Footer />
    </div>
  );
}
