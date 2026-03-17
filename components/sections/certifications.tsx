"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronUp, X } from "lucide-react";
import { certifications } from "@/data/certifications";

// Issuer accent colors and cert image map
const issuerMeta: Record<string, { color: string; glow: string }> = {
  "Google":              { color: "#4285f4", glow: "rgba(66,133,244,0.18)" },
  "Amazon Web Services": { color: "#ff9900", glow: "rgba(255,153,0,0.18)"  },
  "Scrum Alliance":      { color: "#009cde", glow: "rgba(0,156,222,0.18)"  },
  "Oracle":              { color: "#f80000", glow: "rgba(248,0,0,0.15)"    },
  "Udemy":               { color: "#a435f0", glow: "rgba(164,53,240,0.15)" },
  "LinkedIn Learning":   { color: "#0a66c2", glow: "rgba(10,102,194,0.15)" },
  "Simplilearn":         { color: "#f4a62a", glow: "rgba(244,166,42,0.15)" },
  "NASSCOM":             { color: "#00adef", glow: "rgba(0,173,239,0.15)"  },
};

const certImages: Record<string, string> = {
  "google-ai":  "/assets/certifications/nasscom.png",
  "aws-cp":     "/assets/certifications/aws.png",
  "scrum":      "/assets/certifications/csm.png",
  "oci":        "/assets/certifications/oci.png",
  "agentic":    "/assets/certifications/agentic-ai.png",
  "aws-cloud":  "/assets/certifications/awscloudnative.png",
  "agile":      "/assets/certifications/agile.png",
  "flutter":    "/assets/certifications/flutter.png",
  "angular":    "/assets/certifications/angular.png",
  "react-li":   "/assets/certifications/reactessential.png",
  "pm":         "/assets/certifications/projectmgmnt.png",
  "nasscom":    "/assets/certifications/nasscom.png",
};

const featured = certifications.filter((c) => c.featured).slice(0, 3);
const rest     = certifications.filter((c) => !c.featured);

type Cert = typeof certifications[0];

