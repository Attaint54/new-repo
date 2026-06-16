"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiStar,
  FiFolder,
  FiCode,
} from "react-icons/fi";

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  github: string;
  technologies: string[];
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "E-Commerce Store",
    description:
      "A modern e-commerce application built with responsive design principles. Features product browsing, category filtering, shopping cart functionality, and an intuitive user experience.",
    image: "/projects/ecommerce.png",
    liveDemo: "https://ecommerce-roan-eight-99.vercel.app/",
    github: "https://github.com/Attaint54/ecommerce",
    technologies: ["React", "JavaScript", "CSS/Tailwind", "API Integration"],
  },
  {
    id: 2,
    title: "Hinata Web",
    description:
      "A visually appealing and responsive web application showcasing modern frontend development techniques and interactive UI components.",
    image: "/projects/hinata.png",
    liveDemo: "https://hinata-web.vercel.app/",
    github: "https://github.com/Attaint54/hinata-web",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "A productivity-focused task management application that allows users to organize, manage, and track their daily tasks efficiently.",
    image: "/projects/todo.png",
    liveDemo: "https://todo-asd.vercel.app/",
    github: "https://github.com/Attaint54/todo",
    technologies: ["React", "JavaScript", "Local Storage"],
  },
  {
    id: 4,
    title: "Saylani MIT Task",
    description:
      "A project developed as part of Saylani Mass IT Training, demonstrating problem-solving skills and practical implementation of frontend concepts.",
    image: "/projects/saylani.png",
    liveDemo: "https://saylani-mit-task.vercel.app/",
    github: "https://github.com/Attaint54/saylani-mit-task",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 5,
    title: "Learn With Hiba",
    description:
      "A habit and mindset coaching platform featuring neuroscience-backed workshops, interactive tools, and personalized coaching to help users reset their mindset and achieve personal growth.",
    image: "/projects/webb.png",
    liveDemo: "https://webb-seven-orcin.vercel.app/",
    github: "https://github.com/Attaint54",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProjectImage({ src, title }: { src: string; title: string }) {
  const [error, setError] = useState(false);

  if (error) {
    console.warn(`[Projects] Failed to load image: ${src}`);
    return (
      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-accent/5 via-bg-card to-bg-secondary flex items-center justify-center rounded-t-xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.03),transparent_70%)]" />
        <div className="text-center">
          <FiCode className="mx-auto text-accent/30 mb-3" size={40} />
          <p className="text-sm font-medium text-text/40">{title}</p>
          <p className="text-xs text-text/25 mt-1">Screenshot</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl bg-bg-card">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/Attaint54/repos?sort=updated&per_page=100"
        );
        if (res.ok) {
          const data: GitHubRepo[] = await res.json();
          setRepos(data.filter((r) => !r.fork));
        }
      } catch {
        /* silent fail */
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="px-6 xl:px-0 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative glass rounded-xl overflow-hidden border border-border hover:border-accent/20 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.15)]"
            >
              <div className="relative">
                <ProjectImage src={project.image} title={project.title} />
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-accent text-white shadow-lg shadow-accent/20">
                    <FiStar size={10} />
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-heading mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-text leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-accent-light text-accent border border-accent/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-blue-400 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-light text-sm font-medium hover:text-accent hover:border-accent/40 transition-all duration-200"
                  >
                    <FiGithub size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          More Projects
        </motion.h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="h-48 rounded-xl bg-bg-card animate-pulse"
              />
            ))}
          </div>
        ) : repos.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {repos.slice(0, 4).map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.homepage || repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group relative p-6 rounded-xl glass hover:border-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_-8px_rgba(96,165,250,0.1)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
                    <FiFolder className="text-accent" size={20} />
                  </div>
                  {repo.stargazers_count > 0 && (
                    <span className="inline-flex items-center gap-1 text-xs text-text/60">
                      <FiStar size={12} />
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-heading mb-2 group-hover:text-accent transition-colors duration-200 capitalize">
                  {repo.name.replace(/-/g, " ")}
                </h3>
                <p className="text-sm text-text leading-relaxed mb-4 line-clamp-2">
                  {repo.description || "No description available."}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {repo.language && (
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent-light text-accent border border-accent/10">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics?.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg-card text-text/70 border border-border"
                    >
                      {topic}
                    </span>
                  ))}
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <FiExternalLink
                      className="text-text/40 group-hover:text-accent"
                      size={14}
                    />
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <FiGithub className="mx-auto text-text/20 mb-3" size={48} />
            <p className="text-text/50 text-sm">
              No additional repositories found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
