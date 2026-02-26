// Removed lucide-react import as we are using inline SVGs

const cards = [
  {
    title: "Control Financiero",
    text: "No se trata de cuánto ganas, sino de cuánto retienes y cómo lo gestionas.",
    icon: (
      <svg
        className="w-8 h-8 text-emerald-400"
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
    gradient: "from-emerald-500/20 to-teal-500/5",
  },
  {
    title: "Eficiencia del Ahorro",
    text: "Evaluamos si tu capital está generando el rendimiento estratégico que requiere tu perfil.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    gradient: "from-blue-500/20 to-indigo-500/5",
  },
  {
    title: "Optimización Fiscal",
    text: "Identificamos oportunidades para mejorar tu carga fiscal dentro de los esquemas legales.",
    icon: (
      <svg
        className="w-8 h-8 text-amber-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    gradient: "from-amber-500/20 to-orange-500/5",
  },
  {
    title: "Estrategia de Retiro",
    text: "Proyectamos tu escenario futuro para garantizar independencia financiera.",
    icon: (
      <svg
        className="w-8 h-8 text-purple-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    gradient: "from-purple-500/20 to-pink-500/5",
  },
];

export default function AnalysisCards() {
  return (
    <section className="py-24 md:py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4 block">
            Metodología Integral
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-6">
            Análisis 360° de tu <br/>
            <span className="text-gradient-blue">Realidad Financiera</span>
          </h2>
          <p className="text-lg text-slate-400 font-light">
            Un enfoque quirúrgico para asegurar que cada pieza de tu rompecabezas
            patrimonial encaje perfectamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/[0.05] rounded-xl w-fit group-hover:bg-white/[0.1] transition-colors border border-white/[0.05]">
                  {card.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="inline-flex items-center gap-3 px-6 py-3 bg-white/[0.03] rounded-full text-slate-400 text-sm border border-white/[0.05]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"/>
            Sin promesas vacías. Solo análisis y estrategia.
          </p>
        </div>
      </div>
    </section>
  );
}
