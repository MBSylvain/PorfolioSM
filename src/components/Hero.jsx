import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    // prevent background scroll when modal open
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

  // listen for global open event (header/footer can dispatch this)
  useEffect(() => {
    function onOpen() {
      setIsOpen(true);
      setTimeout(() => modalRef.current?.focus(), 0);
    }
    window.addEventListener('openContactModal', onOpen);
    return () => window.removeEventListener('openContactModal', onOpen);
  }, []);

  const openModal = (e) => {
    e && e.preventDefault && e.preventDefault();
    setIsOpen(true);
    // focus modal container after opening
    setTimeout(() => modalRef.current?.focus(), 0);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <section
      className="relative flex flex-col items-center justify-center pt-24 pb-16 text-center overflow-hidden min-h-[500px]"
      style={{
        backgroundImage: `url('/Banier hero portfolio.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 z-0 bg-black/40"
        aria-hidden="true"
      ></div>
      <motion.div
        className="relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-5xl font-bold text-white drop-shadow-lg"
        >
          Développeur Web & Mobile
        </motion.h1>
        <p className="mb-6 text-lg text-white/90 drop-shadow">
          Je conçois des sites personnalisés et performants pour les
          indépendants et petites entreprises. afin de les aider à se démarquer
          en ligne et à augmenter leurs visibilité et leurs objectifs.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="px-6 py-3 text-white bg-[#333333] rounded hover:bg-[#5A6D7A] transition"
          >
            Voir mes projets
          </a>
          <button
            type="button"
            onClick={openModal}
            className="px-6 py-3 text-[#333333] bg-white rounded hover:bg-[#5A6D7A] hover:text-white transition"
          >
            Me contacter
          </button>
        </div>
      </motion.div>

      {/* Modal */}
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
              transition={{ duration: 0.22, ease: 'easeOut' }}
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
    </section>
  );
}
