const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#C5A065"
    strokeWidth={3}
    className="w-5 h-5 shrink-0"
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
    stroke="#334155"
    strokeWidth={2}
    className="w-5 h-5 shrink-0 opacity-40"
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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,2.8rem)] font-medium text-[var(--color-primary)] mb-6">
            ¿Este diagnóstico es para ti?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-8 font-semibold">
              Es ideal si:
            </h3>
            <ul className="list-none space-y-5">
              {idealItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-lg text-[var(--color-text-main)]"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="opacity-80">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-8 font-semibold">
              No es ideal si:
            </h3>
            <ul className="list-none space-y-5">
              {notIdealItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-lg text-[var(--color-text-main)]"
                >
                  <XIcon />
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
