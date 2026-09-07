import React from "react";

export const AnnouncementBar: React.FC = () => {
  return (
    <div
      id="top-announcement-bar"
      className="w-full bg-[#FEF2F2] border-b border-[#FECACA] text-center text-[11.5px] sm:text-sm font-bold tracking-wide py-2 sm:py-2.5 px-3 sm:px-4 flex items-center justify-center gap-2 shadow-2xs"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 text-[#DC2626]"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      <span className="uppercase tracking-wider text-[#DC2626] font-black">
        OFERTA DISPONÍVEL APENAS HOJE
      </span>
    </div>
  );
};

