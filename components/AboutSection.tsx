import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 -skew-x-12 transform origin-top-right translate-x-1/4 backdrop-blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-6 block">
              Sobre Gabo
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Estrategia, <br />
              <span className="text-slate-500">no productos.</span>
            </h2>
            
            <div className="space-y-8 text-lg text-slate-400 font-light leading-relaxed border-l-2 border-slate-800 pl-8">
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

            <div className="mt-12">
              <a
                href="#form"
                className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 hover:border-white/20 transition-all group backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <svg className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span>Ver video presentación</span>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            {/* Abstract geometric frame */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-slate-800 group-hover:border-white/20 transition-colors duration-500">
              <Image
                src="https://placehold.co/800x600/1e293b/cbd5e1?text=Video+Presentation"
                alt="Video Presentación Gabo"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              <button
                type="button"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 group/btn cursor-pointer"
                aria-label="Reproducir video"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 ml-1 text-slate-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
            
            {/* Stat Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-slate-800/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl z-20 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-white">+10</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Años exp.</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <span className="block text-3xl font-bold text-white">500+</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Casos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
