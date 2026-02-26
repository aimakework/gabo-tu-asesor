"use client";

import { useEffect, useState } from "react";
import { useModal } from "@/context/ModalContext";
import DynamicForm from "./DynamicForm";

export default function FormModal() {
  const { isOpen, closeModal } = useModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setVisible(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="bg-[#0f172a] px-8 py-6 flex justify-between items-center">
          <div>
            <h3 className="text-white font-[family-name:var(--font-heading)] text-2xl font-bold">
              Diagnóstico Financiero
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Confidencial y exclusivo.
            </p>
          </div>
          <button
            onClick={closeModal}
            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <DynamicForm onSuccess={closeModal} />
        </div>
      </div>
    </div>
  );
}
