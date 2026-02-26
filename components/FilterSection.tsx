const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
    className="w-5 h-5 shrink-0 text-[#F4B123]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    className="w-5 h-5 shrink-0 opacity-40 text-slate-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const idealItems = [
  "Tus ingresos son estables y buscas mayor control.",
  "Eres cabeza de familia y priorizas la previsión.",
  "Te interesa la optimización fiscal y la Modalidad 40.",
  "Buscas construir una estructura de retiro sólida.",
];

const notIdealItems = [
  "Buscas soluciones rápidas sin análisis.",
  "No estás dispuesto a planificar a largo plazo.",
  "Prefieres la improvisación a la estrategia.",
  "Tu situación financiera no permite ahorro.",
];

export default function FilterSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/10 -skew-x-12 transform origin-top-right translate-x-1/4" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,2.8rem)] font-bold text-white mb-6">
            ¿Este diagnóstico es para ti?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-[#F4B123] mb-8 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B123] shadow-[0_0_10px_rgba(244,177,35,0.5)]"></span>
              Es ideal si:
            </h3>
            <ul className="list-none space-y-6">
              {idealItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-lg text-slate-200 font-light"
                >
                  <div className="mt-1">
                    <CheckIcon />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm opacity-80 hover:opacity-100 transition-opacity">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-slate-500 mb-8 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              No es ideal si:
            </h3>
            <ul className="list-none space-y-6">
              {notIdealItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-lg text-slate-400 font-light"
                >
                  <div className="mt-1">
                    <XIcon />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
