import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { faqList } from "../data";

interface FaqSectionProps {
  onCtaClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      className="relative bg-[#F8FAFC] py-10 sm:py-14 lg:py-18 px-3.5 sm:px-6 border-b border-slate-200/80"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider mb-2.5">
            Dúvidas Frequentes
          </span>
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-[#0A192F] tracking-tight uppercase">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="mt-2 text-slate-600 font-normal text-sm sm:text-base">
            Respostas rápidas para as principais dúvidas sobre o material:
          </p>
        </div>

        <div className="space-y-3">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-300 bg-blue-50/20 shadow-xs"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full py-4 px-4 sm:px-6 text-left font-bold text-[#0A192F] hover:no-underline flex items-center justify-between gap-3 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base md:text-lg leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0066CC]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 pt-1 text-slate-600 leading-relaxed text-sm sm:text-base whitespace-pre-line border-t border-slate-100">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button below FAQ */}
        <div className="mt-8 sm:mt-12 text-center max-w-xl mx-auto">
          <a
            id="faq-cta-btn"
            href="#mais-completo"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-7 sm:px-10 py-4.5 sm:py-5 min-h-[58px] rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wider text-sm sm:text-base shadow-[0_6px_0_0_#004F9F] sm:shadow-[0_7px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] active:translate-y-[3px] active:shadow-[0_2px_0_0_#004F9F] transition-all cursor-pointer animate-cta-pulse"
          >
            <span>QUERO ACESSAR AS +100 FICHAS</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" strokeWidth={3} />
          </a>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
            Acesso Imediato no E-mail • 7 Dias de Garantia
          </p>
        </div>
      </div>
    </section>
  );
};
