"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { landing } from "@/content/landing";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

export function Hero() {
  const { hero } = landing;
  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // サイトを開いた瞬間から再生
  const [currentSeconds, setCurrentSeconds] = useState(0); // 0地点からスタート

  const samples = hero.podcastSamples;
  const currentSample = samples[currentSampleIndex];

  // 次のサンプルへ切り替え
  const nextSample = () => {
    setCurrentSampleIndex((prev) => (prev + 1) % samples.length);
    setCurrentSeconds(0);
  };

  // 前のサンプルへ切り替え
  const prevSample = () => {
    setCurrentSampleIndex((prev) => (prev - 1 + samples.length) % samples.length);
    setCurrentSeconds(0);
  };

  // 再生プログレスタイマー（0地点からリアルタイムに秒数が進む）
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSeconds((prev) => {
          if (prev >= currentSample.totalSeconds) {
            nextSample();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentSample.totalSeconds]);

  // 秒数を mm:ss 形式に変換
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const progressPercent = Math.min(
    100,
    (currentSeconds / currentSample.totalSeconds) * 100
  );

  return (
    <section className="relative w-full overflow-hidden bg-white pt-28 pb-20 lg:pt-40 lg:pb-32 text-[#292A41]">
      {/* 
        Background Graphic:
        添付された白〜淡いブルーのグラデーション背景画像（/hero-bg.png）
      */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          
          {/* Left Column: Headings & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start gap-6 max-w-2xl"
          >
            {/* Category Subtitle (一行で入るようにサイズと nowrap を調整) */}
            <div className="inline-flex items-center gap-2 max-w-full overflow-hidden">
              <span className="text-[#807EF1] text-[13px] sm:text-sm lg:text-base font-bold tracking-wide whitespace-nowrap">
                {hero.badge}
              </span>
            </div>

            {/* 
              Main Headline:
              スマホ画面で可変しても行数が変わらないよう「あなたの想いを、」「心に届くポッドキャストに。」の2行で固定
            */}
            <h1 className="font-extrabold leading-[1.25] tracking-tight text-[#292A41] text-[24px] min-[380px]:text-[28px] sm:text-4xl lg:text-[46px]">
              <span className="block whitespace-nowrap">あなたの想いを、</span>
              <span className="block whitespace-nowrap">心に届くポッドキャストに。</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base lg:text-[17px] text-[#666779] leading-relaxed font-normal whitespace-pre-line">
              {hero.subtitle}
            </p>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                href={siteConfig.links.earlyAccessForm}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#807EF1] to-[#88D8EE] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#807EF1]/30 hover:shadow-2xl hover:shadow-[#807EF1]/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <span>{hero.cta}</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Podcast Sample Player Card with Left/Right Nav Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end relative"
          >
            {/* Wrapper for Player Card + External/Overlay Nav Buttons */}
            <div className="relative flex items-center justify-center w-full max-w-[480px]">
              
              {/* 
                小なり (< / ChevronLeft):
                PCではカードの外側左（白ボタン）、スマホではカードに重なっても必ず見える位置（半透明黒ボタン）
              */}
              <button
                type="button"
                onClick={prevSample}
                className="absolute -left-3 sm:-left-5 lg:-left-12 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/65 hover:bg-black/80 lg:bg-white lg:hover:bg-slate-50 active:scale-90 text-white lg:text-[#292A41] flex items-center justify-center transition-all shadow-xl backdrop-blur-md border border-white/20 lg:border-slate-200"
                aria-label="前のポッドキャストサンプルへ切り替え"
                title="前のサンプル"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Dark Player Card Container */}
              <div className="w-full rounded-[32px] bg-[#0E1528] border border-white/10 p-5 sm:p-6 shadow-[0_24px_60px_rgba(20,25,45,0.22)]">
                {/* Card Header Label */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-200">
                    {currentSample.label}
                  </span>
                  {/* Indicator count */}
                  <div className="flex items-center gap-1.5">
                    {samples.map((_, idx) => (
                      <span
                        key={idx}
                        className={`inline-block h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentSampleIndex
                            ? "w-4 bg-gradient-to-r from-[#807EF1] to-[#88D8EE]"
                            : "w-1.5 bg-white/25"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Cover Artwork (3サンプルのスムーズな切り替え) */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md group bg-zinc-950">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSample.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.35 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={currentSample.coverImage}
                        alt={currentSample.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* White Embedded Player Bar */}
                <div className="mt-4 rounded-2xl bg-white p-3.5 sm:p-4 shadow-xl flex items-center gap-3 sm:gap-4 transition-all">
                  {/* Play / Pause Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-r from-[#807EF1] to-[#88D8EE] flex items-center justify-center text-white shadow-md shadow-[#807EF1]/40 hover:scale-105 active:scale-95 transition-all"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-white" />
                    ) : (
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    )}
                  </button>

                  {/* Title & Seek Bar */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-bold text-[14px] sm:text-[15px] text-[#292A41] truncate">
                        {currentSample.title}
                      </span>
                      {/* 0地点からスタートして再生時間に応じて進むリアルタイムタイマー */}
                      <span className="text-[10px] sm:text-[11px] font-mono text-[#666779] whitespace-nowrap">
                        {formatTime(currentSeconds)} / {currentSample.duration}
                      </span>
                    </div>

                    {/* Progress Track (0地点からスタートしてグラデーションバーが伸びる) */}
                    <div
                      className="relative w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden cursor-pointer"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const pct = Math.max(0, Math.min(1, clickX / rect.width));
                        setCurrentSeconds(Math.round(pct * currentSample.totalSeconds));
                      }}
                    >
                      <div
                        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#807EF1] to-[#88D8EE] rounded-full transition-all duration-300 ease-linear"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 
                大なり (> / ChevronRight):
                PCではカードの外側右、スマホではカードに重なっても必ず見える位置
              */}
              <button
                type="button"
                onClick={nextSample}
                className="absolute -right-3 sm:-right-5 lg:-right-12 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/65 hover:bg-black/80 lg:bg-white lg:hover:bg-slate-50 active:scale-90 text-white lg:text-[#292A41] flex items-center justify-center transition-all shadow-xl backdrop-blur-md border border-white/20 lg:border-slate-200"
                aria-label="次のポッドキャストサンプルへ切り替え"
                title="次のサンプル"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Wave Equalizer Decoration at Bottom Right */}
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
