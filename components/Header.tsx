import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link
          href="#"
          className="flex items-center gap-2 group"
        >
          <div className="relative h-12 w-48">
            <Image
              src="/logo.png"
              alt="Gabo Tu Asesor"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#about" className="hover:text-slate-900 transition-colors">
            Sobre mí
          </Link>
          <Link href="#process" className="hover:text-slate-900 transition-colors">
            Proceso
          </Link>
          <Link 
            href="#form" 
            className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 transform duration-200"
          >
            Iniciar Diagnóstico
          </Link>
        </nav>
      </div>
    </header>
  );
}
