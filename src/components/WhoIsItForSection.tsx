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
      className="relative bg-[#F8FAFC] py-12 lg:py-16 px-4 sm:px-6 border-t border-b border-slate-200"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-black text-[#0A192F] tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-tight uppercase">
            <span className="block">PARA QUEM É</span>
            <span className="block text-[#0066CC]">ESTE MATERIAL?</span>
          </h2>
          <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
            Este material foi criado para:
          </p>
        </div>

        {/* 5 Cards */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {whoIsItForCards.map((card, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#0066CC] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-start ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center text-xl shrink-0">
                  {card.icon}
                </span>
                <h3 className="text-[#0A192F] font-black text-sm sm:text-base leading-snug uppercase">
                  {card.title}
                </h3>
              </div>
              <p className="mt-3 text-slate-600 font-normal text-xs sm:text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Compact Negative Warning Card */}
        <div className="mt-8 sm:mt-10 rounded-2xl bg-white border border-rose-200 p-4 sm:p-5 max-w-2xl mx-auto shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-red-500" />
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold text-[11px] uppercase tracking-wider">
              Atenção
            </span>
            <h3 className="font-black text-rose-700 text-sm sm:text-base tracking-wide uppercase">
              NÃO É PARA VOCÊ SE...
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {notForYouPoints.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2 sm:p-2.5 rounded-lg bg-rose-50/70 border border-rose-100 text-slate-700 text-xs sm:text-[13px] font-medium leading-snug"
              >
                <span className="w-4 h-4 rounded bg-rose-200 text-rose-800 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                  ✕
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA in section */}
        <div className="mt-8 sm:mt-10 text-center max-w-3xl mx-auto">
          <p className="text-slate-900 font-black text-base sm:text-lg lg:text-xl leading-relaxed uppercase">
            MAS SE VOCÊ QUER ABRIR UMA FICHA, ORGANIZAR OS ALUNOS E SABER EXATAMENTE O QUE APLICAR, ESTE MATERIAL FOI FEITO PARA VOCÊ.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              id="who-is-it-for-cta-btn"
              href="#planos"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wider text-sm sm:text-base shadow-[0_6px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] active:translate-y-[4px] active:shadow-[0_2px_0_0_#004F9F] transition-all cursor-pointer animate-cta-pulse"
            >
              <span>QUERO ACESSAR AS +100 FICHAS</span>
              <ArrowRight className="w-5 h-5 shrink-0" strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
