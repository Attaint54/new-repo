"use client";

import { useEffect, useState } from "react";
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiFiverr, SiUpwork } from "react-icons/si";

const socials = [
  { icon: FiGithub, href: "https://github.com/Attaint54", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/attaul-bari-3849a7362", label: "LinkedIn" },
  { icon: SiFiverr, href: "https://www.fiverr.com/atta_ul_bari", label: "Fiverr" },
  { icon: SiUpwork, href: "https://www.upwork.com/freelancers/~018948a10d2eb4b23e", label: "Upwork" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative px-6 xl:px-0 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-text hover:text-accent hover:bg-accent-light transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-text text-sm text-center">
          &copy; 2026 Atta-ul-Bari. All rights reserved.
        </p>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full glass text-accent hover:bg-accent-light transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <FiArrowUp size={18} />
      </button>
    </footer>
  );
}
