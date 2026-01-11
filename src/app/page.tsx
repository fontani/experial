'use client';

import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

type Language = 'es' | 'en';

interface Section {
  id: string;
  label: { es: string; en: string };
  headline: { es: string; en: string };
  tagline: { es: string[]; en: string[] };
  content: {
    es: { title: string; description: string }[];
    en: { title: string; description: string }[];
  };
}

const sections: Section[] = [
  {
    id: 'inicio',
    label: { es: 'Inicio', en: 'Home' },
    headline: {
      es: 'Tu web puede ser tu mejor canal de ventas.',
      en: 'Your website can be your best sales channel.'
    },
    tagline: {
      es: ['Analizamos qué funciona,', 'arreglamos lo que no.'],
      en: ['We analyze what works,', 'fix what doesn\'t.']
    },
    content: {
      es: [
        { title: 'Diagnóstico gratuito', description: 'Analizamos tu presencia digital actual y te mostramos oportunidades concretas de mejora.' },
        { title: 'Resultados medibles', description: 'No hablamos de métricas abstractas. Te decimos cuántos clientes potenciales estás perdiendo y cómo recuperarlos.' },
        { title: 'Sin compromiso', description: 'Primera consulta sin costo. Si no ves valor, no hay obligación.' },
      ],
      en: [
        { title: 'Free diagnosis', description: 'We analyze your current digital presence and show you concrete improvement opportunities.' },
        { title: 'Measurable results', description: 'We don\'t talk about abstract metrics. We tell you how many potential customers you\'re losing and how to recover them.' },
        { title: 'No commitment', description: 'First consultation at no cost. If you don\'t see value, there\'s no obligation.' },
      ],
    },
  },
  {
    id: 'problema',
    label: { es: 'Problema', en: 'Problem' },
    headline: {
      es: 'Tenés web, redes, quizás hasta ads. Pero no sabés si funcionan.',
      en: 'You have a website, social media, maybe even ads. But you don\'t know if they work.'
    },
    tagline: {
      es: ['Nadie te dice qué mirar,', 'qué ignorar, qué hacer.'],
      en: ['No one tells you what to look at,', 'what to ignore, what to do.']
    },
    content: {
      es: [
        { title: 'Datos sin contexto', description: 'Google Analytics muestra números, pero ¿qué significan para tu negocio? Sin interpretación, los datos son solo ruido.' },
        { title: 'Inversión sin retorno claro', description: 'Pagás por hosting, dominio, ads, diseño... pero no podés conectar esos gastos con ventas reales.' },
        { title: 'Competencia digital', description: 'Tus competidores están online. Si tu web no convierte, estás perdiendo clientes todos los días.' },
      ],
      en: [
        { title: 'Data without context', description: 'Google Analytics shows numbers, but what do they mean for your business? Without interpretation, data is just noise.' },
        { title: 'Investment without clear return', description: 'You pay for hosting, domain, ads, design... but you can\'t connect those expenses to real sales.' },
        { title: 'Digital competition', description: 'Your competitors are online. If your website doesn\'t convert, you\'re losing customers every day.' },
      ],
    },
  },
  {
    id: 'solucion',
    label: { es: 'Solución', en: 'Solution' },
    headline: {
      es: 'Analizamos tus datos reales y te decimos exactamente qué hacer.',
      en: 'We analyze your real data and tell you exactly what to do.'
    },
    tagline: {
      es: ['Sin vueltas,', 'sin contratos largos.'],
      en: ['No fluff,', 'no long contracts.']
    },
    content: {
      es: [
        { title: 'Auditoría completa', description: 'Revisamos tu web, analytics, SEO, velocidad de carga y experiencia de usuario. Identificamos los puntos exactos de fuga.' },
        { title: 'Plan de acción priorizado', description: 'Te entregamos un documento con 3-5 acciones concretas ordenadas por impacto. Sabés exactamente qué hacer primero.' },
        { title: 'Implementación directa', description: 'Si querés, lo hacemos nosotros. Proyectos de 1-2 semanas con entregables claros y precio fijo.' },
      ],
      en: [
        { title: 'Complete audit', description: 'We review your website, analytics, SEO, load speed, and user experience. We identify exact leakage points.' },
        { title: 'Prioritized action plan', description: 'We deliver a document with 3-5 concrete actions ordered by impact. You know exactly what to do first.' },
        { title: 'Direct implementation', description: 'If you want, we do it ourselves. 1-2 week projects with clear deliverables and fixed price.' },
      ],
    },
  },
  {
    id: 'servicios',
    label: { es: 'Servicios', en: 'Services' },
    headline: {
      es: 'Web nueva, rediseño, landing pages, optimización.',
      en: 'New website, redesign, landing pages, optimization.'
    },
    tagline: {
      es: ['Trato directo.', 'Resultados rápidos.'],
      en: ['Direct communication.', 'Fast results.']
    },
    content: {
      es: [
        { title: 'Diseño web profesional', description: 'Sitios que convierten visitantes en clientes. Diseño moderno, optimizado para móviles y pensado para tu audiencia.' },
        { title: 'Landing pages de conversión', description: 'Páginas específicas para campañas, productos o servicios. Maximizamos cada click que pagás en ads.' },
        { title: 'Optimización de sitios existentes', description: 'No siempre hay que empezar de cero. A veces pequeños cambios generan grandes resultados.' },
      ],
      en: [
        { title: 'Professional web design', description: 'Sites that convert visitors into customers. Modern design, mobile-optimized, and built for your audience.' },
        { title: 'Conversion landing pages', description: 'Specific pages for campaigns, products, or services. We maximize every click you pay for in ads.' },
        { title: 'Existing site optimization', description: 'You don\'t always have to start from scratch. Sometimes small changes generate big results.' },
      ],
    },
  },
  {
    id: 'casos',
    label: { es: 'Casos de éxito', en: 'Success cases' },
    headline: {
      es: 'Empresas que ya confían en nosotros.',
      en: 'Companies that already trust us.'
    },
    tagline: {
      es: ['Resultados reales,', 'clientes reales.'],
      en: ['Real results,', 'real clients.']
    },
    content: {
      es: [],
      en: [],
    },
  },
];

