import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductsBanner from "./components/ProductsBanner";
import FeaturesStrip from "./components/FeaturesStrip";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <ProductsBanner />
        <FeaturesStrip />
      </main>
      <footer className="border-t border-white/10 bg-black py-10 text-center text-white/60">
        © {new Date().getFullYear()} NeonGrid. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
