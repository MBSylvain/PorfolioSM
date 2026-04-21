import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projets", href: "#projects" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-6 py-4 mr-0 font-sans`}
    >
      <div 
        className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 border ${
          scrolled 
            ? "bg-softBlack/70 backdrop-blur-xl border-white/10 shadow-2xl" 
            : "bg-transparent border-transparent"
        }`}
      >
        <a
          href="/"
          className="text-xl font-extrabold text-white tracking-tighter"
          aria-label="Accueil"
        >
          Sylvain <span className="text-primary">MB</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={openContact}
            className="px-5 py-2 text-sm font-semibold text-softBlack bg-white rounded-xl hover:scale-105 active:scale-95 transition-all"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="p-2 text-white/70 hover:text-white md:hidden transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-softBlack/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col items-center gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/70 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                openContact();
              }}
              className="w-full py-4 text-softBlack bg-white font-bold rounded-2xl"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

