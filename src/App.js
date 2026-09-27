import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Cms from "./components/Cms";
import ProjectFilter from "./components/ProjectFilter";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-softBlack font-sans text-accent selection:bg-primary selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60 [background-image:linear-gradient(#d9dee3_1px,transparent_1px),linear-gradient(90deg,#d9dee3_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      <Header />

      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Cms />
        <ProjectFilter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
