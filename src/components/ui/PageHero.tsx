"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type Height = "sm" | "md" | "lg";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
  external?: boolean;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
  height?: Height;
  breadcrumbs?: Breadcrumb[];
  ctas?: CTAButton[];
  align?: "left" | "center";
  overlay?: "heavy" | "medium" | "light";
  children?: ReactNode;
}

const heightMap: Record<Height, string> = {
  sm: "min-h-[45vh] md:min-h-[50vh]",
  md: "min-h-[55vh] md:min-h-[65vh]",
  lg: "min-h-[70vh] md:min-h-[85vh]",
};

const overlayMap = {
  heavy: "bg-gradient-to-r from-[#050816] via-[#050816]/85 to-[#050816]/40",
  medium: "bg-gradient-to-r from-[#050816]/95 via-[#050816]/70 to-[#050816]/30",
  light: "bg-gradient-to-r from-[#050816]/85 via-[#050816]/55 to-[#050816]/20",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const},
  }),
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  backgroundImage = "/about-construction.webp",
  backgroundAlt = "",
  height = "md",
  breadcrumbs,
  ctas,
  align = "left",
  overlay = "heavy",
  children,
}: PageHeroProps) {
  const isCentered = align === "center";

  return (
    <section
      className={`relative flex items-center overflow-hidden pt-32 pb-20 ${heightMap[height]}`}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden={backgroundAlt === ""}
        />
        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayMap[overlay]}`} />
        {/* Top/bottom gradient for header blend and content separation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 via-transparent to-[#050816]" />
      </div>

      {/* Ambient grid */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Cyan glow blob */}
      <div
        className="absolute top-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none"
        style={{ [isCentered ? "left" : "right"]: "-10%" }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className={isCentered ? "max-w-4xl mx-auto text-center" : "max-w-4xl"}>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={`flex items-center gap-2 text-xs font-medium text-slate-400 mb-6 ${
                isCentered ? "justify-center" : ""
              }`}
              aria-label="Breadcrumb"
            >
              {breadcrumbs.map((crumb, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <span key={i} className="flex items-center gap-2">
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-cyan-400 transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-cyan-400 font-bold" : ""}>
                        {crumb.label}
                      </span>
                    )}
                    {!isLast && (
                      <ChevronRight className="w-3 h-3 text-slate-600" />
                    )}
                  </span>
                );
              })}
            </motion.nav>
          )}

          {/* Eyebrow */}
          {eyebrow && (
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={`inline-flex items-center gap-3 mb-6 ${
                isCentered ? "justify-center" : ""
              }`}
            >
              <span className="w-8 h-px bg-cyan-400" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
                {eyebrow}
              </span>
              {isCentered && <span className="w-8 h-px bg-cyan-400" />}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-white mb-6"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={`text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl ${
                isCentered ? "mx-auto" : ""
              }`}
            >
              {subtitle}
            </motion.p>
          )}

          {/* CTAs */}
          {ctas && ctas.length > 0 && (
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={`flex flex-wrap gap-4 mt-10 ${
                isCentered ? "justify-center" : ""
              }`}
            >
              {ctas.map((cta) => {
                const isPrimary = cta.variant !== "ghost";
                const classes = isPrimary
                  ? "px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                  : "px-8 py-4 rounded-full glass text-white font-bold hover:bg-white/5 hover:border-cyan-400/40 transition-all duration-300";

                if (cta.external) {
                  return (
                    <a
                      key={cta.href}
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes}
                    >
                      {cta.label}
                    </a>
                  );
                }

                return (
                  <Link key={cta.href} href={cta.href} className={classes}>
                    {cta.label}
                  </Link>
                );
              })}
            </motion.div>
          )}

          {/* Extra content */}
          {children && (
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom fade to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none" />
    </section>
  );
}