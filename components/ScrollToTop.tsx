"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Al cargar/recargar, ir al hero (arriba) y quitar hash para evitar scroll automático
    window.scrollTo(0, 0);
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return null;
}
