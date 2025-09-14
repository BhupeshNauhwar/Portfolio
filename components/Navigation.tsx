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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
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
            <div className="flex items-center space-x-6">
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
              
              {/* Social Links */}
              <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-cyan-400/30">
                <motion.a
                  href="https://github.com/bhupesh052"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-slate-800/50 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/bhupesh-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-slate-800/50 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  href="https://instagram.com/bhupesh_kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-slate-800/50 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2.163c2.204 0 2.466.009 3.337.048.805.036 1.243.166 1.535.276.386.15.661.328.95.616.288.29.467.564.617.95.11.292.24.73.276 1.535.039.871.048 1.133.048 3.337s-.009 2.466-.048 3.337c-.036.805-.166 1.243-.276 1.535-.15.386-.329.661-.617.95-.289.288-.564.467-.95.617-.292.11-.73.24-1.535.276-.871.039-1.133.048-3.337.048s-2.466-.009-3.337-.048c-.805-.036-1.243-.166-1.535-.276a2.578 2.578 0 01-.95-.617 2.578 2.578 0 01-.617-.95c-.11-.292-.24-.73-.276-1.535C2.172 12.466 2.163 12.204 2.163 10s.009-2.466.048-3.337c.036-.805.166-1.243.276-1.535.15-.386.328-.661.617-.95.289-.288.564-.467.95-.617.292-.11.73-.24 1.535-.276C7.534 2.172 7.796 2.163 10 2.163M10 0C7.741 0 7.444.01 6.544.048 5.647.087 5.017.222 4.482.42a4.412 4.412 0 00-1.596 1.04A4.412 4.412 0 001.846 3.056C1.648 3.59 1.513 4.22 1.474 5.117.436 6.018.426 6.315.426 8.574v2.852c0 2.259.01 2.556.048 3.456.039.897.174 1.527.372 2.062a4.412 4.412 0 001.04 1.596 4.412 4.412 0 001.596 1.04c.535.198 1.165.333 2.062.372C7.444 19.99 7.741 20 10 20s2.556-.01 3.456-.048c.897-.039 1.527-.174 2.062-.372a4.412 4.412 0 001.596-1.04 4.412 4.412 0 001.04-1.596c.198-.535.333-1.165.372-2.062C19.99 12.556 20 12.259 20 10s-.01-2.556-.048-3.456c-.039-.897-.174-1.527-.372-2.062a4.412 4.412 0 00-1.04-1.596A4.412 4.412 0 0016.944.42C16.409.222 15.779.087 14.882.048 13.982.01 13.685 0 11.426 0H8.574z"/>
                    <path d="M10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666z"/>
                    <circle cx="15.338" cy="4.662" r="1.2"/>
                  </svg>
                </motion.a>
              </div>
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