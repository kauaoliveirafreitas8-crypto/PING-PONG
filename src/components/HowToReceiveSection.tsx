import React from "react";
import { Mail, Printer, BookOpen, ArrowDown } from "lucide-react";

export const HowToReceiveSection: React.FC = () => {
  return (
    <section
      id="como-receber"
      className="relative bg-[#F8FAFC] py-12 sm:py-16 px-4 sm:px-6 border-t border-slate-200"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-[#0066CC] font-black text-xs uppercase tracking-wider mb-3">
            ACESSO IMEDIATO
          </span>
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-[#0A192F] uppercase tracking-tight">
            COMO VOU RECEBER O MATERIAL?
          </h2>
        </div>

        {/* Steps Flow (Vertical) */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-md mx-auto">
          {/* Step 1 */}
          <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col items-center text-center hover:border-[#0066CC]/30 transition-all">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center mb-3 shadow-inner">
              <Mail className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />
            </div>
            <p className="font-semibold text-sm sm:text-base text-slate-700">
              Chega no seu e-mail
            </p>
          </div>

          {/* Connection Arrow */}
          <div className="text-[#0066CC] py-0.5 flex items-center justify-center" aria-hidden="true">
            <ArrowDown className="w-5 h-5 stroke-[2.2]" />
          </div>

          {/* Step 2 */}
          <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col items-center text-center hover:border-[#0066CC]/30 transition-all">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center mb-3 shadow-inner">
              <Printer className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />
            </div>
            <p className="font-semibold text-sm sm:text-base text-slate-700">
              Você imprime
            </p>
          </div>

          {/* Connection Arrow */}
          <div className="text-[#0066CC] py-0.5 flex items-center justify-center" aria-hidden="true">
            <ArrowDown className="w-5 h-5 stroke-[2.2]" />
          </div>

          {/* Step 3 */}
          <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col items-center text-center hover:border-[#0066CC]/30 transition-all">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center mb-3 shadow-inner">
              <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />
            </div>
            <p className="font-semibold text-sm sm:text-base text-slate-700">
              Você estuda os treinos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
