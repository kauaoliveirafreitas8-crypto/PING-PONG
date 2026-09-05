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
      className="relative bg-white py-10 lg:py-14 px-4 sm:px-6"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center font-black text-2xl sm:text-3xl md:text-4xl text-[#0A192F] tracking-tight uppercase">
          PERGUNTAS FREQUENTES
        </h2>
        <p className="mt-2 text-center text-slate-600 font-bold text-xs sm:text-sm uppercase">
          TIRE SUAS DÚVIDAS ANTES DE ADQUIRIR
        </p>

        <div className="mt-6 space-y-2.5">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-[#F8FAFC] px-5 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full py-4 text-left font-semibold text-[#0A192F] hover:no-underline flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0066CC]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-5 pt-1 text-slate-600 leading-relaxed text-sm sm:text-base whitespace-pre-line border-t border-slate-200/60 mt-1">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button below FAQ */}
        <div className="mt-10 sm:mt-12 text-center max-w-xl mx-auto">
          <a
            id="faq-cta-btn"
            href="#mais-completo"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wider text-sm sm:text-base shadow-[0_6px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] active:translate-y-[4px] active:shadow-[0_2px_0_0_#004F9F] transition-all cursor-pointer animate-cta-pulse"
          >
            <span>QUERO O PLANO COMPLETO + BÔNUS</span>
            <ArrowRight className="w-5 h-5 shrink-0" strokeWidth={3} />
          </a>
          <p className="mt-3 text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
            🔒 Acesso Imediato no E-mail • 7 Dias de Garantia
          </p>
        </div>
      </div>
    </section>
  );
};