// ── Modal ─────────────────────────────────────────────────
function CertModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  const img  = certImages[cert.id];
  const meta = issuerMeta[cert.issuer] ?? { color: "#3b82f6", glow: "rgba(59,130,246,0.15)" };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        className="relative w-full max-w-lg rounded-3xl border border-white/[0.10] bg-[#0d0d0d] shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.92, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 28 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        style={{ boxShadow: `0 0 60px 0 ${meta.glow}, 0 24px 48px rgba(0,0,0,0.5)` }}
      >
        {/* Issuer color top bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl" style={{ backgroundColor: meta.color }} />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/[0.07] border border-white/[0.10] flex items-center justify-center text-white/40 hover:text-white transition-all"
        >
          <X size={14} />
        </button>

        {/* Certificate image — slightly tilted */}
        <div className="relative w-full bg-white/[0.03] border-b border-white/[0.07] flex items-center justify-center py-10 px-8 overflow-hidden">
          {/* Glow behind cert */}
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${meta.glow}, transparent 70%)` }} />
          <motion.div
            className="relative w-full max-w-xs aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/10"
            style={{ rotate: -2 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {img ? (
              <Image src={img} alt={cert.name} fill className="object-cover" unoptimized />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-5xl font-black" style={{ color: meta.color }}>
                {cert.issuer.slice(0, 2).toUpperCase()}
              </div>
            )}
          </motion.div>
        </div>

        <div className="p-6 space-y-2">
          <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: meta.color }}>{cert.issuer}</p>
          <h3 className="text-white font-bold text-xl leading-snug">{cert.name}</h3>
          <p className="text-white/30 text-sm">{cert.year}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Featured card ─────────────────────────────────────────
function FeaturedCard({ cert, index, onClick }: { cert: Cert; index: number; onClick: () => void }) {
  const img  = certImages[cert.id];
  const meta = issuerMeta[cert.issuer] ?? { color: "#3b82f6", glow: "rgba(59,130,246,0.15)" };

  return (
    <motion.button
      className="group relative text-left rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden w-full"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      onClick={onClick}
      style={{
        transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px 0 ${meta.glow}, 0 8px 32px rgba(0,0,0,0.4)`;
        (e.currentTarget as HTMLElement).style.borderColor = `${meta.color}35`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
      }}
    >
      {/* Issuer color left accent bar */}
      <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: meta.color }} />

      {/* Certificate image area */}
      <div className="relative w-full h-44 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-center overflow-hidden px-6 py-4">
        {/* Soft glow behind image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at center, ${meta.glow}, transparent 70%)` }} />

        {/* Tilted cert image */}
        <motion.div
          className="relative w-full max-w-[200px] aspect-[4/3] rounded-lg overflow-hidden shadow-xl border border-white/10"
          style={{ rotate: -3 }}
          whileHover={{ rotate: 0, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {img ? (
            <Image src={img} alt={cert.name} fill className="object-cover" unoptimized />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-black" style={{ color: meta.color }}>
              {cert.issuer.slice(0, 2).toUpperCase()}
            </div>
          )}
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-[10px] uppercase tracking-widest font-bold mb-1.5" style={{ color: meta.color }}>
          {cert.issuer}
        </p>
        <h3 className="text-white/85 font-bold text-sm leading-snug mb-3">{cert.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-white/25 text-xs">{cert.year}</span>
          <div className="w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center text-white/20 group-hover:text-white/60 group-hover:border-white/20 transition-all">
            <ExternalLink size={11} />
          </div>
        </div>
      </div>
    </motion.button>
  );
}

// ── Main ──────────────────────────────────────────────────
function Certifications() {
  const [showAll,  setShowAll]  = useState(false);
  const [selected, setSelected] = useState<Cert | null>(null);

  return (
    <>
      <section id="certifications" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

          {/* Header */}
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-white/25" />
              <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase">Certifications</p>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Credentials<span className="text-white/25">.</span>
            </h2>
          </motion.div>

          {/* Featured 3 cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {featured.map((cert, i) => (
              <FeaturedCard key={cert.id} cert={cert} index={i} onClick={() => setSelected(cert)} />
            ))}
          </div>

          {/* See more toggle */}
          <div className="flex justify-center mb-5">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 text-white/35 text-sm font-medium hover:text-white/65 transition-colors px-5 py-2 rounded-full border border-white/[0.06] hover:border-white/[0.12]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={14} />
              </motion.div>
              {showAll ? "Show less" : `See ${rest.length} more certifications`}
            </motion.button>
          </div>

          {/* Expandable grid */}
          <AnimatePresence initial={false}>
            {showAll && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                  {rest.map((cert, i) => {
                    const img  = certImages[cert.id];
                    const meta = issuerMeta[cert.issuer] ?? { color: "#3b82f6", glow: "" };
                    return (
                      <motion.button
                        key={cert.id}
                        className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all text-left"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.35 }}
                        whileHover={{ x: 3 }}
                        onClick={() => setSelected(cert)}
                      >
                        {/* Thumbnail */}
                        <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-white/[0.05] border border-white/[0.07] flex-shrink-0">
                          {img ? (
                            <Image src={img} alt={cert.name} fill className="object-contain p-1.5" unoptimized />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black" style={{ color: meta.color }}>
                              {cert.issuer.slice(0, 2).toUpperCase()}
                            </div>
                          )}
                        </div>

                        {/* Left accent bar */}
                        <div className="w-0.5 h-8 rounded-full flex-shrink-0 opacity-40" style={{ backgroundColor: meta.color }} />

                        <div className="flex-1 min-w-0">
                          <p className="text-white/65 text-sm font-medium group-hover:text-white/90 transition-colors truncate leading-tight">
                            {cert.name}
                          </p>
                          <p className="text-white/25 text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
                        </div>

                        <ExternalLink size={12} className="text-white/15 group-hover:text-white/40 transition-colors flex-shrink-0" />
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      <AnimatePresence>
        {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}

export { Certifications };
export default Certifications;