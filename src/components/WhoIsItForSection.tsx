import React from "react";
import { ArrowRight } from "lucide-react";
import { whoIsItForCards } from "../data";

interface WhoIsItForSectionProps {
  onCtaClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const WhoIsItForSection: React.FC<WhoIsItForSectionProps> = ({
  onCtaClick,
}) => {
  return (
    <section
      id="para-quem-e"
      className="relative bg-white py-10 sm:py-14 lg:py-18 px-3.5 sm:px-6 border-b border-slate-200/80"
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

        {/* Cards */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 max-w-4xl mx-auto">
          {whoIsItForCards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#0066CC] hover:bg-white hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-start"
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

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12 flex justify-center">
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
    </section>
  );
};
