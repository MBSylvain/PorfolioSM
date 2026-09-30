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
    title: "Site vitrine de photographe",
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
    images: [
      {
        src: "/projects/Plomberie.png",
        label: "Site plomberie",
        alt: "Aperçu du site vitrine Plomberie",
      },
      ],
  },
  {
    id: 4,
    title: "Ecoride — Covoiturage",
    tech: "React / PHP / Tailwind",
    context: "Formation",
    details: "Plateforme de covoiturage écologique avec gestion de trajets.",
    liens: "https://ecoride-hazel.vercel.app/",
    images: [
      {
        src: "/projects/Ecoride.png",
        label: "Ecoride",
        alt: "Aperçu de la plateforme de covoiturage Ecoride",
      },
    ],
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
    featured: true,
    images: [
      {
        src: "/projects/powerapps.png",
        label: "Commandes Fournisseurs",
        alt: "Écran de l’application Power Apps Commandes Fournisseurs",
      },
    ],
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
      className="overflow-hidden border-t border-beigeGray bg-softBlack px-5 py-14 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 font-mono text-xs uppercase text-primary">
              01 / Travaux choisis
            </p>
            <h2 className="font-display text-5xl font-normal leading-none text-accent md:text-6xl">
              Des idées
              <br />
              <span className="text-primary italic">mises en œuvre.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-accent/65">
            Applications métiers, sites web et outils conçus pour répondre à un
            besoin concret.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-x-7 gap-y-3 border-b border-beigeGray">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`border-b-2 px-1 py-3 text-xs font-semibold uppercase transition-colors duration-200 ${
                  filter === cat
                    ? "border-primary text-primary"
                    : "border-transparent text-accent/55 hover:text-primary"
                }`}
              >
                {cat === "All" ? "Tous les projets" : cat}
              </button>
            ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 md:gap-y-20"
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
                images={project.images}
                featured={project.featured}
                index={String(project.id).padStart(2, "0")}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
