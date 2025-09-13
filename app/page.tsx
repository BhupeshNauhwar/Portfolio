'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -100 : -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -200 : -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden"
        >
          {/* Background Animation */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                animate={{
                  y: ["100vh", "-10vh"],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "linear"
                }}
                style={{
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
          
          <div className="text-center px-6 relative z-10">
            {/* Mobile Loader */}
            {isMobile && (
              <motion.div
                initial={{ scale: 0, rotateY: -180 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative"
              >
                {/* Pulsing rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                    animate={{ 
                      scale: [1, 2, 1], 
                      opacity: [0.8, 0, 0.8],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                    style={{
                      width: '48px',
                      height: '48px',
                      margin: 'auto'
                    }}
                  />
                ))}
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-3 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4 relative z-10"
                />
                
                {/* Floating particles around loader */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    animate={{
                      x: [0, Math.cos(i * 60 * Math.PI / 180) * 30],
                      y: [0, Math.sin(i * 60 * Math.PI / 180) * 30],
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    style={{
                      left: '50%',
                      top: '50%'
                    }}
                  />
                ))}
              </motion.div>
            )}
            
            {/* Tablet Loader */}
            {isTablet && (
              <motion.div
                initial={{ scale: 0, rotateX: -90 }}
                animate={{ scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative"
              >
                {/* Morphing shape */}
                <motion.div
                  animate={{
                    borderRadius: ["50%", "25%", "50%", "0%", "50%"],
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 1.2, 1, 0.8, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 border-4 border-cyan-400 mx-auto mb-4 relative"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 border-2 border-blue-400 border-r-transparent rounded-full"
                  />
                </motion.div>
                
                {/* Orbiting dots */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: `${25 + i * 5}px 0px`
                    }}
                  />
                ))}
              </motion.div>
            )}
            
            {/* Desktop Loader */}
            {!isMobile && !isTablet && (
              <motion.div
                initial={{ scale: 0, rotateZ: -180 }}
                animate={{ scale: 1, rotateZ: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                className="relative"
              >
                {/* Complex geometric loader */}
                <motion.div className="relative w-20 h-20 mx-auto mb-6">
                  {/* Outer ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-cyan-400 border-t-transparent rounded-full"
                  />
                  
                  {/* Middle ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 border-3 border-blue-400 border-b-transparent rounded-full"
                  />
                  
                  {/* Inner core */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  />
                  
                  {/* Floating elements */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full"
                      animate={{
                        x: [0, Math.cos(i * 45 * Math.PI / 180) * 50],
                        y: [0, Math.sin(i * 45 * Math.PI / 180) * 50],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: '50%',
                        top: '50%'
                      }}
                    />
                  ))}
                </motion.div>
                
                {/* Glitch effect text */}
                <motion.div className="relative">
                  <motion.h2
                    animate={{ 
                      x: [0, -2, 2, 0],
                      textShadow: [
                        "0 0 0 transparent",
                        "2px 0 0 #06b6d4, -2px 0 0 #3b82f6",
                        "0 0 0 transparent"
                      ]
                    }}
                    transition={{ 
                      duration: 0.3, 
                      repeat: Infinity, 
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                    className="text-2xl font-bold text-cyan-400"
                  >
                    Loading Portfolio...
                  </motion.h2>
                </motion.div>
              </motion.div>
            )}
            
            {/* Loading text with typewriter effect */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`font-bold text-cyan-400 ${isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl'}`}
            >
              {isMobile ? (
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Loading...
                </motion.span>
              ) : isTablet ? (
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  Loading Portfolio
                </motion.span>
              ) : null}
            </motion.h2>
            
            {/* Progress indicators */}
            {isMobile && (
              <motion.div 
                className="flex justify-center gap-1 mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1], 
                      opacity: [0.5, 1, 0.5],
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity, 
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
            
            {isTablet && (
              <motion.div
                className="mt-4 w-32 h-1 bg-slate-700 rounded-full mx-auto overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      ) : (
        <motion.main
          key="main"
          initial={{ 
            opacity: 0, 
            scale: isMobile ? 0.95 : isTablet ? 0.9 : 0.8,
            rotateX: isMobile ? 5 : isTablet ? 10 : 15
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateX: 0
          }}
          transition={{ 
            duration: isMobile ? 0.8 : isTablet ? 1 : 1.2,
            ease: "easeOut"
          }}
          className="min-h-screen relative overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Desktop Background */}
            {!isMobile && !isTablet && (
              <>
                <motion.div 
                  style={{ y: y1, rotate }}
                  className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/5 rounded-full blur-3xl"
                />
                <motion.div 
                  style={{ y: y2 }}
                  className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-cyan-300/5 rounded-full blur-3xl"
                />
                
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
                    animate={{
                      y: [0, -100, 0],
                      x: [0, Math.random() * 50 - 25, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 4 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 4
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </>
            )}
            
            {/* Mobile Background */}
            {isMobile && (
              <>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400/15 to-blue-500/8 rounded-full blur-2xl"
                />
                <motion.div 
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                  className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-500/12 to-cyan-300/6 rounded-full blur-xl"
                />
                
                {/* Simplified mobile particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-cyan-400/40 rounded-full"
                    animate={{
                      y: [0, -60, 0],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 3
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </>
            )}
            
            {/* Tablet Background */}
            {isTablet && (
              <>
                <motion.div 
                  style={{ y: y1 }}
                  className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/12 to-blue-500/6 rounded-full blur-2xl"
                />
                <motion.div 
                  style={{ y: y2 }}
                  className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-cyan-300/5 rounded-full blur-xl"
                />
                
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-cyan-400/45 rounded-full"
                    animate={{
                      y: [0, -80, 0],
                      x: [0, Math.random() * 30 - 15, 0],
                      opacity: [0, 0.9, 0]
                    }}
                    transition={{
                      duration: 3.5 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 3.5
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </>
            )}
          </div>
          
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Navigation />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: isMobile ? 0.15 : isTablet ? 0.2 : 0.3 }}
          >
            {/* Hero Section */}
            <motion.div
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateX: 0,
                filter: "blur(0px)"
              }}
              initial={{ 
                opacity: 0, 
                y: isMobile ? 20 : isTablet ? 40 : 60,
                scale: isMobile ? 0.98 : isTablet ? 0.95 : 0.9,
                rotateX: isMobile ? 2 : isTablet ? 5 : 10,
                filter: "blur(2px)"
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: isMobile ? 0.5 : isTablet ? 0.7 : 1,
                type: isMobile ? "spring" : "tween",
                ease: "easeOut"
              }}
            >
              <Hero />
            </motion.div>
            
            {/* About Section */}
            <motion.div
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                scale: 1
              }}
              initial={{ 
                opacity: 0, 
                x: isMobile ? -30 : isTablet ? -50 : -80,
                rotateY: isMobile ? 3 : isTablet ? 5 : 8,
                scale: isMobile ? 0.95 : isTablet ? 0.9 : 0.85
              }}
              viewport={{ once: true, margin: isMobile ? "-30px" : isTablet ? "-50px" : "-80px" }}
              transition={{ 
                duration: isMobile ? 0.6 : isTablet ? 0.8 : 1,
                type: isMobile ? "spring" : "tween",
                ease: "easeOut"
              }}
            >
              <About />
            </motion.div>
            
            {/* Projects Section */}
            <motion.div
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                rotateZ: 0,
                scale: 1
              }}
              initial={{ 
                opacity: 0, 
                x: isMobile ? 30 : isTablet ? 50 : 80,
                rotateZ: isMobile ? -2 : isTablet ? -3 : -5,
                scale: isMobile ? 0.97 : isTablet ? 0.92 : 0.88
              }}
              viewport={{ once: true, margin: isMobile ? "-30px" : isTablet ? "-50px" : "-80px" }}
              transition={{ 
                duration: isMobile ? 0.6 : isTablet ? 0.8 : 1,
                type: isMobile ? "spring" : "tween",
                ease: "easeOut"
              }}
            >
              <Projects />
            </motion.div>
            
            {/* Contact Section */}
            <motion.div
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                scale: 1,
                filter: "blur(0px)"
              }}
              initial={{ 
                opacity: 0, 
                y: isMobile ? 40 : isTablet ? 60 : 100,
                rotateX: isMobile ? -3 : isTablet ? -5 : -8,
                scale: isMobile ? 0.96 : isTablet ? 0.9 : 0.85,
                filter: "blur(1px)"
              }}
              viewport={{ once: true, margin: isMobile ? "-20px" : isTablet ? "-40px" : "-60px" }}
              transition={{ 
                duration: isMobile ? 0.5 : isTablet ? 0.7 : 0.9,
                type: isMobile ? "spring" : "tween",
                ease: "easeOut"
              }}
            >
              <Contact />
            </motion.div>
            
            {/* Footer Section */}
            <motion.div
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
                filter: "blur(0px)"
              }}
              initial={{ 
                opacity: 0, 
                scale: isMobile ? 0.98 : isTablet ? 0.95 : 0.9,
                rotateY: isMobile ? 2 : isTablet ? 4 : 6,
                filter: "blur(1px)"
              }}
              viewport={{ once: true, margin: isMobile ? "-20px" : isTablet ? "-30px" : "-50px" }}
              transition={{ 
                duration: isMobile ? 0.4 : isTablet ? 0.6 : 0.8,
                type: isMobile ? "spring" : "tween",
                ease: "easeOut"
              }}
            >
              <Footer />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform-origin-left z-50"
            style={{ scaleX: scrollYProgress }}
          />
          
          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ scale: isMobile ? 1.05 : 1.1, rotate: isMobile ? 180 : 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed z-40 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/25 ${
              isMobile 
                ? 'bottom-6 right-6 w-10 h-10 text-sm' 
                : 'bottom-8 right-8 w-12 h-12'
            }`}
          >
            ↑
          </motion.button>
        </motion.main>
      )}
    </AnimatePresence>
  );
}