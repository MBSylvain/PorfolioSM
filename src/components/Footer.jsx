import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
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
    <footer className="border-t border-accent bg-accent px-5 py-16 text-offWhite md:py-20">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase text-secondary">
              Et maintenant ?
            </p>
            <h2 className="mb-4 max-w-2xl font-display text-5xl font-normal leading-none md:text-6xl">
              Un outil à simplifier ?
            </h2>
            <p className="max-w-lg text-sm leading-6 text-offWhite/65">
              Parlons de votre besoin, de votre équipe et de la solution qui
              pourrait vous aider.
            </p>
          </div>
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center gap-3 justify-self-start bg-primary px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-offWhite hover:text-accent md:justify-self-end"
          >
            Me contacter <FaArrowRight />
          </button>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/20 pt-5 font-mono text-[10px] uppercase text-offWhite/55 sm:flex-row sm:items-center">
          <span>© {year} Sylvain MBEUMOU</span>
          <a href="#projects" className="transition-colors hover:text-offWhite">
            Retour aux projets ↑
          </a>
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
                  Parlons de votre projet
                </h2>
                <p className="text-accent/60">
                  Décrivez le besoin que vous souhaitez résoudre.
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
