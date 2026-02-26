"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230f172a\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      {/* Soft Gradient Orb */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div 
            className={`text-left transition-all duration-1000 transform ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-[#F59E0B]"></span>
              <span className="text-sm font-semibold tracking-widest text-[#F59E0B] uppercase">
                Exclusivo para personas inteligentes
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
              Tus ingresos han crecido. <br />
              <span className="text-slate-400 italic font-serif">
                ¿Tu estrategia también?
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-light">
              Diagnóstico de optimización patrimonial para profesionistas que buscan
              alinear su estructura financiera con sus metas de largo plazo.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <button
                onClick={openModal}
                className="btn-primary px-10 py-4 rounded-none font-medium text-lg tracking-wide min-w-[200px] text-center hover:shadow-xl transition-all duration-300"
              >
                Iniciar diagnóstico
              </button>
              <a
                href="#about"
                className="px-10 py-4 rounded-none font-medium text-lg tracking-wide text-slate-900 border-b border-slate-900 hover:text-[#F59E0B] hover:border-[#F59E0B] transition-colors flex items-center gap-2"
              >
                Conocer metodología
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div 
            className={`relative hidden lg:block transition-all duration-1000 delay-300 transform ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              {/* Abstract geometric composition instead of stock photo */}
              <div className="absolute inset-0 bg-slate-100"></div>
              <div className="absolute top-10 left-10 right-10 bottom-10 border border-slate-200"></div>
              
              {/* Floating Cards simulating strategy */}
              <div className="absolute top-1/4 -left-12 bg-white p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] max-w-xs border-l-4 border-[#F59E0B] animate-float" style={{ animationDelay: "0s" }}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-slate-50 flex items-center justify-center text-slate-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <span className="font-serif text-lg text-slate-900">Estrategia</span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-slate-900"></div>
                </div>
              </div>

              <div className="absolute bottom-1/4 -right-8 bg-slate-900 p-6 shadow-2xl max-w-xs text-white animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-[#F59E0B]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <span className="font-serif text-lg">Control</span>
                </div>
                <p className="text-sm text-slate-400">Protección patrimonial activa.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
