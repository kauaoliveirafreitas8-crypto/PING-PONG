import React from "react";
import { Check } from "lucide-react";
import { assets, contentModules } from "../data";

export const ContentSection: React.FC = () => {
  return (
    <section
      id="content-section"
      className="relative bg-[#081426] py-8 sm:py-14 lg:py-16 px-3.5 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-8 md:p-10 shadow-2xl">
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#0066CC] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xs">
              🏓 CONTEÚDO COMPLETO
            </span>
          </div>

          <h2 className="text-center text-[#0A192F] font-black text-2xl sm:text-3xl md:text-4xl leading-tight uppercase">
            TUDO O QUE VOCÊ VAI RECEBER
          </h2>

          {/* Large Mockup */}
          <div className="relative my-5 sm:my-8 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-xl flex items-center justify-center">
              {/* Brilho sutil azul meio escuro quase sumindo ao redor do mockup */}
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-[#002B5C]/15 blur-2xl pointer-events-none"
              />
              <img
                loading="lazy"
                decoding="async"
                src={assets.sectionMockup}
                alt="Kit Completo +100 Fichas Visuais de Aulas Prontas para Tênis de Mesa"
                width={800}
                height={600}
                className="relative z-10 w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                style={{
                  filter:
                    "drop-shadow(0 14px 28px rgba(0, 37, 82, 0.28)) drop-shadow(0 0 22px rgba(0, 43, 92, 0.18))",
                }}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== assets.sectionMockupFallback) {
                    target.src = assets.sectionMockupFallback;
                  }
                }}
              />
            </div>

            <div className="mt-3.5 sm:mt-5 text-center">
              <h3 className="text-lg sm:text-xl font-black text-[#0A192F] uppercase">
                +100 FICHAS VISUAIS DE AULAS PRONTAS
              </h3>
              <p className="mt-1 text-slate-600 font-bold text-xs sm:text-sm uppercase">
                ATIVIDADES ORGANIZADAS PARA CONSULTA RÁPIDA DURANTE SEUS TREINAMENTOS.
              </p>
            </div>
          </div>

          {/* Grid of features */}
          <ul className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
            {contentModules.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 sm:gap-3 bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100 hover:border-[#0066CC]/40 transition-colors"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md bg-[#16A34A]/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" strokeWidth={3} />
                </span>
                <div>
                  <span className="text-[#0A192F] font-bold text-sm block">
                    {item.title}
                  </span>
                  <span className="text-slate-600 text-[13px] sm:text-sm block mt-0.5 leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
