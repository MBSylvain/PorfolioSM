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
    { name: "CMS", href: "#cms" },
    { name: "Projets", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] px-6 py-4 font-sans">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3 border-b transition-colors duration-200 ${
          scrolled
            ? "border-beigeGray bg-softBlack/95"
            : "border-transparent bg-softBlack/80"
        }`}
      >
        <a
          href="/"
          className="text-xl font-extrabold tracking-tight text-accent"
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
              className="text-sm font-medium text-accent/65 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={openContact}
            className="border border-accent bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="p-2 text-accent transition-colors hover:text-primary md:hidden"
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
            className="absolute left-6 right-6 top-24 flex flex-col items-center gap-6 border border-beigeGray bg-softBlack p-8 shadow-lg md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-accent/70 hover:text-primary"
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
              className="w-full border border-accent bg-accent py-4 font-bold text-white"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
