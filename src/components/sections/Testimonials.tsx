"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { id: 1, name: "Shiyad Ali", position: "CEO", company: "Sealand Food", content: "For the past eight years, Ultratek Arabia has been a valued partner in constructing and maintaining our cold storage facilities.", stars: 5 },
  { id: 2, name: "Sayed Idris", position: "CEO", company: "Arabian Rose Trading Company", content: "We've been partnering with Ultratech for our cold storage needs, and the experience has been phenomenal.", stars: 5 },
  { id: 3, name: "Ahmed Hassan", position: "Operations Manager", company: "Fresh Logistics Co.", content: "The warehouse layout they designed has significantly improved our operational efficiency.", stars: 4 },
  { id: 4, name: "Fatima Al-Rashid", position: "Supply Chain Director", company: "Gulf Distribution Services", content: "Excellent service and attention to detail. Their cold storage solutions have helped us maintain product quality.", stars: 4 },
];

// export default function Testimonials() {
//   const [index, setIndex] = useState(0);
//   const prev = (index - 1 + testimonials.length) % testimonials.length;
//   const next = (index + 1) % testimonials.length;

//   return (
//     <section className="py-24 bg-gray-50 overflow-hidden">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#004575] hover-text-effect">
//             {"Client Testimonial".split("").map((ch, i) => (
//               <span key={i} className="char-zoom">{ch === " " ? "\u00A0" : ch}</span>
//             ))}
//           </h2>
//         </div>

//         <div className="relative flex items-center justify-center gap-4 md:gap-8 min-h-[450px]">
//           <button
//             onClick={() => setIndex(prev)}
//             className="hidden md:flex absolute left-0 z-30 p-4 rounded-full bg-white shadow-lg text-primary hover:bg-gray-50"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           {/* Left ghost */}
//           <div className="hidden lg:flex flex-col justify-between w-[320px] h-[320px] p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 opacity-40 scale-90 cursor-pointer"
//                onClick={() => setIndex(prev)}>
//             <Stars n={testimonials[prev].stars} />
//             <p className="text-gray-500 italic line-clamp-4">"{testimonials[prev].content}"</p>
//             <div>
//               <h4 className="font-bold text-gray-700">{testimonials[prev].name}</h4>
//               <p className="text-sm text-gray-500">
//                 {testimonials[prev].position}, {testimonials[prev].company}
//               </p>
//             </div>
//           </div>

//           {/* Center card */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9, y: 10 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: -10 }}
//               transition={{ duration: 0.4 }}
//               className="w-full max-w-2xl h-auto min-h-[350px] p-8 md:p-10 bg-white rounded-[2rem] shadow-2xl border border-blue-50 z-20 flex flex-col justify-between"
//             >
//               <Stars n={testimonials[index].stars} size="lg" />
//               <p className="text-xl md:text-2xl text-[#004575] font-medium leading-relaxed mb-8">
//                 "{testimonials[index].content}"
//               </p>
//               <div className="border-t pt-6 border-gray-100">
//                 <h4 className="text-lg font-bold text-gray-900">{testimonials[index].name}</h4>
//                 <p className="text-gray-500">
//                   {testimonials[index].position}, {testimonials[index].company}
//                 </p>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Right ghost */}
//           <div className="hidden lg:flex flex-col justify-between w-[320px] h-[320px] p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 opacity-40 scale-90 cursor-pointer"
//                onClick={() => setIndex(next)}>
//             <Stars n={testimonials[next].stars} />
//             <p className="text-gray-500 italic line-clamp-4">"{testimonials[next].content}"</p>
//             <div>
//               <h4 className="font-bold text-gray-700">{testimonials[next].name}</h4>
//               <p className="text-sm text-gray-500">
//                 {testimonials[next].position}, {testimonials[next].company}
//               </p>
//             </div>
//           </div>

//           <button
//             onClick={() => setIndex(next)}
//             className="hidden md:flex absolute right-0 z-30 p-4 rounded-full bg-white shadow-lg text-primary hover:bg-gray-50"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Stars({ n, size = "md" }: { n: number; size?: "md" | "lg" }) {
//   const cls = size === "lg" ? "text-2xl" : "text-xl";
//   return (
//     <div className="flex gap-1 mb-6">
//       {[...Array(5)].map((_, i) => (
//         <Star
//           key={i}
//           className={`${cls} ${i < n ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
//         />
//       ))}
//     </div>
//   );
// }




function Stars({ n, size = "md" }: { n: number; size?: "md" | "lg" }) {
  const cls = size === "lg" ? "w-6 h-6" : "w-4 h-4";
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${cls} ${
            i < n ? "fill-yellow-400 text-yellow-400" : "text-slate-600"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prev = (index - 1 + testimonials.length) % testimonials.length;
  const next = (index + 1) % testimonials.length;

  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-6"
          >
            <span className="w-8 h-px bg-cyan-400" />
            Testimonials
            <span className="w-8 h-px bg-cyan-400" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter"
          >
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            What our partners say about working with Ultratek Arabia.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8 min-h-[450px]">
          {/* Left button */}
          <button
            onClick={() => setIndex(prev)}
            className="hidden md:flex absolute left-0 z-30 w-12 h-12 rounded-full glass items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/40 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Left ghost card */}
          <div
            className="hidden lg:flex flex-col justify-between w-[320px] h-[320px] p-8 glass rounded-3xl opacity-30 scale-90 cursor-pointer hover:opacity-50 transition-all duration-300"
            onClick={() => setIndex(prev)}
          >
            <Stars n={testimonials[prev].stars} />
            <p className="text-slate-400 italic line-clamp-4 mt-4">
              "{testimonials[prev].content}"
            </p>
            <div className="mt-6">
              <p className="font-bold text-white/70">
                {testimonials[prev].name}
              </p>
              <p className="text-xs text-slate-500">
                {testimonials[prev].position}, {testimonials[prev].company}
              </p>
            </div>
          </div>

          {/* Center card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-2xl min-h-[380px] p-10 md:p-14 glass rounded-3xl shadow-2xl shadow-cyan-500/5 border border-white/10 z-20 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <Stars n={testimonials[index].stars} size="lg" />

                <p className="text-xl md:text-2xl text-white font-light leading-relaxed mt-8 mb-10">
                  "{testimonials[index].content}"
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-black text-lg">
                  {testimonials[index].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">
                    {testimonials[index].name}
                  </p>
                  <p className="text-sm text-cyan-400">
                    {testimonials[index].position},{" "}
                    {testimonials[index].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right ghost card */}
          <div
            className="hidden lg:flex flex-col justify-between w-[320px] h-[320px] p-8 glass rounded-3xl opacity-30 scale-90 cursor-pointer hover:opacity-50 transition-all duration-300"
            onClick={() => setIndex(next)}
          >
            <Stars n={testimonials[next].stars} />
            <p className="text-slate-400 italic line-clamp-4 mt-4">
              "{testimonials[next].content}"
            </p>
            <div className="mt-6">
              <p className="font-bold text-white/70">
                {testimonials[next].name}
              </p>
              <p className="text-xs text-slate-500">
                {testimonials[next].position}, {testimonials[next].company}
              </p>
            </div>
          </div>

          {/* Right button */}
          <button
            onClick={() => setIndex(next)}
            className="hidden md:flex absolute right-0 z-30 w-12 h-12 rounded-full glass items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/40 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile buttons */}
          <div className="flex md:hidden absolute -bottom-16 gap-4">
            <button
              onClick={() => setIndex(prev)}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-cyan-400"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIndex(next)}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-cyan-400"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}