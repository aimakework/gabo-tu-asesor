import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 -skew-x-12 transform origin-top-right translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl mix-blend-overlay" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-bold tracking-wider text-emerald-400 uppercase mb-4 block">
              Sobre Gabo
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Estrategia, <br />
              <span className="text-slate-400">no productos.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
              <p>
                Hola, soy Gabo. Mi enfoque no es venderte productos financieros;
                es <strong className="text-white font-medium">ordenar tu realidad patrimonial</strong>.
              </p>
              <p>
                He dedicado mi carrera a ayudar a profesionistas y directivos a
                transformar ingresos altos en patrimonio sólido, mediante
                optimización fiscal y previsión a largo plazo.
              </p>
              <p>
                <strong className="text-white font-medium block mb-2">Trabajo bajo un modelo consultivo:</strong>
                Si detecto que puedo aportar valor real a tu situación, avanzamos. 
                Si no, te lo haré saber con total transparencia.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#form"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors group"
              >
                <svg className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Ver video presentación
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-[4/3] bg-slate-800">
              <Image
                src="https://placehold.co/800x600/1e293b/cbd5e1?text=Video+Presentation"
                alt="Video Presentación Gabo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              
              <button
                type="button"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white group/btn cursor-pointer"
                aria-label="Reproducir video"
              >
                <svg
                  className="w-8 h-8 ml-1 text-slate-900 group-hover/btn:text-emerald-600 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-800 rounded-lg shadow-xl flex items-center justify-center border border-slate-700 z-20">
              <div className="text-center">
                <span className="block text-2xl font-bold text-white">+10</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Años exp.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
