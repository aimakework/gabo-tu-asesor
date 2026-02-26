const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    text: "Respondes un cuestionario estratégico diseñado para identificar brechas en tu estructura actual.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Evaluación",
    text: "Analizamos tu perfil bajo lupa para detectar oportunidades reales de optimización fiscal y patrimonial.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Sesión",
    text: "Si calificas, agendamos una videollamada privada para revisar hallazgos y proponer soluciones.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Ejecución",
    text: "Definimos la hoja de ruta y los instrumentos exactos para materializar tu estrategia.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-[#0b1120] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0b1120] to-[#0b1120]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4 block">
            Ruta Clara
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-6">
            Cómo funciona el proceso
          </h2>
          <p className="text-lg text-slate-400 font-light">
            Sin burocracia innecesaria. Un camino directo hacia la claridad financiera.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:scale-110">
                    {/* Ring */}
                    <div className="absolute inset-0 border border-slate-700 rounded-full group-hover:border-emerald-500/50 transition-colors duration-500" />
                    {/* Inner Circle */}
                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white shadow-lg border border-slate-700 group-hover:bg-emerald-900/20 group-hover:border-emerald-500/30 transition-all duration-500">
                      {step.icon}
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0b1120] rounded-full flex items-center justify-center text-xs font-bold text-slate-500 border border-slate-800 shadow-sm group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                      {step.num}
                    </div>
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed px-2 group-hover:text-slate-300 transition-colors">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <div className="inline-flex items-center gap-4 bg-amber-500/5 border border-amber-500/10 text-amber-200/80 px-8 py-4 rounded-xl backdrop-blur-sm max-w-2xl text-center">
            <svg
              className="w-6 h-6 shrink-0 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-sm font-medium">
              El objetivo es asegurarnos de que exista una oportunidad real antes
              de avanzar. No perdemos tu tiempo ni el nuestro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
