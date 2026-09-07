import React from "react";
import { benefitsList } from "../data";

export const TargetAudienceSection: React.FC = () => {
  return (
    <section
      id="target-audience-section"
      className="relative bg-white py-10 sm:py-12 lg:py-16 px-3.5 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#0066CC]/10 text-[#0066CC] font-black text-xs sm:text-sm uppercase tracking-wider mb-2">
            APLICAÇÃO PRÁTICA NO DIA A DIA
          </span>
          <h2 className="font-black tracking-tight text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] uppercase">
            <span className="block">IDEAL PARA VOCÊ</span>
            <span className="block text-[#0066CC]">QUE DESEJA:</span>
          </h2>
        </div>

        <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {benefitsList.map(({ emoji, title, desc }, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-4 sm:p-6 shadow-xs hover:border-[#0066CC] hover:shadow-md transition-all flex flex-col justify-start"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-xl sm:text-2xl shadow-xs">
                <span>{emoji}</span>
              </div>
              <h3 className="mt-3 sm:mt-4 text-[#0A192F] font-black text-sm sm:text-base leading-snug">
                {title}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-slate-600 font-normal text-[13.5px] sm:text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
