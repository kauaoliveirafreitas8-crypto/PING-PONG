import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqList } from "../data";

export const FaqSection: React.FC = () => {
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
      </div>
    </section>
  );
};
