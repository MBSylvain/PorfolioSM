import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setIsOpen(false); }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    function onOpen() {
      setIsOpen(true);
      setTimeout(() => modalRef.current?.focus(), 0);
    }
    window.addEventListener("openContactModal", onOpen);
    return () => window.removeEventListener("openContactModal", onOpen);
  }, []);

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => modalRef.current?.focus(), 0);
  };

  const closeModal = () => setIsOpen(false);

  const year = new Date().getFullYear();

  return (
    <footer className="relative py-20 bg-softBlack border-t border-white/5 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-extrabold text-white mb-2 tracking-tighter">
              Sylvain <span className="text-primary">MB</span>
            </h2>
            <p className="text-white/40 text-sm font-light max-w-xs">
              Développeur web & mobile indépendant spécialisé dans la création 
              d'expériences numériques sur-mesure.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/", label: "LinkedIn" },
                { icon: <FaGithub />, href: "https://github.com/", label: "GitHub" },
                { icon: <FaEnvelope />, href: "mailto:contact@email.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-xl text-white/50 hover:text-white hover:border-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <button
              onClick={openModal}
              className="px-8 py-3 text-sm font-bold text-softBlack bg-white rounded-2xl hover:scale-105 transition-all"
            >
              Me contacter
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/20">
          <div>© {year} Sylvain MBEUMOU — Tous droits réservés</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>

      {/* Modal - Consistent with Hero */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-softBlack/80 backdrop-blur-lg"
              onClick={closeModal}
            />

            <motion.div
              ref={modalRef}
              tabIndex={-1}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-2xl bg-[#1a1a1a] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fermer"
              >
                ✕
              </button>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Un message ?</h2>
                <p className="text-white/50">Je serai ravi d'en savoir plus sur votre projet.</p>
              </div>

              <ContactForm />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}

