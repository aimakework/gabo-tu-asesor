const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    text: "Respondes un cuestionario estratégico diseñado para identificar brechas en tu estructura actual.",
  },
  {
    num: "02",
    title: "Evaluación",
    text: "Analizamos tu perfil bajo lupa para detectar oportunidades reales de optimización fiscal y patrimonial.",
  },
  {
    num: "03",
    title: "Sesión",
    text: "Si calificas, agendamos una videollamada privada para revisar hallazgos y proponer soluciones.",
  },
  {
    num: "04",
    title: "Ejecución",
    text: "Definimos la hoja de ruta y los instrumentos exactos para materializar tu estrategia.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4 block">
              Ruta Clara
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Cómo funciona <br/> el proceso
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-slate-500 font-light border-l border-slate-200 pl-8">
              Sin burocracia innecesaria. Un camino directo hacia la claridad financiera, diseñado para respetar tu tiempo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative pt-8 border-t border-slate-200 group hover:border-[#F59E0B] transition-colors duration-500">
              <span className="text-4xl font-serif text-slate-200 group-hover:text-[#F59E0B] transition-colors duration-500 block mb-6">
                {step.num}
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
