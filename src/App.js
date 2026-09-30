import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Cms from "./components/Cms";
import ProjectFilter from "./components/ProjectFilter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-softBlack font-sans text-accent selection:bg-primary selection:text-white">
      <Header />

      <main className="flex-grow relative z-10">
        <Hero />
        <ProjectFilter />
        <About />
        <Cms />
      </main>

      <Footer />
    </div>
  );
}

export default App;
