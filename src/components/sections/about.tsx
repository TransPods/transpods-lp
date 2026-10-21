"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { landing } from "@/content/landing";

// ユーザー指定の各ステップ番号の背景色
const STEP_COLORS: Record<number, string> = {
  1: "#87CCEF",
  2: "#85BFEE",
  3: "#84A9F0",
  4: "#818EF0",
  5: "#8082F0",
};

export function About() {
  const { about } = landing;

  return (
    <section id="about" className="relative w-full bg-white py-16 sm:py-20 lg:py-32 px-6 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-12">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* 
            Vision Copy (話したいテーマを、好きなAIキャラクターと):
            スマホ表示時は order-1（先頭）、PC時は order-2（右側）
          */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-center gap-6 sm:gap-8 w-full"
          >
            {/* 
              Headline:
              「話したいテーマを、」で確実に改行し、スマホでも二行で収まるようにサイズを調整
            */}
            <h2 className="font-bold text-[#292A41] leading-[1.3] tracking-tight text-[22px] sm:text-3xl lg:text-[36px] xl:text-[40px]">
              <span className="block whitespace-nowrap">
                {about.heading.line1}
              </span>
              <span className="block whitespace-nowrap mt-1">
                <span className="bg-gradient-to-r from-[#807EF1] to-[#88D8EE] bg-clip-text text-transparent">
                  {about.heading.gradient}
                </span>
                {about.heading.line2}
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-[14px] sm:text-base lg:text-[17px] text-[#666779] leading-loose font-normal">
              {about.paragraphs.map((para, i) => (
                <p key={i}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          {/* 
            5-Step Process Section (簡単5ステップでポッドキャスト制作 + カード):
            スマホ表示時は order-2（後）、PC時は order-1（左側）
          */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-7 w-full flex flex-col gap-5 mt-8 sm:mt-12 lg:mt-0 pt-4 sm:pt-6 lg:pt-0"
          >
            {/* 
              Top Label:
              「簡単5ステップ」の文字だけ大きくし、#807EF1から#88D8EEのグラデーションを適用
            */}
            <div className="inline-flex items-baseline gap-1.5 flex-wrap">
              <span className="text-xl sm:text-2xl lg:text-[28px] font-black tracking-tight bg-gradient-to-r from-[#807EF1] to-[#88D8EE] bg-clip-text text-transparent">
                簡単5ステップ
              </span>
              <span className="text-sm sm:text-base font-bold text-[#666779] tracking-wider">
                でポッドキャスト制作
              </span>
            </div>

            {/* 5-Step Card Container: 横幅を広げて各ステップが1行で入りきるように最適化 */}
            <div className="rounded-[28px] bg-white p-5 sm:p-7 lg:px-7 lg:py-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-slate-100 space-y-5 sm:space-y-6">
              {about.steps.map((step) => (
                <div key={step.number} className="flex items-start gap-3.5 sm:gap-4 group">
                  {/* Step Number Badge (指定のカラーパレットを適用) */}
                  <div
                    style={{ backgroundColor: STEP_COLORS[step.number] ?? "#87CCEF" }}
                    className="shrink-0 w-8 h-8 rounded-lg text-white flex items-center justify-center font-black text-sm shadow-sm group-hover:scale-105 transition-transform mt-0.5"
                  >
                    {step.number}
                  </div>
                  
                  {/* Step Texts: 説明文がPC表示で確実に1行で収まるように調整 */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-[#292A41] mb-0.5">
                      {step.title}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] text-[#9091A2] leading-relaxed lg:whitespace-nowrap">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Wave Equalizer Decoration at Bottom Left */}
      <div className="absolute left-0 bottom-[-20px] z-0 pointer-events-none hidden md:block">
        <Image
          src="/wave-decoration-2.svg"
          alt=""
          width={346}
          height={192}
          className="w-56 lg:w-80 h-auto opacity-90"
        />
      </div>
    </section>
  );
}
