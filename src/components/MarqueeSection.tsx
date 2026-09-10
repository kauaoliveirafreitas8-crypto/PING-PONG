import React, { useState } from "react";

interface CarouselItem {
  id: string;
  src: string;
  fallback: string;
  alt: string;
}

// 10 fichas fornecidas organizadas em ordem não-sequencial / aleatória
const carouselItems: CarouselItem[] = [
  {
    id: "ficha-26",
    src: "/assets/carrossel/26.webp",
    fallback: "https://i.ibb.co/7JHcf0CB/26.webp",
    alt: "Ficha Visual de Treino #26 - Tênis de Mesa",
  },
  {
    id: "ficha-31",
    src: "/assets/carrossel/31.webp",
    fallback: "https://i.ibb.co/SXBSvrdF/31.webp",
    alt: "Ficha Visual de Treino #31 - Tênis de Mesa",
  },
  {
    id: "ficha-22",
    src: "/assets/carrossel/22.webp",
    fallback: "https://i.ibb.co/Sw14c4KJ/22.webp",
    alt: "Ficha Visual de Treino #22 - Tênis de Mesa",
  },
  {
    id: "ficha-28",
    src: "/assets/carrossel/28.webp",
    fallback: "https://i.ibb.co/ZRV2XDsh/28.webp",
    alt: "Ficha Visual de Treino #28 - Tênis de Mesa",
  },
  {
    id: "ficha-24",
    src: "/assets/carrossel/24.webp",
    fallback: "https://i.ibb.co/Mxf0sRPt/24.webp",
    alt: "Ficha Visual de Treino #24 - Tênis de Mesa",
  },
  {
    id: "ficha-33",
    src: "/assets/carrossel/33.webp",
    fallback: "https://i.ibb.co/WWn92kFf/33.webp",
    alt: "Ficha Visual de Treino #33 - Tênis de Mesa",
  },
  {
    id: "ficha-21",
    src: "/assets/carrossel/21.webp",
    fallback: "https://i.ibb.co/mC7tV4mF/21.webp",
    alt: "Ficha Visual de Treino #21 - Tênis de Mesa",
  },
  {
    id: "ficha-27",
    src: "/assets/carrossel/27.webp",
    fallback: "https://i.ibb.co/vNdNmg1/27.webp",
    alt: "Ficha Visual de Treino #27 - Tênis de Mesa",
  },
  {
    id: "ficha-25",
    src: "/assets/carrossel/25.webp",
    fallback: "https://i.ibb.co/FkCGLdy8/25.webp",
    alt: "Ficha Visual de Treino #25 - Tênis de Mesa",
  },
  {
    id: "ficha-23",
    src: "/assets/carrossel/23.webp",
    fallback: "https://i.ibb.co/Rp5xMqkP/23.webp",
    alt: "Ficha Visual de Treino #23 - Tênis de Mesa",
  },
];

export const MarqueeSection: React.FC = () => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <section
      id="marquee-section"
      className="relative bg-[#F8FAFC] py-8 sm:py-12 lg:py-14 overflow-hidden border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200/80 font-bold text-xs uppercase tracking-wider mb-2.5 shadow-xs">
          Amostra das Aulas Prontas
        </span>
        <h2 className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1.5 text-[#0A192F] font-black tracking-tight text-xl sm:text-3xl lg:text-4xl uppercase">
          <span>VEJA AS FICHAS DE TREINOS</span>
          <span className="text-[#0066CC]">POR DENTRO</span>
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
          Passe o mouse ou toque para pausar e analisar a organização visual de cada aula.
        </p>
      </div>

      {/* Visual Sheets Carousel */}
      <div
        className="relative mt-6 sm:mt-8 w-full overflow-hidden"
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)}
      >
        {/* Soft edge blur masks for clean infinite scroll look */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <div
          className={`flex w-max gap-4 sm:gap-6 animate-marquee py-3 select-none ${
            isTouched ? "pause-marquee" : ""
          }`}
        >
          {carouselItems.concat(carouselItems).map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative shrink-0 w-[260px] sm:w-[290px] md:w-[330px] transition-all duration-300 hover:-translate-y-1 group"
            >
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
                className="w-full h-auto object-cover rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 select-none block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
