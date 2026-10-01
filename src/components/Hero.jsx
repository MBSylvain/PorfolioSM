import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

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
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="overflow-hidden bg-softBlack px-5 pb-2 pt-4 md:pb-16 md:pt-16">
      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-5 md:grid-cols-[1.05fr_0.95fr] md:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="md:col-start-1"
        >
          <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase text-accent/60">
            <span className="h-px w-8 bg-primary" />
            Développement web & Power Platform
          </p>
          <h1 className="mb-5 max-w-2xl font-display text-5xl font-normal leading-[0.95] text-accent sm:text-6xl md:mb-7 md:text-7xl lg:text-8xl">
            Des outils
            <br />
            pensés pour
            <br />
            <span className="text-primary italic">les équipes.</span>
          </h1>
          <p className="mb-4 max-w-xl text-base leading-7 text-accent/70 md:mb-9 md:text-lg">
            Je suis Sylvain MBEUMOU. Je conçois des applications web et métiers
            qui simplifient le quotidien des équipes, en combinant expertise métier,
            développement qualité et IA pour accélérer la livraison.
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 bg-accent px-5 py-3 text-sm font-semibold text-offWhite transition-colors hover:bg-primary md:px-6 md:py-4"
            >
              Découvrir mes projets
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={openModal}
              className="border-b border-accent/30 py-2 text-sm font-semibold text-accent transition-colors hover:border-primary hover:text-primary"
            >
              Me contacter
            </button>
          </div>
        </motion.div>

        <motion.figure
          variants={itemVariants}
          className="relative mx-auto w-full max-w-xl md:ml-auto"
        >
          <p className="mb-2 font-mono text-xs uppercase text-primary">
            Aperçu d’application / 01
          </p>
          <a
            href="/projects/powerapps.png"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir l’écran de l’application Commandes Fournisseurs"
            className="block border border-accent/15 bg-offWhite p-2 md:p-5"
          >
            <img
              src="/projects/powerapps.png"
              alt="Écran de l’application Power Apps Commandes Fournisseurs"
              className="aspect-[2/1] w-full object-contain md:aspect-[4/3]"
            />
          </a>
          <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-accent/20 py-2 text-sm md:py-4">
            <span className="font-semibold text-accent">Commandes Fournisseurs</span>
            <span className="hidden font-mono text-xs uppercase text-accent/55 md:inline">
              Power Apps · Power Automate
            </span>
          </figcaption>
        </motion.figure>
      </motion.div>

      <div className="mx-auto mt-8 hidden max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-beigeGray pt-4 font-mono text-[11px] uppercase text-accent/50 md:mt-16 md:flex">
        <span>Portfolio de Sylvain MBEUMOU</span>
        <a href="#projects" className="transition-colors hover:text-primary">
          Explorer les réalisations ↓
        </a>
      </div>

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
