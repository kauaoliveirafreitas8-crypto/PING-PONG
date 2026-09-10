import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { assets } from "../data";

interface HeroSectionProps {
  onCtaClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-white border-b border-slate-200/80">
      {/* Background Soft Lighting Accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/70 via-sky-50/20 to-transparent pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pt-5 sm:pt-7 lg:pt-8 pb-10 sm:pb-14 lg:pb-16">
        {/* Mobile Header */}
        <div className="lg:hidden relative z-10 text-center mb-4 px-1 max-w-xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
            MATERIAL ALINHADO À CBTM
          </span>
          <h1 className="font-black text-[#0A192F] tracking-tight leading-[1.14] text-2xl sm:text-3xl uppercase">
            <span className="text-[#0066CC] block">+100 FICHAS VISUAIS</span>
            <span className="block mt-0.5">DE AULAS PRONTAS PARA TÊNIS DE MESA</span>
          </h1>
          <p className="mt-2.5 text-center text-slate-600 font-medium text-[14.5px] sm:text-[16px] leading-relaxed max-w-xl mx-auto">
            Pare de perder tempo pensando em qual treino aplicar. Tenha aulas estruturadas para consultar rapidamente e aplicar com seus alunos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="relative z-10 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-bold text-xs uppercase tracking-wider mb-4 xl:mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              MATERIAL ALINHADO À CBTM
            </div>

            {/* Desktop Title */}
            <h1 className="hidden lg:block font-black text-[#0A192F] tracking-tight leading-[1.12] text-[38px] xl:text-[44px] w-full max-w-2xl uppercase">
              <span className="text-[#0066CC] block">+100 FICHAS VISUAIS</span>
              <span className="block mt-1">DE AULAS PRONTAS PARA TÊNIS DE MESA</span>
            </h1>

            <p className="hidden lg:block mt-3 text-left w-full max-w-2xl text-slate-600 font-medium text-[15.5px] xl:text-[16.5px] leading-relaxed">
              Pare de perder tempo pensando em qual aula aplicar. Tenha aulas estruturadas para consultar rapidamente e aplicar com seus alunos.
            </p>

            {/* CTA Button */}
            <div className="mt-5 sm:mt-7 flex flex-col items-center lg:items-start w-full">
              <a
                id="hero-cta-btn"
                href="#mais-completo"
                onClick={onCtaClick}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 sm:gap-3 px-7 sm:px-10 py-4.5 sm:py-5 min-h-[58px] rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide text-sm sm:text-base shadow-[0_6px_0_0_#004F9F] sm:shadow-[0_7px_0_0_#004F9F] active:translate-y-[3px] active:shadow-[0_3px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_5px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer animate-cta-pulse"
              >
                <span className="whitespace-normal sm:whitespace-nowrap">QUERO AS +100 FICHAS PRONTAS</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" strokeWidth={2.8} />
              </a>

              {/* Clean Micro Trust Proof */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1.5 text-xs text-slate-500 font-semibold">
                <span className="inline-flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Acesso Imediato
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Celular ou Impresso
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> 7 Dias de Garantia
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Mockup */}
          <div className="relative w-full order-1 lg:order-2 flex items-center justify-center my-1 sm:my-3 lg:my-0 px-1 sm:px-0">
            <div className="relative w-full max-w-[390px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[540px] flex items-center justify-center">
              {/* Clean Subtle Glow Accent */}
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
              />
              <img
                src={assets.heroMockup}
                alt="Mockup das +100 Fichas Visuais de Aulas Prontas para Tênis de Mesa"
                width={600}
                height={600}
                className="relative z-10 w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                style={{
                  filter:
                    "drop-shadow(0 14px 28px rgba(0, 37, 82, 0.22)) drop-shadow(0 0 20px rgba(0, 43, 92, 0.12))",
                }}
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== assets.heroMockupFallback) {
                    target.src = assets.heroMockupFallback;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

