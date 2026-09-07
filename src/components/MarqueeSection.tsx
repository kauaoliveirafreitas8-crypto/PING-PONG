import React, { useState } from "react";

const OPTIMIZED_IMAGE = "/assets/ficha-carrossel-card.webp";
const FALLBACK_IMAGE = "https://i.ibb.co/rGWNGx0p/29dbe693-43d5-4ca0-8478-16a796ef8285.png";

// 6 items duplicated for seamless 50% infinite translation
const carouselItems = Array.from({ length: 6 }, (_, idx) => ({
  id: idx + 1,
  src: OPTIMIZED_IMAGE,
  fallback: FALLBACK_IMAGE,
  alt: `Ficha Visual de Treino de Tênis de Mesa #${idx + 1}`,
}));

export const MarqueeSection: React.FC = () => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <section
      id="marquee-section"
      className="relative bg-[#F8FAFC] py-8 sm:py-12 lg:py-14 overflow-hidden border-t border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1.5 text-[#0A192F] font-black tracking-tight text-xl sm:text-3xl lg:text-4xl uppercase">
          <span>🏓 VEJA OS TREINOS</span>
          <span className="bg-[#0066CC] text-white px-3 py-0.5 rounded-lg whitespace-nowrap shadow-xs text-lg sm:text-2xl lg:text-3xl">
            POR DENTRO
          </span>
        </h2>
        <p className="mt-2 text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto">
          Passe o mouse ou segure o toque para pausar e analisar os detalhes das fichas de aula.
        </p>
      </div>

      {/* Visual Sheets Carousel */}
      <div
        className="relative mt-6 sm:mt-8 w-full overflow-hidden"
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)}
      >
        {/* Subtle edge fades for smooth entry/exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-10 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-10 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

        <div
          className={`flex w-max gap-3.5 sm:gap-6 animate-marquee py-2 select-none ${
            isTouched ? "pause-marquee" : ""
          }`}
        >
          {carouselItems.concat(carouselItems).map((item, index) => (
            <div
              key={index}
              className="relative shrink-0 w-[200px] sm:w-[260px] md:w-[310px] rounded-2xl border border-slate-200/90 bg-white p-2 sm:p-3 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-100/80">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={310}
                  height={438}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to original image url if local path ever fails
                    const target = e.currentTarget;
                    if (target.src !== item.fallback) {
                      target.src = item.fallback;
                    }
                  }}
                  className="w-full h-auto object-cover rounded-xl select-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
