"use client";

import { useMemo, useState } from "react";
import {
  CONTACT,
  computeOutcome,
  formSchema,
  isFormReadyToSubmit,
  type FormAnswers,
  type FormBlock,
  type FormField,
  type Outcome,
} from "@/lib/form-rules";

interface DynamicFormProps {
  onSuccess?: () => void;
}

export default function DynamicForm({ onSuccess }: DynamicFormProps) {
  const [answers, setAnswers] = useState<FormAnswers>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setError(null);
  };

  const visibleBlocks = useMemo(
    () => formSchema.filter((b) => !b.showIf || b.showIf(answers)),
    [answers]
  );

  const ready = useMemo(() => isFormReadyToSubmit(answers), [answers]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready) return;
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
        setTimeout(onSuccess, 12000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <OutcomeScreen outcome={computeOutcome(answers)} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {visibleBlocks.map((block) => (
        <BlockRenderer
          key={block.id}
          block={block}
          answers={answers}
          onChange={updateAnswer}
        />
      ))}

      {error && (
        <p className="text-red-500 text-sm bg-red-50 p-3 rounded-md">{error}</p>
      )}

      <div className="pt-4">
        {ready ? (
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-10 rounded-xl font-bold text-lg bg-[#0f172a] text-white shadow-lg hover:bg-[#1e293b] hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? "Procesando..." : "Enviar diagnóstico"}
          </button>
        ) : (
          <p className="text-slate-400 text-sm italic text-center">
            Completa los campos para continuar...
          </p>
        )}
      </div>
    </form>
  );
}

function BlockRenderer({
  block,
  answers,
  onChange,
}: {
  block: FormBlock;
  answers: FormAnswers;
  onChange: (k: string, v: string) => void;
}) {
  return (
    <section className="animate-fade-in space-y-6">
      {block.title && (
        <header className="border-b border-slate-100 pb-3">
          <h4 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#0f172a]">
            {block.title}
          </h4>
          {block.description && (
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              {block.description}
            </p>
          )}
        </header>
      )}
      <div className="space-y-6">
        {block.fields
          .filter((f) => !f.showIf || f.showIf(answers))
          .map((field) => (
            <FieldRenderer
              key={field.id}
              field={field}
              value={answers[field.id] ?? ""}
              onChange={(v) => onChange(field.id, v)}
            />
          ))}
      </div>
    </section>
  );
}

const inputClasses =
  "w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#F4B123] transition-colors font-medium text-lg";
const labelClasses =
  "block text-slate-500 text-sm uppercase tracking-wider font-bold mb-1";
const selectClasses =
  "w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 text-[#0f172a] focus:outline-none focus:border-[#F4B123] transition-colors font-medium text-lg cursor-pointer appearance-none";

