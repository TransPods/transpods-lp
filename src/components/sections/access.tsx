"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { landing } from "@/content/landing";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function Access() {
  const { access } = landing;

  return (
    <section id="access" className="relative w-full py-24 sm:py-32 px-6 overflow-hidden bg-gradient-to-b from-[#EEEBFC] via-[#F1F1FD] to-[#E3F4FC]">
      <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center text-center">
        
        {/* Brand App Symbol Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-lg shadow-[#807EF1]/20 hover:scale-105 transition-transform">
            <Image
              src={access.symbolImage}
              alt="Kotoriva Symbol"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="space-y-4 mb-10"
        >
          <p className="text-sm sm:text-base lg:text-lg text-[#666779] font-normal tracking-wide">
            {access.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#292A41] tracking-tight">
            {access.title}
          </h2>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <a
            href={siteConfig.links.earlyAccessForm}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#807EF1] to-[#88D8EE] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#807EF1]/30 hover:shadow-2xl hover:shadow-[#807EF1]/45 hover:scale-[1.03] active:scale-95 transition-all duration-200"
          >
            <span>{access.cta}</span>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
