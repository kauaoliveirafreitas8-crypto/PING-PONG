import React from "react";
import { benefitsList } from "../data";

export const TargetAudienceSection: React.FC = () => {
  return (
    <section
      id="target-audience-section"
      className="relative bg-white py-12 lg:py-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-[#0066CC]/10 text-[#0066CC] font-black text-xs uppercase tracking-wider mb-2">
            APLICAÇÃO PRÁTICA NO DIA A DIA
          </span>
          <h2 className="font-black tracking-tight text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] uppercase">
            <span className="block">IDEAL PARA VOCÊ</span>
            <span className="block text-[#0066CC]">QUE DESEJA:</span>
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {benefitsList.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:border-[#0066CC] hover:shadow-md transition-all flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0066CC]/10 flex items-center justify-center text-[#0066CC]">
                <Icon className="w-5 h-5" strokeWidth={2.4} />
              </div>
              <h3 className="mt-4 text-[#0A192F] font-black text-base leading-snug">
                {title}
              </h3>
              <p className="mt-2 text-slate-600 font-normal text-xs sm:text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
