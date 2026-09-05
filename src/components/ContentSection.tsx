import React from "react";
import { Check } from "lucide-react";
import { assets, contentModules } from "../data";

export const ContentSection: React.FC = () => {
  return (
    <section
      id="content-section"
      className="relative bg-[#081426] py-10 sm:py-14 lg:py-16 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-white p-5 sm:p-8 md:p-10 shadow-2xl">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0066CC] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-sm">
              🏓 CONTEÚDO COMPLETO
            </span>
          </div>

          <h2 className="text-center text-[#0A192F] font-black text-2xl sm:text-3xl md:text-4xl leading-tight uppercase">
            TUDO O QUE VOCÊ VAI RECEBER
          </h2>

          {/* Large Mockup */}
          <div className="relative my-6 sm:my-8 flex flex-col items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(50% 45% at 50% 50%, rgba(0, 102, 204, 0.15), transparent 70%)",
              }}
            />
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                loading="lazy"
                decoding="async"
                src={assets.sectionMockup}
                alt="Kit Completo +100 Fichas Visuais de Aulas Prontas para Tênis de Mesa"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-4 sm:mt-5 text-center">
              <h3 className="text-lg sm:text-xl font-black text-[#0A192F] uppercase">
                +100 FICHAS VISUAIS DE AULAS PRONTAS
              </h3>
              <p className="mt-1 text-slate-600 font-semibold text-xs sm:text-sm uppercase">
                ATIVIDADES ORGANIZADAS PARA CONSULTA RÁPIDA DURANTE SEUS TREINAMENTOS.
              </p>
            </div>
          </div>

          {/* Grid of features */}
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {contentModules.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-100 hover:border-[#0066CC]/40 transition-colors"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md bg-[#16A34A]/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" strokeWidth={3} />
                </span>
                <div>
                  <span className="text-[#0A192F] font-bold text-xs sm:text-sm block">
                    {item.title}
                  </span>
                  <span className="text-slate-600 text-xs sm:text-[13px] block mt-0.5 leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 sm:mt-8 text-center font-black text-[#0066CC] text-base sm:text-lg md:text-xl uppercase">
            E NÃO PARA POR AÍ... VEJA OS BÔNUS ABAIXO 👇
          </p>
        </div>
      </div>
    </section>
  );
};
