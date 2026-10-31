"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { landing } from "@/content/landing";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const { hero } = landing;
  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-white pt-28 pb-20 lg:pt-40 lg:pb-32 text-[#292A41]">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px]">
          
          {/* Left Column: Headings & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start gap-6 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 max-w-full overflow-hidden">
              <span className="text-[#807EF1] text-[13px] sm:text-sm lg:text-base font-bold tracking-wide whitespace-nowrap">
                {hero.badge}
              </span>
            </div>

            <h1 className="font-extrabold leading-[1.25] tracking-tight text-[#292A41] text-[24px] min-[380px]:text-[28px] sm:text-4xl lg:text-[46px]">
              <span className="block whitespace-nowrap">あなたの想いを、</span>
              <span className="block whitespace-nowrap">心に届くポッドキャストに。</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-[17px] text-[#666779] leading-relaxed font-normal whitespace-pre-line">
              {hero.subtitle}
            </p>

            <div className="pt-3">
              <a
                href={siteConfig.links.signup}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#807EF1] to-[#88D8EE] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#807EF1]/30 hover:shadow-2xl hover:shadow-[#807EF1]/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <span>{hero.cta}</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: top.png（右側幅を広げて右寄せで表示） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-end items-center relative w-full"
          >
            <div className="relative w-full max-w-[680px] lg:w-[115%] lg:max-w-none lg:-mr-12">
              <Image
                src="/top.png"
                alt="TOP"
                width={1200}
                height={1200}
                className="w-full h-auto object-contain block ml-auto"
                priority
              />
            </div>

            {/* 
              ---------------------------------------------------------
              【待機中データ】ポッドキャストサンプル プレイヤーカード
              ※ サンプルが準備できたら上記を差し替えて使用してください
              ---------------------------------------------------------
            */}
            {/* 
            <div className="relative flex items-center justify-center w-full max-w-[480px]">
              ...（サンプルコード保持）
            </div>
            */}
          </motion.div>

        </div>
      </div>

      {/* Wave Equalizer Decoration */}
      <div className="absolute right-0 bottom-0 z-20 pointer-events-none translate-y-1/2 hidden md:block">
        <Image
          src="/wave-decoration-1.svg"
          alt=""
          width={346}
          height={192}
          className="w-48 lg:w-72 h-auto opacity-95"
        />
      </div>
    </section>
  );
}