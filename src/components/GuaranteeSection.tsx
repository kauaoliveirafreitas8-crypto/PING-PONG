import React from "react";
import { assets } from "../data";

export const GuaranteeSection: React.FC = () => {
  return (
    <section
      id="guarantee-section"
      className="relative bg-white py-10 sm:py-14 lg:py-16 px-3.5 sm:px-6 border-b border-slate-200/80"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-8 md:gap-10 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-xs">
          <img
            loading="lazy"
            decoding="async"
            src={assets.guaranteeBadge}
            alt="Selo de garantia de 7 dias"
            width={208}
            height={208}
            className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain drop-shadow-xs"
          />
          <div className="text-center md:text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
              Risco Zero
            </span>
            <h3 className="font-black text-xl sm:text-2xl md:text-3xl text-[#0A192F] leading-tight">
              Garantia Incondicional <span className="text-[#0066CC]">de 7 Dias</span>
            </h3>
            <p className="mt-2 text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
              Você terá 7 dias corridos para acessar, baixar e avaliar todas as fichas. Se você achar que o material não facilitou seus treinos, basta solicitar o reembolso que devolveremos 100% do seu dinheiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
