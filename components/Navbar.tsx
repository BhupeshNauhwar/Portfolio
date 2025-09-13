'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string, name: string) => {
    setActiveSection(name.toLowerCase());
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative z-50 px-6 py-6 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          animate={{
            background: scrolled 
              ? 'rgba(255, 255, 255, 0.08)' 
              : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            boxShadow: scrolled 
              ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
              : '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}
          className="neumorphic rounded-3xl px-8 py-5 border border-white/10"
        >
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">BK</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold gradient-text">Bhupesh Kumar</div>
                <div className="text-xs text-gray-400">Full-Stack Developer</div>
              </div>
            </motion.div>

            {/* Enhanced Navigation Links */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.name)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-white bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl neumorphic-inset"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <motion.div 
                    className="w-full h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                    whileHover={{ scaleX: 1.2 }}
                  />
                  <motion.div 
                    className="w-full h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full"
                    whileHover={{ scaleX: 0.8 }}
                  />
                  <motion.div 
                    className="w-full h-0.5 bg-gradient-to-r from-neon-pink to-neon-teal rounded-full"
                    whileHover={{ scaleX: 1.1 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;