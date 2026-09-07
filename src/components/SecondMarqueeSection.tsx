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
    id: "ficha-16",
    src: "/assets/carrossel-2/16.webp",
    fallback: "https://i.ibb.co/kVvVn9Fp/16.webp",
    alt: "Ficha Visual de Treino #16 - Tênis de Mesa",
  },
  {
    id: "ficha-12",
    src: "/assets/carrossel-2/12.webp",
    fallback: "https://i.ibb.co/tpyVb5VS/12.webp",
    alt: "Ficha Visual de Treino #12 - Tênis de Mesa",
  },
  {
    id: "ficha-19",
    src: "/assets/carrossel-2/19.webp",
    fallback: "https://i.ibb.co/3Y0jpFPg/19.webp",
    alt: "Ficha Visual de Treino #19 - Tênis de Mesa",
  },
  {
    id: "ficha-14",
    src: "/assets/carrossel-2/14.webp",
    fallback: "https://i.ibb.co/23csYWyB/14.webp",
    alt: "Ficha Visual de Treino #14 - Tênis de Mesa",
  },
  {
    id: "ficha-17",
    src: "/assets/carrossel-2/17.webp",
    fallback: "https://i.ibb.co/rRKqwtbz/17.webp",
    alt: "Ficha Visual de Treino #17 - Tênis de Mesa",
  },
  {
    id: "ficha-11",
    src: "/assets/carrossel-2/11.webp",
    fallback: "https://i.ibb.co/67QTCn92/11.webp",
    alt: "Ficha Visual de Treino #11 - Tênis de Mesa",
  },
  {
    id: "ficha-20",
    src: "/assets/carrossel-2/20.webp",
    fallback: "https://i.ibb.co/0jv599L9/20.webp",
    alt: "Ficha Visual de Treino #20 - Tênis de Mesa",
  },
  {
    id: "ficha-13",
    src: "/assets/carrossel-2/13.webp",
    fallback: "https://i.ibb.co/HpV30wWt/13.webp",
    alt: "Ficha Visual de Treino #13 - Tênis de Mesa",
  },
  {
    id: "ficha-18",
    src: "/assets/carrossel-2/18.webp",
    fallback: "https://i.ibb.co/zvFjr5g/18.webp",
    alt: "Ficha Visual de Treino #18 - Tênis de Mesa",
  },
  {
    id: "ficha-15",
    src: "/assets/carrossel-2/15.webp",
    fallback: "https://i.ibb.co/LXn22TT1/15.webp",
    alt: "Ficha Visual de Treino #15 - Tênis de Mesa",
  },
];

export const SecondMarqueeSection: React.FC = () => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <section
      id="carrossel-fichas-adicional"
      aria-label="Carrossel complementar de fichas de treino"
      className="relative bg-white pb-10 sm:pb-14 lg:pb-16 pt-2 sm:pt-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-4 sm:mb-6">
        <p className="text-slate-500 text-sm sm:text-base font-medium">
          Segure com o toque para pausar e analisar os detalhes das fichas de aula.
        </p>
      </div>

      {/* Visual Sheets Carousel - Sem bordas brancas, somente as imagens */}
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)}
      >
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
