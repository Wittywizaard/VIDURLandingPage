'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed inset-0 z-50 bg-deep-green flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-5xl font-extrabold text-white">VIDUR</span>
          </motion.div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}
