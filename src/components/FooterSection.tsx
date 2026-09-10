import React from "react";

export const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer-section"
      className="bg-[#0A192F] py-8 px-4 sm:px-6 border-t border-slate-800 text-slate-400 text-xs sm:text-sm"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-3 text-center">
        <p className="text-slate-400 text-xs sm:text-sm font-medium">
          © {currentYear} — Todos os direitos reservados.
        </p>

        <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed max-w-3xl pt-3 border-t border-slate-800/60 w-full">
          Este site não é afiliado ao Facebook ou a qualquer entidade da Meta Inc. A reprodução, cópia, revenda ou distribuição não autorizada deste material é estritamente proibida e protegida pela Lei de Direitos Autorais e normas do direito do consumidor. Conteúdo de uso individual e exclusivo para o comprador.
        </p>
      </div>
    </footer>
  );
};