function FieldRenderer({
  field,
  value,
  onChange,
}: {
  field: FormField;
  value: string;
  onChange: (v: string) => void;
}) {
  const { type, label, placeholder, required, options, scaleOptions, hint } =
    field;

  if (type === "text" || type === "email" || type === "tel" || type === "date") {
    return (
      <div>
        <label className={labelClasses}>{label}</label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          className={inputClasses}
        />
        {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div>
        <label className={labelClasses}>{label}</label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          rows={3}
          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#F4B123] focus:bg-white transition-colors font-medium text-base resize-y"
        />
      </div>
    );
  }

  if (type === "radio" && options) {
    return (
      <div>
        <label className={labelClasses}>{label}</label>
        <div className="flex flex-wrap gap-6 mt-3">
          {options.map((opt) => {
            const checked = value === opt.value;
            return (
              <label
                key={opt.value}
                className="flex items-center gap-3 cursor-pointer group/radio"
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    checked
                      ? "border-[#F4B123]"
                      : "border-slate-300 group-hover/radio:border-slate-400"
                  }`}
                >
                  {checked && (
                    <div className="w-3 h-3 rounded-full bg-[#F4B123]" />
                  )}
                </div>
                <input
                  type="radio"
                  name={field.id}
                  value={opt.value}
                  checked={checked}
                  onChange={(e) => onChange(e.target.value)}
                  required={required}
                  className="hidden"
                />
                <span className="text-base text-[#0f172a]">{opt.label}</span>
              </label>
            );
          })}
        </div>
      </div>
    );
  }

  if (type === "select" && options) {
    return (
      <div>
        <label className={labelClasses}>{label}</label>
        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className={selectClasses}
          >
            <option value="" disabled>
              Selecciona...
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <ChevronDown />
          </div>
        </div>
      </div>
    );
  }

  if (type === "scale-letter" && scaleOptions) {
    return (
      <div>
        <p className="text-base font-semibold text-[#0f172a] mb-3 leading-snug">
          {label}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {scaleOptions.map((opt) => {
            const checked = value === opt.value;
            return (
              <label
                key={opt.value}
                className={`cursor-pointer rounded-lg border-2 px-3 py-3 text-center transition-all text-sm ${
                  checked
                    ? "border-[#F4B123] bg-[#F4B123]/10 text-[#0f172a] font-bold"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name={field.id}
                  value={opt.value}
                  checked={checked}
                  onChange={(e) => onChange(e.target.value)}
                  required={required}
                  className="hidden"
                />
                <span className="block text-xs uppercase tracking-wide opacity-60 mb-1">
                  {opt.value})
                </span>
                <span className="block leading-tight">{opt.label}</span>
              </label>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}

function ChevronDown() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

function OutcomeScreen({ outcome }: { outcome: Outcome | null }) {
  if (!outcome) return null;

  const waLink = `https://wa.me/52${CONTACT.whatsapp}`;
  const checkIcon = (
    <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in">
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );

  if (outcome.kind === "no-momento") {
    return (
      <div className="text-center py-8 animate-fade-in">
        {checkIcon}
        <h3 className="text-3xl font-[family-name:var(--font-heading)] font-bold text-[#0f172a] mb-4">
          Gracias por tu tiempo
        </h3>
        <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
          Entiendo, quizá no sea tu momento. Te sugiero que estés pendiente de
          las transmisiones en vivo de mis redes. Cualquier duda te puedo
          atender por llamada o WhatsApp.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-3 px-8 rounded-xl font-bold bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
        >
          WhatsApp {CONTACT.whatsappDisplay}
        </a>
      </div>
    );
  }

  if (outcome.kind === "agenda-zoom") {
    const headline =
      outcome.tono === "entusiasta"
        ? "¡Excelente!"
        : "Bien, veo que es importante aclarar varias cosas";
    const sub =
      outcome.tono === "entusiasta"
        ? "Reserva tu cita por Zoom para platicar a detalle."
        : "Quiero asegurarme de resolver tus dudas a detalle. Reserva tu cita por Zoom.";
    return (
      <div className="text-center py-8 animate-fade-in">
        {checkIcon}
        <h3 className="text-3xl font-[family-name:var(--font-heading)] font-bold text-[#0f172a] mb-3">
          {headline}
        </h3>
        <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
          {sub}
        </p>
        <a
          href={CONTACT.zoomUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-4 px-10 rounded-xl font-bold text-lg bg-[#0f172a] text-white shadow-lg hover:bg-[#1e293b] hover:shadow-xl transition-all"
        >
          Reservar cita por Zoom
        </a>
      </div>
    );
  }

  // constancia
  return (
    <div className="text-center py-8 animate-fade-in">
      {checkIcon}
      <h3 className="text-3xl font-[family-name:var(--font-heading)] font-bold text-[#0f172a] mb-4">
        ¡Muy bien! Con estos datos ya puedo empezar a trabajar
      </h3>
      <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
        Por favor compárteme tu constancia de semanas cotizadas al correo:
      </p>
      <a
        href={`mailto:${CONTACT.email}?subject=Constancia%20de%20semanas%20cotizadas`}
        className="inline-block py-3 px-6 rounded-xl font-bold text-lg bg-[#F4B123] text-[#0f172a] shadow-lg hover:shadow-xl transition-all mb-4"
      >
        {CONTACT.email}
      </a>
      <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto mt-2">
        En 48 horas o menos te contactaré para avisarte si eres candidato para
        una estrategia y si vale la pena o no continuar.
      </p>
      <p className="text-xs text-slate-400 italic mt-4 max-w-md mx-auto">
        Si tienes problemas para descargar tu constancia, avísame. Puedo
        ayudarte.
      </p>
    </div>
  );
}
