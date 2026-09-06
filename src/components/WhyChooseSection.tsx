import React from "react";
import { Sparkles } from "lucide-react";

export const WhyChooseSection: React.FC = () => {
  return (
    <section
      id="por-que-escolher"
      className="relative bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 text-[#0066CC] font-black text-xs uppercase tracking-wider mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            DIFERENCIAIS EXCLUSIVOS
          </span>
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0A192F] uppercase tracking-tight">
            POR QUE ESCOLHER NOSSO MATERIAL?
          </h2>
          <p className="mt-3.5 text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
            Treinos prontos, visualmente organizados e pensados para facilitar a rotina de professores e treinadores.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
          {/* 1. AULA PRONTA PARA APLICAR */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-[#0066CC]/40 hover:shadow-md transition-all">
            <div className="flex items-start gap-3.5">
              <span className="text-3xl flex-shrink-0 mt-0.5" role="img" aria-label="raquete">
                🏓
              </span>
              <div>
                <h3 className="font-black text-lg sm:text-xl text-[#0A192F] uppercase tracking-tight">
                  1. AULA PRONTA PARA APLICAR
                </h3>
                <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  Pare de perder tempo pensando qual treino aplicar.
                </p>
              </div>
            </div>
          </div>

          {/* 2. VISUAL E FÁCIL DE ENTENDER */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-[#0066CC]/40 hover:shadow-md transition-all">
            <div className="flex items-start gap-3.5">
              <span className="text-3xl flex-shrink-0 mt-0.5" role="img" aria-label="olhos">
                👀
              </span>
              <div>
                <h3 className="font-black text-lg sm:text-xl text-[#0A192F] uppercase tracking-tight">
                  2. VISUAL E FÁCIL DE ENTENDER
                </h3>
                <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  Veja rapidamente como o treino funciona.
                </p>
              </div>
            </div>
          </div>

          {/* 3. FOCO NO DESENVOLVIMENTO */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-[#0066CC]/40 hover:shadow-md transition-all">
            <div className="flex items-start gap-3.5">
              <span className="text-3xl flex-shrink-0 mt-0.5" role="img" aria-label="alvo">
                🎯
              </span>
              <div>
                <h3 className="font-black text-lg sm:text-xl text-[#0A192F] uppercase tracking-tight">
                  3. FOCO NO DESENVOLVIMENTO
                </h3>
                <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  Atividades com objetivos claros para cada treinamento.
                </p>
              </div>
            </div>
          </div>

          {/* 4. PROGRESSIONE OU FACILITE O TREINO */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-[#0066CC]/40 hover:shadow-md transition-all">
            <div className="flex items-start gap-3.5">
              <span className="text-3xl flex-shrink-0 mt-0.5" role="img" aria-label="ciclo">
                🔄
              </span>
              <div>
                <h3 className="font-black text-lg sm:text-xl text-[#0A192F] uppercase tracking-tight">
                  4. PROGRESSIONE OU FACILITE O TREINO
                </h3>
                <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  Adapte a atividade ao nível e à resposta dos seus alunos.
                </p>
              </div>
            </div>
          </div>

          {/* 5. LEVE O TREINO PARA O JOGO */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-[#0066CC]/40 hover:shadow-md transition-all">
            <div className="flex items-start gap-3.5">
              <span className="text-3xl flex-shrink-0 mt-0.5" role="img" aria-label="troféu">
                🏆
              </span>
              <div>
                <h3 className="font-black text-lg sm:text-xl text-[#0A192F] uppercase tracking-tight">
                  5. LEVE O TREINO PARA O JOGO
                </h3>
                <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  Transforme o exercício em situações mais próximas da partida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
