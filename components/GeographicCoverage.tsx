'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef, useMemo } from 'react';

export default function GeographicCoverage() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Pre-defined positions to avoid Math.random() during SSR
  const dotPositions = useMemo(() => [
    { top: '25%', left: '30%' },
    { top: '35%', left: '55%' },
    { top: '45%', left: '40%' },
    { top: '55%', left: '65%' },
    { top: '30%', left: '70%' },
    { top: '60%', left: '35%' },
    { top: '40%', left: '80%' },
    { top: '70%', left: '50%' },
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const target = 170;
          const increment = Math.ceil(target / 50);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 30);
        }
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Section Label */}
          <p className="text-sm font-bold text-highlight-green uppercase tracking-wider mb-4">
            NATIONWIDE PRESENCE
          </p>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-section-lg font-bold text-deep-green mb-6">
            Live in {count}+ Cities
          </h2>

          {/* Description */}
          <p className="text-lg text-deep-green/80 max-w-2xl mx-auto mb-12">
            VIDUR serves tax and legal professionals across India, from metropolitan centers to growing practice areas nationwide.
          </p>

          {/* India Map Visual */}
          <div className="relative max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Simplified India shape representation */}
              <div className="aspect-square bg-gradient-to-br from-deep-green/10 to-highlight-green/10 rounded-3xl border-2 border-deep-green/20 p-12 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-32 h-32 mx-auto text-deep-green mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p className="text-2xl font-bold text-deep-green">
                    Pan-India Coverage
                  </p>
                  <p className="text-sm text-deep-green/70 mt-2">
                    Serving professionals in major cities and emerging markets
                  </p>
                </div>
              </div>
              
              {/* Animated dots representing coverage */}
              {dotPositions.map((position, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="absolute w-3 h-3 bg-highlight-green rounded-full shadow-lg"
                  style={{
                    top: position.top,
                    left: position.left,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
