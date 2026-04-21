import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";

export default function Hero() {
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
    window.addEventListener('openContactModal', onOpen);
    return () => window.removeEventListener('openContactModal', onOpen);
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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-20 px-6 overflow-hidden bg-softBlack selection:bg-primary selection:text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-100 pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/60">
            Disponible pour nouveaux projets
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.9] mb-8"
        >
          Construire le futur <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">
            web & mobile.
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-light mb-12"
        >
          Sylvain MBEUMOU — Développeur passionné créant des expériences numériques 
          utiles, élégantes et centrées sur l'utilisateur.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-softBlack font-semibold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Explorer mes projets</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <button
            onClick={openModal}
            className="px-8 py-4 bg-white/5 text-white font-medium rounded-2xl border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            Parlons de votre projet
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
                <h2 className="text-3xl font-bold text-white mb-2">Travaillons ensemble</h2>
                <p className="text-white/50">Racontez-moi votre projet et je reviendrai vers vous rapidement.</p>
              </div>

              <ContactForm />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

