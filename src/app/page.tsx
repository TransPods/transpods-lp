import { NoticeBanner } from "@/components/sections/notice-banner";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Download } from "@/components/sections/download";
import { Footer } from "@/components/sections/footer";

/**
 * LP トップページ。
 * 各セクションを縦に並べるだけ。文言は src/content/landing.ts に集約。
 */
export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen text-slate-50 font-sans selection:bg-emerald-500/30">
      <NoticeBanner />
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Services />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
