import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";

export default function Hero() {
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

  const openModal = (e) => {
    e?.preventDefault?.();
    setIsOpen(true);
    setTimeout(() => modalRef.current?.focus(), 0);
  };

  const closeModal = () => setIsOpen(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-20 px-6 overflow-hidden bg-softBlack selection:bg-primary selection:text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-1/2 h-px bg-beigeGray" />

        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] contrast-150 brightness-100 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-2 border border-beigeGray bg-softBlack px-3 py-1"
        >
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent/60">
            Portfolio de développeur web
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-8 text-5xl font-extrabold leading-[0.9] tracking-tight text-accent md:text-7xl lg:text-8xl"
        >
          Concevoir des interfaces <br />
          <span className="text-primary">utiles et durables.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-12 max-w-xl text-lg font-light leading-relaxed text-accent/65 md:text-xl"
        >
          Je suis Sylvain MBEUMOU, développeur web. Je transforme des idées en
          expériences numériques claires, accessibles et centrées sur
          l’utilisateur.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="border border-accent bg-accent px-8 py-4 font-semibold text-white transition-colors hover:bg-primary"
          >
            <span className="relative z-10">Voir mes projets</span>
          </a>

          <button
            onClick={openModal}
            className="border border-beigeGray bg-transparent px-8 py-4 font-medium text-accent transition-colors hover:border-primary hover:text-primary"
          >
            Me contacter
          </button>
        </motion.div>
      </motion.div>

      {/* Modal */}
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
                  Travaillons ensemble
                </h2>
                <p className="text-accent/60">
                  Racontez-moi votre projet et je reviendrai vers vous
                  rapidement.
                </p>
              </div>

              <ContactForm />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
