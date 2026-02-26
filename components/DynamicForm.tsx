"use client";

import { useState } from "react";
import { shouldShowBlock, getResultMessage, type FormAnswers } from "@/lib/form-rules";

const defaultAnswers: FormAnswers = {};

interface DynamicFormProps {
  onSuccess?: () => void;
}

export default function DynamicForm({ onSuccess }: DynamicFormProps) {
  const [answers, setAnswers] = useState<FormAnswers>(defaultAnswers);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al enviar");
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 3000); // Close modal after 3s on success
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-[family-name:var(--font-heading)] font-bold text-[#0f172a] mb-4">
          ¡Recibido!
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto">
          {getResultMessage(answers)}
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#F59E0B] transition-colors font-medium text-lg";
  const labelClasses = "block text-slate-500 text-sm uppercase tracking-wider font-bold mb-1";
  const selectClasses = "w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 text-[#0f172a] focus:outline-none focus:border-[#F59E0B] transition-colors font-medium text-lg cursor-pointer appearance-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Bloque 1: Perfil básico */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group">
          <label className={labelClasses}>Ingresos Mensuales</label>
          <div className="relative">
            <select
              value={answers.ingresos ?? ""}
              onChange={(e) => updateAnswer("ingresos", e.target.value)}
              required
              className={selectClasses}
            >
              <option value="" disabled>Selecciona un rango</option>
              <option value="55-80k">$55,000 - $80,000</option>
              <option value="80-120k">$80,000 - $120,000</option>
              <option value="120-200k">$120,000 - $200,000</option>
              <option value="200k+">Más de $200,000</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div className="group">
          <label className={labelClasses}>Situación Laboral</label>
          <div className="relative">
            <select
              value={answers.situacion ?? ""}
              onChange={(e) => updateAnswer("situacion", e.target.value)}
              required
              className={selectClasses}
            >
              <option value="" disabled>Selecciona tu situación</option>
              <option value="empleado">Empleado</option>
              <option value="freelance">Freelance / Independiente</option>
              <option value="mixto">Mixto (Empleado + Negocio)</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="group">
        <label className={labelClasses}>¿Eres cabeza de familia?</label>
        <div className="flex gap-6 mt-3">
          {['si', 'no'].map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group/radio">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${answers.cabezaFamilia === opt ? 'border-[#F59E0B]' : 'border-slate-300 group-hover/radio:border-slate-400'}`}>
                {answers.cabezaFamilia === opt && <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />}
              </div>
              <input
                type="radio"
                name="cabezaFamilia"
                value={opt}
                checked={answers.cabezaFamilia === opt}
                onChange={(e) => updateAnswer("cabezaFamilia", e.target.value)}
                className="hidden"
              />
              <span className="text-lg text-[#0f172a] capitalize">{opt === 'si' ? 'Sí' : 'No'}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Bloque 2: Inversiones (condicional) */}
      {shouldShowBlock("inversiones", answers) && (
        <div className="animate-fade-in group">
          <label className={labelClasses}>¿Tienes inversiones actuales?</label>
          <div className="flex gap-6 mt-3">
            {['si', 'no'].map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group/radio">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${answers.inversiones === opt ? 'border-[#F59E0B]' : 'border-slate-300 group-hover/radio:border-slate-400'}`}>
                  {answers.inversiones === opt && <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />}
                </div>
                <input
                  type="radio"
                  name="inversiones"
                  value={opt}
                  checked={answers.inversiones === opt}
                  onChange={(e) => updateAnswer("inversiones", e.target.value)}
                  className="hidden"
                />
                <span className="text-lg text-[#0f172a] capitalize">{opt === 'si' ? 'Sí' : 'No'}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Bloque 2b: Modalidad 40 (condicional) */}
      {shouldShowBlock("modalidad40", answers) && (
        <div className="animate-fade-in group">
          <label className={labelClasses}>¿Conoces la Modalidad 40?</label>
          <div className="relative mt-2">
            <select
              value={answers.modalidad40 ?? ""}
              onChange={(e) => updateAnswer("modalidad40", e.target.value)}
              required
              className={selectClasses}
            >
              <option value="" disabled>Selecciona...</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
              <option value="no_se">No sé</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      )}

      {/* Bloque 3: Objetivos */}
      {shouldShowBlock("objetivos", answers) && (
        <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <label className={labelClasses}>Prioridad Principal</label>
            <div className="relative">
              <select
                value={answers.prioridad ?? ""}
                onChange={(e) => updateAnswer("prioridad", e.target.value)}
                required
                className={selectClasses}
              >
                <option value="" disabled>Selecciona...</option>
                <option value="retiro">Retiro</option>
                <option value="fiscal">Optimización fiscal</option>
                <option value="control">Control financiero</option>
                <option value="varios">Varios</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
          <div className="group">
            <label className={labelClasses}>Horizonte de Planeación</label>
            <div className="relative">
              <select
                value={answers.horizonte ?? ""}
                onChange={(e) => updateAnswer("horizonte", e.target.value)}
                required
                className={selectClasses}
              >
                <option value="" disabled>Selecciona...</option>
                <option value="1-3">1-3 años</option>
                <option value="3-5">3-5 años</option>
                <option value="5+">5+ años</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bloque 4: Contacto */}
      {shouldShowBlock("contacto", answers) && (
        <div className="animate-fade-in pt-6 border-t border-slate-100 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className={labelClasses}>Nombre</label>
              <input
                type="text"
                value={answers.nombre ?? ""}
                onChange={(e) => updateAnswer("nombre", e.target.value)}
                required
                placeholder="Tu nombre completo"
                className={inputClasses}
              />
            </div>
            <div className="group">
              <label className={labelClasses}>Teléfono</label>
              <input
                type="tel"
                value={answers.telefono ?? ""}
                onChange={(e) => updateAnswer("telefono", e.target.value)}
                placeholder="+52..."
                className={inputClasses}
              />
            </div>
          </div>
          <div className="group">
            <label className={labelClasses}>Email</label>
            <input
              type="email"
              value={answers.email ?? ""}
              onChange={(e) => updateAnswer("email", e.target.value)}
              required
              placeholder="tu@email.com"
              className={inputClasses}
            />
          </div>
          
          {error && (
            <p className="text-red-500 text-sm bg-red-50 p-3 rounded-md">{error}</p>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-10 rounded-xl font-bold text-lg bg-[#0f172a] text-white shadow-lg hover:bg-[#1e293b] hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-4"
          >
            {loading ? "Procesando..." : "Solicitar Análisis Gratuito"}
          </button>
        </div>
      )}

      {!shouldShowBlock("contacto", answers) && (
        <div className="pt-4 border-t border-slate-100">
          <p className="text-slate-400 text-sm italic text-center">
            Completa los campos para continuar...
          </p>
        </div>
      )}
    </form>
  );
}
