export type FormAnswers = Record<string, string>;

export function shouldShowBlock(
  blockId: string,
  answers: FormAnswers
): boolean {
  if (blockId === "perfil") return true;
  if (blockId === "objetivos") return !!answers.ingresos && !!answers.situacion;
  if (blockId === "inversiones") {
    const ingresosVal = answers.ingresos;
    return ingresosVal === "120-200k" || ingresosVal === "200k+";
  }
  if (blockId === "modalidad40") {
    const situacion = answers.situacion;
    return situacion === "freelance" || situacion === "mixto";
  }
  if (blockId === "contacto") {
    const hasObjetivos = !!answers.prioridad && !!answers.horizonte;
    const hasInversiones =
      !shouldShowBlock("inversiones", answers) ||
      !!answers.inversiones;
    const hasModalidad =
      !shouldShowBlock("modalidad40", answers) || !!answers.modalidad40;
    return hasObjetivos && hasInversiones && hasModalidad;
  }
  return false;
}

export function getResultMessage(answers: FormAnswers): string {
  const ingresos = answers.ingresos;
  const prioridad = answers.prioridad;
  if (
    (ingresos === "120-200k" || ingresos === "200k+") &&
    (prioridad === "retiro" || prioridad === "fiscal" || prioridad === "varios")
  ) {
    return "Tu perfil encaja con nuestro enfoque. Te contactaremos en las próximas 48 horas para agendar tu sesión privada.";
  }
  return "Gracias por completar el diagnóstico. Revisaremos tu información y nos pondremos en contacto si detectamos una oportunidad de valor para ti.";
}
