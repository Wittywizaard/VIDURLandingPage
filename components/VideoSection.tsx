'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Brand backdrop — full bleed */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 50% 18%, rgba(244,247,246,0.22) 0%, transparent 62%),
            radial-gradient(ellipse 90% 70% at 50% 100%, rgba(6,78,68,0.85) 0%, transparent 55%),
            linear-gradient(165deg, #0A3F36 0%, #0D5649 42%, #064E44 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Fine grain texture */}
      <div
        className="absolute inset-0 opacity-[0.28] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
        aria-hidden="true"
      />

      {/* Soft chalk / brush wash behind video (Harvey-style accent) */}
      <div
        className="pointer-events-none absolute left-1/2 top-[6%] -translate-x-1/2 w-[min(92vw,980px)] h-[42%] md:h-[48%]"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at 50% 35%, rgba(255,255,255,0.28) 0%, rgba(244,247,246,0.12) 38%, transparent 72%)',
          filter: 'blur(2px)',
        }}
        aria-hidden="true"
      />

      {/* Oversized centered brand wordmark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-start justify-center pt-6 md:pt-10 select-none"
        aria-hidden="true"
      >
        <span
          className="font-extrabold tracking-[0.18em] uppercase text-white/[0.07] leading-none"
          style={{
            fontSize: 'clamp(4.5rem, 18vw, 11rem)',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          VIDUR
        </span>
      </div>

      {/* Soft vignette edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 45%, rgba(4,40,34,0.45) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Floating video stage */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div
            className="relative rounded-2xl md:rounded-[1.35rem] overflow-hidden bg-black/20 ring-1 ring-white/10"
            style={{
              boxShadow:
                '0 28px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06)',
            }}
          >
            <video
              className="w-full h-auto block"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/homepage-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
