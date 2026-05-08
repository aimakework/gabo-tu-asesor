export type FormAnswers = Record<string, string>;

export const CONTACT = {
  whatsapp: "5522127111",
  whatsappDisplay: "55 2212 7111",
  email: "yosoy@gabotuasesor.mx",
  zoomUrl: "TODO_ZOOM_URL",
  sisecUrl:
    "https://serviciosdigitales.imss.gob.mx/semanascotizadas-web/usuarios/IngresoAsegurado",
};

export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "date"
  | "radio"
  | "select"
  | "scale-letter"
  | "textarea";

export interface FieldOption {
  value: string;
  label: string;
}

export interface ScaleOption {
  value: "a" | "b" | "c" | "d" | "e";
  label: string;
}

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  hint?: string;
  required?: boolean;
  options?: FieldOption[];
  scaleOptions?: ScaleOption[];
  showIf?: (answers: FormAnswers) => boolean;
  validate?: (value: string) => string | null;
}

const validateEmail = (v: string): string | null => {
  if (!v) return null;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
    ? null
    : "Ingresa un correo válido (ej: nombre@dominio.com)";
};

const validateTel = (v: string): string | null => {
  if (!v) return null;
  const digits = v.replace(/\D/g, "");
  if (digits.length < 10) return "El teléfono debe tener al menos 10 dígitos";
  if (digits.length > 13) return "El teléfono es demasiado largo";
  return null;
};

export interface FormBlock {
  id: string;
  title?: string;
  description?: string;
  showIf?: (answers: FormAnswers) => boolean;
  fields: FormField[];
}

const SCALE_PREOCUPADO: ScaleOption[] = [
  { value: "a", label: "Nada preocupado" },
  { value: "b", label: "Poco preocupado" },
  { value: "c", label: "Preocupado" },
  { value: "d", label: "Algo preocupado" },
  { value: "e", label: "Muy preocupado" },
];

const SCALE_INTERESADO: ScaleOption[] = [
  { value: "a", label: "Nada interesado" },
  { value: "b", label: "Poco interesado" },
  { value: "c", label: "Interesado" },
  { value: "d", label: "Algo interesado" },
  { value: "e", label: "Muy interesado" },
];

