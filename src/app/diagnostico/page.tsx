import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Diagnóstico de Claridad Digital — Experial',
  description: 'Un análisis puntual que convierte tu presencia digital y tus datos actuales en 3–5 decisiones claras y accionables.',
};

export default function Diagnostico() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Nuestro producto
            </p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              Diagnóstico de Claridad Digital
            </h1>
            <p className="mt-6 text-xl text-muted">
              Un análisis puntual que convierte tu presencia digital y tus datos actuales en 3–5 decisiones claras y accionables.
            </p>
          </div>

          {/* Problema */}
          <section className="mt-20 pt-16 border-t border-foreground/10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                  El problema
                </h2>
              </div>
              <div className="space-y-6 text-lg text-muted">
                <p>
                  Invertís en marketing digital. Tenés web, campañas, métricas.
                </p>
                <p>
                  Pero cuando te preguntás "¿esto funciona?" o "¿qué debería cambiar?", no tenés una respuesta clara.
                </p>
                <p>
                  No es falta de datos. Es falta de interpretación y priorización.
                </p>
                <p className="font-medium text-foreground">
                  Necesitás alguien que piense por vos y te diga qué hacer.
                </p>
              </div>
            </div>
          </section>

          {/* Qué es */}
          <section className="mt-20 pt-16 border-t border-foreground/10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                  Qué es el diagnóstico
                </h2>
              </div>
              <div className="space-y-6 text-lg text-muted">
                <p>
                  Es un análisis completo de tu presencia digital actual: sitio web, campañas activas, métricas existentes, posicionamiento.
                </p>
                <p>
                  No es un reporte técnico de 80 páginas. Es un documento claro con las decisiones que tenés que tomar, ordenadas por impacto.
                </p>
                <p className="font-medium text-foreground">
                  Pensamos por vos y te devolvemos foco.
                </p>
              </div>
            </div>
          </section>

          {/* Cómo trabajamos */}
          <section className="mt-20 pt-16 border-t border-foreground/10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                  Cómo trabajamos
                </h2>
              </div>
              <div>
                <ol className="space-y-8">
                  <li className="flex gap-6">
                    <span className="text-2xl font-medium text-accent">01</span>
                    <div>
                      <h3 className="text-lg font-medium">Acceso</h3>
                      <p className="mt-2 text-muted">
                        Nos das acceso a tus herramientas actuales: Analytics, Search Console, plataformas de ads, CRM si tenés.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="text-2xl font-medium text-accent">02</span>
                    <div>
                      <h3 className="text-lg font-medium">Análisis</h3>
                      <p className="mt-2 text-muted">
                        Revisamos todo con criterio de negocio, no de marketing. Filtramos lo que importa, descartamos ruido.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="text-2xl font-medium text-accent">03</span>
                    <div>
                      <h3 className="text-lg font-medium">Diagnóstico</h3>
                      <p className="mt-2 text-muted">
                        Te entregamos un documento con 3–5 decisiones claras, priorizadas por impacto, con el razonamiento detrás.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="text-2xl font-medium text-accent">04</span>
                    <div>
                      <h3 className="text-lg font-medium">Llamada</h3>
                      <p className="mt-2 text-muted">
                        Revisamos juntos el diagnóstico, respondemos preguntas, y te dejamos listo para actuar.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Qué entregamos */}
          <section className="mt-20 pt-16 border-t border-foreground/10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                  Qué entregamos
                </h2>
              </div>
              <div>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-4">
                    <span className="text-accent mt-1">→</span>
                    <span>Prioridades claras: qué tocar ahora</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent mt-1">→</span>
                    <span>Qué no tocar (igual de importante)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent mt-1">→</span>
                    <span>El razonamiento detrás de cada decisión</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent mt-1">→</span>
                    <span>Sin dashboards que no vas a usar</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent mt-1">→</span>
                    <span>Sin cursos que no vas a ver</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent mt-1">→</span>
                    <span>Sin dependencia de nosotros</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Para quién sí / no */}
          <section className="mt-20 pt-16 border-t border-foreground/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-foreground/10">
                <h3 className="text-xl font-medium mb-6">Para quién sí</h3>
                <ul className="space-y-4 text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-foreground">✓</span>
                    Founders de pymes B2B o servicios
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground">✓</span>
                    Ya invertís en marketing digital
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground">✓</span>
                    Tenés web y alguna métrica
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground">✓</span>
                    Sentís que algo no funciona pero no sabés qué
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground">✓</span>
                    No querés aprender herramientas, querés resultados
                  </li>
                </ul>
              </div>
              <div className="p-8 border border-foreground/10">
                <h3 className="text-xl font-medium mb-6">Para quién no</h3>
                <ul className="space-y-4 text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">×</span>
                    Startups sin tracción todavía
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">×</span>
                    Empresas que buscan ejecución mensual
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">×</span>
                    Quienes quieren un dashboard bonito
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">×</span>
                    Quienes buscan resultados mágicos sin trabajo
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 pt-16 border-t border-foreground/10">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                ¿Listo para tener claridad?
              </h2>
              <p className="mt-6 text-lg text-muted">
                Contanos sobre tu situación actual y te decimos si el diagnóstico es para vos.
              </p>
              <Link
                href="/contacto"
                className="inline-block mt-8 bg-foreground text-background px-8 py-4 text-base font-medium hover:bg-foreground/90 transition-colors"
              >
                Pedir diagnóstico
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
