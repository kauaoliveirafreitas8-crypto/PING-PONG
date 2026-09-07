import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const HowToReceiveSection: React.FC = () => {
  return (
    <section
      id="como-receber"
      className="relative bg-gradient-to-b from-[#F0F7FF] via-white to-[#F8FAFC] py-10 sm:py-16 lg:py-20 px-3.5 sm:px-6 border-t border-b border-blue-100"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0066CC]/10 text-[#0066CC] font-black text-xs sm:text-sm uppercase tracking-wider mb-2.5 sm:mb-3 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-[#0066CC]" />
            ACESSO 100% DIGITAL & IMEDIATO
          </span>
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-[#0A192F] uppercase tracking-tight">
            COMO VOU RECEBER O MATERIAL?
          </h2>
          <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base max-w-xl mx-auto">
            Processo 100% automático, seguro e prático em apenas 3 passos:
          </p>
        </div>

        {/* 3 Step Prominent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          {/* Step 1 */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-white border-2 border-blue-200/80 p-5 sm:p-7 shadow-[0_8px_20px_rgba(0,102,204,0.06)] flex flex-col items-center text-center hover:border-[#0066CC] hover:-translate-y-1 transition-all duration-300">
            <span className="absolute -top-3 px-3.5 py-0.5 rounded-full bg-[#0066CC] text-white font-black text-xs uppercase tracking-wider shadow-xs">
              PASSO 01
            </span>

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/80 border border-blue-200/60 flex items-center justify-center text-3xl sm:text-4xl shadow-inner mt-2 mb-3 sm:mb-4">
              <span className="drop-shadow-sm select-none">✉️</span>
            </div>

            <h3 className="font-black text-base sm:text-lg text-[#0A192F] uppercase tracking-tight">
              Chega no seu e-mail
            </h3>
            <p className="mt-2 text-slate-600 text-[13.5px] sm:text-sm leading-relaxed">
              Assim que o pagamento for aprovado, o link de acesso imediato chega diretamente na sua caixa de entrada.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-white border-2 border-blue-200/80 p-5 sm:p-7 shadow-[0_8px_20px_rgba(0,102,204,0.06)] flex flex-col items-center text-center hover:border-[#0066CC] hover:-translate-y-1 transition-all duration-300">
            <span className="absolute -top-3 px-3.5 py-0.5 rounded-full bg-[#0066CC] text-white font-black text-xs uppercase tracking-wider shadow-xs">
              PASSO 02
            </span>

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/80 border border-blue-200/60 flex items-center justify-center text-3xl sm:text-4xl shadow-inner mt-2 mb-3 sm:mb-4">
              <span className="drop-shadow-sm select-none">🖨️</span>
            </div>

            <h3 className="font-black text-base sm:text-lg text-[#0A192F] uppercase tracking-tight">
              Você imprime ou usa na tela
            </h3>
            <p className="mt-2 text-slate-600 text-[13.5px] sm:text-sm leading-relaxed">
              Imprima as fichas em alta resolução ou consulte direto no seu celular, tablet ou notebook ao lado da mesa.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-white border-2 border-blue-200/80 p-5 sm:p-7 shadow-[0_8px_20px_rgba(0,102,204,0.06)] flex flex-col items-center text-center hover:border-[#0066CC] hover:-translate-y-1 transition-all duration-300">
            <span className="absolute -top-3 px-3.5 py-0.5 rounded-full bg-[#0066CC] text-white font-black text-xs uppercase tracking-wider shadow-xs">
              PASSO 03
            </span>

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/80 border border-blue-200/60 flex items-center justify-center text-3xl sm:text-4xl shadow-inner mt-2 mb-3 sm:mb-4">
              <span className="drop-shadow-sm select-none">🏓</span>
            </div>

            <h3 className="font-black text-base sm:text-lg text-[#0A192F] uppercase tracking-tight">
              Aplica nos seus treinos
            </h3>
            <p className="mt-2 text-slate-600 text-[13.5px] sm:text-sm leading-relaxed">
              Abra a ficha correspondente, organize seus alunos com rapidez e conduza aulas muito mais dinâmicas e produtivas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
