"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Work",     href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Certs",    href: "#certifications" },
  { label: "Contact",  href: "#contact" },
];

const sectionIds = ["home","about","experience","projects","skills","certifications","contact"];

function Navbar() {
  const [active, setActive]       = useState("home");
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ── Scroll background ──────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Active section via IntersectionObserver ────────────────
  // Strategy: use a large rootMargin so we catch which section
  // is most central in the viewport, updating on every scroll tick.
  const updateActive = useCallback(() => {
    let closest = "home";
    let closestDist = Infinity;
    const mid = window.innerHeight / 2;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      // distance from section's top to viewport midpoint
      const dist = Math.abs(rect.top + rect.height / 2 - mid);
      if (dist < closestDist) {
        closestDist = dist;
        closest = id;
      }
    }
    setActive(closest);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive(); // run once on mount
    return () => window.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  // ── Smooth scroll helper ───────────────────────────────────
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#080808]/85 dark:bg-[#080808]/85 light:bg-white/85 backdrop-blur-xl border-b border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06]"
            : "bg-transparent"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#home")}
            className="text-white font-black text-xl tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            NG<span className="text-blue-400">.</span>
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                    isActive ? "text-white" : "text-white/40 hover:text-white/70"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/85 transition-colors"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Resume ↗
            </motion.a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <motion.span className="w-5 h-0.5 bg-white block" animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} />
              <motion.span className="w-5 h-0.5 bg-white block" animate={{ opacity: mobileOpen ? 0 : 1 }} />
              <motion.span className="w-5 h-0.5 bg-white block" animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#080808]/96 backdrop-blur-xl flex flex-col items-center justify-center gap-5 md:hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-3xl font-black text-white/60 hover:text-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {label}
              </motion.button>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-8 py-3 rounded-full bg-white text-black text-base font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              Resume ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { Navbar };
export default Navbar;