"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Reduced Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.png"
          alt="Background"
          fill
          className="object-cover object-center opacity-70" /* Aumentada opacidad de la imagen */
          priority
        />
        {/* Gradientes más sutiles para no "matar" la imagen */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0f172a_100%)] opacity-80" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-amber-400 mb-8 backdrop-blur-md animate-fade-in shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
            Exclusivo para personas inteligentes
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-2xl">
            Tus ingresos han crecido. <br />
            <span className="text-gradient-gold relative inline-block">
              ¿Tu estrategia también?
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-500/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            Diagnóstico de optimización patrimonial para profesionistas que buscan
            alinear su estructura financiera con sus metas de largo plazo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a
              href="#form"
              className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 group min-w-[240px] shadow-lg shadow-amber-500/20"
            >
              Iniciar diagnóstico
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-slate-200 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              Conocer metodología
              <svg
                className="w-5 h-5 opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          <div className="pt-10 border-t border-white/10 max-w-3xl mx-auto">
            <p className="text-xs text-slate-400 font-medium mb-6 uppercase tracking-[0.2em]">
              Enfoque en resultados reales
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors duration-500 border border-white/10 group-hover:border-amber-500/30 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-slate-300 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-amber-200 transition-colors">Estrategia</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors duration-500 border border-white/10 group-hover:border-blue-500/30 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-blue-200 transition-colors">Control</span>
              </div>

              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors duration-500 border border-white/10 group-hover:border-emerald-500/30 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-slate-300 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-emerald-200 transition-colors">Crecimiento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
