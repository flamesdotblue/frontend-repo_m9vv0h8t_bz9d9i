import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black" aria-label="Hero">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-emerald-300 shadow-lg backdrop-blur"
        >
          <Sparkles size={14} />
          Futureproof Commerce
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-emerald-300 via-cyan-300 to-emerald-200"
        >
          Elevate Your Gear in Neon Clarity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-2xl text-white/80"
        >
          Explore precision-built products crafted for the modern creator. Dark, minimal, and alive with a pulse of emerald and cyan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-black bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)] hover:shadow-[0_0_0_6px_rgba(16,185,129,0.25)] transition"
          >
            <Rocket size={18} />
            Shop Featured
          </a>
          <a
            href="#learn"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-emerald-200/90 border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
