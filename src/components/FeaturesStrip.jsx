import { motion } from "framer-motion";
import { Shield, Truck, RefreshCw } from "lucide-react";

const items = [
  { icon: Shield, title: "2-Year Warranty", desc: "Quality that lasts" },
  { icon: Truck, title: "Fast Delivery", desc: "Global shipping" },
  { icon: RefreshCw, title: "30-Day Returns", desc: "Hassle-free" },
];

export default function FeaturesStrip() {
  return (
    <section id="learn" className="relative bg-black py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 flex items-center gap-4"
              >
                <div className="p-3 rounded-lg bg-black/60 border border-white/10">
                  <Icon className="text-emerald-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
