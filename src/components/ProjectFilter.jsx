import React, { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Site vitrine",
    tech: "HTML/ CSS",
    context: "Formation",
    details: "Création d’un site vitrine pour une association de sport.",
    liens: "https://keen-frangipane-a2a348.netlify.app/",
  },
  {
    id: 2,
    title: "Site vitrine de Photgraphe",
    tech: "React",
    context: "Formation",
    details: "Création d’un site vitrine pour un photographe amateur.",
    liens: "https://projet-charles-quantin-ecf.netlify.app/",
  },
  {
    id: 3,
    title: "Services Web Vitrine",
    tech: "React-Js / Tailwind / SQL",
    context: "Personnel",
    details:
      "Offre de services web clé en main pour artisans et PME du bâtiment.",
    liens: "https://keen-frangipane-a2a348.netlify.app/",
  },
  {
    id: 4,
    title: "Ecoride — Covoiturage",
    tech: "React / PHP / Tailwind",
    context: "Formation",
    details: "Plateforme de covoiturage écologique avec gestion de trajets.",
    liens: "https://ecoride-hazel.vercel.app/",
  },
  {
    id: 5,
    title: "SyncSheet Pro",
    tech: "Supabase / Apps Script / React",
    context: "Professionnel",
    details:
      "Synchronisation automatique entre Supabase et Excel/Google Sheets.",
    liens: "https://brique-lemon.vercel.app/",
  },
  {
    id: 6,
    title: "Suivi Candidat Alpha",
    tech: "Vite / Supabase / PostgreSQL",
    context: "Personnel",
    details: "Tableau de bord personnalisé pour le suivi des candidatures.",
    liens: "https://suivi-alpha.vercel.app/",
  },
  {
    id: 7,
    title: "Commandes Fournisseurs",
    tech: "Power Apps / Power Automate",
    context: "Professionnel",
    details:
      "Application interne pour fiabiliser et structurer le processus de commande des conducteurs de travaux.",
    liens: "",
  },
];

export default function ProjectFilter() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.context === filter);

  const categories = ["All", "Formation", "Personnel", "Professionnel"];

  return (
    <section
      id="projects"
      className="overflow-hidden border-t border-beigeGray bg-softBlack px-6 py-32"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-primary">
            Portfolio
          </h2>
          <h3 className="text-4xl font-extrabold text-accent md:text-5xl">
            Sélection de <span className="text-accent/40">réalisations.</span>
          </h3>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          <div className="flex flex-wrap gap-1 border border-beigeGray bg-white/60 p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  filter === cat
                    ? "bg-accent text-white"
                    : "text-accent/55 hover:text-primary"
                }`}
              >
                <span className="relative z-10">
                  {cat === "All" ? "Tous" : cat}
                </span>
                {filter === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 -z-0 bg-accent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                tech={project.tech}
                details={project.details}
                context={project.context}
                liens={project.liens}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
