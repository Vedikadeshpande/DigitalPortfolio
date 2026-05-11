import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursorVariant } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div 
            className="text-2xl font-bold tracking-tighter text-glow cursor-pointer"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            onClick={() => window.scrollTo(0,0)}
          >
            V.
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Contact
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[60] bg-background/95 flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-medium text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-medium text-white hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
