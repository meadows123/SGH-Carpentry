
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollToSection('#home')} className="flex items-center space-x-2 md:space-x-3 text-left">
             <Hammer className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <div>
              <span className="text-lg md:text-xl font-bold text-foreground block">SGH</span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase hidden sm:block">Carpentry & Build</span>
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary hover:bg-transparent text-sm font-semibold uppercase tracking-wider"
              >
                {link.name}
              </Button>
            ))}
             <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="ml-4 border-2 border-white text-primary hover:bg-primary hover:text-black font-semibold uppercase tracking-wider text-xs shadow-lg"
            >
              Get Quote
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border"
          >
            <div className="container-custom py-6 flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-lg text-foreground/80 hover:text-primary hover:bg-transparent"
                >
                  {link.name}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                className="w-full border-2 border-white text-primary hover:bg-primary hover:text-black font-semibold shadow-lg"
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
  