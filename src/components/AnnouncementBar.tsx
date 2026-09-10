import React from "react";
import { Sparkles } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  return (
    <div
      id="top-announcement-bar"
      className="w-full bg-slate-900 text-slate-100 py-2 sm:py-2.5 px-3 sm:px-4 text-center text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 border-b border-slate-800"
    >
      <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-red-500 animate-ping" />
      <span className="font-black tracking-wider text-red-500 uppercase text-xs sm:text-sm">
        OFERTA ESPECIAL POR TEMPO LIMITADO
      </span>
    </div>
  );
};


