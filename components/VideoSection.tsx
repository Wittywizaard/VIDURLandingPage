'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-soft-neutral">
      {/* Soft brand wash — compact, centered */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 90% at 50% 50%, rgba(13,86,73,0.10) 0%, transparent 70%),
            linear-gradient(180deg, #F4F7F6 0%, #E8EFEC 50%, #F4F7F6 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Subtle centered brand mark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <img
          src="/vidur-logo.png"
          alt=""
          className="w-[min(42vw,280px)] opacity-[0.06] object-contain"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="relative w-full"
        >
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl ring-1 ring-deep-green/10 bg-white">
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
