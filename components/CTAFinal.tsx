"use client";

import { useModal } from "@/context/ModalContext";

export default function CTAFinal() {
  const { openModal } = useModal();

  return (
    <section
      id="form"
      className="py-24 md:py-32 bg-[#0f172a] text-center relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-[#0f172a] to-[#0f172a]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-6 border border-white/10 backdrop-blur-sm">
            Confidencial y sin compromiso
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para tener <span className="text-amber-500">claridad financiera</span>?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Toma 5-7 minutos para completar el diagnóstico. Si tu perfil encaja con nuestra metodología, podrás agendar una sesión privada de estrategia.
          </p>
        </div>

        <button
          onClick={openModal}
          className="btn-primary px-12 py-5 rounded-xl font-bold text-xl tracking-wide shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-1"
        >
          Iniciar Diagnóstico Ahora
        </button>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-500">
          <svg
            className="w-4 h-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
          <span>Tu información es 100% confidencial y segura.</span>
        </div>
      </div>
    </section>
  );
}
