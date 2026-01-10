'use client';

import { motion } from 'framer-motion';

export default function HeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Collage layout - Reshore style with overlapping images */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[55%] h-[80vh] hidden lg:block">

        {/* Main card - large, slightly rotated */}
        <motion.div
          className="absolute right-0 top-[10%] w-[380px] origin-center"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ rotate: '4deg' }}
        >
          <div className="bg-white rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="text-xs text-muted uppercase tracking-widest">Diagnóstico</div>
            </div>
            <div className="space-y-3">
              <div className="h-2.5 bg-foreground/8 rounded-full w-full" />
              <div className="h-2.5 bg-foreground/8 rounded-full w-4/5" />
              <div className="h-2.5 bg-foreground/8 rounded-full w-3/5" />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="aspect-[4/3] bg-accent/10 rounded" />
              <div className="aspect-[4/3] bg-foreground/5 rounded" />
              <div className="aspect-[4/3] bg-foreground/5 rounded" />
            </div>
            <div className="mt-6 h-20 bg-gradient-to-r from-accent/15 via-accent/8 to-transparent rounded" />
          </div>
        </motion.div>

        {/* Second card - overlapping, dark */}
        <motion.div
          className="absolute left-[5%] top-[25%] w-[220px] origin-center"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ rotate: '-5deg' }}
        >
          <div className="bg-foreground text-background rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-6">
            <div className="text-[10px] uppercase tracking-widest text-background/50">Claridad</div>
            <div className="text-5xl font-medium mt-3 tracking-tight">3–5</div>
            <div className="text-sm text-background/50 mt-1">decisiones claras</div>
            <div className="mt-5 flex gap-1">
              <div className="h-1.5 bg-accent rounded-full flex-1" />
              <div className="h-1.5 bg-background/20 rounded-full flex-1" />
              <div className="h-1.5 bg-background/20 rounded-full flex-1" />
            </div>
          </div>
        </motion.div>

        {/* Third card - red accent */}
        <motion.div
          className="absolute right-[15%] bottom-[15%] w-[200px] origin-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ rotate: '6deg' }}
        >
          <div className="bg-accent text-white rounded-lg shadow-[0_30px_60px_-15px_rgba(234,27,36,0.4)] p-6">
            <div className="text-[10px] uppercase tracking-widest opacity-70">Resultado</div>
            <div className="text-xl font-medium mt-2">Sin ruido.</div>
            <div className="text-xl font-medium">Solo foco.</div>
            <div className="mt-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Small accent square */}
        <motion.div
          className="absolute left-[20%] bottom-[25%] w-12 h-12 bg-white rounded shadow-lg flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-5 h-5 bg-accent rounded-sm" />
        </motion.div>

      </div>

      {/* Signature red dot like Reshore */}
      <motion.div
        className="absolute top-28 right-[42%] w-2.5 h-2.5 bg-accent rounded-full hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
      />
    </div>
  );
}
