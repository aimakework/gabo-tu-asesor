import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,2.8rem)] font-medium text-[var(--color-primary)] mb-6 text-left">
              Estrategia, no productos
            </h2>
            <p className="text-[var(--color-text-muted)] mb-5 text-lg">
              Hola, soy Gabo. Mi enfoque no es venderte productos financieros;
              es ordenar tu realidad patrimonial.
            </p>
            <p className="text-[var(--color-text-muted)] mb-5 text-lg">
              He dedicado mi carrera a ayudar a profesionistas y directivos a
              transformar ingresos altos en patrimonio sólido, mediante
              optimización fiscal y previsión a largo plazo.
            </p>
            <p className="text-[var(--color-text-muted)] mb-6 text-lg">
              <strong>Trabajo bajo un modelo consultivo:</strong> si detecto que
              puedo aportar valor real a tu situación, avanzamos. Si no, te lo
              haré saber con total transparencia.
            </p>
            <a
              href="#form"
              className="inline-block font-medium text-base py-4 px-10 rounded-md transition-all duration-300 cursor-pointer bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
            >
              Conoce más en video
            </a>
          </div>
          <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
            <div className="relative aspect-[4/3] bg-slate-800">
              <Image
                src="https://placehold.co/600x450/0f172a/f8fafc?text=Video+Gabo"
                alt="Video Presentación Gabo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <button
                type="button"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
                aria-label="Reproducir video"
              >
                <svg
                  className="w-6 h-6 ml-1 fill-[var(--color-primary)]"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
