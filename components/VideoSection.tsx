'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/oIUTbT5j_o4?autoplay=1&mute=1&loop=1&playlist=oIUTbT5j_o4&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="VIDUR Product Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
