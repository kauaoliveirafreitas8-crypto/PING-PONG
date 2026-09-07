import React from "react";
import { assets } from "../data";

export const GuaranteeSection: React.FC = () => {
  return (
    <section
      id="guarantee-section"
      className="relative bg-[#F8FAFC] py-8 sm:py-10 lg:py-14 px-3.5 sm:px-6 border-t border-slate-200"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-10 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-slate-200 shadow-xs">
          <img
            loading="lazy"
            decoding="async"
            src={assets.guaranteeBadge}
            alt="Selo de garantia de 7 dias"
            width={208}
            height={208}
            className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain drop-shadow-xs"
          />
          <div className="text-center md:text-left">
            <h3 className="font-black text-xl sm:text-2xl md:text-3xl text-[#0A192F] leading-tight">
              <span className="block">Garantia Incondicional</span>
              <span className="block text-[#0066CC]">de 7 Dias</span>
            </h3>
            <p className="mt-2 text-slate-600 font-normal text-[13.5px] sm:text-base leading-relaxed">
              Você terá 7 dias para acessar e avaliar o material. Se dentro desse período você decidir que o produto não é adequado para sua necessidade, poderá solicitar o reembolso conforme as condições da oferta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
