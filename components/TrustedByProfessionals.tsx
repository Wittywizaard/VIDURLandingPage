'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function TrustedByProfessionals() {
  const [stats, setStats] = useState({
    professionals: 0,
    experts: 0,
    queries: 0,
    cities: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const animateCount = (key: keyof typeof stats, target: number, duration: number) => {
            const increment = Math.ceil(target / (duration / 30));
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setStats(prev => ({ ...prev, [key]: target }));
                clearInterval(timer);
              } else {
                setStats(prev => ({ ...prev, [key]: current }));
              }
            }, 30);
          };

          animateCount('professionals', 25000, 1500);
          animateCount('experts', 250, 1200);
          animateCount('queries', 104283, 1800);
          animateCount('cities', 170, 1600);
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
    <section ref={sectionRef} className="py-6 md:py-8 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-start justify-items-center">
          {[
            { value: stats.experts, label: 'Experts and commentaries', suffix: '+' },
            { value: stats.professionals, label: 'CAs and lawyers using VIDUR', suffix: '+' },
            { value: stats.cities, label: 'Live in cities', suffix: '+' },
            { value: stats.queries, label: 'Query solved', suffix: '+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center w-full"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-1">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-xs md:text-sm font-medium text-black whitespace-nowrap">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
