// Removed lucide-react import as we are using inline SVGs

const cards = [
  {
    title: "Control Financiero",
    text: "No se trata de cuánto ganas, sino de cuánto retienes y cómo lo gestionas.",
    icon: (
      <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Eficiencia del Ahorro",
    text: "Evaluamos si tu capital está generando el rendimiento estratégico que requiere tu perfil.",
    icon: (
      <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Optimización Fiscal",
    text: "Identificamos oportunidades para mejorar tu carga fiscal dentro de los esquemas legales.",
    icon: (
      <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Estrategia de Retiro",
    text: "Proyectamos tu escenario futuro para garantizar independencia financiera.",
    icon: (
      <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function AnalysisCards() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#F59E0B] uppercase mb-4 block">
              Metodología Integral
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-slate-900">
              Análisis 360° de tu <br/>
              <span className="text-slate-400 italic font-serif">Realidad Financiera</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 font-light max-w-sm text-right md:text-left">
            Un enfoque quirúrgico para asegurar que cada pieza de tu rompecabezas
            patrimonial encaje perfectamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-200">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group p-10 bg-white border-r border-b border-slate-200 hover:bg-slate-50 transition-colors duration-500"
            >
              <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                {card.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-slate-900">
                {card.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm font-light">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
