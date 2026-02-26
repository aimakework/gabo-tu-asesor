import DynamicForm from "./DynamicForm";

export default function CTAFinal() {
  return (
    <section
      id="form"
      className="py-24 md:py-32 bg-slate-50 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100 shadow-sm">
            Confidencial y sin compromiso
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            ¿Listo para tener <span className="text-blue-600">claridad financiera</span>?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Toma 5-7 minutos para completar el diagnóstico. Si tu perfil encaja con nuestra metodología, podrás agendar una sesión privada de estrategia.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <div className="p-8 md:p-12">
            <DynamicForm />
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-400">
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
