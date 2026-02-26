import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 text-center text-sm text-[var(--color-text-muted)] bg-white border-t border-slate-100">
      <div className="max-w-[1000px] mx-auto px-6">
        <p>© 2024 Gabo Tu Asesor. Consultoría Financiera Estratégica.</p>
        <br />
        <Link
          href="#"
          className="text-inherit underline text-[0.8rem] hover:text-[var(--color-primary)]"
        >
          Aviso de Privacidad
        </Link>
      </div>
    </footer>
  );
}
