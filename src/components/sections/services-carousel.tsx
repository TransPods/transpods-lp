"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceItem {
  title: string;
  englishTitle: string;
  description: string;
  icon: string;
}

const imageMap: Record<string, string> = {
  Translation: "/services-translation.png",
  Diagram: "/services-diagram.png",
  Summary: "/services-summary.png",
  Memo: "/services-memo.png",
};

export function ServicesCarousel({ items }: { items: readonly ServiceItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  // Autoplay every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [items.length]);

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    const half = Math.floor(items.length / 2);
    if (offset > half) {
      offset -= items.length;
    } else if (offset < -half) {
      offset += items.length;
    }
    return offset;
  };

  return (
    <div className="flex flex-col items-center w-full relative h-[550px] md:h-[600px] lg:h-[650px] max-w-6xl mx-auto mt-4 lg:mt-10">
      
      {/* Gradient definition for icons */}
      <svg width="0" height="0" className="absolute">
        <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#54FF62" offset="0%" />
          <stop stopColor="#14A1F0" offset="100%" />
        </linearGradient>
      </svg>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 md:left-4 lg:-left-4 z-30 top-[45%] -translate-y-1/2 p-2 transition-transform hover:scale-110 hover:opacity-80"
      >
        <ChevronLeft className="w-12 h-12 lg:w-16 lg:h-16" stroke="url(#arrow-gradient)" strokeWidth={1.5} />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-0 md:right-4 lg:-right-4 z-30 top-[45%] -translate-y-1/2 p-2 transition-transform hover:scale-110 hover:opacity-80"
      >
        <ChevronRight className="w-12 h-12 lg:w-16 lg:h-16" stroke="url(#arrow-gradient)" strokeWidth={1.5} />
      </button>

      {/* Carousel Container */}
      <div className="relative w-full h-[450px] md:h-[500px] lg:h-[550px] flex justify-center items-center overflow-hidden lg:overflow-visible px-4 lg:px-10">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const offset = getOffset(index);
          const isCenter = offset === 0;
          
          // Positioning logic
          let transformClass = "";
          let zIndexClass = "z-0";
          let opacityClass = "opacity-0";

          if (isCenter) {
            transformClass = "translate-x-0 scale-100";
            zIndexClass = "z-20";
            opacityClass = "opacity-100";
          } else if (offset === -1) {
            transformClass = "-translate-x-[60%] lg:-translate-x-[65%] scale-[0.8]";
            zIndexClass = "z-10";
            opacityClass = "opacity-40 hover:opacity-70 cursor-pointer";
          } else if (offset === 1) {
            transformClass = "translate-x-[60%] lg:translate-x-[65%] scale-[0.8]";
            zIndexClass = "z-10";
            opacityClass = "opacity-40 hover:opacity-70 cursor-pointer";
          } else {
            // For other items (if length > 3), hide them at the extreme ends
            transformClass = offset > 0 ? "translate-x-[130%] scale-[0.6]" : "-translate-x-[130%] scale-[0.6]";
            zIndexClass = "z-0";
            opacityClass = "opacity-0 pointer-events-none";
          }

          return (
            <div 
              key={item.title}
              onClick={() => {
                if (!isCenter) setActiveIndex(index);
              }}
              className={`absolute w-[230px] sm:w-[280px] md:w-[400px] xl:w-[480px] transition-all duration-500 ease-out origin-center ${transformClass} ${zIndexClass} ${opacityClass}`}
            >
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 bg-zinc-900/90 p-6 md:p-8 xl:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all h-[340px] sm:h-[360px] md:h-[480px] lg:h-[500px]">
                {/* Background glow applied when item is in center (active) */}
                <div className={`absolute -inset-px rounded-[2rem] lg:rounded-[2.5rem] transition duration-500 ${isCenter ? 'opacity-60' : 'opacity-0'} bg-gradient-to-bl from-cyan-500/20 to-transparent blur-xl`} />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">{item.title}</h3>
                  <span className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3 lg:mb-6">{item.englishTitle}</span>
                  <p className="text-zinc-300 leading-relaxed font-medium text-xs md:text-sm px-2">
                    {item.description.split('、').map((part, i, arr) => (
                      <span key={i}>
                        {part}{i < arr.length - 1 && '、'}
                        {i < arr.length - 1 && <br className="hidden lg:block" />}
                      </span>
                    ))}
                  </p>
                </div>
                
                {imageMap[item.englishTitle] && (
                  <div className="relative w-[75%] md:w-[70%] lg:w-[65%] mx-auto mt-auto rounded-xl overflow-hidden shadow-2xl z-10 border border-white/10 bg-black/20 shrink-0">
                    <img src={imageMap[item.englishTitle]} alt={item.title} className="w-full h-auto object-contain object-top" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center gap-3 mt-4 lg:mt-8 relative z-30">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? "bg-emerald-400 w-8" 
                : "bg-white/20 hover:bg-white/40 w-2.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
