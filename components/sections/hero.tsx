"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const words = ["Full-Stack", "AI Product", "Frontend"];

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const terminalRef = useRef<HTMLDivElement>(null);

  const rotateX = useTransform(springY, [-300, 300], [12, -12]);
  const rotateY = useTransform(springX, [-300, 300], [-12, 12]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  // Typewriter effect for terminal
  useEffect(() => {
    const lines = [
      { text: "$ software engineer --profile", delay: 600, class: "text-[#4af]" },
      { text: "Name: Nikhil Govindaraju", delay: 1000, class: "text-white/70" },
      { text: "Role: Full-Stack AI Engineer", delay: 1200, class: "text-white/70" },
      { text: "School: USC MSCS '25", delay: 1400, class: "text-white/70" },
      { text: "Stack:", delay: 1700, class: "text-[#4af] font-bold" },
      { text: "React, Next.js, Angular, TypeScript", delay: 1900, class: "text-white/60 pl-2" },
      { text: "Python, Node.js, FastAPI, AWS, PostgreSQL", delay: 2100, class: "text-white/60 pl-2" },
      { text: "LangChain, Claude API, RAG", delay: 2300, class: "text-white/60 pl-2" },
      { text: "Status:", delay: 2600, class: "text-[#4af] font-bold" },
      { text: "✓ Available for full-time roles", delay: 2800, class: "text-emerald-400" },
      { text: "✓ Open to relocation", delay: 3000, class: "text-emerald-400" },
    ];

    const container = terminalRef.current;
    if (!container) return;
    container.innerHTML = "";

    const timers: ReturnType<typeof setTimeout>[] = [];

    lines.forEach(({ text, delay, class: cls }) => {
      const t = setTimeout(() => {
        const p = document.createElement("p");
        p.textContent = text;
        p.className = `${cls} text-[13px] font-mono opacity-0 transition-all duration-300 translate-y-1`;
        container.appendChild(p);
        requestAnimationFrame(() => {
          p.classList.remove("opacity-0", "translate-y-1");
        });
      }, delay);
      timers.push(t);
    });

    // blinking cursor after last line
    const cursorTimer = setTimeout(() => {
      const cursor = document.createElement("p");
      cursor.innerHTML = '<span class="text-[#4af]">$ </span><span class="inline-block w-2 h-4 bg-[#4af] animate-pulse align-middle ml-0.5"></span>';
      cursor.className = "text-[13px] font-mono mt-1";
      container.appendChild(cursor);
    }, 3300);
    timers.push(cursorTimer);

    return () => timers.forEach(clearTimeout);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/12 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT — text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.05] text-white/50 text-xs font-medium tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Actively Looking For Full-time Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="mb-4">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                <span className="block text-white">Nikhil</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">
                  Govindaraju
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-3">
              <p className="text-white/50 text-base font-medium tracking-wide">
                Full-Stack Engineer · AI Product · Cloud Architecture
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-white/30 text-sm">
                USC MSCS &apos;25 · 3 years shipping
              </p>
            </motion.div>

            {/* CTA row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                className="group relative overflow-hidden px-6 py-3 rounded-full bg-white text-black text-sm font-semibold"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-blue-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>

              <MagneticButton as="a" href="#contact"
                className="px-6 py-3 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:border-white/30 hover:text-white transition-all"
              >
                Get in touch
              </MagneticButton>

              <motion.a
                href="https://github.com/nikhilgovindaraju"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full text-white/40 text-sm font-medium hover:text-white/70 transition-all"
                whileHover={{ scale: 1.04 }}
              >
                GitHub ↗
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              {[
                { val: "3+", label: "Years" },
                { val: "3.81", label: "USC GPA" },
                { val: "10+", label: "Projects" },
                { val: "4", label: "Domains" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-black text-white">{val}</p>
                  <p className="text-white/30 text-xs uppercase tracking-widest mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — terminal card */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
              className="relative w-full max-w-[480px]"
            >
              {/* Terminal window */}
              <div className="rounded-2xl border border-blue-500/25 bg-[#0d0d0d]/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10 overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-white/30 text-xs font-mono">nikhil@portfolio ~</span>
                </div>
                {/* Terminal body */}
                <div className="p-5 min-h-[260px] space-y-1.5" ref={terminalRef} />
              </div>

              {/* Glow behind terminal */}
              <div className="absolute -inset-8 -z-10 rounded-3xl bg-blue-500/20 blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs tracking-widest uppercase"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={16} />
        </motion.div>
        <span>scroll</span>
      </motion.div>
    </section>
  );
}

export { Hero };
export default Hero;