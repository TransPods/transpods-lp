import { landing } from "@/content/landing";
import { Sparkles } from "lucide-react";

export function About() {
  const { about } = landing;

  return (
    <section id="about" className="relative w-full py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl flex flex-col items-center text-center gap-12">
        
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-emerald-300 backdrop-blur-md">
          <Sparkles className="h-4 w-4" />
          <span className="font-semibold uppercase tracking-wider">{about.title}</span>
        </div>

        {/* Description */}
        <div className="space-y-8">
          {about.description.split("\n\n").map((paragraph, index) => (
            <p 
              key={index} 
              className={`text-xl md:text-3xl font-medium leading-relaxed tracking-tight ${
                index === 0 ? "text-white" : "text-zinc-400"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
      </div>
    </section>
  );
}
