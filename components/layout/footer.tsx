"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Work",     href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Certs",    href: "#certifications" },
  { label: "Contact",  href: "#contact" },
];

const social = [
  { icon: Github,   label: "GitHub",   href: "https://github.com/nikhilgovindaraju" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/nikhil-govindaraju" },
  { icon: Mail,     label: "Email",    href: "mailto:nikhil.govindaraju312@gmail.com" },
];

const scrollTo = (href: string) => {
  const el = document.getElementById(href.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Top accent glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-14">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <button onClick={() => scrollTo("#home")}>
              <p className="text-3xl font-black text-white">
                NG<span className="text-blue-400">.</span>
              </p>
            </button>
            <p className="text-white/30 text-sm leading-relaxed">
              Full-Stack & AI Engineer.<br />
              USC MSCS &apos;25. Building things<br />
              that ship and scale.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5 pt-1">
              {social.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/35 hover:text-white hover:bg-white/[0.07] hover:border-white/15 transition-all"
                  whileHover={{ y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links — split into two cols */}
          <div className="lg:col-span-1">
            <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-5">Navigation</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-white/35 text-sm hover:text-white/70 transition-colors text-left"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-5">Get in Touch</p>
            <div className="space-y-3">
              <a
                href="mailto:nikhil.govindaraju312@gmail.com"
                className="block text-white/35 text-sm hover:text-white/70 transition-colors truncate"
              >
                nikhil.govindaraju312@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/nikhil-govindaraju"
                target="_blank" rel="noreferrer"
                className="block text-white/35 text-sm hover:text-white/70 transition-colors"
              >
                /in/nikhil-govindaraju
              </a>
              <a
                href="https://github.com/nikhilgovindaraju"
                target="_blank" rel="noreferrer"
                className="block text-white/35 text-sm hover:text-white/70 transition-colors"
              >
                @nikhilgovindaraju
              </a>
            </div>
          </div>

          {/* Availability card */}
          <div className="lg:col-span-1">
            <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-5">Status</p>
            <div className="p-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <p className="text-white/60 text-sm font-medium">Available for Full time roles</p>
              </div>
              <p className="text-white/25 text-xs leading-relaxed">
                Open to full-stack and AI engineering positions. Ready to contribute from day one.
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-semibold hover:text-blue-300 transition-colors"
                whileHover={{ x: 2 }}
              >
                Get in touch 🚀
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8 border-t border-white/[0.05]">
          <p className="text-white/20 text-xs">
            ng.dev - Nikhil Govindaraju © {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white/12 text-xs hidden sm:block">
              Building things that matter with ☕️
            </p>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.07] transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.93 }}
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;