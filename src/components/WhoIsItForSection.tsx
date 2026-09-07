import React from "react";
import { ArrowRight } from "lucide-react";
import { whoIsItForCards, notForYouPoints } from "../data";

interface WhoIsItForSectionProps {
  onCtaClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const WhoIsItForSection: React.FC<WhoIsItForSectionProps> = ({
  onCtaClick,
}) => {
  return (
    <section
      id="para-quem-e"
      className="relative bg-[#F8FAFC] py-10 sm:py-12 lg:py-16 px-3.5 sm:px-6 border-t border-b border-slate-200"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-black text-[#0A192F] tracking-tight text-xl sm:text-3xl lg:text-4xl leading-tight uppercase">
            <span className="block">PARA QUEM É</span>
            <span className="block text-[#0066CC]">ESTE MATERIAL?</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 font-medium text-xs sm:text-base lg:text-lg leading-relaxed">
            Este material foi criado para:
          </p>
        </div>

        {/* 5 Cards */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {whoIsItForCards.map((card, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 shadow-xs hover:shadow-md hover:border-[#0066CC] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-start ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center text-lg sm:text-xl shrink-0">
                  {card.icon}
                </span>
                <h3 className="text-[#0A192F] font-black text-sm sm:text-base leading-snug uppercase">
                  {card.title}
                </h3>
              </div>
              <p className="mt-2.5 sm:mt-3 text-slate-600 font-normal text-[13.5px] sm:text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Negative Warning Card with ATENÇÃO on top outside */}
        <div className="mt-8 sm:mt-12 max-w-2xl mx-auto flex flex-col items-center">
          <div className="z-10 -mb-3.5 inline-flex items-center gap-1.5 px-4 sm:px-5 py-1 sm:py-1.5 rounded-full bg-red-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md border-2 border-white">
            <span>⚠️ ATENÇÃO</span>
          </div>

          <div className="w-full rounded-2xl bg-white border-2 border-red-500 pt-6 sm:pt-7 pb-4 sm:pb-5 px-3.5 sm:px-6 shadow-sm relative overflow-hidden">
            <div className="text-center mb-3">
              <h3 className="font-black text-red-700 text-sm sm:text-base tracking-wide uppercase">
                NÃO É PARA VOCÊ SE...
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {notForYouPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-xl bg-red-50/80 border border-red-100 text-slate-700 text-[13px] sm:text-[14px] font-medium leading-snug"
                >
                  <span className="w-4 h-4 rounded bg-red-200 text-red-800 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA in section */}
        <div className="mt-7 sm:mt-10 text-center max-w-3xl mx-auto">
          <p className="text-slate-900 font-black text-sm sm:text-lg lg:text-xl leading-relaxed uppercase">
            MAS SE VOCÊ QUER ABRIR UMA FICHA, ORGANIZAR OS ALUNOS E SABER EXATAMENTE O QUE APLICAR, ESTE MATERIAL FOI FEITO PARA VOCÊ.
          </p>
          <div className="mt-5 sm:mt-6 flex justify-center">
            <a
              id="who-is-it-for-cta-btn"
              href="#mais-completo"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-6 sm:px-12 py-4.5 sm:py-5 min-h-[58px] rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wider text-sm sm:text-base shadow-[0_6px_0_0_#004F9F] sm:shadow-[0_7px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_5px_0_0_#004F9F] hover:bg-[#0055B3] active:translate-y-[3px] active:shadow-[0_3px_0_0_#004F9F] transition-all cursor-pointer animate-cta-pulse"
            >
              <span>QUERO ACESSAR AS +100 FICHAS</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
