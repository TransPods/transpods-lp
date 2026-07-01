"use client";

import { landing } from "@/content/landing";
import { motion } from "framer-motion";
import { StoreButtons } from "./store-buttons";

export function Download() {
  const { download, notice } = landing;

  // 休止中は download の文言が状況と矛盾するため、notice 側の見出しに差し替える。
  const title = notice.enabled ? notice.downloadTitle : download.title;
  const subtitle = notice.enabled ? notice.downloadSubtitle : download.subtitle;

  return (
    <section id="download" className="relative w-full py-16 sm:py-24 px-6 flex flex-col items-center justify-center overflow-hidden mt-8 sm:mt-12">
      
      {/* Background container */}
      <div className="absolute inset-0 max-w-6xl mx-auto rounded-none border-y border-x-0 border-white sm:rounded-[3rem] sm:border bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0, 0, 0.58, 1] as const }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-3xl flex flex-col items-center text-center gap-6 sm:gap-10 py-8 sm:py-12"
      >
        
        <div className="space-y-4 px-2 w-full max-w-full overflow-hidden">
          <p className="text-[4vw] sm:text-lg md:text-xl text-white font-light tracking-wider whitespace-nowrap">
            {subtitle}
          </p>
          <h2 className="text-[7vw] sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white whitespace-nowrap">
            {title}
          </h2>
        </div>

        <StoreButtons
          className="justify-center mt-8 max-w-full px-2"
          iconClassName={{ appStore: "h-5 sm:h-9", googlePlay: "h-4 sm:h-7" }}
        />
      </motion.div>
    </section>
  );
}
