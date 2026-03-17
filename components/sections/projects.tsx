"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const featured = projects.filter((p) => p.featured);
const rest     = projects.filter((p) => !p.featured);

// ── Project modal ─────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      />
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.09] bg-[#0c0c0c] shadow-2xl"
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
        >
          <X size={14} />
        </button>

        {project.image && (
          <div className="relative w-full h-52 overflow-hidden rounded-t-3xl bg-white/[0.03]">
            <Image src={project.image} alt={project.title} fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/20 to-transparent" />
            <div className="absolute bottom-5 left-6">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-white/[0.08] border border-white/[0.10] text-white/55">
                {project.category}
              </span>
              <h2 className="text-2xl font-black text-white mt-2">{project.title}</h2>
              <p className="text-white/40 text-sm">{project.tagline}</p>
            </div>
          </div>
        )}

        <div className="p-7 space-y-6">
          {project.metrics?.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {project.metrics.map(({ label, value }) => (
                <div key={label} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                  <p className="text-white font-black text-lg">{value}</p>
                  <p className="text-white/25 text-[11px] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          )}
          <div className="p-4 rounded-xl border-l border-white/15 bg-white/[0.02]">
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1.5">Problem</p>
            <p className="text-white/55 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-2">My Approach</p>
            <p className="text-white/55 text-sm leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full border border-white/[0.07] bg-white/[0.03] text-white/45 text-xs font-mono">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-1">
            {project.links.map(({ label, href }) => (
              <motion.a
                key={label} href={href} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.09] text-white/55 text-sm font-medium hover:text-white hover:border-white/20 transition-all"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              >
                <Github size={13} /> {label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Featured carousel ─────────────────────────────────────
function FeaturedCarousel({ onSelect }: { onSelect: (p: Project) => void }) {
  const [current, setCurrent]   = useState(0);
  const [paused, setPaused]     = useState(false);
  const [direction, setDir]     = useState(1); // 1 = forward, -1 = back
  const intervalRef             = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((idx: number, dir: number) => {
    setDir(dir);
    setCurrent((idx + featured.length) % featured.length);
  }, []);

  const next = useCallback(() => go(current + 1,  1), [current, go]);
  const prev = useCallback(() => go(current - 1, -1), [current, go]);

  // Auto-rotate every 5s
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, next]);

  const project = featured[current];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit:  (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={project.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 min-h-[420px]"
        >
          {/* Image col */}
          <div className="relative overflow-hidden bg-white/[0.03] min-h-[220px] md:min-h-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]/80 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent md:hidden" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/60 border border-white/[0.10]">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content col */}
          <div className="p-7 sm:p-9 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">{project.title}</h3>
                <p className="text-white/40 text-sm mt-1.5">{project.tagline}</p>
              </div>
              <p className="text-white/35 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 5).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.06] text-white/30 text-[11px] font-mono">{t}</span>
                ))}
                {project.tech.length > 5 && (
                  <span className="text-white/20 text-[11px] px-1 self-center">+{project.tech.length - 5}</span>
                )}
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-2 gap-2.5 mt-5">
              {project.metrics.slice(0, 4).map(({ label, value }) => (
                <div key={label} className="p-3 rounded-xl bg-black/20 border border-white/[0.05]">
                  <p className="text-white font-black text-lg leading-tight">{value}</p>
                  <p className="text-white/25 text-[11px] mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-5">
              <motion.button
                onClick={() => onSelect(project)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-white/60 text-sm font-medium hover:text-white hover:border-white/30 transition-all"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={13} /> Case study
              </motion.button>
              {project.links.map(({ label, href }) => (
                <motion.a
                  key={label} href={href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-white/60 text-sm font-medium hover:text-white hover:border-white/30 transition-all"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                >
                  <Github size={13} /> {label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/60 transition-all z-10"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/60 transition-all z-10"
      >
        <ChevronRight size={16} />
      </button>

      {/* Dot indicators + progress */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
            style={{ width: i === current ? 28 : 8, backgroundColor: "rgba(255,255,255,0.20)" }}
          >
            {i === current && !paused && (
              <motion.div
                className="absolute inset-y-0 left-0 bg-white/70 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={`${current}-progress`}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Small project card ────────────────────────────────────
function SmallCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden cursor-pointer hover:border-white/[0.14] hover:bg-white/[0.04] transition-all"
      whileHover={{ y: -4 }}
      onClick={onClick}
    >
      <div className="relative w-full h-36 overflow-hidden bg-white/[0.03] border-b border-white/[0.06]">
        <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/60 border border-white/[0.08]">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white/85 font-bold text-sm leading-tight">{project.title}</h3>
          <ExternalLink size={12} className="text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0 mt-0.5" />
        </div>
        <p className="text-white/35 text-xs leading-relaxed mb-4 line-clamp-2">{project.tagline}</p>
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.05] text-white/30 text-[10px] font-mono">{t}</span>
          ))}
          {project.tech.length > 3 && <span className="text-white/20 text-[10px] px-1">+{project.tech.length - 3}</span>}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────
function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

          {/* Header */}
          <motion.div
            className="mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-white/25" />
              <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase">Projects</p>
            </div>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                What I&apos;ve <span className="text-white/30">built.</span>
              </h2>
              <p className="text-white/25 text-sm">Click any project for the full case study</p>
            </div>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-10"
          >
            <FeaturedCarousel onSelect={setSelected} />
          </motion.div>

          {/* View more button */}
          <div className="flex justify-center mb-8">
            <motion.button
              onClick={() => setShowMore((v) => !v)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/[0.09] text-white/40 text-sm font-medium hover:text-white/70 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div animate={{ rotate: showMore ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={15} />
              </motion.div>
              {showMore ? "Show less" : `View ${rest.length} more projects`}
            </motion.button>
          </div>

          {/* More projects grid */}
          <AnimatePresence initial={false}>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {rest.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                    >
                      <SmallCard project={project} onClick={() => setSelected(project)} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}

export { Projects };
export default Projects;