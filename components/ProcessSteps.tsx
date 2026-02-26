const steps = [
  {
    num: "01",
    title: "Formulario",
    text: "Respondes un cuestionario estratégico (5-7 min) con datos clave.",
  },
  {
    num: "02",
    title: "Evaluación",
    text: "Analizamos tu perfil para detectar oportunidades reales de mejora.",
  },
  {
    num: "03",
    title: "Sesión",
    text: "Si calificas, agendamos una videollamada privada para revisar hallazgos.",
  },
  {
    num: "04",
    title: "Ruta",
    text: "Definimos ajustes y pasos a seguir para tu estructura financiera.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,2.8rem)] font-medium text-[var(--color-primary)] mb-6">
            Cómo funciona el proceso
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-5 relative">
          <div className="hidden md:block absolute top-10 left-12 right-12 h-px bg-slate-200 -z-0" />
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-7 font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-[var(--color-accent)] shadow-sm">
                {step.num}
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2 text-[var(--color-primary)]">
                {step.title}
              </h3>
              <p className="text-[0.95rem] text-[var(--color-text-muted)]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-[rgba(15,23,42,0.03)] p-6 rounded-lg text-center font-medium text-[var(--color-primary)]">
          ⚠️ El objetivo es asegurarnos de que exista una oportunidad real antes
          de avanzar.
        </div>
      </div>
    </section>
  );
}
