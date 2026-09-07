import React from "react";
import { Check, Gift } from "lucide-react";
import {
  assets,
  checkoutLinks,
  basicPlanFeatures,
  completePlanFeatures,
} from "../data";

export const PricingSection: React.FC = () => {
  return (
    <section id="planos" className="relative bg-white py-10 sm:py-12 lg:py-16 px-3.5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-black text-xl sm:text-3xl md:text-4xl text-[#0A192F] tracking-tight uppercase">
          ESCOLHA SEU PLANO E{" "}
          <span className="text-[#0066CC]">COMECE AGORA</span>
        </h2>

        <div className="mt-5 sm:mt-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#0066CC] to-[#0284C7] text-white font-black text-center py-2.5 px-3.5 sm:py-3 sm:px-5 shadow-xs uppercase tracking-wide text-[11px] sm:text-sm leading-snug">
          ⏰ 🔥 OFERTA ESPECIAL COM VALOR PROMOCIONAL POR TEMPO LIMITADO!
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 items-stretch">
          {/* Basic Plan Card */}
          <div className="rounded-2xl sm:rounded-3xl bg-white border-2 border-slate-200 p-4 sm:p-6 md:p-10 shadow-xs text-center hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <h3 className="font-black text-xl sm:text-2xl md:text-3xl text-[#0A192F] uppercase">
                PLANO BÁSICO
              </h3>

              <div className="mt-4 sm:mt-6 -mx-2 sm:-mx-4 md:-mx-6 flex justify-center">
                <div className="relative w-full max-w-xl flex items-center justify-center">
                  {/* Brilho sutil azul meio escuro quase sumindo ao redor do mockup */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-[#002B5C]/12 blur-2xl pointer-events-none"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src={assets.basicPlanMockup}
                    alt="Plano Básico - +100 Fichas Visuais"
                    width={800}
                    height={600}
                    className="relative z-10 w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                      filter:
                        "drop-shadow(0 14px 28px rgba(0, 37, 82, 0.28)) drop-shadow(0 0 22px rgba(0, 43, 92, 0.18))",
                    }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== assets.basicPlanMockupFallback) {
                        target.src = assets.basicPlanMockupFallback;
                      }
                    }}
                  />
                </div>
              </div>

              <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5 text-left max-w-sm mx-auto">
                {basicPlanFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#16A34A] flex-shrink-0 mt-0.5" strokeWidth={2.8} />
                    <span className="text-[13.5px] sm:text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
              <p className="text-rose-500 line-through text-xs sm:text-base font-bold uppercase">
                DE R$ 47,90 POR:
              </p>
              <div className="mt-1 leading-none">
                <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0066CC] tracking-tight">
                  R$ 27,90
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-bold uppercase">
                PAGAMENTO ÚNICO • ACESSO IMEDIATO
              </p>

              <a
                id="basic-plan-cta"
                href={checkoutLinks.basicPlan}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 sm:mt-6 inline-flex w-full items-center justify-center gap-2 px-6 sm:px-8 py-4.5 sm:py-5 min-h-[58px] rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide text-sm sm:text-base shadow-[0_6px_0_0_#004F9F] sm:shadow-[0_7px_0_0_#004F9F] active:scale-[0.98] active:translate-y-[3px] active:shadow-[0_2px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer"
              >
                QUERO O PLANO BÁSICO →
              </a>
            </div>
          </div>

          {/* Complete Plan Card */}
          <div
            id="plano-completo"
            className="relative rounded-2xl sm:rounded-3xl bg-white border-[3px] border-[#0066CC] p-4 sm:p-6 md:p-10 shadow-xl text-center lg:scale-[1.02] ring-4 ring-[#0066CC]/10 flex flex-col justify-between scroll-mt-8"
          >
            <div>
              <div
                id="mais-completo"
                className="-mx-4 sm:-mx-6 md:-mx-10 -mt-4 sm:-mt-6 md:-mt-10 rounded-t-[13px] sm:rounded-t-[20px] bg-[#0066CC] text-white text-center py-3 sm:py-3.5 px-4 font-black uppercase tracking-wide text-sm sm:text-base shadow-sm scroll-mt-6 sm:scroll-mt-8"
              >
                ⭐ MAIS VENDIDO
              </div>

              <div className="mt-5 sm:mt-6">
                <h3 className="font-black text-xl sm:text-2xl md:text-3xl text-[#0A192F] uppercase tracking-tight whitespace-normal sm:whitespace-nowrap">
                  PLANO COMPLETO <span className="text-[#0066CC]">+BÔNUS</span>
                </h3>
                <p className="mt-1 text-[#0066CC] font-bold text-xs sm:text-sm uppercase">
                  +100 FICHAS VISUAIS DE AULAS PRONTAS
                </p>
              </div>

              <div className="mt-4 sm:mt-6 -mx-2 sm:-mx-4 md:-mx-6 flex justify-center">
                <div className="relative w-full max-w-xl flex items-center justify-center">
                  {/* Destaque / Brilho Diferenciado multicamadas */}
                  {/* Camada 1: Aura respiratória azul royal e ciano vibrante */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 m-auto w-[95%] h-[95%] rounded-full animate-aura-breathe blur-2xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(0, 102, 204, 0.42) 0%, rgba(56, 189, 248, 0.3) 38%, rgba(0, 43, 92, 0.16) 65%, transparent 78%)",
                    }}
                  />
                  {/* Camada 2: Toque sutil de brilho dourado dos bônus */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-3 -right-3 w-36 h-36 rounded-full bg-amber-400/20 blur-xl pointer-events-none"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src={assets.completePlanMockup}
                    alt="Plano Completo + Bônus"
                    width={800}
                    height={600}
                    className="relative z-10 w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
                    style={{
                      filter:
                        "drop-shadow(0 16px 32px rgba(0, 35, 80, 0.38)) drop-shadow(0 0 26px rgba(0, 102, 204, 0.52)) drop-shadow(0 0 10px rgba(56, 189, 248, 0.45))",
                    }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== assets.completePlanMockupFallback) {
                        target.src = assets.completePlanMockupFallback;
                      }
                    }}
                  />
                </div>
              </div>

              <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5 text-left max-w-sm mx-auto">
                {completePlanFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-800">
                    {item.isBonus ? (
                      <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#16A34A] flex-shrink-0 mt-0.5" strokeWidth={2.8} />
                    )}
                    <span
                      className={`text-[13.5px] sm:text-sm ${
                        item.isBonus ? "font-bold text-[#0A192F]" : "font-medium"
                      }`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <p className="text-rose-500 line-through text-xs sm:text-base font-bold uppercase">
                  DE R$ 147,00 POR APENAS:
                </p>
                <span className="px-2.5 py-0.5 rounded-full bg-[#16A34A]/10 text-[#15803D] border border-[#16A34A]/25 text-xs font-black uppercase tracking-wide">
                  ECONOMIZE R$ 99,10
                </span>
              </div>
              <div className="mt-1 leading-none">
                <span className="text-5xl sm:text-6xl md:text-7xl font-black text-[#0066CC] tracking-tight">
                  R$ 47,90
                </span>
              </div>

              <p className="mt-2.5 sm:mt-3 font-bold text-[#0A192F] text-xs sm:text-lg uppercase">
                OU PARCELADO NO CARTÃO DE CRÉDITO
              </p>

              <a
                id="complete-plan-cta"
                href={checkoutLinks.completePlan}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 sm:mt-6 inline-flex w-full items-center justify-center gap-2 px-6 sm:px-8 py-4.5 sm:py-5 min-h-[58px] rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide text-sm sm:text-base shadow-[0_6px_0_0_#004F9F] sm:shadow-[0_7px_0_0_#004F9F] active:scale-[0.98] active:translate-y-[3px] active:shadow-[0_2px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer animate-cta-pulse"
              >
                QUERO O PLANO COMPLETO →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
