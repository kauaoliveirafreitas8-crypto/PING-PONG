import React from "react";
import { Mail, Monitor, Trophy, CheckCircle2 } from "lucide-react";

export const HowToReceiveSection: React.FC = () => {
  return (
    <section
      id="como-receber"
      className="relative bg-[#F8FAFC] py-10 sm:py-14 lg:py-18 px-3.5 sm:px-6 border-b border-slate-200/80"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200/70 font-bold text-xs uppercase tracking-wider mb-2.5 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0066CC]" />
            ACESSO 100% DIGITAL & IMEDIATO
          </span>
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-[#0A192F] uppercase tracking-tight">
            COMO VOCÊ VAI RECEBER O MATERIAL
          </h2>
          <p className="mt-2 text-slate-600 font-normal text-sm sm:text-base max-w-xl mx-auto">
            Processo 100% automático, seguro e prático em 3 passos simples:
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative">
          {/* Step 1 */}
          <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-400 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200 font-black text-xs uppercase tracking-wider mb-4">
              PASSO 01
            </span>

            <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0066CC] mb-4">
              <Mail className="w-7 h-7 stroke-[1.8]" />
            </div>

            <h3 className="font-black text-base sm:text-lg text-[#0A192F] uppercase tracking-tight">
              Chega no seu e-mail
            </h3>
            <p className="mt-2 text-slate-600 text-[13.5px] sm:text-sm leading-relaxed">
              Assim que o pagamento for aprovado, o link de acesso imediato chega diretamente na sua caixa de entrada.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-400 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200 font-black text-xs uppercase tracking-wider mb-4">
              PASSO 02
            </span>

            <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0066CC] mb-4">
              <Monitor className="w-7 h-7 stroke-[1.8]" />
            </div>

            <h3 className="font-black text-base sm:text-lg text-[#0A192F] uppercase tracking-tight">
              Use no celular ou imprima
            </h3>
            <p className="mt-2 text-slate-600 text-[13.5px] sm:text-sm leading-relaxed">
              Consulte as fichas direto no celular, tablet ou computador ao lado da mesa, ou imprima em alta qualidade.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-400 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200 font-black text-xs uppercase tracking-wider mb-4">
              PASSO 03
            </span>

            <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0066CC] mb-4">
              <Trophy className="w-7 h-7 stroke-[1.8]" />
            </div>

            <h3 className="font-black text-base sm:text-lg text-[#0A192F] uppercase tracking-tight">
              Aplique nos treinos
            </h3>
            <p className="mt-2 text-slate-600 text-[13.5px] sm:text-sm leading-relaxed">
              Abra a ficha correspondente, posicione os alunos com agilidade e conduza aulas dinâmicas sem improviso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

