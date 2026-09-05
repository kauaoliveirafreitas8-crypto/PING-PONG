import React from "react";

export const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer-section"
      className="bg-[#06101E] py-8 px-4 sm:px-6 border-t border-slate-800 text-slate-400 text-xs sm:text-sm"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-3 text-center">
        <div className="text-white font-black text-base sm:text-lg flex items-center gap-2 uppercase">
          <span>🏓</span>
          <span>+100 FICHAS VISUAIS DE AULAS PRONTAS PARA TÊNIS DE MESA</span>
        </div>

        <p className="text-slate-300 font-medium text-xs sm:text-sm">
          Material autoral para professores e treinadores.
        </p>

        <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed max-w-3xl">
          Material estruturado com base em referências técnicas e pedagógicas públicas compatíveis com a CBTM/UniTM. Não é material oficial, produzido, aprovado ou certificado pela CBTM.
        </p>

        <p className="text-slate-500 text-xs pt-1 border-t border-slate-800/60 w-full">
          © {currentYear} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
