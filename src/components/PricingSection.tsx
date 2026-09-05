import React, { useState, useEffect, useCallback } from "react";
import { Clock, Check, Gift } from "lucide-react";
import {
  assets,
  checkoutLinks,
  basicPlanFeatures,
  completePlanFeatures,
} from "../data";

export const PricingSection: React.FC = () => {
  const todayFormatted = new Date().toLocaleDateString("pt-BR");

  const getTrackedParams = (): Record<string, string> => {
    const params: Record<string, string> = {};
    if (typeof window === "undefined") return params;

    try {
      const keys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "fbclid",
        "gclid",
        "click_id",
        "src",
        "sck",
        "xcod",
      ];
      for (const k of keys) {
        const val =
          localStorage.getItem(`lt_fwd_${k}`) || localStorage.getItem(k);
        if (val) params[k] = val;
      }
      const ltUtms = localStorage.getItem("_lt_utms");
      if (ltUtms) {
        try {
          const parsed = JSON.parse(ltUtms);
          Object.assign(params, parsed);
        } catch {
          // ignore parsing error
        }
      }
    } catch {
      // ignore storage error
    }

    try {
      const cookieUtms = document.cookie.match(/(?:^|; )_lt_utms=([^;]+)/);
      if (cookieUtms) {
        try {
          const parsed = JSON.parse(decodeURIComponent(cookieUtms[1]));
          Object.assign(params, parsed);
        } catch {
          // ignore cookie parsing error
        }
      }
      const clickIdCookie = document.cookie.match(
        /(?:^|; )_lt_click_id=([^;]+)/
      );
      if (clickIdCookie && !params.click_id) {
        params.click_id = decodeURIComponent(clickIdCookie[1]);
      }
    } catch {
      // ignore cookie error
    }

    try {
      new URLSearchParams(window.location.search).forEach((val, key) => {
        if (val) params[key] = val;
      });
    } catch {
      // ignore url error
    }

    return params;
  };

  const buildTrackedUrl = (baseUrl: string, fallbackSrc: string): string => {
    if (typeof window === "undefined") return baseUrl;
    try {
      const url = new URL(baseUrl, window.location.href);
      const params = getTrackedParams();

      if (!url.searchParams.has("src") || url.searchParams.get("src") === "") {
        url.searchParams.set("src", params.src || fallbackSrc);
      }
      if (!url.searchParams.has("sck") || url.searchParams.get("sck") === "") {
        url.searchParams.set("sck", params.sck || fallbackSrc);
      }
      if (
        !url.searchParams.has("utm_content") ||
        url.searchParams.get("utm_content") === ""
      ) {
        url.searchParams.set("utm_content", params.utm_content || fallbackSrc);
      }

      for (const p in params) {
        if (params[p] && !url.searchParams.has(p)) {
          url.searchParams.set(p, params[p]);
        }
      }

      return url.toString();
    } catch {
      return baseUrl;
    }
  };

  const [basicUrl, setBasicUrl] = useState(checkoutLinks.basicPlan);
  const [completeUrl, setCompleteUrl] = useState(checkoutLinks.completePlan);

  const refreshUrls = useCallback(() => {
    setBasicUrl(buildTrackedUrl(checkoutLinks.basicPlan, "plano_basico"));
    setCompleteUrl(buildTrackedUrl(checkoutLinks.completePlan, "plano_completo"));
  }, []);

  useEffect(() => {
    refreshUrls();
    const timer = setTimeout(refreshUrls, 600);
    return () => clearTimeout(timer);
  }, [refreshUrls]);

  const handleCheckoutClick = (planName: string, planPrice: number) => {
    try {
      const win = window as any;
      if (typeof win.fbq === "function") {
        win.fbq("track", "InitiateCheckout", {
          content_name: planName,
          content_category: "Tênis de Mesa",
          value: planPrice,
          currency: "BRL",
          num_items: 1,
        });
      }
      if (win.LowTrack && typeof win.LowTrack.trackIC === "function") {
        win.LowTrack.trackIC();
      }
    } catch (err) {
      console.warn("Tracking dispatch error:", err);
    }
  };

  return (
    <section id="planos" className="relative bg-white py-12 lg:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-black text-2xl sm:text-3xl md:text-4xl text-[#0A192F] tracking-tight uppercase">
          ESCOLHA SEU PLANO E{" "}
          <span className="text-[#0066CC]">COMECE AGORA</span>
        </h2>

        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-slate-700 font-bold text-xs sm:text-sm uppercase">
          <Clock className="w-4 h-4 text-[#0066CC]" />
          <span>⏰ OFERTA ESPECIAL DISPONÍVEL HOJE:</span>
          <strong className="text-[#0066CC]">{todayFormatted}</strong>
        </p>

        <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#0066CC] to-[#0284C7] text-white font-black text-center py-3 px-5 shadow-md uppercase tracking-wide text-xs sm:text-sm">
          ⏰ 🔥 OFERTA ESPECIAL COM VALOR PROMOCIONAL POR TEMPO LIMITADO!
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Basic Plan Card */}
          <div className="rounded-3xl bg-white border-2 border-slate-200 p-6 md:p-10 shadow-md text-center hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-700 font-black text-xs uppercase tracking-wider mb-2">
                ACESSO ESSENCIAL
              </div>
              <h3 className="font-black text-2xl md:text-3xl text-[#0A192F] uppercase">
                PLANO BÁSICO
              </h3>
              <p className="mt-1 text-[#0066CC] font-bold text-sm uppercase">
                +100 FICHAS VISUAIS DE AULAS PRONTAS
              </p>

              <div className="mt-6 flex justify-center">
                <div className="w-full max-w-[240px] rounded-xl overflow-hidden shadow border border-slate-100">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={assets.heroMockup}
                    alt="Plano Básico - +100 Fichas Visuais"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 text-left max-w-sm mx-auto">
                {basicPlanFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                    <Check className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" strokeWidth={2.8} />
                    <span className="text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-slate-400 line-through text-sm uppercase font-semibold">
                DE R$ 47,90 POR:
              </p>
              <div className="mt-1 leading-none">
                <span className="text-5xl md:text-6xl font-black text-[#0066CC] tracking-tight">
                  R$ 27,90
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-600 font-bold uppercase">
                PAGAMENTO ÚNICO • ACESSO IMEDIATO
              </p>

              <a
                id="basic-plan-cta"
                href={basicUrl}
                data-href={basicUrl}
                data-url={basicUrl}
                data-checkout-url={basicUrl}
                onMouseEnter={refreshUrls}
                onFocus={refreshUrls}
                onPointerDown={refreshUrls}
                onClick={() => handleCheckoutClick("Plano Básico", 27.9)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide shadow-[0_6px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer"
              >
                QUERO O PLANO BÁSICO →
              </a>
            </div>
          </div>

          {/* Complete Plan Card */}
          <div className="relative rounded-3xl bg-white border-[3px] border-[#0066CC] p-6 md:p-10 shadow-2xl text-center lg:scale-[1.02] ring-4 ring-[#0066CC]/10 flex flex-col justify-between">
            <div>
              <div className="-mx-6 md:-mx-10 -mt-6 md:-mt-10 rounded-t-[20px] bg-[#0066CC] text-white text-center py-3.5 px-4 font-black uppercase tracking-wide text-sm md:text-base shadow-md">
                ⭐ MAIS COMPLETO
              </div>

              <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16A34A] text-white font-bold text-xs uppercase tracking-wider">
                <Check className="w-4 h-4" />
                <span>+100 FICHAS + BÔNUS</span>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="w-full max-w-[280px] rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={assets.sectionMockup}
                    alt="Plano Completo + Bônus"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 text-left max-w-sm mx-auto">
                {completePlanFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-800">
                    {item.isBonus ? (
                      <Gift className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Check className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" strokeWidth={2.8} />
                    )}
                    <span
                      className={`text-sm ${
                        item.isBonus ? "font-bold text-[#0A192F]" : "font-medium"
                      }`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-rose-500 line-through text-base font-bold uppercase">
                DE R$ 97,00 POR APENAS:
              </p>
              <div className="mt-1 leading-none">
                <span className="text-6xl md:text-7xl font-black text-[#0066CC] tracking-tight">
                  R$ 47,90
                </span>
              </div>

              <p className="mt-3 font-bold text-[#0A192F] text-base sm:text-lg uppercase">
                OU PARCELADO NO CARTÃO DE CRÉDITO
              </p>

              <a
                id="complete-plan-cta"
                href={completeUrl}
                data-href={completeUrl}
                data-url={completeUrl}
                data-checkout-url={completeUrl}
                onMouseEnter={refreshUrls}
                onFocus={refreshUrls}
                onPointerDown={refreshUrls}
                onClick={() => handleCheckoutClick("Plano Completo", 47.9)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide shadow-[0_6px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer animate-cta-pulse"
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