export const formSchema: FormBlock[] = [
  {
    id: "identidad",
    title: "Empecemos por lo básico",
    description:
      "Soy Gabo. Para entender cómo puedo ayudarte, necesito conocerte un poco. Toda la información es confidencial.",
    fields: [
      {
        id: "nombre",
        type: "text",
        label: "¿Cuál es tu nombre completo?",
        placeholder: "Nombre y apellidos",
        required: true,
      },
      {
        id: "telefono",
        type: "tel",
        label: "Teléfono",
        placeholder: "10 dígitos",
        required: true,
        validate: validateTel,
      },
      {
        id: "email",
        type: "email",
        label: "Correo electrónico",
        placeholder: "tu@email.com",
        required: true,
        validate: validateEmail,
      },
    ],
  },
  {
    id: "perfil",
    title: "Cuéntame un poco de ti",
    fields: [
      {
        id: "ocupacion",
        type: "text",
        label: "¿A qué te dedicas?",
        placeholder: "Tu profesión u ocupación",
        required: true,
      },
      {
        id: "tiempoLibre",
        type: "text",
        label: "¿Qué te gusta hacer en tu tiempo libre?",
        placeholder: "Hobbies, deportes, intereses",
      },
      {
        id: "fechaNacimiento",
        type: "date",
        label: "¿Cuándo naciste?",
        required: true,
      },
      {
        id: "lugarNacimiento",
        type: "text",
        label: "¿En dónde naciste?",
        placeholder: "Ciudad y estado",
      },
      {
        id: "domicilio",
        type: "text",
        label: "¿Actualmente en dónde vives?",
        placeholder: "Estado, ciudad, colonia",
        required: true,
      },
    ],
  },
  {
    id: "personal",
    title: "Datos personales",
    fields: [
      {
        id: "fuma",
        type: "radio",
        label: "¿Fumas?",
        required: true,
        options: [
          { value: "si", label: "Sí" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "estadoCivil",
        type: "select",
        label: "Estado civil",
        required: true,
        options: [
          { value: "soltero", label: "Soltero(a)" },
          { value: "casado", label: "Casado(a)" },
          { value: "union_libre", label: "Unión libre" },
          { value: "divorciado", label: "Divorciado(a)" },
          { value: "viudo", label: "Viudo(a)" },
        ],
      },
      {
        id: "dependientes",
        type: "radio",
        label:
          "¿Tienes hijos o hay alguien que dependa económicamente de ti?",
        required: true,
        options: [
          { value: "si", label: "Sí" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "dependientesDetalle",
        type: "textarea",
        label: "¿Cuántos son y qué edad tienen?",
        placeholder: "Ej: 2 hijos (8 y 12 años), pareja",
        showIf: (a) => a.dependientes === "si",
        required: true,
      },
    ],
  },
  {
    id: "escala",
    title: "Califica los siguientes temas según tu interés",
    description: "Selecciona la opción que mejor te describa.",
    fields: [
      {
        id: "p1",
        type: "scale-letter",
        label: "Me preocupa tener recursos suficientes para mi vejez.",
        required: true,
        scaleOptions: SCALE_PREOCUPADO,
      },
      {
        id: "p2",
        type: "scale-letter",
        label: "Quiero saber más sobre estrategias de ahorro para el retiro.",
        required: true,
        scaleOptions: SCALE_INTERESADO,
      },
      {
        id: "p3",
        type: "scale-letter",
        label:
          "Tengo entre 45 y 50 años y quiero saber si soy candidato a una estrategia de ahorro para topar mi pensión.",
        required: true,
        scaleOptions: SCALE_PREOCUPADO,
      },
    ],
  },
  {
    id: "interesAbierto",
    title: "Cuéntame más",
    description: "Ok, platícame qué despertó tu interés:",
    showIf: (a) => computeMaxScore(a) === "b",
    fields: [
      {
        id: "detalleInteres",
        type: "textarea",
        label: "Tu respuesta",
        placeholder: "Escribe lo que se te venga a la mente...",
      },
    ],
  },
  {
    id: "seguridadSocial",
    title: "Datos de tu seguridad social",
    description:
      "Es importante saber qué datos nos da tu constancia de semanas cotizadas (actualizada, no mayor a 15 días). Si no la tienes, puedes solicitarla gratis en el SISEC del IMSS.",
    showIf: (a) => ["c", "d", "e"].includes(a.p3 ?? ""),
    fields: [
      {
        id: "fechaAlta",
        type: "date",
        label: "¿Cuándo te diste de alta ante el IMSS?",
      },
      {
        id: "cotizandoActualmente",
        type: "radio",
        label: "¿Actualmente estás cotizando?",
        required: true,
        options: [
          { value: "si", label: "Sí" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "ultimaBaja",
        type: "date",
        label:
          "Si la respuesta es no, ¿cuándo fue tu última baja de una relación patronal subordinada?",
        showIf: (a) => a.cotizandoActualmente === "no",
      },
      {
        id: "semanasCotizadas",
        type: "text",
        label: "¿Cuántas semanas tienes cotizadas?",
        placeholder: "Ej: 850",
      },
      {
        id: "gastosFijos",
        type: "text",
        label: "¿A cuánto ascienden tus gastos fijos mensuales?",
        placeholder: "Ej: $25,000",
      },
    ],
  },
];

function isFieldComplete(field: FormField, answers: FormAnswers): boolean {
  if (field.showIf && !field.showIf(answers)) return true;
  const v = answers[field.id] ?? "";
  if (field.required && v.trim().length === 0) return false;
  if (field.validate && v.trim().length > 0 && field.validate(v) !== null)
    return false;
  return true;
}

export function getFieldError(
  field: FormField,
  answers: FormAnswers
): string | null {
  if (field.showIf && !field.showIf(answers)) return null;
  const v = answers[field.id] ?? "";
  if (field.required && v.trim().length === 0) return "Este campo es requerido";
  if (field.validate && v.trim().length > 0) return field.validate(v);
  return null;
}

export function isBlockComplete(
  block: FormBlock,
  answers: FormAnswers
): boolean {
  return block.fields.every((f) => isFieldComplete(f, answers));
}

const SCORE_RANK: Record<string, number> = { a: 0, b: 1, c: 2, d: 3, e: 4 };

export function computeMaxScore(a: FormAnswers): "a" | "b" | "c" | "d" | "e" | null {
  const vals = ["p1", "p2", "p3"]
    .map((k) => a[k])
    .filter((v): v is string => !!v && v in SCORE_RANK);
  if (vals.length < 3) return null;
  return vals.reduce((max, v) =>
    SCORE_RANK[v] > SCORE_RANK[max] ? v : max
  ) as "a" | "b" | "c" | "d" | "e";
}

export type Outcome =
  | { kind: "no-momento" }
  | { kind: "agenda-zoom"; tono: "neutral" | "entusiasta" }
  | { kind: "constancia" };

export function computeOutcome(a: FormAnswers): Outcome | null {
  const max = computeMaxScore(a);
  if (!max) return null;

  if (max === "a") return { kind: "no-momento" };

  if (max === "b") {
    const detalle = (a.detalleInteres ?? "").trim();
    if (!detalle) return { kind: "no-momento" };
    return { kind: "agenda-zoom", tono: "neutral" };
  }

  // c, d, e
  if (["c", "d", "e"].includes(a.p3 ?? "")) {
    return { kind: "constancia" };
  }
  return { kind: "agenda-zoom", tono: "entusiasta" };
}

export function isFormReadyToSubmit(a: FormAnswers): boolean {
  for (const block of formSchema) {
    if (block.showIf && !block.showIf(a)) continue;
    if (!isBlockComplete(block, a)) return false;
  }
  return true;
}
