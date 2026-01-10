import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Así Pensamos — Experial',
  description: 'Nuestro marco mental para resolver problemas digitales. Antes de diseñar o medir, cambiamos la forma de pensar.',
};

export default function Pensamos() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              Así pensamos
            </h1>
            <p className="mt-6 text-xl text-muted">
              Antes de diseñar o medir, cambiamos el marco mental.
              Estas ideas guían cómo abordamos cada problema.
            </p>
          </div>

          {/* Articles */}
          <div className="mt-20 space-y-24">
            {/* Article 1 */}
            <article id="datos-claridad" className="scroll-mt-32">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                  Tener datos no es tener claridad
                </h2>
                <div className="mt-8 space-y-6 text-lg text-muted">
                  <p>
                    La mayoría de los founders que nos contactan tienen acceso a más datos de los que pueden procesar. Google Analytics, métricas de redes sociales, reportes de campañas, datos de CRM.
                  </p>
                  <p>
                    El problema no es la cantidad. Es que nadie les enseñó a conectar esos números con decisiones de negocio.
                  </p>
                  <p>
                    Un dashboard con 50 métricas no te dice qué hacer mañana. Te paraliza. Te hace sentir que deberías entender algo que en realidad no importa.
                  </p>
                  <p className="font-medium text-foreground">
                    Claridad no es tener más datos. Es saber cuáles ignorar.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article id="dashboards" className="scroll-mt-32 pt-16 border-t border-foreground/10">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                  Por qué más dashboards no ayudan
                </h2>
                <div className="mt-8 space-y-6 text-lg text-muted">
                  <p>
                    Cada vez que un cliente nos pide un dashboard, preguntamos: ¿qué decisión vas a tomar con esa información?
                  </p>
                  <p>
                    La respuesta suele ser silencio. O peor: "para estar informado".
                  </p>
                  <p>
                    Un dashboard es una herramienta de monitoreo, no de decisión. Si no sabés qué hacer cuando un número sube o baja, el dashboard es decoración.
                  </p>
                  <p>
                    Lo que necesitás no es más visualización. Es alguien que interprete y priorice por vos.
                  </p>
                  <p className="font-medium text-foreground">
                    No construimos dashboards. Construimos criterio.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article id="decisiones" className="scroll-mt-32 pt-16 border-t border-foreground/10">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                  De datos a decisiones
                </h2>
                <div className="mt-8 space-y-6 text-lg text-muted">
                  <p>
                    El camino de datos a decisiones tiene tres pasos que nadie te muestra:
                  </p>
                  <ol className="space-y-4 pl-6 list-decimal">
                    <li>
                      <span className="font-medium text-foreground">Filtrar:</span> El 90% de los datos que tenés no importan para tu decisión actual. Hay que descartar primero.
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Interpretar:</span> Un número sin contexto no significa nada. ¿Es bueno o malo? ¿Comparado con qué? ¿Por qué?
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Priorizar:</span> Incluso cuando sabés qué está mal, tenés que elegir qué arreglar primero. No todo tiene el mismo impacto.
                    </li>
                  </ol>
                  <p className="font-medium text-foreground">
                    Nuestro trabajo es recorrer ese camino por vos y devolverte el resultado.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article id="como-trabajamos" className="scroll-mt-32 pt-16 border-t border-foreground/10">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                  Cómo trabaja Experial
                </h2>
                <div className="mt-8 space-y-6 text-lg text-muted">
                  <p>
                    No somos consultores que te dejan un PDF de 80 páginas. No somos una agencia que te vende horas de ejecución.
                  </p>
                  <p>
                    Somos un equipo que analiza tu situación digital completa, interpreta qué está pasando, y te devuelve un diagnóstico claro con decisiones priorizadas.
                  </p>
                  <p>
                    El formato es simple:
                  </p>
                  <ul className="space-y-3 pl-6">
                    <li className="relative before:absolute before:left-[-1.5rem] before:content-['1.']">
                      Accedemos a tus herramientas y datos actuales
                    </li>
                    <li className="relative before:absolute before:left-[-1.5rem] before:content-['2.']">
                      Analizamos con criterio de negocio, no de marketing
                    </li>
                    <li className="relative before:absolute before:left-[-1.5rem] before:content-['3.']">
                      Te entregamos 3–5 decisiones ordenadas por impacto
                    </li>
                  </ul>
                  <p className="font-medium text-foreground">
                    Sin dependencia. Sin cursos. Sin vueltas.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* CTA */}
          <div className="mt-24 pt-16 border-t border-foreground/10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium">
                ¿Te identificás con estos problemas?
              </h2>
              <p className="mt-4 text-lg text-muted">
                El Diagnóstico de Claridad Digital está diseñado para founders como vos.
              </p>
              <Link
                href="/contacto"
                className="inline-block mt-8 bg-foreground text-background px-8 py-4 text-base font-medium hover:bg-foreground/90 transition-colors"
              >
                Pedir diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
