'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    web: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    const mailtoLink = `mailto:hola@experial.la?subject=Diagnóstico de Claridad Digital - ${formData.empresa}&body=Nombre: ${formData.nombre}%0D%0AEmpresa: ${formData.empresa}%0D%0AWeb: ${formData.web}%0D%0A%0D%0AMensaje:%0D%0A${formData.mensaje}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                Hablemos
              </h1>
              <p className="mt-6 text-xl text-muted">
                Contanos sobre tu situación actual. Te respondemos en menos de 48 horas.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">¿Qué pasa después?</h3>
                  <ol className="space-y-3 text-muted">
                    <li className="flex items-start gap-3">
                      <span className="font-medium text-foreground">1.</span>
                      Revisamos tu mensaje y tu web actual
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-medium text-foreground">2.</span>
                      Te respondemos si el diagnóstico es para vos
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-medium text-foreground">3.</span>
                      Coordinamos una llamada corta para entender tu situación
                    </li>
                  </ol>
                </div>

                <div className="pt-8 border-t border-foreground/10">
                  <p className="text-sm text-muted">
                    También podés escribirnos directamente a
                  </p>
                  <a
                    href="mailto:hola@experial.la"
                    className="text-lg font-medium hover:text-accent transition-colors"
                  >
                    hola@experial.la
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 focus:border-foreground/60 outline-none transition-colors"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 focus:border-foreground/60 outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 focus:border-foreground/60 outline-none transition-colors"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="web" className="block text-sm font-medium mb-2">
                    Sitio web actual
                  </label>
                  <input
                    type="url"
                    id="web"
                    placeholder="https://"
                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 focus:border-foreground/60 outline-none transition-colors"
                    value={formData.web}
                    onChange={(e) => setFormData({ ...formData, web: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                    ¿Qué está pasando con tu marketing digital?
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    required
                    placeholder="Contanos brevemente tu situación: qué estás haciendo, qué no está funcionando, qué decisión no podés tomar..."
                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 focus:border-foreground/60 outline-none transition-colors resize-none"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-foreground text-background px-8 py-4 text-base font-medium hover:bg-foreground/90 transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
