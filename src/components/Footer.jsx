import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
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
    <footer className="relative overflow-hidden border-t border-beigeGray bg-softBlack py-20 font-sans">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="text-center md:text-left">
            <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-accent">
              Sylvain <span className="text-primary">MB</span>
            </h2>
            <p className="max-w-xs text-sm font-light text-accent/60">
              Développeur web & mobile indépendant spécialisé dans la création
              d'expériences numériques sur-mesure.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              {[
                {
                  icon: <FaLinkedin />,
                  href: "https://www.linkedin.com/",
                  label: "LinkedIn",
                },
                {
                  icon: <FaGithub />,
                  href: "https://github.com/",
                  label: "GitHub",
                },
                {
                  icon: <FaEnvelope />,
                  href: "mailto:contact@email.com",
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center border border-beigeGray bg-white/60 text-xl text-accent/50 transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              onClick={openModal}
              className="border border-accent bg-accent px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary"
            >
              Me contacter
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-beigeGray pt-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent/40 md:flex-row">
          <div>© {year} Sylvain MBEUMOU — Tous droits réservés</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Confidentialité
            </a>
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
              className="absolute inset-0 bg-accent/40 backdrop-blur-sm"
              onClick={closeModal}
            />

            <motion.div
              ref={modalRef}
              tabIndex={-1}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden border border-beigeGray bg-softBlack p-8 shadow-2xl"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-primary" />

              <button
                onClick={closeModal}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-beigeGray text-accent/50 transition-colors hover:border-primary hover:text-primary"
                aria-label="Fermer"
              >
                ✕
              </button>

              <div className="mb-8">
                <h2 className="mb-2 text-3xl font-bold text-accent">
                  Un message ?
                </h2>
                <p className="text-accent/60">
                  Je serai ravi d'en savoir plus sur votre parcours.
                </p>
              </div>

              <ContactForm />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
