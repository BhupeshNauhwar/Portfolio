'use client';

import { motion } from 'framer-motion';
import { personalInfo, skills } from '../app/data';
import { FaJava, FaReact, FaAngular, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaDocker, FaLinkedin, FaGithub, FaDownload, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiExpress, SiTailwindcss, SiMysql, SiMongodb, SiRedis, SiPostman, SiIntellijidea, SiVisualstudiocode, SiJunit5, SiLeetcode, SiSwagger } from 'react-icons/si';
import { DiEclipse } from 'react-icons/di';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Icon mapping for skills
  const skillIcons: { [key: string]: any } = {
    'Java': <FaJava className="text-orange-500" />,
    'JavaScript': <SiJavascript className="text-yellow-400" />,
    'React JS': <FaReact className="text-blue-400" />,
    'Angular JS': <FaAngular className="text-red-500" />,
    'Node JS': <FaNodeJs className="text-green-500" />,
    'Spring Boot': <SiSpringboot className="text-green-400" />,
    'Express.js': <SiExpress className="text-white" />,
    'HTML': <FaHtml5 className="text-orange-500" />,
    'CSS': <FaCss3Alt className="text-blue-500" />,
    'Bootstrap': <FaBootstrap className="text-purple-500" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    'MySQL': <SiMysql className="text-blue-600" />,
    'MongoDB': <SiMongodb className="text-green-500" />,
    'Redis': <SiRedis className="text-red-500" />,
    'Git': <FaGitAlt className="text-orange-600" />,
    'VS Code': <SiVisualstudiocode className="text-blue-500" />,
    'Eclipse': <DiEclipse className="text-purple-600" />,
    'IntelliJ': <SiIntellijidea className="text-blue-600" />,
    'Postman': <SiPostman className="text-orange-500" />,
    'Swagger': <SiSwagger className="text-green-500" />,
    'Docker': <FaDocker className="text-blue-500" />,
    'JUnit': <SiJunit5 className="text-green-600" />,
    'LeetCode': <SiLeetcode className="text-yellow-500" />
  };

  const SkillCard = ({ skill, index }: { skill: any, index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.08, 
        boxShadow: "0 0 25px rgba(6, 182, 212, 0.3)"
      }}
      className="bg-slate-700/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-3 md:p-4 text-center group cursor-pointer hover:bg-slate-700/30 hover:border-cyan-400/30 transition-all duration-300"
    >
      <div className="text-xl md:text-2xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
        {skillIcons[skill.name] || <span>{skill.icon}</span>}
      </div>
      <h4 className="font-medium text-white text-xs leading-tight">{skill.name}</h4>
    </motion.div>
  );

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* 3D Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <motion.div
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 180],
            z: [-100, 100, -100],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-neon-teal/10 to-neon-blue/10 transform-gpu"
          style={{ 
            transformStyle: 'preserve-3d',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        
        {/* Floating Rings */}
        <motion.div
          animate={{
            rotateZ: [0, 360],
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 w-40 h-40 border-4 border-neon-purple/20 rounded-full transform-gpu"
          style={{ transformStyle: 'preserve-3d' }}
        />
        
        {/* Morphing Blobs */}
        <motion.div
          animate={{
            borderRadius: ['50%', '30% 70% 70% 30%', '50%'],
            rotateX: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-neon-pink/10 to-neon-teal/10 blur-xl transform-gpu"
          style={{ transformStyle: 'preserve-3d' }}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glassmorphic rounded-2xl p-8 h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {personalInfo.about}
            </p>
          </motion.div>

          {/* Experience & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glassmorphic rounded-2xl p-6 h-full flex flex-col"
          >
            {/* Experience */}
            <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
            
            <div className="space-y-4 flex-1">
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h4 className="font-bold text-cyan-400 text-sm">Software Engineer</h4>
                  <p className="text-cyan-300 text-sm font-medium">Capgemini</p>
                  <p className="text-gray-400 text-xs">June 2025 – Present</p>
                </div>
                
                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-bold text-gray-300 text-sm">Java Full-Stack Intern</h4>
                  <p className="text-cyan-300 text-sm">Capgemini</p>
                  <p className="text-gray-500 text-xs">Jan 2025 – May 2025</p>
                </div>
            </div>


          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold gradient-text text-center mb-12">
            Technical Skills
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Languages & Frameworks */}
            <div className="bg-slate-800/20 backdrop-blur-md border border-cyan-500/15 rounded-2xl p-4 md:p-6 hover:bg-slate-800/30 hover:border-cyan-400/25 transition-all duration-300">
              <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 text-center">
                Languages & Frameworks
              </h4>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4"
              >
                {skills["Programming Languages & Frameworks"].map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-slate-800/20 backdrop-blur-md border border-cyan-500/15 rounded-2xl p-4 md:p-6 hover:bg-slate-800/30 hover:border-cyan-400/25 transition-all duration-300">
              <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 text-center">
                Tools & Technologies
              </h4>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4"
              >
                {skills["Tools & Technologies"].map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;