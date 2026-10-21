"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { landing } from "@/content/landing";
import { Radio } from "lucide-react";

export function Achievements() {
  const { achievements } = landing;

  return (
    <section id="achievements" className="relative w-full overflow-hidden pt-20 pb-28 sm:pb-36 bg-[#B5B8EF]">
      {/* Wave shape divider at top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <Image
          src="/achievements-bg.png"
          alt=""
          width={1440}
          height={627}
          className="w-full h-auto object-cover object-top select-none"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-6 sm:pt-12">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight drop-shadow-sm">
            {achievements.title}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {achievements.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col items-center"
            >
              {/* Card Thumbnail Box */}
              <div className="relative aspect-square w-full rounded-2xl bg-white/70 backdrop-blur-sm border border-white/40 shadow-sm flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:bg-white/85 group-hover:shadow-md">
                {/* Subtle podcast artwork placeholder */}
                <div className="flex flex-col items-center justify-center text-zinc-400 group-hover:text-[#807EF1] transition-colors">
                  <Radio className="w-8 h-8 sm:w-10 sm:h-10 opacity-40 group-hover:opacity-75 transition-opacity" />
                </div>
              </div>

              {/* Card Label */}
              <span className="mt-3 text-sm sm:text-base font-bold text-white/90 group-hover:text-white transition-colors">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
