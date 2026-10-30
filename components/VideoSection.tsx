'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
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
