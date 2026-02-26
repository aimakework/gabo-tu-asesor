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
        <p className="text-xl text-white/90 leading-relaxed">
          {getResultMessage(answers)}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8">
      {/* Bloque 1: Perfil básico */}
      <div className="space-y-4">
        <label className="block text-white/90 font-medium">
          Rango de ingresos mensuales (MXN)
        </label>
        <select
          value={answers.ingresos ?? ""}
          onChange={(e) => updateAnswer("ingresos", e.target.value)}
          required
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        >
          <option value="">Selecciona...</option>
          <option value="55-80k">$55,000 - $80,000</option>
          <option value="80-120k">$80,000 - $120,000</option>
          <option value="120-200k">$120,000 - $200,000</option>
          <option value="200k+">Más de $200,000</option>
        </select>
      </div>

      <div className="space-y-4">
        <label className="block text-white/90 font-medium">
          Situación laboral
        </label>
        <select
          value={answers.situacion ?? ""}
          onChange={(e) => updateAnswer("situacion", e.target.value)}
          required
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        >
          <option value="">Selecciona...</option>
          <option value="empleado">Empleado</option>
          <option value="freelance">Freelance / Independiente</option>
          <option value="mixto">Mixto (empleado + ingresos propios)</option>
        </select>
      </div>

      <div className="space-y-4">
        <label className="block text-white/90 font-medium">
          ¿Eres cabeza de familia?
        </label>
        <select
          value={answers.cabezaFamilia ?? ""}
          onChange={(e) => updateAnswer("cabezaFamilia", e.target.value)}
          required
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        >
          <option value="">Selecciona...</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Bloque 2: Inversiones (condicional) */}
      {shouldShowBlock("inversiones", answers) && (
        <div className="space-y-4 animate-fade-in">
          <label className="block text-white/90 font-medium">
            ¿Tienes inversiones actuales?
          </label>
          <select
            value={answers.inversiones ?? ""}
            onChange={(e) => updateAnswer("inversiones", e.target.value)}
            required
            className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          >
            <option value="">Selecciona...</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
      )}

      {/* Bloque 2b: Modalidad 40 (condicional) */}
      {shouldShowBlock("modalidad40", answers) && (
        <div className="space-y-4 animate-fade-in">
          <label className="block text-white/90 font-medium">
            ¿Conoces la Modalidad 40?
          </label>
          <select
            value={answers.modalidad40 ?? ""}
            onChange={(e) => updateAnswer("modalidad40", e.target.value)}
            required
            className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          >
            <option value="">Selecciona...</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
            <option value="no_se">No sé</option>
          </select>
        </div>
      )}

      {/* Bloque 3: Objetivos */}
      {shouldShowBlock("objetivos", answers) && (
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-4">
            <label className="block text-white/90 font-medium">
              Prioridad principal
            </label>
            <select
              value={answers.prioridad ?? ""}
              onChange={(e) => updateAnswer("prioridad", e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            >
              <option value="">Selecciona...</option>
              <option value="retiro">Retiro</option>
              <option value="fiscal">Optimización fiscal</option>
              <option value="control">Control financiero</option>
              <option value="varios">Varios</option>
            </select>
          </div>
          <div className="space-y-4">
            <label className="block text-white/90 font-medium">
              Horizonte de planeación
            </label>
            <select
              value={answers.horizonte ?? ""}
              onChange={(e) => updateAnswer("horizonte", e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
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
        <div className="space-y-6 animate-fade-in pt-4">
          <div className="space-y-4">
            <label className="block text-white/90 font-medium">Nombre</label>
            <input
              type="text"
              value={answers.nombre ?? ""}
              onChange={(e) => updateAnswer("nombre", e.target.value)}
              required
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-white/90 font-medium">Email</label>
            <input
              type="email"
              value={answers.email ?? ""}
              onChange={(e) => updateAnswer("email", e.target.value)}
              required
              placeholder="tu@email.com"
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-white/90 font-medium">Teléfono</label>
            <input
              type="tel"
              value={answers.telefono ?? ""}
              onChange={(e) => updateAnswer("telefono", e.target.value)}
              placeholder="+52 55 1234 5678"
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />
          </div>
          {error && (
            <p className="text-red-300 text-sm">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-10 rounded-md font-medium bg-[var(--color-accent)] text-white shadow-[0_10px_30px_-10px_rgba(197,160,101,0.5)] hover:bg-[#b08f54] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Enviar diagnóstico"}
          </button>
        </div>
      )}

      {!shouldShowBlock("contacto", answers) && (
        <p className="text-white/70 text-sm">
          Responde las preguntas para continuar al formulario de contacto.
        </p>
      )}
    </form>
  );
}
