"use client";

import { useModal } from "@/context/ModalContext";

export default function MobileStickyButton() {
  const { openModal } = useModal();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-[999] pb-[max(1rem,env(safe-area-inset-bottom))]">
      <button
        onClick={openModal}
        className="block w-full py-4 text-center font-medium rounded-md bg-[var(--color-accent)] text-white shadow-[0_10px_30px_-10px_rgba(244,177,35,0.4)] hover:opacity-90 transition-opacity"
      >
        Iniciar diagnóstico
      </button>
    </div>
  );
}
