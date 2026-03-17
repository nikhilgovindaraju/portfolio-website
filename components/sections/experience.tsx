"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { experiences } from "@/data/experience";


// Map experience IDs to their logo files
const logoMap: Record<string, string> = {
  "jubilant":     "/assets/jubilant.png",
  "exinous":      "/assets/exinous.png",
  "bosch":        "/assets/bosch.png",
  "robert-bosch": "/assets/bosch.png",
  "codespeedy":   "/assets/codespeedy.png",
};

function Experience() {
  const [expanded, setExpanded] = useState<string | null>("jubilant");

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Header */}
        <motion.div
          className="mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-white/25" />
            <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase">Experience</p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Where I&apos;ve <span className="text-white/25">worked.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical track line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/[0.07]" />

          <div className="space-y-3">
            {experiences.map(({ id, company, role, period, location, type, bullets, tags }, i) => {
              const isOpen = expanded === id;

              return (
                <motion.div
                  key={id}
                  className="relative pl-14"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Timeline dot — glows blue when open */}
                  <div className="absolute left-[11px] top-[22px] z-10">
                    <motion.div
                      className="w-4 h-4 rounded-full border-2 border-[#080808]"
                      animate={{
                        backgroundColor: isOpen ? "#3b82f6" : "rgba(255,255,255,0.20)",
                        boxShadow: isOpen
                          ? "0 0 0 4px rgba(59,130,246,0.18), 0 0 16px 2px rgba(59,130,246,0.25)"
                          : "none",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    className="rounded-2xl border overflow-hidden transition-all duration-300"
                    animate={{
                      borderColor: isOpen ? "rgba(59,130,246,0.25)" : "rgba(255,255,255,0.07)",
                      backgroundColor: isOpen ? "rgba(59,130,246,0.04)" : "rgba(255,255,255,0.02)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow: isOpen
                        ? "0 0 32px 0 rgba(59,130,246,0.08), 0 4px 24px 0 rgba(0,0,0,0.3)"
                        : "none",
                    }}
                  >
                    {/* Header row */}
                    <button
                      className="w-full flex items-center gap-4 p-4 sm:p-5 text-left"
                      onClick={() => setExpanded(isOpen ? null : id)}
                    >
                      {/* Logo */}
                      <div className="relative w-10 h-10 rounded-xl flex-shrink-0 border border-white/[0.08] bg-white/[0.05] overflow-hidden">
                        <Image
                          src={logoMap[id] ?? `/assets/${id}.png`}
                          alt={company}
                          fill
                          className="object-contain p-1.5"
                          loading="lazy"
                          unoptimized
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-white font-bold text-sm">{role}</h3>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/[0.06] text-white/45">
                            {type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          <span className="text-sm font-medium text-white/50">{company}</span>
                          <span className="text-white/20 text-xs">·</span>
                          <span className="text-white/30 text-xs">{location}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-white/25 text-xs hidden sm:block">{period}</span>
                        <motion.div
                          className="w-7 h-7 rounded-full border flex items-center justify-center text-white/40 transition-colors"
                          animate={{
                            borderColor: isOpen ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.10)",
                            color: isOpen ? "rgba(59,130,246,0.9)" : "rgba(255,255,255,0.4)",
                            backgroundColor: isOpen ? "rgba(59,130,246,0.10)" : "transparent",
                          }}
                          transition={{ duration: 0.25 }}
                        >
                          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                        </motion.div>
                      </div>
                    </button>

                    {/* Expandable body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-5 border-t border-white/[0.05]">
                            <ul className="mt-4 space-y-2.5">
                              {bullets.map((b, bi) => (
                                <motion.li
                                  key={bi}
                                  className="flex gap-3 text-sm text-white/50 leading-relaxed"
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: bi * 0.06 }}
                                >
                                  <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-blue-400/60" />
                                  {b}
                                </motion.li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5 mt-4">
                              {tags.map((s) => (
                                <span key={s} className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.06] text-white/30 text-[11px] font-mono">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Experience };
export default Experience;