'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/BhupeshNauhwar',
      icon: <FaGithub className="text-xl" />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bhupesh-kumar-809b05241/',
      icon: <FaLinkedin className="text-xl" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bhupesh_nauhwar/',
      icon: <FaInstagram className="text-xl" />,
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <footer className="relative py-12 px-6 border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 20}%`,
              bottom: '20%'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  boxShadow: '0 10px 25px rgba(6,182,212,0.3)'
                }}
                whileTap={{ scale: 0.9 }}
                viewport={{ once: true }}
                className={`p-4 bg-slate-800/50 border border-cyan-400/30 rounded-xl text-cyan-400 ${social.color} transition-all duration-300 backdrop-blur-sm hover:border-cyan-400/60`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Follow Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg mb-6"
          >
            Follow me on social media for updates and insights
          </motion.p>


        </div>
      </div>
    </footer>
  );
};

export default Footer;