import { landing } from "@/content/landing";
import Image from "next/image";

export function Download() {
  const { download } = landing;

  return (
    <section id="download" className="relative w-full py-32 px-6 flex flex-col items-center justify-center overflow-hidden mt-12">
      
      {/* Background container */}
      <div className="absolute inset-0 max-w-6xl mx-auto rounded-[3rem] bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-3xl flex flex-col items-center text-center gap-10 py-16">
        
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {download.title}
          </h2>
          <p className="text-xl text-emerald-400 font-medium">
            {download.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
          <a
            href={download.primaryCta.href}
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white px-8 py-4 font-semibold text-zinc-950 transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            <Image src="/app-store.png" alt="App Store" width={24} height={24} className="h-8 sm:h-9 w-auto" />
            <div className="flex flex-col items-start leading-none whitespace-nowrap">
              <span className="text-[10px] text-zinc-500 font-normal">Download on the</span>
              <span className="text-lg font-bold">App Store</span>
            </div>
          </a>

          <a
            href={download.secondaryCta.href}
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-zinc-800 border border-white/10 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-zinc-700 active:scale-95 shadow-xl"
          >
            <Image src="/google-play.png" alt="Google Play" width={24} height={24} className="h-6 w-auto" />
            <div className="flex flex-col items-start leading-none whitespace-nowrap">
              <span className="text-[10px] text-zinc-400 font-normal">GET IT ON</span>
              <span className="text-lg font-bold">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
