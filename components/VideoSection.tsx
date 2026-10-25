'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
            <video
              className="w-full h-auto"
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
