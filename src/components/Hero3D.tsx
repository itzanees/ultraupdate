"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles as SparklesIcon, HelpingHandIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { ISOMotion } from "./sections/ISOStrip";

// Load the 3D scene only on the client (SSR-safe)
const HeroScene = dynamic(() => import("./three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-linear-to-br from-[#050816] via-[#0B1120] to-[#050816]" />
  ),
});

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: 0.2 + i * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero3D() {
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    const conn = (navigator as any).connection;
    const slow =
      conn?.effectiveType === "2g" ||
      conn?.effectiveType === "slow-2g" ||
      conn?.saveData;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setShouldRender3D(!slow && !reduced);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Layer 1 — Old hero image as atmospheric backdrop */}
      <div className="absolute inset-0 z-0">
        <picture className="relative block w-full h-full">
          <source media="(max-width: 768px)" srcSet="/hero-mob.webp" />
          <Image
            src="/hero.webp"
            alt="hero image"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
        </picture>
        {/* Heavy dark overlays so the 3D scene pops on top */}
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/60" />
      </div>

      {/* Layer 2 — 3D scene (auto-disabled on slow connections) */}
      {shouldRender3D ? (
        <HeroScene />
      ) : (
        // Fallback: animated gradient blobs
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-[120px] animate-pulse" />
        </div>
      )}

      {/* Layer 3 — Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none z-[2]" />

      {/* Layer 4 — Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            // custom={0}
            // initial="hidden"
            // animate="visible"
            // variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <SparklesIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              25+ Years • ISO Certified • Saudi Arabia
            </span>
          </motion.div>

          {/* Headline */}
          <div className="z-10 w-full max-w-5xl p-4 md:px- bg-black/10 backdrop-blur-xs mb-5 rounded-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-[-0.04em] mt-4 mb-8 text-white"
            >
              Smart, <span className="text-gradient">Scalable</span>
              <br />
              Solutions for{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Cold Storage</span>
                {/* Underline glow */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 1.4,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-cyan-400 to-indigo-500 origin-left glow-cyan"
                />
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              // custom={2}
              // initial="hidden"
              // animate="visible"
              // variants={fadeUp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-blue-50 max-w-2xl mb-4 leading-relaxed"
            >
              {/* Industry-leading temperature-controlled infrastructure engineered
              for the future of logistics in the Kingdom. */}
              Building the future of cold chain logistics: High-performance, climate-controlled facility development for the Kingdom.

            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            // custom={3}
            // initial="hidden"
            // animate="visible"
            // variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-bold hover:shadow-cyan-500 hover:scale-105 transition-all duration-300"
            >
              Explore Services
              <HelpingHandIcon className="w-8 h- group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Bottom stats strip */}
          <motion.div
            // custom={4}
            // initial="hidden"
            // animate="visible"
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-8 border-t border-white/5 max-w-lg"
          >
            {[
              { value: "250+", label: "Projects" },
              { value: "18M+", label: "Sq. Meters" },
              { value: "95%", label: "On-Time" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-black text-light-gradient">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-slate-50 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
          <ISOMotion />
        </div>
      </div>
      {/* ... scroll indicator ... */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-cyan-400/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
}

//

// export default function Hero3D() {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050816]">
//       {/* 3D background */}
//       <HeroScene />

//       {/* Grid overlay */}
//       <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

//       {/* Radial glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
//       <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

//       {/* Content */}

//       {/* Scroll indicator */}

//     </section>
//   );
// }
