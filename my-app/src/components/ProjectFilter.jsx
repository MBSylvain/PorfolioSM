// ProjectFilter.jsx
import React, { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { motion } from "framer-motion";

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
    title: "Site vitrine de création de site web",
    tech: "React-Js/Tailwind css/SQL",
    context: "Personnel",
    details:
      "Création de sites web “clé en main” pour artisans, PME et TPE du bâtiment.",
    liens: "https://keen-frangipane-a2a348.netlify.app/",
  },
  {
    id: 4,
    title: "Covoiturage écologique",
    tech: "React JS/PHP/Tailwind CSS",
    context: "Formation",
    details:
      "Développement d’une application web pour le covoiturage écologique.",
    liens: "https://ecoride-hazel.vercel.app/",
  },
  {
    id: 5,
    title: "Application suiv de note d\éléve",
    tech: "Vite/Postreg- supabase ",
    context: "Professionnel",
    details: "Développement d’une application web de gestion des notes.",
    liens: "https://brique-lemon.vercel.app/",
  },
  {
    id: 6,
    title: "Suivi de candidature",
    tech: "Vite/Postreg Supabase",
    context: "Personnel",
    details: "Création d’un site pour le suivi des candidatures.",
    liens: "https://suivi-alpha.vercel.app/",
  },
];

export default function ProjectFilter() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.context === filter);

  return (
    <div className="">
      <motion.section
        id="projects"
        className="px-6 py-16 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-6 text-3xl font-semibold text-center text-gray-900 dark:text-white">
          Mes projets
        </h2>
        <div className="flex justify-center gap-4 mb-6">
          {["All", "Formation", "Personnel", "Professionnel", "Autres"].map(
            (tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded font-semibold transition-colors duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${filter === tech ? "bg-primary text-white scale-105" : "bg-gray-200 dark:bg-gray-700 dark:text-gray-100 hover:bg-primary/80 hover:text-white"}`}
              >
                {tech}
              </button>
            ),
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
        </div>
      </motion.section>
    </div>
  );
}
