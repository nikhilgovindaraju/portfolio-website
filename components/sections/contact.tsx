"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const contactItems = [
  { icon: Mail,     label: "Email",    value: "nikhil.govindaraju312@gmail.com",       href: "mailto:nikhil.govindaraju312@gmail.com",                        color: "#3b82f6" },
  { icon: Linkedin, label: "LinkedIn", value: "nikhil-govindaraju",     href: "https://linkedin.com/in/nikhil-govindaraju",     color: "#0a66c2" },
  { icon: Github,   label: "GitHub",   value: "nikhilgovindaraju",      href: "https://github.com/nikhilgovindaraju",           color: "#f0f6fc" },
];

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-white/25" />
              <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase">Contact</p>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Ready to build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                something great?
              </span>
            </h2>

            <p className="text-white/40 text-base leading-relaxed max-w-md">
              I&apos;m actively looking for full-stack, frontend, and AI product engineering roles.
              Open to building ambitious products from day one.
            </p>

            {/* Availability badge */}
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to full-time roles · Dec 2025
              </motion.div>
            </div>

            {/* ── Typing indicator ── */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-blue-400/60"
                    animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  />
                ))}
              </div>
              <p className="text-white/30 text-sm">
                Nikhil usually responds within <span className="text-white/50 font-medium">24 hours</span>
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
            <MagneticButton
                as="a"
                href="mailto:nikhil.govindaraju312@gmail.com?subject=Opportunity%20for%20Nikhil%20Govindaraju%20%E2%80%94%20%5BRole%20Name%5D%20at%20%5BCompany%5D&body=Hi%20Nikhil%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20regarding%20a%20%5Bfull-time%20/%20contract%5D%20opportunity%20at%20%5BCompany%20Name%5D.%0A%0AWe%27re%20looking%20for%20someone%20with%20your%20background%20in%20%5Bfull-stack%20/%20AI%20/%20frontend%5D%20engineering%2C%20and%20I%20think%20you%27d%20be%20a%20great%20fit.%0A%0AWould%20you%20be%20open%20to%20a%20quick%20call%20this%20week%3F%0A%0ABest%2C%0A%5BYour%20Name%5D%0A%5BCompany%5D%20%C2%B7%20%5BLinkedIn%20/%20Website%5D"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/85 transition-colors"
              >
                <Send size={14} /> Say Hello
              </MagneticButton>

              <MagneticButton
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/60 text-sm font-medium hover:text-white hover:border-white/30 transition-all"
              >
                Resume ↓
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {contactItems.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center border border-white/[0.08]"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                  <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors truncate">{value}</p>
                </div>
                <div className="text-white/20 group-hover:text-white/50 transition-colors">↗</div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export { Contact };
export default Contact;