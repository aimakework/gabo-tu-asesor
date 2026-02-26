import DynamicForm from "./DynamicForm";

export default function CTAFinal() {
  return (
    <section
      id="form"
      className="py-24 md:py-32 bg-[var(--color-primary)] text-white text-center border-t-4 border-[var(--color-accent)] scroll-mt-20"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-4">
          ¿Listo para tener claridad financiera?
        </h2>
        <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Toma 5-7 minutos para el formulario. Si tu perfil encaja, podrás
          agendar una sesión privada.
        </p>
        <DynamicForm />
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/50">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="shrink-0"
          >
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
          <span>Tu información es 100% confidencial y segura.</span>
        </div>
      </div>
    </section>
  );
}
