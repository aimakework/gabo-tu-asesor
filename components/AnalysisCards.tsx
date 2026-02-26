// Removed lucide-react import as we are using inline SVGs

const cards = [
  {
    title: "Control Financiero",
    text: "No se trata de cuánto ganas, sino de cuánto retienes y cómo lo gestionas.",
    icon: (
      <svg
        className="w-8 h-8 text-emerald-600"
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
    title: "Eficiencia del Ahorro",
    text: "Evaluamos si tu capital está generando el rendimiento estratégico que requiere tu perfil.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Optimización Fiscal",
    text: "Identificamos oportunidades para mejorar tu carga fiscal dentro de los esquemas legales.",
    icon: (
      <svg
        className="w-8 h-8 text-amber-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Estrategia de Retiro",
    text: "Proyectamos tu escenario futuro para garantizar independencia financiera.",
    icon: (
      <svg
        className="w-8 h-8 text-purple-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function AnalysisCards() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl mix-blend-multiply animate-blob" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-slate-500 uppercase mb-2 block">
            Nuestra Metodología
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            ¿Qué analizamos?
          </h2>
          <p className="text-lg text-slate-600">
            Un enfoque integral para asegurar que cada pieza de tu rompecabezas
            financiero encaje perfectamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1"
            >
              <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-slate-100 transition-colors">
                {card.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="inline-block px-6 py-3 bg-white rounded-full text-slate-500 text-sm font-medium shadow-sm border border-slate-100 italic">
            "Sin promesas vacías. Solo análisis y estrategia."
          </p>
        </div>
      </div>
    </section>
  );
}
