import { landing } from "@/content/landing";
import Image from "next/image";

export function Download() {
  const { download } = landing;

  return (
    <section id="download" className="relative w-full py-16 sm:py-24 px-6 flex flex-col items-center justify-center overflow-hidden mt-8 sm:mt-12">
      
      {/* Background container */}
      <div className="absolute inset-0 max-w-6xl mx-auto rounded-none border-y border-x-0 border-white sm:rounded-[3rem] sm:border bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-3xl flex flex-col items-center text-center gap-6 sm:gap-10 py-8 sm:py-12">
        
        <div className="space-y-4 px-2 w-full max-w-full overflow-hidden">
          <p className="text-[4vw] sm:text-lg md:text-xl text-white font-light tracking-wider whitespace-nowrap">
            {download.subtitle}
          </p>
          <h2 className="text-[7vw] sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white whitespace-nowrap">
            {download.title}
          </h2>
        </div>

        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mt-8 w-full max-w-full px-2">
          <div className="relative group flex-1 sm:flex-none p-[2px] hover:p-[3px] transition-all duration-200 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500">
            <a
              href={download.primaryCta.href}
              className="relative flex items-center justify-center gap-1 sm:gap-2 overflow-hidden rounded-[10px] bg-zinc-950 px-2 sm:px-8 py-2 sm:py-3 lg:px-10 font-semibold text-white transition-all active:scale-95"
            >
              <Image src="/app-store.png" alt="App Store" width={24} height={24} className="h-5 sm:h-9 w-auto" />
              <div className="flex flex-col items-start leading-none text-left whitespace-nowrap">
                <span className="text-[7px] sm:text-[10px] text-zinc-400 font-normal">Download on the</span>
                <span className="text-xs sm:text-base font-bold">App Store</span>
              </div>
            </a>
          </div>

          <div className="relative group flex-1 sm:flex-none p-[2px] hover:p-[3px] transition-all duration-200 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500">
            <a
              href={download.secondaryCta.href}
              className="relative flex items-center justify-center gap-1 sm:gap-2 overflow-hidden rounded-[10px] bg-zinc-950 px-2 sm:px-8 py-2 sm:py-3 lg:px-10 font-semibold text-white transition-all active:scale-95"
            >
              <Image src="/google-play.png" alt="Google Play" width={24} height={24} className="h-4 sm:h-7 w-auto" />
              <div className="flex flex-col items-start leading-none text-left whitespace-nowrap">
                <span className="text-[7px] sm:text-[10px] text-zinc-400 font-normal">GET IT ON</span>
                <span className="text-xs sm:text-base font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
