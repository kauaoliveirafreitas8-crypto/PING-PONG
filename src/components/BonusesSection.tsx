import React from "react";
import { Gift } from "lucide-react";
import { bonusList, totalBonusValue } from "../data";

const bonusIcons = ["🏓", "📚", "🛡️", "⚡", "🏆", "📝"];

export const BonusesSection: React.FC = () => {
  return (
    <section
      id="bonuses-section"
      className="relative bg-[#081426] py-10 sm:py-12 lg:py-16 px-3.5 sm:px-6 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-slate-200 font-bold text-base sm:text-xl md:text-2xl uppercase">
            <span className="block">VOCÊ TAMBÉM RECEBE ESTES</span>
            <span className="block text-[#38BDF8]">6 BÔNUS EXCLUSIVOS:</span>
          </p>
          <div className="mt-1.5 sm:mt-2 text-xl sm:text-3xl animate-bounce" aria-hidden="true">
            👇
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {bonusList.map((bonus, idx) => (
            <div
              key={bonus.n}
              className="group rounded-2xl bg-white shadow-lg overflow-hidden flex flex-col border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
            >
              {/* Card Top Banner */}
              <div className="bg-[#0066CC] py-1.5 sm:py-2 px-3 sm:px-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">
                  <Gift className="w-3.5 h-3.5" />
                  BÔNUS {String(bonus.n).padStart(2, "0")}
                </span>
              </div>

              {/* Graphic Mockup Header */}
              {bonus.image ? (
                <div className="py-5 px-4 sm:py-7 sm:px-6 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0]/60 border-b border-slate-100 flex items-center justify-center min-h-[240px] sm:min-h-[290px] md:min-h-[320px] overflow-hidden">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-56 sm:h-64 md:h-72 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="py-3 sm:py-4 bg-[#F8FAFC] border-b border-slate-100 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center text-xl sm:text-2xl shadow-inner">
                    {bonusIcons[idx % bonusIcons.length]}
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-4 sm:p-5 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-[#0A192F] font-black text-sm sm:text-base leading-snug uppercase">
                    {bonus.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-slate-600 font-normal text-[13.5px] sm:text-sm leading-relaxed">
                    {bonus.desc}
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-xs sm:text-sm">
                  <span className="text-slate-500 font-semibold">DE</span>
                  <span className="text-rose-500 line-through font-bold">
                    {bonus.originalPrice}
                  </span>
                  <span className="text-slate-400 font-bold">→</span>
                  <span className="bg-[#16A34A] text-white font-black px-3 py-1 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-xs">
                    GRÁTIS
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Bonuses Value Highlight Card - Compacto, sofisticado e visualmente refinado */}
        <div className="mt-6 sm:mt-10 flex justify-center">
          <div className="w-full max-w-md rounded-2xl bg-gradient-to-r from-[#0C1E38] via-[#0E274D] to-[#0C1E38] border-2 border-[#38BDF8]/45 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.3)] p-3.5 sm:px-6 sm:py-3.5 flex items-center justify-between gap-3 relative overflow-hidden">
            {/* Ambient subtle light accents */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-sky-500/15 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-emerald-500/15 rounded-full blur-xl pointer-events-none" />

            <div className="text-left relative z-10">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 block leading-tight">
                VALOR DOS 6 BÔNUS SOMADOS:
              </span>
              <span className="text-xl sm:text-3xl font-black text-rose-400 line-through tracking-tight">
                {totalBonusValue}
              </span>
            </div>

            <div className="relative z-10 shrink-0">
              <div className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-black text-xs sm:text-base uppercase tracking-wider shadow-[0_4px_14px_rgba(16,185,129,0.35)] ring-1 ring-emerald-300/40">
                100% GRATUITO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
