'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { personalInfo, calculateTotalExperience, getCurrentPosition, experience } from '../app/data';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';


const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.tagline;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20 hero-section">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating 3D Cubes */}
        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            z: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-20 h-20 bg-cyan-400/20 transform-gpu"
          style={{ transformStyle: 'preserve-3d' }}
        />
        
        {/* Rotating Spheres */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotateZ: [0, 360],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-20 w-32 h-32 bg-cyan-400/15 rounded-full blur-xl transform-gpu"
          style={{ transformStyle: 'preserve-3d' }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotateX: [0, 180, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            className={`absolute w-4 h-4 bg-cyan-400/40 rounded-full transform-gpu`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              transformStyle: 'preserve-3d'
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10 px-2 xs:px-4 hero-container">
        <div className="grid lg:grid-cols-2 gap-8 xs:gap-12 lg:gap-16 items-center">
          {/* Left Side - Larger Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-center items-center"
          >
            <div className="relative">
              {/* Static Image Container */}
              <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] rounded-full p-1 relative hero-image-container">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-cyan-400 relative">
                  <Image
                    src="/WhatsApp Image 2025-07-25 at 6.16.15 PM.jpeg"
                    alt="Bhupesh Kumar"
                    width={450}
                    height={450}
                    className="w-full h-full object-cover"
                    priority
                    quality={75}
                  />
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full glassmorphic flex items-center justify-center border border-white/20"
              >
                <span className="text-3xl">⚛️</span>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full glassmorphic flex items-center justify-center border border-white/20"
              >
                <span className="text-3xl">🍃</span>
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -left-10 w-16 h-16 rounded-full glassmorphic flex items-center justify-center border border-white/20"
              >
                <span className="text-2xl">☕</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Professional Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 hero-text"
            >
              <span className="text-cyan-400">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg xs:text-xl sm:text-2xl lg:text-3xl mb-6 hero-role"
            >
              <div className="flex flex-wrap justify-center lg:justify-start">
                {personalInfo.role.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateX: -90, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                      scale: 1,
                      color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#06b6d4']
                    }}
                    transition={{
                      opacity: { duration: 0.3, delay: 2 + index * 0.05 },
                      y: { duration: 0.4, delay: 2 + index * 0.05 },
                      rotateX: { duration: 0.4, delay: 2 + index * 0.05 },
                      scale: { duration: 0.3, delay: 2 + index * 0.05 },
                      color: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 + index * 0.1 }
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotateY: 15,
                      textShadow: '0 0 20px rgba(6, 182, 212, 1)',
                      transition: { duration: 0.2 }
                    }}
                    className="font-bold cursor-pointer inline-block"
                    style={{
                      transformStyle: 'preserve-3d',
                      textShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
            </motion.h2>

            {/* Experience Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-8 mb-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{calculateTotalExperience()}+</div>
                <div className="text-sm text-gray-400">Months Experience</div>
              </div>
            </motion.div>

            {/* Professional Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              <p className="mb-4">
                Passionate Full-Stack Developer with expertise in modern web technologies. 
                I specialize in building scalable applications using Java, Spring Boot, React, and Angular.
              </p>
              <p className="text-gray-400">
                Currently working as a <span className="text-cyan-400">{getCurrentPosition().title}</span> at <span className="text-cyan-400">{getCurrentPosition().company}</span>, I love solving complex problems 
                and creating efficient, user-friendly solutions that make a real impact.
              </p>
            </motion.div>

            {/* Social Links with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-xl text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300"
              >
                <FaLinkedin className="text-xl text-blue-400" />
                <span className="text-sm font-medium">LinkedIn</span>
              </motion.a>
              
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-xl text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300"
              >
                <FaGithub className="text-xl text-gray-300" />
                <span className="text-sm font-medium">GitHub</span>
              </motion.a>
              
              <motion.a
                href="/Bhupesh_Resume.pdf"
                download
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-xl text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300"
              >
                <FaDownload className="text-xl text-green-400" />
                <span className="text-sm font-medium">Resume</span>
              </motion.a>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;