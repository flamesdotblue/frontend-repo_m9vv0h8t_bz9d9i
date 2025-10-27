import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 ring-1 ring-white/20 shadow-lg" />
          <span className="font-semibold tracking-tight text-white">NeonGrid</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#" className="hover:text-emerald-300 transition">Home</a>
          <a href="#products" className="hover:text-emerald-300 transition">Products</a>
          <a href="#about" className="hover:text-emerald-300 transition">About</a>
          <a href="#contact" className="hover:text-emerald-300 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"><Search size={18} /></button>
          <button className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"><User size={18} /></button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-medium shadow-[0_0_0_3px_rgba(16,185,129,0.25)] hover:shadow-[0_0_0_5px_rgba(16,185,129,0.25)] transition">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
