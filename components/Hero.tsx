"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-[radial-gradient(ellipse_at_50%_0%,#f1f5f9_0%,#ffffff_60%)] pt-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,5vw,3.5rem)] font-medium text-[var(--color-primary)] leading-tight tracking-tight mb-6">
          Tus ingresos han crecido. ¿Tu estrategia financiera también?
        </h1>
        <p className="text-xl text-[var(--color-text-muted)] mb-8 leading-relaxed">
          Realiza un diagnóstico de optimización y descubre si tu estructura
          actual está alineada con tus metas de largo plazo.
        </p>
        <div className="hidden md:block">
          <a
            href="#form"
            className="inline-block font-medium text-base py-4 px-10 rounded-md transition-all duration-300 cursor-pointer bg-[var(--color-accent)] text-white shadow-[0_10px_30px_-10px_rgba(197,160,101,0.5)] hover:bg-[#b08f54] hover:-translate-y-0.5 hover:shadow-[0_15px_40px_-10px_rgba(197,160,101,0.6)]"
          >
            Iniciar diagnóstico financiero
          </a>
        </div>
        <div className="inline-block mt-4 text-sm text-[var(--color-primary)] bg-[rgba(197,160,101,0.1)] py-2 px-5 rounded-full border border-[rgba(197,160,101,0.3)]">
          Diseñado exclusivamente para profesionistas con ingresos desde $55,000
          MXN mensuales.
        </div>
      </div>
    </section>
  );
}
