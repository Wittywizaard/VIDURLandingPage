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
      items: ['Overview', 'Features', 'Integrations']
    },
    {
      name: 'Resources',
      hasDropdown: true,
      items: ['Documentation', 'Webinars', 'Knowledge Base']
    },
    {
      name: 'Why VIDUR',
      hasDropdown: false
    },
    {
      name: 'Pricing',
      hasDropdown: false
    },
    {
      name: 'Enterprise',
      hasDropdown: false
    },
    {
      name: 'API',
      hasDropdown: false
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-extrabold text-deep-green tracking-tight">
                VIDUR
              </span>
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
                <button
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? 'text-deep-green hover:text-highlight-green' : 'text-white hover:text-highlight-green'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <span className="ml-1 inline-block text-xs">▼</span>
                  )}
                </button>
                
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
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-deep-green hover:bg-soft-neutral transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-deep-green hover:text-highlight-green' : 'text-white hover:text-highlight-green'
              }`}
            >
              Log in
            </button>
            <button className="px-5 py-2.5 bg-highlight-green text-dark-accent text-sm font-bold rounded-lg hover:bg-[#78bd41] transition-all duration-200 transform hover:translate-y-[-1px]">
              Try VIDUR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full transition-all ${isScrolled ? 'bg-deep-green' : 'bg-white'}`}></span>
              <span className={`block h-0.5 w-full transition-all ${isScrolled ? 'bg-deep-green' : 'bg-white'}`}></span>
              <span className={`block h-0.5 w-full transition-all ${isScrolled ? 'bg-deep-green' : 'bg-white'}`}></span>
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
                    href="#"
                    className="block text-deep-green font-medium text-sm py-2 hover:text-highlight-green transition-colors"
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && item.items && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block text-sm text-deep-green/80 py-1 hover:text-highlight-green"
                        >
                          {subItem}
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
                <button className="block w-full px-5 py-2.5 bg-highlight-green text-dark-accent text-sm font-bold rounded-lg">
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
