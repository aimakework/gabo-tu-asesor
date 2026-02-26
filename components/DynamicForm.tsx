"use client";

import { useState } from "react";
import { shouldShowBlock, getResultMessage, type FormAnswers } from "@/lib/form-rules";

const defaultAnswers: FormAnswers = {};

export default function DynamicForm() {
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
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-12 px-6">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">¡Gracias por tu interés!</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          {getResultMessage(answers)}
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm";
  const labelClasses = "block text-slate-700 font-medium mb-2 text-left";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8">
      {/* Bloque 1: Perfil básico */}
      <div className="space-y-6">
        <div>
          <label className={labelClasses}>
            Rango de ingresos mensuales (MXN)
          </label>
          <select
            value={answers.ingresos ?? ""}
            onChange={(e) => updateAnswer("ingresos", e.target.value)}
            required
            className={inputClasses}
          >
            <option value="">Selecciona...</option>
            <option value="55-80k">$55,000 - $80,000</option>
            <option value="80-120k">$80,000 - $120,000</option>
            <option value="120-200k">$120,000 - $200,000</option>
            <option value="200k+">Más de $200,000</option>
          </select>
        </div>

        <div>
          <label className={labelClasses}>
            Situación laboral
          </label>
          <select
            value={answers.situacion ?? ""}
            onChange={(e) => updateAnswer("situacion", e.target.value)}
            required
            className={inputClasses}
          >
            <option value="">Selecciona...</option>
            <option value="empleado">Empleado</option>
            <option value="freelance">Freelance / Independiente</option>
            <option value="mixto">Mixto (empleado + ingresos propios)</option>
          </select>
        </div>

        <div>
          <label className={labelClasses}>
            ¿Eres cabeza de familia?
          </label>
          <select
            value={answers.cabezaFamilia ?? ""}
            onChange={(e) => updateAnswer("cabezaFamilia", e.target.value)}
            required
            className={inputClasses}
          >
            <option value="">Selecciona...</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {/* Bloque 2: Inversiones (condicional) */}
      {shouldShowBlock("inversiones", answers) && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <label className={labelClasses}>
              ¿Tienes inversiones actuales?
            </label>
            <select
              value={answers.inversiones ?? ""}
              onChange={(e) => updateAnswer("inversiones", e.target.value)}
              required
              className={inputClasses}
            >
              <option value="">Selecciona...</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      )}

      {/* Bloque 2b: Modalidad 40 (condicional) */}
      {shouldShowBlock("modalidad40", answers) && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <label className={labelClasses}>
              ¿Conoces la Modalidad 40?
            </label>
            <select
              value={answers.modalidad40 ?? ""}
              onChange={(e) => updateAnswer("modalidad40", e.target.value)}
              required
              className={inputClasses}
            >
              <option value="">Selecciona...</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
              <option value="no_se">No sé</option>
            </select>
          </div>
        </div>
      )}

      {/* Bloque 3: Objetivos */}
      {shouldShowBlock("objetivos", answers) && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <label className={labelClasses}>
              Prioridad principal
            </label>
            <select
              value={answers.prioridad ?? ""}
              onChange={(e) => updateAnswer("prioridad", e.target.value)}
              required
              className={inputClasses}
            >
              <option value="">Selecciona...</option>
              <option value="retiro">Retiro</option>
              <option value="fiscal">Optimización fiscal</option>
              <option value="control">Control financiero</option>
              <option value="varios">Varios</option>
            </select>
          </div>
          <div>
            <label className={labelClasses}>
              Horizonte de planeación
            </label>
            <select
              value={answers.horizonte ?? ""}
              onChange={(e) => updateAnswer("horizonte", e.target.value)}
              required
              className={inputClasses}
            >
              <option value="">Selecciona...</option>
              <option value="1-3">1-3 años</option>
              <option value="3-5">3-5 años</option>
              <option value="5+">5+ años</option>
            </select>
          </div>
        </div>
      )}

      {/* Bloque 4: Contacto */}
      {shouldShowBlock("contacto", answers) && (
        <div className="space-y-6 animate-fade-in pt-4 border-t border-slate-100">
          <div>
            <label className={labelClasses}>Nombre</label>
            <input
              type="text"
              value={answers.nombre ?? ""}
              onChange={(e) => updateAnswer("nombre", e.target.value)}
              required
              placeholder="Tu nombre"
              className={inputClasses}
            />
          </div>
          <div>
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
          <div>
            <label className={labelClasses}>Teléfono</label>
            <input
              type="tel"
              value={answers.telefono ?? ""}
              onChange={(e) => updateAnswer("telefono", e.target.value)}
              placeholder="+52 55 1234 5678"
              className={inputClasses}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm bg-red-50 p-3 rounded-md">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-10 rounded-lg font-bold text-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? "Enviando..." : "Enviar diagnóstico"}
          </button>
        </div>
      )}

      {!shouldShowBlock("contacto", answers) && (
        <p className="text-slate-500 text-sm italic">
          Responde las preguntas para continuar al formulario de contacto.
        </p>
      )}
    </form>
  );
}
