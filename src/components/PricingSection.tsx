import React, { useState, useEffect, useRef } from "react";
import { Check, Gift, Clock } from "lucide-react";
import {
  assets,
  checkoutLinks,
  basicPlanFeatures,
  completePlanFeatures,
} from "../data";
import { buildCheckoutUrl } from "../utils/utm";

export const PricingSection: React.FC = () => {
  const [basicUrl, setBasicUrl] = useState(checkoutLinks.basicPlan);
  const [completeUrl, setCompleteUrl] = useState(checkoutLinks.completePlan);
  const [secondsLeft, setSecondsLeft] = useState(17 * 60);
  const [timerStarted, setTimerStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setBasicUrl(buildCheckoutUrl(checkoutLinks.basicPlan));
    setCompleteUrl(buildCheckoutUrl(checkoutLinks.completePlan));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimerStarted(true);
        }
      },
      {
        rootMargin: "350px 0px",
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!timerStarted) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          return 17 * 60; // volta automaticamente aos 17 minutos
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerStarted]);

  const refreshUrls = () => {
    setBasicUrl(buildCheckoutUrl(checkoutLinks.basicPlan));
    setCompleteUrl(buildCheckoutUrl(checkoutLinks.completePlan));
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <section
      ref={sectionRef}
      id="planos"
      className="relative bg-white py-10 sm:py-14 lg:py-18 px-3.5 sm:px-6 border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-[#0A192F] tracking-tight uppercase">
            Escolha seu plano
          </h2>
          <div className="mt-3 sm:mt-3.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 shadow-xs">
            <Clock className="w-4 h-4 text-red-600 animate-pulse shrink-0" />
            <span className="font-extrabold text-xs sm:text-sm uppercase tracking-wide">
              OFERTA EXPIRA EM{" "}
              <span className="font-mono font-black text-red-600 text-sm sm:text-base tracking-wider">
                {formattedTime}
              </span>
            </span>
          </div>
        </div>

        <div className="mt-7 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Basic Plan Card */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 md:p-9 shadow-xs text-center hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider mb-3">
                Essencial
              </div>
              <h3 className="font-black text-xl sm:text-2xl md:text-3xl text-[#0A192F] uppercase">
                PLANO BÁSICO
              </h3>

              <div className="mt-4 sm:mt-5 -mx-2 sm:-mx-4 flex justify-center">
                <div className="relative w-full max-w-md flex items-center justify-center">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-slate-200/50 blur-2xl pointer-events-none"
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
                        "drop-shadow(0 12px 24px rgba(0, 37, 82, 0.16))",
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

              <ul className="mt-5 sm:mt-6 space-y-2.5 text-left max-w-sm mx-auto">
                {basicPlanFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.8} />
                    <span className="text-[13.5px] sm:text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
              <p className="text-rose-500 line-through text-xs sm:text-sm font-bold uppercase">
                DE R$ 27,90 POR:
              </p>
              <div className="mt-1 leading-none">
                <span className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                  R$ 10,00
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 font-semibold uppercase">
                PAGAMENTO ÚNICO • ACESSO IMEDIATO
              </p>

              <a
                id="basic-plan-cta"
                href={basicUrl || "#"}
                {...(basicUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={(e) => {
                  if (!basicUrl) {
                    e.preventDefault();
                  } else {
                    refreshUrls();
                  }
                }}
                className="mt-5 sm:mt-6 inline-flex w-full items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-4.5 min-h-[54px] rounded-full bg-slate-900 text-white font-bold uppercase tracking-wide text-sm sm:text-base hover:bg-slate-800 active:scale-[0.98] transition-all cursor-pointer shadow-xs"
              >
                QUERO AGORA
              </a>
            </div>
          </div>

          {/* Complete Plan Card (Highlighted) */}
          <div
            id="plano-completo"
            className="relative rounded-3xl bg-white border-2 border-[#0066CC] p-6 sm:p-8 md:p-9 shadow-lg text-center lg:scale-[1.02] ring-4 ring-[#0066CC]/10 flex flex-col justify-between scroll-mt-8"
          >
            <div>
              <div
                id="mais-completo"
                className="-mx-6 sm:-mx-8 md:-mx-9 -mt-6 sm:-mt-8 md:-mt-9 rounded-t-[22px] bg-[#0066CC] text-white text-center py-3 px-4 font-black uppercase tracking-wide text-xs sm:text-sm shadow-xs scroll-mt-6 sm:scroll-mt-8 flex items-center justify-center gap-1.5"
              >
                <span>⭐ MAIS ESCOLHIDO • PACOTE COMPLETO</span>
              </div>

              <div className="mt-5">
                <h3 className="font-black text-xl sm:text-2xl md:text-3xl text-[#0A192F] uppercase tracking-tight whitespace-normal sm:whitespace-nowrap">
                  PLANO COMPLETO
                </h3>
                <p className="mt-1 text-[#0066CC] font-bold text-xs sm:text-sm uppercase">
                  +100 FICHAS VISUAIS DE AULAS PRONTAS
                </p>
              </div>

              <div className="mt-4 sm:mt-5 -mx-2 sm:-mx-4 flex justify-center">
                <div className="relative w-full max-w-md flex items-center justify-center">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full bg-blue-500/15 blur-2xl pointer-events-none"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src={assets.completePlanMockup}
                    alt="Plano Completo + Bônus"
                    width={800}
                    height={600}
                    className="relative z-10 w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                      filter:
                        "drop-shadow(0 14px 28px rgba(0, 35, 80, 0.22))",
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

              <ul className="mt-5 sm:mt-6 space-y-2.5 text-left max-w-sm mx-auto">
                {completePlanFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-800">
                    {item.isBonus ? (
                      <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.8} />
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
                <p className="text-rose-500 line-through text-xs sm:text-sm font-bold uppercase">
                  DE R$ 97,00 POR APENAS:
                </p>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black uppercase tracking-wide">
                  ECONOMIZE R$ 70,00
                </span>
              </div>
              <div className="mt-1 leading-none">
                <span className="text-5xl sm:text-6xl md:text-7xl font-black text-[#0066CC] tracking-tight">
                  R$ 27,00
                </span>
              </div>

              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600 uppercase">
                PAGAMENTO ÚNICO OU PARCELADO
              </p>

              <a
                id="complete-plan-cta"
                href={completeUrl || "#"}
                {...(completeUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={(e) => {
                  if (!completeUrl) {
                    e.preventDefault();
                  } else {
                    refreshUrls();
                  }
                }}
                className="mt-5 sm:mt-6 inline-flex w-full items-center justify-center gap-2 px-6 sm:px-8 py-4.5 sm:py-5 min-h-[58px] rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide text-sm sm:text-base shadow-[0_6px_0_0_#004F9F] sm:shadow-[0_7px_0_0_#004F9F] active:scale-[0.98] active:translate-y-[3px] active:shadow-[0_2px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer animate-cta-pulse"
              >
                QUERO AGORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
