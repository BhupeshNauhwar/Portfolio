'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Contact', href: '#contact', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-2xl border-b border-cyan-400/30 shadow-[0_8px_32px_rgba(6,182,212,0.1)]' 
          : 'bg-slate-900/60 backdrop-blur-xl border-b border-cyan-500/10'
      }`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: '50%'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center relative"
          >
            <motion.div 
              className="flex items-center gap-3"
              animate={{
                filter: [
                  'drop-shadow(0 0 10px rgba(6,182,212,0.6))',
                  'drop-shadow(0 0 20px rgba(6,182,212,0.8))',
                  'drop-shadow(0 0 10px rgba(6,182,212,0.6))'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.8)] relative">
                  <Image
                    src="/WhatsApp Image 2025-07-25 at 6.16.15 PM.jpeg"
                    alt="Bhupesh Kumar"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                  {/* Rotating Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent border-t-cyan-400 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
              <motion.span 
                className="text-white font-bold text-xl hidden sm:block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Bhupesh Kumar
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: '0 10px 25px rgba(6,182,212,0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-4 py-2 rounded-xl bg-slate-800/50 border border-cyan-400/20 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    <motion.span 
                      className="text-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="navHover"
                  />
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-xl transition-all duration-300"
                    whileHover={{
                      borderColor: 'rgba(6,182,212,0.5)',
                      boxShadow: '0 0 20px rgba(6,182,212,0.3)'
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-xl bg-slate-800/50 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              whileHover={{ boxShadow: '0 0 20px rgba(6,182,212,0.4)' }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-slate-800/95 backdrop-blur-2xl rounded-2xl mt-4 p-6 border border-cyan-400/20 shadow-[0_20px_50px_rgba(6,182,212,0.1)]">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      x: 10, 
                      backgroundColor: 'rgba(6,182,212,0.1)',
                      boxShadow: '0 0 20px rgba(6,182,212,0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 px-4 py-4 text-lg font-medium transition-all duration-300 rounded-xl border border-transparent hover:border-cyan-400/30 mb-2 last:mb-0"
                  >
                    <motion.span 
                      className="text-2xl"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span>{item.name}</span>
                    <motion.div
                      className="ml-auto w-2 h-2 bg-cyan-400 rounded-full opacity-0"
                      whileHover={{ opacity: 1, scale: 1.5 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;