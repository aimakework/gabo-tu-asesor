"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-700 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Exclusivo para personas inteligentes
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
            Tus ingresos han crecido. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">
              ¿Tu estrategia también?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Diagnóstico de optimización patrimonial para profesionistas que buscan
            alinear su estructura financiera con sus metas de largo plazo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#form"
              className="btn-primary w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 group"
            >
              Iniciar diagnóstico gratuito
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
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              Conocer más
              <svg
                className="w-5 h-5"
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

          <div className="pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-400 font-medium mb-4 uppercase tracking-wider">
              Enfoque en resultados reales
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder logos - replace with real ones if available */}
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                </svg>
                <span className="font-bold">Estrategia</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                </svg>
                <span className="font-bold">Control</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                </svg>
                <span className="font-bold">Crecimiento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
