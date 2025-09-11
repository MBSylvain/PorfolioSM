import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectFilter from './components/ProjectFilter';
import Skills from './components/Skills';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 scroll-smooth">
      {/* Barre de navigation */}
      <Header />

      {/* Section d’introduction */}
      <main>
        <Hero />

        {/* À propos */}
        <About />

        {/* Projets filtrables */}
        <ProjectFilter />

        {/* Compétences techniques */}
        <Skills />

        {/* Services proposés */}
        <Services />

        {/* Formulaire de contact */}
        <ContactForm />
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default App;
