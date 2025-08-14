import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Laptop, Rocket, BookOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(`#${section.id}`);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '#hero', icon: <Home className="w-5 h-5" /> },
    { label: 'Compétences', href: '#skills', icon: <Laptop className="w-5 h-5" /> },
    { label: 'Projets', href: '#projects', icon: <Rocket className="w-5 h-5" /> },
    { label: 'Parcours', href: '#experience', icon: <BookOpen className="w-5 h-5" /> },
    { label: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
    setActiveSection(href);
  };

  const menuItemVariants = {
    open: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      } 
    },
    closed: { 
      y: 20, 
      opacity: 0, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      } 
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="text-xl sm:text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
              FRANCK <span className="text-yellow-400">WILLIAMS</span>
            </span>
          </motion.div>

          {/* Menu Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:flex space-x-1"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
                  activeSection === item.href
                    ? 'text-blue-600 bg-blue-50 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                <span className="text-blue-600">{item.icon}</span>
                <span>{item.label}</span>
                {activeSection === item.href && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute left-4 right-4 bottom-1 h-0.5 bg-blue-600 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Bouton Menu Mobile */}
          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg bg-blue-50 hover:bg-blue-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-blue-600" />
            ) : (
              <Menu size={24} className="text-blue-600" />
            )}
          </motion.button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                className="bg-white/95 backdrop-blur-lg border-t border-gray-200 py-2 px-3 space-y-1 rounded-b-xl shadow-lg"
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.label}
                    variants={menuItemVariants}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${
                      activeSection === item.href
                        ? 'bg-blue-50 text-blue-600 shadow-sm'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <span className="text-blue-600">{item.icon}</span>
                    <span>{item.label}</span>
                    {activeSection === item.href && (
                      <motion.span
                        layoutId="mobileNavUnderline"
                        className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;