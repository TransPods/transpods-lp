import { landing } from "@/content/landing";
import { Languages, Workflow, BookOpenText, StickyNote, Blocks } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Translation: <Languages className="w-6 h-6" />,
  Diagram: <Workflow className="w-6 h-6" />,
  Summary: <BookOpenText className="w-6 h-6" />,
  Memo: <StickyNote className="w-6 h-6" />,
};

export function Services() {
  const { services } = landing;

  return (
    <section id="services" className="relative w-full py-24 px-6 flex flex-col items-center justify-center">
      
      <div className="max-w-5xl w-full flex flex-col gap-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md">
            <Blocks className="h-4 w-4" />
            <span className="font-semibold uppercase tracking-wider">{services.title}</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {services.items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.title}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:bg-zinc-800/80 hover:border-white/20"
              >
                {/* Background glow for the card on hover */}
                <div className={`absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 ${isEven ? 'bg-gradient-to-br from-emerald-500/20 to-transparent' : 'bg-gradient-to-bl from-cyan-500/20 to-transparent'} blur-xl`} />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl ${isEven ? 'bg-emerald-500/20 text-emerald-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
                    {iconMap[item.icon] || <Blocks className="w-6 h-6" />}
                  </div>
                  <span className="text-4xl font-black text-white/5 uppercase tracking-widest pointer-events-none select-none">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative z-10 mt-4">
                  <div className="flex items-end gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest pb-1">{item.englishTitle}</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
