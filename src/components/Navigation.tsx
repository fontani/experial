'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md' : ''
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium tracking-tight">
            Experial
          </span>
          <span className="w-2 h-2 bg-accent rounded-full" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/pensamos" className="text-sm text-muted hover:text-foreground transition-colors">
            Así pensamos
          </Link>
          <Link href="/diagnostico" className="text-sm text-muted hover:text-foreground transition-colors">
            Diagnóstico
          </Link>
          <Link
            href="/contacto"
            className="text-sm bg-accent text-white px-5 py-2 hover:bg-[#d01820] transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-5 h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`w-5 h-0.5 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-background border-t border-foreground/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link href="/pensamos" className="text-lg" onClick={() => setIsMenuOpen(false)}>
                Así pensamos
              </Link>
              <Link href="/diagnostico" className="text-lg" onClick={() => setIsMenuOpen(false)}>
                Diagnóstico
              </Link>
              <Link
                href="/contacto"
                className="text-lg bg-accent text-white px-5 py-2 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
