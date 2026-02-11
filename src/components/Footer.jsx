import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

  // listen for global open event (header can dispatch this)
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
    <footer className="py-6 text-center bg-gray-800 dark:bg-gray-900 text-gray-100 font-sans">
      <div className="flex flex-col items-center justify-center gap-3 mb-4 sm:flex-row">
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:contact@email.com"
            aria-label="Email"
            className="hover:text-primary transition-colors text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded hover:bg-gray-100 transition ml-0 sm:ml-6"
        >
          Me contacter
        </button>
      </div>

      <div>© Sylvain MBEUMOU {year} - Tous droits réservés</div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.22 }}
          />

          <motion.div
            ref={modalRef}
            tabIndex={-1}
            className="relative z-10 w-full max-w-3xl p-6 mx-auto overflow-auto bg-white rounded shadow-lg dark:bg-gray-800"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              onClick={closeModal}
              aria-label="Fermer le formulaire de contact"
              className="absolute p-2 text-gray-700 bg-gray-100 rounded-full right-4 top-4 hover:bg-gray-200"
            >
              ✕
            </button>

            <ContactForm />
          </motion.div>
        </div>
      )}
    </footer>
  );
}
