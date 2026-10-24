"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { landing } from "@/content/landing";
import { Play, Pause } from "lucide-react";

export function Characters() {
  const { characters } = landing;
  const [activeVoice, setActiveVoice] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 音声再生・停止の切り替え処理
  const toggleVoice = (id: string, audioPath?: string) => {
    // 既存の再生中の音声を停止
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // 同じボタンを押した場合は停止のみで終了
    if (activeVoice === id) {
      setActiveVoice(null);
      return;
    }

    // 音声パスが存在しない場合は終了
    if (!audioPath) return;

    // 新しい音声を再生
    const newAudio = new Audio(audioPath);
    audioRef.current = newAudio;
    setActiveVoice(id);

    newAudio.play().catch((err) => {
      console.error("音声再生エラー:", err);
      setActiveVoice(null);
    });

    // 再生が終わったらアイコンを Play（停止状態）に戻す
    newAudio.onended = () => {
      setActiveVoice(null);
    };
  };

  return (
    <section id="characters" className="relative w-full bg-white py-20 lg:py-28 px-6 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="whitespace-nowrap text-xl min-[360px]:text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#666779] tracking-tight">
            {characters.title}
          </h2>
        </div>

        {/* Character 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {characters.items.map((char, index) => {
            const isPlaying = activeVoice === char.id;

            return (
              <motion.div
                key={char.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                className="group relative rounded-[28px] bg-white p-5 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_45px_rgba(128,126,248,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Character Illustration Banner */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-5 bg-slate-50">
                    <Image
                      src={char.image}
                      alt={char.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Character Names & Voice Play Button */}
                  <div className="mb-3.5 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg sm:text-[20px] font-bold text-[#292A41]">
                        {char.name}
                      </h3>
                      <p className="text-xs font-medium text-[#9091A2] tracking-wide mt-0.5 font-sans">
                        {char.roman}
                      </p>
                    </div>

                    {/* 再生ボタン */}
                    <button
                      type="button"
                      onClick={() => toggleVoice(char.id, (char as { audio?: string }).audio)}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-[#807EF1] to-[#88D8EE] flex items-center justify-center text-white shadow-md shadow-[#807EF1]/30 hover:shadow-lg hover:shadow-[#807EF1]/40 hover:scale-105 active:scale-95 transition-all shrink-0"
                      aria-label={`${char.name}のボイスサンプルを再生`}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-white" />
                      ) : (
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#9091A2] leading-relaxed">
                    {char.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
