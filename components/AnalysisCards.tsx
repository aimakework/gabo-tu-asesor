const cards = [
  {
    title: "Control Financiero",
    text: "No se trata de cuánto ganas, sino de cuánto retienes y cómo lo gestionas.",
  },
  {
    title: "Eficiencia del Ahorro",
    text: "Evaluamos si tu capital está generando el rendimiento estratégico que requiere tu perfil.",
  },
  {
    title: "Optimización Fiscal",
    text: "Identificamos oportunidades para mejorar tu carga fiscal dentro de los esquemas legales.",
  },
  {
    title: "Estrategia de Retiro",
    text: "Proyectamos tu escenario futuro para garantizar independencia financiera.",
  },
];

export default function AnalysisCards() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,2.8rem)] font-medium text-[var(--color-primary)] mb-6">
            ¿Qué analizamos?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white p-8 md:p-10 rounded-xl transition-all duration-300 border border-black/[0.03] hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.15)]"
            >
              <h3 className="font-sans text-xl font-semibold mb-3 text-[var(--color-primary)]">
                {card.title}
              </h3>
              <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-14 italic text-[var(--color-text-muted)] text-base">
          Sin promesas vacías. Solo análisis y estrategia.
        </p>
      </div>
    </section>
  );
}
