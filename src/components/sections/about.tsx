"use client";

import { landing } from "@/content/landing";
import { Sparkles } from "lucide-react";
import { Audiowide } from "next/font/google";
import { motion } from "framer-motion";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

function WaveDivider({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M-144,80 C144,260 288,-60 576,80 C864,260 1008,-60 1296,80 C1584,260 1728,-60 2016,80" stroke="url(#paint0_linear)" strokeWidth="2" fill="none" />
      <path d="M0,120 C320,-80 400,280 720,120 C1040,-80 1120,280 1440,120" stroke="url(#paint1_linear)" strokeWidth="1" fill="none" opacity="0.7" />
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#54FF62" />
          <stop offset="1" stopColor="#14A1F0" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14A1F0" />
          <stop offset="1" stopColor="#54FF62" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function About() {
  const { about } = landing;

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0, 0, 0.58, 1] as const } }
  };

  return (
    <section id="about" className="relative w-full pt-32 pb-48 lg:pt-64 lg:pb-72 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div 
        className="absolute top-[30%] -left-[60%] md:-left-[50%] lg:-left-[30%] w-[120%] md:w-[100%] lg:w-[60%] aspect-square opacity-40 pointer-events-none z-0 mix-blend-screen"
        style={{ WebkitMaskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)', maskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' }}
      >
        <img src="/glow.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div 
        className="absolute bottom-[30%] -right-[60%] md:-right-[50%] lg:-right-[30%] w-[120%] md:w-[100%] lg:w-[60%] aspect-square opacity-40 pointer-events-none z-0 mix-blend-screen"
        style={{ WebkitMaskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)', maskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' }}
      >
        <img src="/glow.png" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none opacity-50">
        <WaveDivider className="w-full h-24 md:h-48 lg:h-64" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent pointer-events-none" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="relative z-10 max-w-3xl flex flex-col items-center text-center gap-12"
      >
        
        {/* Section Header */}
        <motion.h2 variants={itemVariants} className={`text-[24px] lg:text-[64px] font-semibold tracking-wider text-white underline underline-offset-[12px] decoration-1 ${audiowide.className}`}>
          {about.title}
        </motion.h2>

        {/* Description */}
        <div className="space-y-12">
          {about.description.split("\n\n").map((paragraph, index) => (
            <motion.p 
              key={index} 
              variants={itemVariants}
              className="text-base md:text-3xl font-light leading-loose tracking-tight text-white whitespace-pre-wrap"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none rotate-180 opacity-50">
        <WaveDivider className="w-full h-24 md:h-48 lg:h-64" />
      </div>
    </section>
  );
}
