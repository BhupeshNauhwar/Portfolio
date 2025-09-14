'use client';

import { motion } from 'framer-motion';
import { projects } from '../app/data';
import Image from 'next/image';


const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      variants={itemVariants}
      className="group h-full"
    >
      <div className="relative overflow-hidden transform-gpu">
        {/* Advanced Animated Background */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'conic-gradient(from 0deg at 50% 50%, rgba(6, 182, 212, 0.2) 0deg, rgba(59, 130, 246, 0.1) 120deg, rgba(139, 92, 246, 0.15) 240deg, rgba(6, 182, 212, 0.2) 360deg)',
              'conic-gradient(from 120deg at 50% 50%, rgba(6, 182, 212, 0.2) 0deg, rgba(59, 130, 246, 0.1) 120deg, rgba(139, 92, 246, 0.15) 240deg, rgba(6, 182, 212, 0.2) 360deg)',
              'conic-gradient(from 240deg at 50% 50%, rgba(6, 182, 212, 0.2) 0deg, rgba(59, 130, 246, 0.1) 120deg, rgba(139, 92, 246, 0.15) 240deg, rgba(6, 182, 212, 0.2) 360deg)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Advanced Particle System */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            animate={{
              x: [
                0, 
                Math.sin(i * 30) * 40 + Math.cos(i * 45) * 20, 
                Math.sin(i * 60) * 30,
                0
              ],
              y: [
                0, 
                Math.cos(i * 30) * 25 + Math.sin(i * 45) * 15, 
                Math.cos(i * 60) * 20,
                0
              ],
              scale: [0.3, 1.8, 0.8, 0.3],
              opacity: [0.1, 0.9, 0.4, 0.1],
              rotate: [0, 180, 360],
              borderRadius: ['50%', '30%', '50%']
            }}
            transition={{
              duration: 8 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
            style={{
              width: `${6 + i * 1.5}px`,
              height: `${6 + i * 1.5}px`,
              left: `${10 + (i * 8) % 80}%`,
              top: `${5 + (i * 7) % 85}%`,
              background: `linear-gradient(${i * 30}deg, 
                rgba(6, 182, 212, ${0.4 + (i % 3) * 0.2}), 
                rgba(59, 130, 246, ${0.3 + (i % 4) * 0.15}), 
                rgba(139, 92, 246, ${0.2 + (i % 5) * 0.1})
              )`,
              filter: `blur(${0.5 + (i % 3) * 0.5}px)`,
              boxShadow: `0 0 ${10 + i * 2}px rgba(6, 182, 212, ${0.3 + (i % 3) * 0.2})`
            }}
          />
        ))}
        
        {/* Floating Geometric Shapes */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute border border-cyan-400/30"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.3, 0.8],
              opacity: [0.2, 0.6, 0.2],
              borderColor: [
                'rgba(6, 182, 212, 0.3)',
                'rgba(59, 130, 246, 0.4)',
                'rgba(139, 92, 246, 0.3)',
                'rgba(6, 182, 212, 0.3)'
              ]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "linear"
            }}
            style={{
              width: `${20 + i * 8}px`,
              height: `${20 + i * 8}px`,
              left: `${70 + i * 5}%`,
              top: `${60 + i * 8}%`,
              clipPath: i % 2 === 0 
                ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
                : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              filter: `drop-shadow(0 0 ${8 + i * 2}px rgba(6, 182, 212, 0.4))`
            }}
          />
        ))}
        
        <div className="relative bg-slate-800 rounded-2xl p-4 md:p-6 h-full flex flex-col overflow-hidden border border-slate-700">

        {/* Project Header */}
        <div className="mb-4 relative z-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
            <motion.span 
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/40 to-blue-600/35 text-cyan-300 rounded-full border border-cyan-400/50 backdrop-blur-sm self-start"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 25px rgba(6, 182, 212, 0.6)',
                backgroundColor: 'rgba(6, 182, 212, 0.2)'
              }}
              animate={{
                borderColor: ['rgba(6, 182, 212, 0.5)', 'rgba(59, 130, 246, 0.6)', 'rgba(6, 182, 212, 0.5)']
              }}
              transition={{
                borderColor: { duration: 3, repeat: Infinity }
              }}
            >
              {project.category}
            </motion.span>
            <div className="flex gap-2 self-end sm:self-auto">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-gradient-to-br from-slate-700/40 to-slate-800/60 border border-slate-500/30 rounded-lg flex items-center justify-center hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-cyan-600/20 hover:to-blue-600/15 transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-4 h-4 text-slate-300 group-hover:text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </motion.a>
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-gradient-to-br from-cyan-600/20 to-blue-600/15 border border-cyan-400/40 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500/30 hover:to-blue-500/25 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              )}
            </div>
          </div>
          
          <h3 className="text-lg md:text-xl font-bold text-white mb-2">
            {project.title}
          </h3>
        </div>

        {/* Project Description */}
        <p className="text-gray-300 text-sm mb-4 md:mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-4 md:mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-2 md:mb-3">Key Features</h4>
          <ul className="space-y-1 md:space-y-2">
            {project.features.slice(0, 3).map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start text-xs text-gray-400">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {project.technologies.map((tech: string, techIndex: number) => (
              <motion.span
                key={tech}
                className="px-2 py-1 text-xs bg-gradient-to-r from-slate-700/40 to-slate-800/60 text-slate-200 rounded border border-slate-500/30 hover:border-cyan-400/60 hover:bg-gradient-to-r hover:from-cyan-600/30 hover:to-blue-600/25 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)'
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: techIndex * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Explore my latest work showcasing full-stack development skills with modern technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Timeline Layout */}
        <div className="relative">
          {/* Horizontal Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transform -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >

                
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;