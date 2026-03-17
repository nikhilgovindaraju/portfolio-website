"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "motion/react";

import { Navbar }         from "@/components/layout/navbar";
import { Footer }         from "@/components/layout/footer";
import { Hero }           from "@/components/sections/hero";
import { About }          from "@/components/sections/about";
import { Experience }     from "@/components/sections/experience";
import { Projects }       from "@/components/sections/projects";
import { Skills }         from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Contact }        from "@/components/sections/contact";

// ─────────────────────────────────────────────────────────
// Animated mesh background — slow-drifting radial orbs
// ─────────────────────────────────────────────────────────
function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Orb 1 — blue, top-left, slow drift */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "-10%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 2 — indigo, bottom-right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          bottom: "5%",
          right: "-5%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.11) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Orb 3 — blue, center-right, mid-page */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "35%",
          right: "10%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 30, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Orb 4 — subtle violet, lower-left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: "30%",
          left: "5%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 9 }}
      />

      {/* Vignette — darkens edges to keep focus center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(8,8,8,0.7) 100%)",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Scroll progress bar
// ─────────────────────────────────────────────────────────
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #3b82f6, #6366f1, #3b82f6)",
        backgroundSize: "200% 100%",
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────
// Section divider
// ─────────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <MeshBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Certifications />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}