"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export default function AboutSection() {
  const { openModal } = useModal();

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-6 block">
              Sobre Gabo
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight">
              Estrategia, <br />
              <span className="text-slate-400 italic font-serif">no productos.</span>
            </h2>
            
            <div className="space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Hola, soy Gabo. Mi enfoque no es venderte productos financieros;
                es <strong className="text-slate-900 font-medium">ordenar tu realidad patrimonial</strong>.
              </p>
              <p>
                He dedicado mi carrera a ayudar a profesionistas y directivos a
                transformar ingresos altos en patrimonio sólido, mediante
                optimización fiscal y previsión a largo plazo.
              </p>
              <p className="border-l-2 border-amber-500 pl-6 italic text-slate-500">
                "Trabajo bajo un modelo consultivo: Si detecto que puedo aportar valor real a tu situación, avanzamos. Si no, te lo haré saber con total transparencia."
              </p>
            </div>

            <div className="mt-12">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-4 text-slate-900 font-medium hover:text-amber-600 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="tracking-wide uppercase text-sm">Iniciar Diagnóstico</span>
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] bg-white p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="relative h-full w-full bg-slate-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="https://placehold.co/800x1000/e2e8f0/475569?text=Gabo+Portrait"
                  alt="Gabo Asesor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Minimal Stat */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl border border-slate-100">
                <span className="block text-4xl font-serif text-slate-900 mb-1">+10</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">Años de experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
