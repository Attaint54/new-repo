"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
}

const fallbackProjects = [
  {
    id: 1,
    name: "E-Commerce App",
    description:
      "Full-stack e-commerce platform with authentication, product management, shopping cart, and payment integration built with MERN stack.",
    html_url: "https://github.com/Attaint54",
    homepage: null,
    topics: ["React", "Node.js", "MongoDB", "Express"],
    language: "JavaScript",
  },
  {
    id: 2,
    name: "Authentication System",
    description:
      "Secure authentication system with JWT, OAuth, email verification, password reset, and role-based access control.",
    html_url: "https://github.com/Attaint54",
    homepage: null,
    topics: ["JWT", "Node.js", "React", "Auth"],
    language: "TypeScript",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "Modern portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion showcasing projects and skills.",
    html_url: "https://github.com/Attaint54",
    homepage: null,
    topics: ["Next.js", "TypeScript", "Tailwind CSS"],
    language: "TypeScript",
  },
  {
    id: 4,
    name: "CRUD Application",
    description:
      "Full CRUD application with RESTful API, database integration, and responsive frontend interface.",
    html_url: "https://github.com/Attaint54",
    homepage: null,
    topics: ["CRUD", "API", "MongoDB", "Express"],
    language: "JavaScript",
  },
];

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/Attaint54/repos?sort=updated&per_page=6"
        );
        if (res.ok) {
          const data: Repo[] = await res.json();
          if (data.length > 0) setRepos(data);
        }
      } catch {
        /* use fallback */
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

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="h-64 rounded-xl bg-bg-card animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.slice(0, 6).map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.homepage || repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-6 rounded-xl glass hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
                    <FiGithub className="text-accent" size={20} />
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {repo.homepage && (
                      <span className="p-2 rounded-lg bg-bg-card text-text hover:text-accent transition-colors">
                        <FiExternalLink size={16} />
                      </span>
                    )}
                    <span className="p-2 rounded-lg bg-bg-card text-text hover:text-accent transition-colors">
                      <FiGithub size={16} />
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-heading mb-2 group-hover:text-accent transition-colors capitalize">
                  {repo.name.replace(/-/g, " ")}
                </h3>
                <p className="text-sm text-text leading-relaxed mb-4 line-clamp-2">
                  {repo.description || "No description available."}
                </p>
                <div className="flex flex-wrap gap-2">
                  {repo.language && (
                    <span className="text-xs font-mono px-2 py-1 rounded bg-bg-card text-accent">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics?.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-mono px-2 py-1 rounded bg-bg-card text-text"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
