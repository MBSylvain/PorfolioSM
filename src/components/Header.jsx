import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };
  return (
    <header className="sticky top-0 z-50 py-6 font-sans shadow-lg bg-gradient-to-r from-[#F5F5F5]/50 to-[#D6D3CD]/50 dark:from-gray-900/50 dark:to-gray-800/50 text-[#222222] dark:text-white backdrop-blur-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <button
            className="text-2xl font-bold text-[#333333] dark:text-white transition-colors duration-300 hover:text-[#5A6D7A]"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
            aria-label="Accueil"
          >
            Sylvain MB
          </button>
          <nav
            className="hidden space-x-8 md:flex"
            aria-label="Navigation principale"
          >
            <a
              href="#about"
              className="transition-colors duration-300 hover:text-[#5A6D7A]"
            >
              À propos
            </a>
            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-[#5A6D7A]"
            >
              Projets
            </a>
            <a
              href="#services"
              className="transition-colors duration-300 hover:text-[#5A6D7A]"
            >
              Services
            </a>
            <button
              type="button"
              onClick={openContact}
              className="transition-colors duration-300 hover:text-[#5A6D7A]"
            >
              Contact
            </button>
          </nav>
          {/* Menu burger mobile */}
          <button
            className="p-2 rounded md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Menu mobile */}
        {menuOpen && (
          <nav
            className="flex flex-col items-center py-4 mt-4 space-y-4 bg-white rounded shadow-lg md:hidden dark:bg-gray-900"
            aria-label="Navigation mobile"
          >
            <a
              href="#about"
              className="transition-colors duration-300 hover:text-[#5A6D7A]"
              onClick={() => setMenuOpen(false)}
            >
              À propos
            </a>
            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-[#5A6D7A]"
              onClick={() => setMenuOpen(false)}
            >
              Projets
            </a>
            <a
              href="#services"
              className="transition-colors duration-300 hover:text-[#5A6D7A]"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <button
              type="button"
              className="transition-colors duration-300 hover:text-[#5A6D7A]"
              onClick={() => {
                setMenuOpen(false);
                openContact();
              }}
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
