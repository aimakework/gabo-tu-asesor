"use client";

import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export default function Header() {
  const { openModal } = useModal();

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-5 max-w-7xl mx-auto">
        <Link
          href="#"
          className="relative h-10 w-40 block"
        >
          <Image
            src="/logo.png"
            alt="Gabo Tu Asesor"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-500 tracking-wide uppercase">
          <Link href="#about" className="hover:text-slate-900 transition-colors">
            Sobre mí
          </Link>
          <Link href="#process" className="hover:text-slate-900 transition-colors">
            Proceso
          </Link>
          <button 
            onClick={openModal}
            className="px-6 py-3 bg-slate-900 text-white hover:bg-[#F4B123] transition-colors duration-300"
          >
            Iniciar Diagnóstico
          </button>
        </nav>
      </div>
    </header>
  );
}
