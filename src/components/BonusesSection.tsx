import React from "react";
import { Gift } from "lucide-react";
import { bonusList } from "../data";

const bonusIcons = ["🏓", "📚", "🛡️", "⚡", "🏆", "📝"];

export const BonusesSection: React.FC = () => {
  return (
    <section
      id="bonuses-section"
      className="relative bg-[#F8FAFC] py-10 sm:py-14 lg:py-18 px-3.5 sm:px-6 border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-bold text-xs uppercase tracking-wider mb-2.5 shadow-xs">
            <Gift className="w-3.5 h-3.5 text-emerald-600" />
            Válido Apenas no Plano Completo
          </span>
          <h2 className="text-[#0A192F] font-black text-2xl sm:text-3xl md:text-4xl tracking-tight uppercase">
            <span>LEVE TAMBÉM ESTES</span>{" "}
            <span className="text-[#0066CC]">3 BÔNUS EXCLUSIVOS</span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Materiais complementares prontos para enriquecer ainda mais seus treinamentos:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {bonusList.map((bonus, idx) => (
            <div
              key={bonus.n}
              className="group rounded-2xl bg-white shadow-xs overflow-hidden flex flex-col border border-slate-200/90 hover:-translate-y-1 hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              {/* Card Top Banner */}
              <div className="bg-[#0066CC] py-2 px-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">
                  <Gift className="w-3.5 h-3.5" />
                  BÔNUS {String(bonus.n).padStart(2, "0")}
                </span>
              </div>

              {/* Graphic Mockup Header */}
              {bonus.image ? (
                <div className="py-5 px-4 sm:py-7 sm:px-6 bg-slate-50/80 border-b border-slate-100 flex items-center justify-center min-h-[220px] sm:min-h-[260px] md:min-h-[280px] overflow-hidden">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-48 sm:h-56 md:h-64 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center text-xl shadow-inner">
                    {bonusIcons[idx % bonusIcons.length]}
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-5 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-[#0A192F] font-black text-base leading-snug uppercase">
                    {bonus.title}
                  </h3>
                  <p className="mt-2 text-slate-600 font-normal text-[13.5px] sm:text-sm leading-relaxed">
                    {bonus.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-center gap-2 text-xs sm:text-sm">
                  <span className="text-slate-400 font-medium">DE</span>
                  <span className="text-rose-500 line-through font-semibold">
                    {bonus.originalPrice}
                  </span>
                  <span className="text-slate-300">→</span>
                  <span className="bg-emerald-600 text-white font-black px-3 py-1 rounded-full text-xs tracking-wider uppercase shadow-xs">
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