interface CaseStudy {
  name: string;
  url: string;
  description: { es: string; en: string };
  industry: { es: string; en: string };
}

const caseStudies: CaseStudy[] = [
  {
    name: 'Custodia Integral',
    url: 'custodiaintegral.com.ar',
    description: {
      es: 'Empresa de seguridad patrimonial. Rediseño completo de su presencia digital.',
      en: 'Property security company. Complete redesign of their digital presence.'
    },
    industry: { es: 'Seguridad', en: 'Security' },
  },
  {
    name: 'QuienPresta',
    url: 'quienpresta.com.ar',
    description: {
      es: 'Fintech de comparación de préstamos. Optimización de conversión y UX.',
      en: 'Loan comparison fintech. Conversion and UX optimization.'
    },
    industry: { es: 'Fintech', en: 'Fintech' },
  },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lang, setLang] = useState<Language>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setFormStatus('sending');
    try {
      await emailjs.send(
        'service_v33sz4b',
        'template_75zjmas',
        {
          from_name: formName,
          from_email: formEmail,
        },
        'NZo4WLjECdOfLqTtT'
      );
      setFormStatus('sent');
      setFormName('');
      setFormEmail('');
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };
  const videoRef = useRef<HTMLVideoElement>(null);

  // Update video time based on current section
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const totalSections = sections.length;
      const targetTime = (currentSection / (totalSections - 1)) * video.duration;

      // Smooth transition to target time
      const currentTime = video.currentTime;
      const diff = targetTime - currentTime;
      const steps = 30;
      let step = 0;

      const animate = () => {
        if (step < steps && videoRef.current) {
          step++;
          const progress = step / steps;
          // Easing function for smooth animation
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          videoRef.current.currentTime = currentTime + (diff * easeProgress);
          requestAnimationFrame(animate);
        }
      };

      if (video.duration) {
        animate();
      }
    }
  }, [currentSection]);

  const changeSection = (newSection: number) => {
    if (isScrolling || newSection === currentSection) return;
    setIsScrolling(true);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentSection(newSection);
      setTimeout(() => {
        setIsAnimating(false);
        setIsScrolling(false);
      }, 600);
    }, 300);
  };

  useEffect(() => {
    let accumulatedDelta = 0;
    const threshold = 100; // Requires more scroll before changing section
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      // Accumulate scroll delta
      accumulatedDelta += e.deltaY;

      // Clear timeout to reset accumulation after scroll stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        accumulatedDelta = 0;
      }, 200);

      // Only change section when threshold is reached
      if (accumulatedDelta > threshold && currentSection < sections.length - 1) {
        accumulatedDelta = 0;
        changeSection(currentSection + 1);
      } else if (accumulatedDelta < -threshold && currentSection > 0) {
        accumulatedDelta = 0;
        changeSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [currentSection, isScrolling]);

  const current = sections[currentSection];

  return (
    <main className="h-screen w-screen overflow-hidden relative bg-[#0d0d0d]">
      {/* Background video (desktop) / image (mobile) */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          filter: currentSection === 0 ? 'blur(0px)' : 'blur(4px)',
          transform: `scale(${1 + currentSection * 0.05})`,
        }}
      >
        {/* Static image for mobile - positioned right to show rocket */}
        <img
          src="/images/hero.jpg"
          alt=""
          className="md:hidden absolute inset-0 w-full h-full object-cover object-right"
        />
        {/* Video for desktop */}
        <video
          ref={videoRef}
          src="/videos/rocket.mp4"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Dark overlay - less intense on mobile to show background */}
      <div
        className="md:hidden absolute inset-0 bg-[#0d0d0d] transition-opacity duration-1000"
        style={{ opacity: 0.25 + currentSection * 0.06 }}
      />
      <div
        className="hidden md:block absolute inset-0 bg-[#0d0d0d] transition-opacity duration-1000"
        style={{ opacity: 0.4 + currentSection * 0.12 }}
      />

      {/* Content layer */}
      <div className="relative z-10 h-full w-full">

        {/* Top nav */}
        <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6">
          {/* Left - Logo */}
          <div className="flex items-center gap-3">
            <img src="/images/explogo.svg" alt="Experial" className="h-6 w-auto" />
            <span className="text-white text-sm font-bold tracking-wider">EXPERIAL</span>
          </div>

          {/* Right - Language toggle + Menu button */}
          <div className="flex items-center gap-6">
            {/* Language toggle - shows opposite language */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="text-xs uppercase tracking-[0.2em] text-[#666] hover:text-white transition-colors"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center group"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`w-6 h-0.5 bg-[#e63226] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-[#e63226] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-[#e63226] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Full screen menu overlay */}
        <div
          className={`fixed inset-0 bg-[#0d0d0d]/98 z-50 transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-8 text-white"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="h-full flex flex-col justify-center px-16">
            <nav className="space-y-4">
              {sections.map((section, i) => (
                <button
                  key={section.id}
                  onClick={() => {
                    changeSection(i);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-left transition-all duration-300 ${
                    i === currentSection
                      ? 'text-[#e63226]'
                      : 'text-white/40 hover:text-white hover:translate-x-4'
                  }`}
                >
                  <span className="text-xs text-[#666] uppercase tracking-[0.3em] block mb-1">
                    0{i + 1}
                  </span>
                  <span className="text-4xl md:text-6xl font-medium tracking-tight">
                    {section.label[lang]}
                  </span>
                </button>
              ))}
            </nav>

            {/* Language in menu */}
            <div className="mt-16 flex items-center gap-6">
              <button
                onClick={() => setLang('es')}
                className={`text-sm uppercase tracking-[0.3em] transition-colors ${lang === 'es' ? 'text-[#e63226]' : 'text-white/40 hover:text-white'}`}
              >
                Español
              </button>
              <button
                onClick={() => setLang('en')}
                className={`text-sm uppercase tracking-[0.3em] transition-colors ${lang === 'en' ? 'text-[#e63226]' : 'text-white/40 hover:text-white'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* Section label - top left */}
        <div className="absolute top-20 md:top-24 left-5 md:left-8">
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <span className="text-[#e63226] text-xs md:text-xs uppercase tracking-[0.3em]">
              0{currentSection + 1} — {current.label[lang]}
            </span>
          </div>
        </div>

        {/* Main content area */}
        <div className="absolute top-28 md:top-32 left-5 md:left-8 right-5 md:right-96 bottom-24 md:bottom-40 overflow-y-auto md:overflow-hidden scrollbar-hide">
          {/* Headline with animation */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-white max-w-2xl">
              {current.headline[lang]}
            </h1>
          </div>

          {/* Content blocks - staggered animation */}
          {current.id !== 'casos' ? (
            <div className={`mt-5 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-4xl transition-all duration-500 delay-100 ${
              isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
            }`}>
              {current.content[lang].map((block, i) => (
                <div
                  key={i}
                  className="group p-3.5 md:p-0 bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border border-white/10 md:border-0 rounded-lg md:rounded-none"
                  style={{ transitionDelay: `${150 + i * 100}ms` }}
                >
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <div className="w-1.5 h-1.5 bg-[#e63226] rounded-full flex-shrink-0" />
                    <h3 className="text-white text-xs md:text-sm font-medium uppercase tracking-wider">
                      {block.title}
                    </h3>
                  </div>
                  <p className="text-[#aaa] md:text-[#888] text-xs md:text-sm leading-relaxed">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            /* Cases section - special layout */
            <div className={`mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl transition-all duration-500 delay-100 ${
              isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
            }`}>
              {caseStudies.map((caseStudy, i) => (
                <a
                  key={i}
                  href={`https://${caseStudy.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 md:p-6 border border-[#222] hover:border-[#e63226] transition-all duration-300 hover:bg-[#e63226]/5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] text-[#e63226] uppercase tracking-[0.2em] bg-[#e63226]/10 px-2 py-1">
                      {caseStudy.industry[lang]}
                    </span>
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-medium mb-2 group-hover:text-[#e63226] transition-colors">
                    {caseStudy.name}
                  </h3>
                  <p className="text-[#666] text-xs md:text-sm mb-3 md:mb-4">
                    {caseStudy.description[lang]}
                  </p>
                  <div className="flex items-center gap-2 text-[#888] text-xs group-hover:text-[#e63226] transition-colors">
                    <span>{caseStudy.url}</span>
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              ))}

              {/* Placeholder for future cases */}
              <div className="p-4 md:p-6 border border-dashed border-[#222] flex items-center justify-center">
                <span className="text-[#444] text-xs md:text-sm">
                  {lang === 'es' ? 'Más casos próximamente' : 'More cases coming soon'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Scroll indicator - hidden on mobile, centered at bottom on desktop */}
        {currentSection < sections.length - 1 && (
          <button
            onClick={() => changeSection(currentSection + 1)}
            className={`hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-8 flex-col items-center gap-2 transition-all duration-500 hover:scale-110 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            <span className="text-[10px] text-[#666] uppercase tracking-widest">
              {lang === 'es' ? 'Scroll' : 'Scroll'}
            </span>
            <div className="animate-bounce">
              <svg className="w-5 h-5 text-[#e63226]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
              </svg>
            </div>
          </button>
        )}

        {/* Section dots - hidden on mobile */}
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3">
          {sections.map((section, i) => (
            <button
              key={i}
              onClick={() => changeSection(i)}
              className="group flex items-center gap-3"
            >
              <span className={`text-[10px] uppercase tracking-wider transition-all duration-300 ${
                i === currentSection ? 'opacity-100 text-[#e63226]' : 'opacity-0 group-hover:opacity-100 text-[#666]'
              }`}>
                {section.label[lang]}
              </span>
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentSection ? 'bg-[#e63226] scale-125' : 'bg-[#444] group-hover:bg-[#666]'
              }`} />
            </button>
          ))}
        </div>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 md:bottom-6 md:left-8 md:right-8">
          {/* Mobile: Simple email form at bottom */}
          <div className="md:hidden bg-gradient-to-t from-black/90 to-transparent pt-6 pb-4 px-5">
            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
              <input
                type="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                placeholder={lang === 'es' ? 'TU EMAIL' : 'YOUR EMAIL'}
                className="flex-1 bg-white/10 text-white text-sm py-3 px-4 rounded placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[#e63226] transition-colors"
                required
              />
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="bg-[#e63226] text-white text-xs uppercase tracking-wider py-3 px-6 rounded hover:bg-[#c92a20] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                {formStatus === 'sending' ? '...' : formStatus === 'sent' ? '✓' : formStatus === 'error' ? '!' : (lang === 'es' ? 'Enviar' : 'Send')}
              </button>
            </form>
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden md:flex items-end justify-between">
            {/* Left - Tagline */}
            <div className={`flex items-center gap-6 transition-all duration-500 ${isAnimating ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
              <div className="text-[#e63226] text-xs uppercase tracking-wider leading-relaxed">
                <p>{current.tagline[lang][0]}</p>
                <p>{current.tagline[lang][1]}</p>
              </div>
              <span className="text-[10px] text-[#333]">|</span>
              <p className="text-[10px] text-[#444] uppercase tracking-wider">
                © {new Date().getFullYear()} Experial
              </p>
            </div>

            {/* Right - Contact form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-72">
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder={lang === 'es' ? 'TU NOMBRE' : 'YOUR NAME'}
                className="bg-transparent border-b border-[#333] text-white text-sm py-2 placeholder:text-[#555] focus:outline-none focus:border-[#e63226] transition-colors"
                required
              />
              <input
                type="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                placeholder={lang === 'es' ? 'TU@EMAIL.COM' : 'YOUR@EMAIL.COM'}
                className="bg-transparent border-b border-[#333] text-white text-sm py-2 placeholder:text-[#555] focus:outline-none focus:border-[#e63226] transition-colors"
                required
              />
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="mt-1 bg-[#e63226] text-white text-xs uppercase tracking-[0.15em] py-3 px-6 hover:bg-[#c92a20] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending'
                  ? (lang === 'es' ? 'Enviando...' : 'Sending...')
                  : formStatus === 'sent'
                  ? (lang === 'es' ? 'Enviado!' : 'Sent!')
                  : formStatus === 'error'
                  ? (lang === 'es' ? 'Error' : 'Error')
                  : (lang === 'es' ? 'Contactar' : 'Contact')}
              </button>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}
