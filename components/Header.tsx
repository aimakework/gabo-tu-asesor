import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/85 backdrop-blur-md border-b border-black/5">
      <div className="flex justify-between items-center px-6 py-5 max-w-[1200px] mx-auto">
        <Link
          href="#"
          className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-primary)] no-underline tracking-tight font-semibold"
        >
          Gabo <span className="font-normal text-[var(--color-text-muted)]">Tu Asesor</span>
        </Link>
      </div>
    </header>
  );
}
