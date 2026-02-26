const steps = [
  {
    num: "01",
    title: "Formulario",
    text: "Respondes un cuestionario estratégico (5-7 min) con datos clave.",
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
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Evaluación",
    text: "Analizamos tu perfil para detectar oportunidades reales de mejora.",
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
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Sesión",
    text: "Si calificas, agendamos una videollamada privada para revisar hallazgos.",
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
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Ruta",
    text: "Definimos ajustes y pasos a seguir para tu estructura financiera.",
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
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50 -z-10 skew-y-3 transform origin-top-left scale-110" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-2 block">
            Paso a Paso
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Cómo funciona el proceso
          </h2>
          <p className="text-lg text-slate-600">
            Un camino claro y estructurado para llevar tus finanzas al siguiente
            nivel.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 rounded-full -z-0">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-emerald-500 w-3/4 rounded-full opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 relative shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-slate-50">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-inner group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-colors">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-400 border border-slate-100 shadow-sm">
                      {step.num}
                    </div>
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed px-2">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-100 text-amber-800 px-6 py-4 rounded-lg shadow-sm max-w-2xl text-center">
            <svg
              className="w-6 h-6 shrink-0 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
