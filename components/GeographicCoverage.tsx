'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function GeographicCoverage() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Try to play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          // Auto-play was prevented, which is expected on some browsers
        });
      }
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="text-xs md:text-sm font-bold text-deep-green uppercase tracking-wider mb-3 md:mb-4">
              A GROWING PROFESSIONAL COMMUNITY
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
              <span className="text-deep-green">Live in</span>
              <br />
              <span className="text-deep-green text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold">
                {count}+
              </span>
              <span className="text-deep-green text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ml-2 md:ml-4">Cities</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-deep-green/70 max-w-lg mx-auto lg:mx-0">
              From metro firms to independent practices, VIDUR is part of the professional workday across India.
            </p>
          </motion.div>

          {/* Right Side - India Map Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto bg-white">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                preload="auto"
                webkit-playsinline="true"
                x5-playsinline="true"
                style={{ 
                  pointerEvents: 'none',
                  background: 'transparent',
                  backgroundColor: 'transparent',
                  mixBlendMode: 'multiply'
                }}
              >
                <source src="https://drive.google.com/uc?export=download&id=1O8oLdMOQG7I39dvZWI9CZpIDIrtoHhc7" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center px-4" style={{ zIndex: 20 }}>
                <p className="text-xs md:text-sm text-deep-green/60">
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
