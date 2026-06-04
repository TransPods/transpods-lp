import { landing } from "@/content/landing";
import Image from "next/image";

export function Hero() {
  const { hero } = landing;
  const titleLines = hero.title.split('\n');

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-zinc-950 px-6 pt-16">
      
      {/* Giant faint text in background */}
      <div className="absolute inset-0 z-0 flex items-center justify-start overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <span className="text-[40vw] font-serif font-bold leading-[0.85] tracking-tighter text-white whitespace-nowrap ml-[-5vw] flex flex-col">
          <span>Tra</span>
          <span className="ml-[5vw]">Pod</span>
        </span>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-[10%] -left-[60%] md:-left-[50%] lg:-left-[30%] w-[120%] md:w-[100%] lg:w-[60%] aspect-square opacity-60 pointer-events-none z-0 mix-blend-screen">
        <img src="/glow.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-[10%] -right-[60%] md:-right-[50%] lg:-right-[30%] w-[120%] md:w-[100%] lg:w-[60%] aspect-square opacity-60 pointer-events-none z-0 mix-blend-screen">
        <img src="/glow.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-10 pb-20 h-full min-h-[80vh] lg:-translate-x-16">
        
        {/* Left/Bottom Content: Text & Buttons */}
        <div className="flex w-full lg:w-[45%] flex-col items-end lg:items-start z-20 order-2 lg:order-1 mt-[70vw] sm:mt-[60vw] md:mt-[50vw] lg:mt-64 lg:translate-x-32">
          
          {/* Slanted Title */}
          <div className="flex flex-col items-start lg:items-stretch gap-4 -mr-6 lg:mr-0 z-20 lg:w-max">
            {titleLines.map((line, i) => (
              <div key={i} className={`relative inline-block lg:flex lg:justify-end pl-8 pr-4 py-1 sm:py-2 lg:pr-8 ${i === 0 ? 'translate-x-6 lg:translate-x-12' : 'lg:translate-x-0'}`}>
                {/* Slanted background */}
                <div className="absolute inset-y-0 left-0 w-[100vw] lg:w-full bg-white -skew-x-[25deg] lg:-skew-x-[30deg] shadow-2xl z-0" />
                {/* Text */}
                <span className={`relative z-10 block text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-zinc-950 whitespace-nowrap ${i === 0 ? 'lg:-translate-x-12' : 'lg:translate-x-4'}`}>
                  {line}
                </span>
              </div>
            ))}
          </div>
          
          {/* Subtitle */}
          <p className="mt-6 text-[13px] sm:text-sm md:text-base lg:text-lg text-zinc-300 font-medium tracking-wide text-right lg:text-left drop-shadow-md">
            {hero.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center justify-end lg:justify-start gap-4 mt-10 lg:mt-8 w-full lg:-translate-x-12">
            <div className="relative group flex-1 lg:flex-none p-[2px] hover:p-[3px] transition-all duration-200 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500">
              <a
                href={hero.primaryCta.href}
                className="relative flex items-center justify-center gap-2 overflow-hidden rounded-[10px] bg-zinc-950 px-4 sm:px-6 lg:px-10 py-3 font-semibold text-white transition-all active:scale-95"
              >
                <Image src="/app-store.png" alt="App Store" width={24} height={24} className="h-8 sm:h-9 w-auto" />
                <div className="flex flex-col items-start leading-none text-left whitespace-nowrap">
                  <span className="text-[9px] sm:text-[10px] text-zinc-400 font-normal">Download on the</span>
                  <span className="text-sm sm:text-base font-bold">App Store</span>
                </div>
              </a>
            </div>

            <div className="relative group flex-1 lg:flex-none p-[2px] hover:p-[3px] transition-all duration-200 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500">
              <a
                href={hero.secondaryCta.href}
                className="relative flex items-center justify-center gap-2 overflow-hidden rounded-[10px] bg-zinc-950 px-4 sm:px-6 lg:px-10 py-3 font-semibold text-white transition-all active:scale-95"
              >
                <Image src="/google-play.png" alt="Google Play" width={24} height={24} className="h-6 sm:h-7 w-auto" />
                <div className="flex flex-col items-start leading-none text-left whitespace-nowrap">
                  <span className="text-[9px] sm:text-[10px] text-zinc-400 font-normal">GET IT ON</span>
                  <span className="text-sm sm:text-base font-bold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right/Top Content: Main Visual */}
        <div className="absolute lg:relative top-10 lg:top-auto right-[-10%] lg:right-[0%] w-[120%] lg:w-[75%] flex justify-end order-1 lg:order-2 z-10 pointer-events-none lg:scale-[1.25] lg:translate-x-0">
          <Image 
            src="/main-visual.png" 
            alt="TransPods App Interface" 
            width={1600} 
            height={1200} 
            className="w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(16,185,129,0.15)]"
            priority 
          />
        </div>

      </div>
    </section>
  );
}
