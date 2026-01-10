import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium tracking-tight">
                Experial
              </span>
              <span className="w-2 h-2 bg-accent rounded-full" />
            </Link>
            <p className="text-sm text-muted mt-4 max-w-xs">
              Claridad digital para founders que invierten en marketing pero deciden a ciegas.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-sm font-medium mb-4">Navegación</h4>
              <div className="flex flex-col gap-3">
                <Link href="/pensamos" className="text-sm text-muted hover:text-foreground transition-colors">
                  Así pensamos
                </Link>
                <Link href="/diagnostico" className="text-sm text-muted hover:text-foreground transition-colors">
                  Diagnóstico
                </Link>
                <Link href="/contacto" className="text-sm text-muted hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} Experial. Todos los derechos reservados.</p>
          <p>Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
}
