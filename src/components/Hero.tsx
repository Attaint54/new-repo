"use client";

import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 xl:px-0 pt-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-accent font-mono text-sm md:text-base mb-4"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-heading leading-[1.1] mb-4"
          >
            Atta-ul-Bari.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-text leading-[1.1] mb-6"
          >
            I build modern web experiences.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-xl text-text text-base md:text-lg leading-relaxed mb-6"
          >
            Full-Stack Developer specializing in the MERN stack. I craft
            responsive, performant web applications with clean code and great
            user experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-accent-light text-accent border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open to Freelance Opportunities
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-blue-400 transition-all duration-200"
            >
              <FiDownload size={16} />
              Resume
            </a>
            <a
              href="https://github.com/Attaint54"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-light hover:text-accent hover:border-accent transition-all duration-200 text-sm"
            >
              <FiGithub size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/attaul-bari-3849a7362"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-light hover:text-accent hover:border-accent transition-all duration-200 text-sm"
            >
              <FiLinkedin size={16} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
            <img
              src="/profile.jpg"
              alt="Atta-ul-Bari"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
