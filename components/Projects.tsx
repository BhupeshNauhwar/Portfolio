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
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      <div className="relative overflow-hidden">
        {/* Diamond Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-cyan-400/25 to-blue-500/15 transform rotate-45 rounded-sm"></div>
          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-slate-400/20 to-slate-600/10 transform rotate-45 rounded-sm"></div>
        </div>
        
        <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4 md:p-6 h-full flex flex-col hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group">
        {/* Project Header */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
            <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-blue-600/15 text-cyan-300 rounded-full border border-cyan-400/30 backdrop-blur-sm self-start">
              {project.category}
            </span>
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
          
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
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
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gradient-to-r from-slate-700/30 to-slate-800/50 text-slate-200 rounded border border-slate-500/25 hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/15 transition-all duration-300 backdrop-blur-sm"
              >
                {tech}
              </span>
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

        {/* Projects Zigzag Layout */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-cyan-300/30 to-cyan-400/50 transform -translate-x-1/2 hidden lg:block" />
          
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-16 lg:mb-24 ${
                  isLeft 
                    ? 'lg:pr-8 lg:mr-8 lg:text-right' 
                    : 'lg:pl-8 lg:ml-8 lg:text-left'
                } lg:w-1/2 ${isLeft ? 'lg:ml-0' : 'lg:ml-auto'}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className={`absolute top-8 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.6)] hidden lg:block ${
                    isLeft ? '-right-10' : '-left-10'
                  }`}
                />
                
                <ProjectCard project={project} index={index} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;