import React from "react";
import { Gift } from "lucide-react";
import { bonusList } from "../data";

const bonusIcons = ["🏓", "📊", "🛡️", "⚡", "🏆", "📝"];

export const BonusesSection: React.FC = () => {
  return (
    <section
      id="bonuses-section"
      className="relative bg-[#081426] py-12 lg:py-16 px-4 sm:px-6 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase">
            E NÃO PARA POR AÍ...
          </h2>
          <p className="mt-2 text-slate-200 font-bold text-lg sm:text-xl md:text-2xl uppercase">
            <span className="block">VOCÊ TAMBÉM RECEBE ESTES</span>
            <span className="block text-[#38BDF8]">6 BÔNUS EXCLUSIVOS:</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {bonusList.map((bonus, idx) => (
            <div
              key={bonus.n}
              className="rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col border border-slate-200 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Card Top Banner */}
              <div className="bg-[#0066CC] py-2 px-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">
                  <Gift className="w-3.5 h-3.5" />
                  BÔNUS #{bonus.n}
                </span>
              </div>

              {/* Graphic Icon Header */}
              <div className="py-4 bg-[#F8FAFC] border-b border-slate-100 flex items-center justify-center">
                <div className="w-14 h-14 rounded-xl bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center text-2xl shadow-inner">
                  {bonusIcons[idx % bonusIcons.length]}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-[#0A192F] font-black text-sm sm:text-base leading-snug uppercase">
                    {bonus.title}
                  </h3>
                  <p className="mt-2 text-slate-600 font-normal text-xs sm:text-sm leading-relaxed">
                    {bonus.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-xs sm:text-sm">
                  <span className="text-slate-500 font-semibold">DE</span>
                  <span className="text-rose-500 line-through font-bold">
                    {bonus.originalPrice}
                  </span>
                  <span className="text-slate-400 font-bold">→</span>
                  <span className="bg-[#16A34A] text-white font-black px-2.5 py-0.5 rounded-full text-xs tracking-wider uppercase shadow-sm">
                    GRÁTIS
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
