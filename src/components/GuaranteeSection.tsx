import React from "react";
import { assets } from "../data";

export const GuaranteeSection: React.FC = () => {
  return (
    <section
      id="guarantee-section"
      className="relative bg-[#F8FAFC] py-10 lg:py-14 px-4 sm:px-6 border-t border-slate-200"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <img
            loading="lazy"
            decoding="async"
            src={assets.guaranteeBadge}
            alt="Selo de garantia de 7 dias"
            width={208}
            height={208}
            className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-sm"
          />
          <div className="text-center md:text-left">
            <h3 className="font-black text-xl md:text-2xl text-[#0A192F] leading-tight">
              Garantia Incondicional
              <span className="block text-[#0066CC]">7 Dias</span>
            </h3>
            <p className="mt-2.5 text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
              Você terá 7 dias para acessar e avaliar o material. Se dentro desse período você decidir que o produto não é adequado para sua necessidade, poderá solicitar o reembolso conforme as condições da oferta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
