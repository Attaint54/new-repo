"use client";

import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiBookOpen } from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Modern Web Apps",
    desc: "I build full-stack web applications using React, Next.js, Node.js, and MongoDB with clean, maintainable code.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    desc: "Every project I create is fully responsive and mobile-first, ensuring a seamless experience across all devices.",
  },
  {
    icon: FiBookOpen,
    title: "Continuous Learning",
    desc: "I stay up-to-date with the latest technologies and best practices to deliver modern, efficient solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 xl:px-0 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-text leading-relaxed">
              I&apos;m a passionate Full-Stack Developer with expertise in the
              MERN stack. I love turning complex problems into simple, beautiful
              interfaces that users enjoy interacting with.
            </p>
            <p className="text-text leading-relaxed">
              My journey in web development started with curiosity about how
              websites work, and has evolved into a career building everything
              from landing pages to full-featured web applications with
              authentication, databases, and real-time features.
            </p>
            <p className="text-text leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or working on
              side projects to sharpen my skills.
            </p>
          </motion.div>

          <div className="space-y-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="flex gap-4 p-5 rounded-xl glass"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
                  <item.icon className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-heading font-medium mb-1">{item.title}</h3>
                  <p className="text-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
