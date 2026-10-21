'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function GeographicCoverage() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const end = 170;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold text-deep-green uppercase tracking-wider mb-4">
              A GROWING PROFESSIONAL COMMUNITY
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-deep-green">Live in</span>
              <br />
              <span className="text-deep-green text-6xl md:text-7xl lg:text-8xl font-extrabold">
                {count}+
              </span>
              <span className="text-deep-green text-4xl md:text-5xl lg:text-6xl font-bold ml-4">Cities</span>
            </h2>
            <p className="text-lg text-deep-green/70 max-w-lg">
              From metro firms to independent practices, VIDUR is part of the professional workday across India.
            </p>
          </motion.div>

          {/* Right Side - India Map Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto bg-white">
              <iframe
                src="https://drive.google.com/file/d/1O8oLdMOQG7I39dvZWI9CZpIDIrtoHhc7/preview?autoplay=1&mute=1&loop=1"
                className="w-full h-full rounded-2xl"
                allow="autoplay; encrypted-media"
                style={{ border: 'none', background: 'transparent' }}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-sm text-deep-green/60">
                  <span className="font-medium">From</span> <span className="font-semibold">Kashmir</span> <span className="font-medium">To</span> <span className="font-semibold">Kanyakumari</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
