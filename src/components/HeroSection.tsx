import React from "react";
import { ArrowRight } from "lucide-react";
import { assets } from "../data";

interface HeroSectionProps {
  onCtaClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-[#FFFFFF]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pt-3 sm:pt-4 lg:pt-5 pb-10 sm:pb-12 lg:pb-16">
        {/* Mobile Title */}
        <div className="lg:hidden relative z-10 text-center mb-3 px-1 max-w-xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#15803D]/10 text-[#15803D] font-bold text-[10.5px] sm:text-[11px] uppercase tracking-wider mb-2.5 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] shrink-0" />
            MATERIAL ALINHADO A CBTM
          </span>
          <h1 className="font-black text-[#0A192F] tracking-tight leading-[1.16] text-[22px] sm:text-3xl uppercase">
            <span className="text-[#0066CC] block">+100 FICHAS VISUAIS</span>
            <span className="block mt-0.5">DE AULAS PRONTAS PARA TÊNIS DE MESA</span>
          </h1>
          <p className="mt-2 text-center text-slate-700 font-medium text-[13.5px] sm:text-[15px] leading-snug max-w-xl mx-auto">
            Pare de perder tempo pensando em qual aula aplicar. Tenha aulas estruturadas para consultar rapidamente e aplicar com seus alunos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-5 sm:gap-6 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="relative z-10 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#15803D]/10 text-[#15803D] font-bold text-[11px] uppercase tracking-wider mb-4 xl:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] shrink-0" />
              MATERIAL ALINHADO A CBTM
            </div>

            {/* Desktop Title */}
            <h1 className="hidden lg:block font-black text-[#0A192F] tracking-tight leading-[1.12] text-[38px] xl:text-[44px] w-full max-w-2xl uppercase">
              <span className="text-[#0066CC] block">+100 FICHAS VISUAIS</span>
              <span className="block mt-1">DE AULAS PRONTAS PARA TÊNIS DE MESA</span>
            </h1>

            <p className="hidden lg:block mt-2.5 text-center w-full max-w-2xl text-slate-700 font-medium text-[15px] xl:text-[16px] leading-snug">
              Pare de perder tempo pensando em qual aula aplicar. Tenha aulas estruturadas para consultar rapidamente e aplicar com seus alunos.
            </p>

            <p className="mt-2.5 sm:mt-3.5 max-w-lg lg:max-w-xl mx-auto lg:mx-0 text-[13.5px] sm:text-[15.5px] leading-relaxed text-slate-600 text-center lg:text-left font-normal">
              Tenha uma coleção de aulas organizadas em fichas visuais, com{" "}
              <strong className="text-slate-800 font-semibold">
                sequência, organização, metas, observações, progressões e regressões
              </strong>{" "}
              para você consultar, organizar os alunos e aplicar o treinamento sem precisar montar cada atividade do zero.
            </p>

            {/* CTA Button */}
            <div className="mt-5 sm:mt-8 flex w-full justify-center lg:justify-start">
              <a
                id="hero-cta-btn"
                href="#mais-completo"
                onClick={onCtaClick}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-10 py-3.5 sm:py-4.5 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide text-xs sm:text-base shadow-[0_5px_0_0_#004F9F] sm:shadow-[0_6px_0_0_#004F9F] active:translate-y-[2px] active:shadow-[0_2px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer animate-cta-pulse"
              >
                <span className="whitespace-normal sm:whitespace-nowrap">QUERO AS +100 FICHAS PRONTAS</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" strokeWidth={2.8} />
              </a>
            </div>

            {/* Delivery & Access Badge */}
            <div className="mt-4 sm:mt-5 lg:mt-6 w-full max-w-lg lg:max-w-xl rounded-xl bg-[#F0F7FF] border border-[#BFDBFE] px-3.5 py-2.5 sm:px-5 sm:py-3 shadow-xs text-center lg:text-left">
              <p className="text-[#0A192F] font-bold text-[11.5px] sm:text-[14px] leading-relaxed m-0 text-center lg:text-left uppercase">
                RECEBA SEU MATERIAL IMEDIATAMENTE APÓS A CONFIRMAÇÃO DO PAGAMENTO E ACESSE PELO{" "}
                <span className="inline-block whitespace-nowrap font-black">📱 CELULAR</span>,{" "}
                <span className="inline-block whitespace-nowrap font-black">📲 TABLET</span> OU{" "}
                <span className="inline-block whitespace-nowrap font-black">🖥️ COMPUTADOR</span>.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Mockup */}
          <div className="relative w-full order-1 lg:order-2 flex items-center justify-center my-1 sm:my-4 lg:my-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-none flex items-center justify-center">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,102,204,0.15)] border border-slate-200 bg-white">
                <img
                  src={assets.heroMockup}
                  alt="Mockup das +100 Fichas Visuais de Aulas Prontas para Tênis de Mesa"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
