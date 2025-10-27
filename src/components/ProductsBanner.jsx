import { motion } from "framer-motion";
import { BadgeCheck, Cpu, Headphones, MousePointerClick, Monitor, Keyboard, Laptop, Camera } from "lucide-react";

const featured = [
  {
    title: "Nebula Pro Headset",
    price: "$199",
    badge: "Main",
    icon: Headphones,
    gradient: "from-emerald-500/30 to-cyan-500/30",
    ring: "ring-emerald-400/40",
  },
  {
    title: "Quantum Mechanical Keyboard",
    price: "$159",
    badge: "Main",
    icon: Keyboard,
    gradient: "from-cyan-500/30 to-emerald-500/30",
    ring: "ring-cyan-400/40",
  },
];

const others = [
  { title: "Precision Mouse", icon: MousePointerClick },
  { title: "4K Creator Monitor", icon: Monitor },
  { title: "Ultrabook 14" , icon: Laptop },
  { title: "Mirrorless Camera", icon: Camera },
  { title: "OC CPU Cooler", icon: Cpu },
];

export default function ProductsBanner() {
  return (
    <section id="products" className="relative bg-black py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Curated Products
            <span className="ml-3 align-middle inline-flex items-center text-emerald-300 text-sm font-medium">
              <BadgeCheck size={16} className="mr-1" />
              Quality Assured
            </span>
          </h2>
          <a href="#" className="text-emerald-300/90 hover:text-emerald-200 text-sm">View all</a>
        </div>

        {/* Featured (two main) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ${item.ring}`}
              >
                <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl bg-gradient-to-br ${item.gradient}`} />
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-black/60 border border-white/10">
                    <Icon className="text-emerald-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
                      <span className="text-emerald-300 font-medium">{item.price}</span>
                    </div>
                    <p className="mt-2 text-white/70 text-sm">
                      Engineered for creators and gamers with premium materials and haptic precision.
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <button className="px-4 py-2 rounded-lg text-black bg-gradient-to-r from-emerald-400 to-cyan-400 font-medium shadow-[0_0_0_3px_rgba(16,185,129,0.25)] hover:shadow-[0_0_0_5px_rgba(16,185,129,0.25)] transition">
                        Add to Cart
                      </button>
                      <button className="px-4 py-2 rounded-lg text-emerald-200/90 border border-white/10 bg-white/5 hover:bg-white/10 transition">
                        Details
                      </button>
                      <span className="ml-auto text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Others marquee */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-white/70 text-sm">Explore more</p>
          </div>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              initial={{ x: 0 }}
              animate={{ x: [0, -400, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            >
              {[...others, ...others].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${item.title}-${idx}`}
                    className="min-w-[220px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex items-center gap-3 hover:border-emerald-400/30 transition"
                  >
                    <div className="p-2 rounded-lg bg-black/60 border border-white/10">
                      <Icon className="text-cyan-300" size={18} />
                    </div>
                    <span className="text-white/80 text-sm">{item.title}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
