"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientMarquee() {
  const logos = Array.from({ length: 28 }, (_, i) => ({
    id: i + 1,
    logo: `/logo${i + 1}.webp`,
    name: `Client ${i + 1}`,
  }));
  const duplicated = [...logos, ...logos];

  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-6"
          >
            <span className="w-8 h-px bg-cyan-400" />
            Our Clients
            <span className="w-8 h-px bg-cyan-400" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter"
          >
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Trusted by leading companies in cold storage and warehousing
          </motion.p>
        </div>

        {/* Row 1 */}
        <div className="relative w-full overflow-hidden mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: [0, -4080] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
            }}
          >
            {duplicated.map((c, i) => (
              <div
                key={`f-${c.id}-${i}`}
                className="flex-shrink-0 w-40 h-24 rounded-2xl glass flex items-center justify-center p-4 hover:border-cyan-400/40 transition-all duration-300"
              >
                {/* Light inner panel so colorful logos stay legible */}
                <div className="relative w-full h-full bg-white/95 rounded-xl p-2">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    sizes="160px"
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 (reverse) */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: [-4080, 0] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
            }}
          >
            {duplicated.map((c, i) => (
              <div
                key={`r-${c.id}-${i}`}
                className="flex-shrink-0 w-40 h-24 rounded-2xl glass flex items-center justify-center p-4 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="relative w-full h-full bg-white/95 rounded-xl p-2">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    sizes="160px"
                    className="object-contain p-2 "
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}