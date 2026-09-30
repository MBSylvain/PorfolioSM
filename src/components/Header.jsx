import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const navLinks = [
    { name: "Projets", href: "#projects" },
    { name: "À propos", href: "#about" },
    { name: "CMS", href: "#cms" },
  ];

  return (
    <header className="sticky top-0 z-[60] border-b border-beigeGray bg-softBlack/95 px-5 py-3 backdrop-blur">
      <div
        className="mx-auto flex max-w-6xl items-center justify-between"
      >
        <a
          href="/"
          className="font-display text-2xl text-accent"
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
              className="text-sm font-medium text-accent/70 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={openContact}
            className="bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center border border-beigeGray text-accent transition-colors hover:border-primary hover:text-primary md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
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
            className="absolute left-5 right-5 top-full flex flex-col items-center gap-6 border border-beigeGray bg-offWhite p-7 shadow-lg md:hidden"
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
              className="w-full bg-primary py-4 font-bold text-white"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
