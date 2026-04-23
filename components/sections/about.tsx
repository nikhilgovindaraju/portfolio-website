"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";

// ── Count-up hook ─────────────────────────────────────────
function useCountUp(target: number, duration = 1400, decimals = 0) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease out expo
      const eased = 1 - Math.pow(2, -10 * progress);
      const val = eased * target;
      setDisplay(decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toString());
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(decimals > 0 ? target.toFixed(decimals) : target.toString());
    };
    requestAnimationFrame(step);
  }, [inView, target, duration, decimals]);

  return { ref, display };
}

// ── Stat card with count-up ───────────────────────────────
function StatCard({ val, label, sub, delay }: { val: string; label: string; sub: string; delay: number }) {
  // Parse numeric value and suffix (e.g. "3+" → 3, "+")
  const match = val.match(/^(\d+\.?\d*)(.*)$/);
  const num     = match ? parseFloat(match[1]) : 0;
  const suffix  = match ? match[2] : "";
  const decimals = val.includes(".") ? val.split(".")[1]?.replace(/\D/g, "").length ?? 0 : 0;

  const { ref, display } = useCountUp(num, 1600, decimals);

  return (
    <motion.div
      className="group relative p-5 sm:p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-blue-500/[0.05] hover:border-blue-500/25 transition-all overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div ref={ref}>
        <p className="text-3xl sm:text-4xl font-black text-white mb-1">
          {display}{suffix}
        </p>
      </div>
      <p className="text-white/70 text-sm font-semibold">{label}</p>
      <p className="text-white/25 text-xs mt-0.5">{sub}</p>
    </motion.div>
  );
}

const stats = [
  { val: "3+",  label: "Years of Experience", sub: "Full-time & internships" },
  { val: "10+", label: "Projects Built",       sub: "From idea to production" },
  { val: "30+", label: "Technologies",         sub: "Languages, frameworks & tools" },
  { val: "4",   label: "Domains",              sub: "Full Stack, Cloud, AI, Mobile" },
];

const education = [
  {
    school: "University of Southern California",
    location: "Los Angeles, CA",
    degree: "M.S. Computer Science",
    period: "2024 – 2025",
    gpa: "3.81 / 4.0",
    logo: "/assets/usc.png",
    courses: ["Analysis of Algorithms","Web Technologies","Database Systems","Machine Learning","Applied Cryptography","Information Retrieval","Advanced Game Dev"],
  },
  {
    school: "JSS Science & Technology University",
    location: "Mysuru, India",
    degree: "B.E. Information Science",
    period: "2017 – 2021",
    gpa: "9.01 / 10.0",
    logo: "/assets/jce.png",
    courses: ["Data Structures","Operating Systems","Computer Networks","Distributed Systems","Data Mining","Software Engineering"],
  },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 space-y-20 sm:space-y-24">

        {/* ── Photo + Bio ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo */}
          <FadeUp className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96">
                <div className="absolute -inset-3 rounded-3xl -rotate-2"
                  style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.45), rgba(99,102,241,0.25))", filter: "blur(2px)" }} />
                <div className="absolute -inset-2 rounded-3xl rotate-1 border border-blue-400/30" />
                <div className="absolute -inset-10 rounded-3xl bg-blue-500/25 blur-3xl -z-10" />
                <div className="absolute -inset-6 rounded-3xl bg-indigo-400/15 blur-2xl -z-10" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-blue-400/20 shadow-2xl shadow-blue-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-slate-900/40" />
                  <Image src="/assets/profile.png" alt="Nikhil Govindaraju" fill className="object-cover object-top relative z-10" priority unoptimized />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20" />
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#111]/90 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/55 font-medium shadow-lg z-30">
                  Nikhil Govindaraju · USC MSCS &apos;25
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Bio */}
          <FadeUp delay={0.15} className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-white/25" />
                <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase">About Me</p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                I build things that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  live on the internet
                </span>
              </h2>
            </div>
            <div className="space-y-4 text-white/50 text-base leading-relaxed">
              <p>
                I&apos;m a <span className="text-white font-semibold">Full-Stack & AI Engineer</span> with 3+ years
                of industry experience building scalable, production-grade systems. I care deeply about clean
                architecture, intuitive interfaces, and shipping products that make a real difference.
              </p>
              <p>
                <span className="text-white font-semibold">M.S. Computer Science, USC Viterbi School of Engineering.</span>{" "}
                I&apos;ve worked across healthcare, embedded systems, and SaaS, actively looking for full-time roles.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-1">
              {[
                { label: "LinkedIn ↗", href: "https://linkedin.com/in/nikhil-govindaraju" },
                { label: "GitHub ↗",   href: "https://github.com/nikhilgovindaraju" },
                { label: "Email ↗",    href: "mailto:ngovinda@usc.edu" },
              ].map(({ label, href }) => (
                <motion.a
                  key={label} href={href} target="_blank" rel="noreferrer"
                  className="text-sm text-white/35 hover:text-white/70 transition-colors border-b border-white/10 hover:border-white/25 pb-0.5"
                  whileHover={{ y: -1 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* ── Stats with count-up ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map(({ val, label, sub }, i) => (
            <StatCard key={label} val={val} label={label} sub={sub} delay={i * 0.1} />
          ))}
        </div>

        {/* ── Education ── */}
        <div>
          <FadeUp>
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="w-6 h-px bg-white/25" />
              <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase">Education</p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {education.map(({ school, location, degree, period, gpa, logo, courses }, i) => (
              <motion.div
                key={school}
                className="group relative p-6 sm:p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-blue-500/[0.05] hover:border-blue-500/25 transition-all overflow-hidden"
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -3 }}

                style={{ transition: "box-shadow 0.3s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px 0 rgba(59,130,246,0.10), 0 8px 32px 0 rgba(0,0,0,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-4 mb-5">
                  <div className="relative w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] overflow-hidden flex-shrink-0">
                    <Image src={logo} alt={school} fill className="object-contain p-1.5" unoptimized />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">{school}</h3>
                    <p className="text-white/40 text-sm mt-0.5">{location}</p>
                  </div>
                </div>

                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-white/80 font-bold text-lg">{degree}</p>
                    <p className="text-white/35 text-sm mt-0.5">{period}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/20 text-[10px] uppercase tracking-wider">GPA</p>
                    <p className="text-white text-2xl font-black">{gpa}</p>
                  </div>
                </div>

                <div>
                  <p className="text-white/20 text-[10px] uppercase tracking-wider mb-2">Coursework</p>
                  <div className="flex flex-wrap gap-1.5">
                    {courses.map((c) => (
                      <span key={c} className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.07] text-white/35 text-[11px] font-mono">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export { About };
export default About;