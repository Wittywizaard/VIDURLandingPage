'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Platform',
      hasDropdown: true,
      href: '#platform',
      items: [
        { name: 'Overview', href: '#' },
        { name: 'Features', href: '#features' },
        { name: 'Integrations', href: '#' }
      ]
    },
    {
      name: 'Resources',
      hasDropdown: true,
      href: '#resources',
      items: [
        { name: 'Documentation', href: '#' },
        { name: 'Webinars', href: '#webinars' },
        { name: 'Knowledge Base', href: '#knowledge' }
      ]
    },
    {
      name: 'Why VIDUR',
      hasDropdown: false,
      href: '#why-vidur'
    },
    {
      name: 'Pricing',
      hasDropdown: false,
      href: '#pricing'
    },
    {
      name: 'Enterprise',
      hasDropdown: false,
      href: '#enterprise'
    },
    {
      name: 'API',
      hasDropdown: false,
      href: '#api'
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-3 group">
              {/* Logo Icon */}
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* V shape with gradient */}
                  <path d="M20 5L8 35H14L20 20L26 35H32L20 5Z" fill="url(#logo-gradient)" />
                  <defs>
                    <linearGradient id="logo-gradient" x1="8" y1="5" x2="32" y2="35" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#87CE50" />
                      <stop offset="100%" stopColor="#0D5649" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-deep-green tracking-tight leading-none">
                  VIDUR
                </span>
                <span className="text-[10px] font-medium text-deep-green/60 tracking-wider leading-none">
                  AI FOR TAX WORK
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href || '#'}
                  className="text-sm font-medium transition-colors text-deep-green hover:text-highlight-green"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <span className="ml-1 inline-block text-xs">▼</span>
                  )}
                </a>
                
                {item.hasDropdown && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                  >
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-deep-green hover:bg-soft-neutral transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm font-medium transition-colors text-deep-green hover:text-highlight-green">
              Log in
            </button>
            <button className="btn-gradient-primary !px-5 !py-2.5 !text-sm inline-flex items-center gap-2">
              Try VIDUR
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="block h-0.5 w-full transition-all bg-deep-green"></span>
              <span className="block h-0.5 w-full transition-all bg-deep-green"></span>
              <span className="block h-0.5 w-full transition-all bg-deep-green"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href || '#'}
                    className="block text-deep-green font-medium text-sm py-2 hover:text-highlight-green transition-colors"
                    onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && item.items && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-deep-green/80 py-1 hover:text-highlight-green"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="block w-full text-left text-deep-green font-medium text-sm py-2">
                  Log in
                </button>
                <button className="btn-gradient-primary !w-full !text-sm">
                  Try VIDUR
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
