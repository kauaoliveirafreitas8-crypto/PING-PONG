import React from "react";
import { drillExamples } from "../data";
import { CheckCircle2 } from "lucide-react";

export const MarqueeSection: React.FC = () => {
  return (
    <section
      id="marquee-section"
      className="relative bg-[#F8FAFC] py-10 sm:py-12 overflow-hidden border-t border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[#0A192F] font-black tracking-tight text-2xl sm:text-3xl lg:text-4xl uppercase">
          <span>📋 VEJA OS TREINOS</span>
          <span className="bg-[#0066CC] text-white px-3.5 py-0.5 rounded-lg whitespace-nowrap shadow-sm">
            POR DENTRO
          </span>
        </h2>
      </div>

      {/* Visual Sheets Carousel */}
      <div className="relative mt-8 w-full overflow-hidden">
        <div className="flex w-max gap-6 animate-marquee">
          {drillExamples.concat(drillExamples).map((drill, idx) => (
            <div
              key={idx}
              className="relative shrink-0 w-[290px] sm:w-[340px] md:w-[380px] rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] flex flex-col justify-between"
            >
              {/* Top Header of Ficha */}
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#0066CC]/10 text-[#0066CC] font-black text-xs uppercase tracking-wider">
                    FICHA #{((idx % drillExamples.length) + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {drill.category}
                  </span>
                </div>

                <h3 className="mt-3 text-base sm:text-lg font-black text-[#0A192F] leading-snug">
                  {drill.title}
                </h3>

                {/* Tactical Table Diagram Simulation */}
                <div className="mt-4 rounded-xl bg-[#0F2847] p-3.5 text-white relative overflow-hidden border border-[#0066CC]/40">
                  <div className="flex items-center justify-between text-[11px] text-blue-200 mb-2 font-mono uppercase tracking-wider">
                    <span>Diagrama da Mesa</span>
                    <span className="text-emerald-400 font-bold">● Zona Ativa</span>
                  </div>

                  {/* Ping Pong Table Representation */}
                  <div className="relative w-full h-24 bg-[#0284C7] rounded-lg border-2 border-white flex items-center justify-center overflow-hidden">
                    {/* Center white line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/70 -translate-x-1/2" />
                    {/* Net line */}
                    <div className="absolute left-0 right-0 top-1/2 h-1 bg-slate-900 -translate-y-1/2 border-t border-b border-white/50 shadow-sm" />

                    {/* Trajectory vector points */}
                    <div className="absolute top-3 left-4 w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center shadow">
                      1
                    </div>
                    <div className="absolute bottom-3 right-6 w-5 h-5 rounded-full bg-emerald-400 text-slate-950 font-black text-[10px] flex items-center justify-center shadow">
                      2
                    </div>
                    <div className="absolute top-4 right-10 w-5 h-5 rounded-full bg-rose-400 text-white font-black text-[10px] flex items-center justify-center shadow">
                      3
                    </div>

                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 60" preserveAspectRatio="none">
                      <path d="M 15 15 Q 40 45 85 45" stroke="#FACC15" strokeWidth="2.2" strokeDasharray="3 2" fill="none" />
                      <path d="M 85 45 Q 60 20 75 15" stroke="#4ADE80" strokeWidth="2.2" fill="none" />
                    </svg>
                  </div>

                  <p className="mt-2 text-[11.5px] text-slate-200 leading-snug font-medium line-clamp-2">
                    {drill.diagramInfo}
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-[#0066CC] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Metas & Rodízios
                </span>
                <span className="text-slate-500 font-medium">Progressão + Regressão</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
