import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectFilter from "./components/ProjectFilter";
import Skills from "./components/Skills";
import Services from "./components/Services";
import PricingCards from "./components/PricingCards";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-softBlack text-white/90 selection:bg-primary selection:text-white scroll-smooth min-h-screen flex flex-col">
      {/* Noise Texture Overlay for global cohesion */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      <Header />

      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Services />
        <PricingCards />
        <ProjectFilter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
