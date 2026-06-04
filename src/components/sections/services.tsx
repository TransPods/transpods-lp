import { landing } from "@/content/landing";
import { Audiowide } from "next/font/google";
import { ServicesCarousel } from "./services-carousel";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

export function Services() {
  const { services } = landing;

  return (
    <section id="services" className="relative w-full py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Glows */}
      <div 
        className="absolute top-[10%] -left-[60%] md:-left-[50%] lg:-left-[30%] w-[120%] md:w-[100%] lg:w-[60%] aspect-square opacity-40 pointer-events-none z-0 mix-blend-screen"
        style={{ WebkitMaskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)', maskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' }}
      >
        <img src="/glow.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div 
        className="absolute bottom-[20%] -right-[60%] md:-right-[50%] lg:-right-[30%] w-[120%] md:w-[100%] lg:w-[60%] aspect-square opacity-40 pointer-events-none z-0 mix-blend-screen"
        style={{ WebkitMaskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)', maskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' }}
      >
        <img src="/glow.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className={`text-[24px] lg:text-[64px] font-semibold tracking-wider text-white underline underline-offset-[12px] decoration-1 ${audiowide.className}`}>
            {services.title}
          </h2>
        </div>

        {/* Video Embed */}
        <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-zinc-900/50">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/J-U6t8PeKJI" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>

        {/* Services Carousel */}
        <ServicesCarousel items={services.items} />
      </div>
    </section>
  );
}
