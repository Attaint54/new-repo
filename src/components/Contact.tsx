"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import {
  SiGithub,
  SiFiverr,
  SiUpwork,
} from "react-icons/si";

export default function Contact() {
  const [status, setStatus] = useState<string>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      user_name: (form.elements.namedItem("user_name") as HTMLInputElement).value,
      user_email: (form.elements.namedItem("user_email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus(body.error || "error");
      }
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "error");
    }
    setTimeout(() => setStatus("idle"), 8000);
  };

  return (
    <section id="contact" className="px-6 xl:px-0 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <FiUser
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text"
                  size={16}
                />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-bg-card border border-border text-text-light placeholder-text/50 focus:outline-none focus:border-accent transition-colors text-sm"
                />
              </div>
              <div className="relative">
                <FiMail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text"
                  size={16}
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-bg-card border border-border text-text-light placeholder-text/50 focus:outline-none focus:border-accent transition-colors text-sm"
                />
              </div>
              <div className="relative">
                <FiMessageSquare
                  className="absolute left-4 top-3 text-text"
                  size={16}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-bg-card border border-border text-text-light placeholder-text/50 focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-blue-400 transition-all disabled:opacity-50"
              >
                <FiSend size={16} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-400 text-sm">
                  Message sent successfully!
                </p>
              )}
              {status !== "idle" && status !== "sending" && status !== "success" && (
                <p className="text-red-400 text-sm">
                  {status === "error"
                    ? "Failed to send. Please try again."
                    : status}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <p className="text-text text-sm mb-6">
              Feel free to reach out for collaborations, freelance work, or just
              a friendly chat.
            </p>
            <a
              href="https://github.com/Attaint54"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg glass hover:border-accent/30 transition-all group"
            >
            <SiGithub className="text-text group-hover:text-accent transition-colors" size={20} />
            <span className="text-sm text-text-light group-hover:text-accent transition-colors">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/attaul-bari-3849a7362"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg glass hover:border-accent/30 transition-all group"
            >
              <BsLinkedin className="text-text group-hover:text-accent transition-colors" size={20} />
              <span className="text-sm text-text-light group-hover:text-accent transition-colors">
                LinkedIn
              </span>
            </a>
            <a
              href="https://www.fiverr.com/atta_ul_bari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg glass hover:border-accent/30 transition-all group"
            >
              <SiFiverr className="text-text group-hover:text-accent transition-colors" size={20} />
              <span className="text-sm text-text-light group-hover:text-accent transition-colors">
                Fiverr
              </span>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~018948a10d2eb4b23e"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg glass hover:border-accent/30 transition-all group"
            >
              <SiUpwork className="text-text group-hover:text-accent transition-colors" size={20} />
              <span className="text-sm text-text-light group-hover:text-accent transition-colors">
                Upwork
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
