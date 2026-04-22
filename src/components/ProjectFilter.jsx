import React, { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Services Web Vitrine",
    tech: "React-Js / Tailwind / SQL",
    context: "Personnel",
    details: "Offre de services web clé en main pour artisans et PME du bâtiment.",
    liens: "https://keen-frangipane-a2a348.netlify.app/",
    image: "/projects/Plomberie.png",
  },
  {
    id: 2,
    title: "Ecoride — Covoiturage",
    tech: "React / PHP / Tailwind",
    context: "Formation",
    details: "Plateforme de covoiturage écologique avec gestion de trajets.",
    liens: "https://ecoride-hazel.vercel.app/",
    image: "/projects/Ecoride.png",
  },
  {
    id: 3,
    title: "SyncSheet Pro — Révise tes maths",
    tech: "Supabase / Apps Script / React",
    context: "Professionnel",
    details: "Synchronisation automatique entre Supabase et Excel/Google Sheets pour une application de révisions mathématiques.",
    liens: "https://brique-lemon.vercel.app/",
    image: "/projects/Révise tes maths.png",
  },
  {
    id: 4,
    title: "Commandes Fournisseurs",
    tech: "Power Apps / Power Automate",
    context: "Professionnel",
    details: "Application interne pour fiabiliser et structurer le processus de commande des conducteurs de travaux.",
    liens: "",
    image: "/projects/powerapps.png",
  },
];

export default function ProjectFilter() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.context === filter);

  const categories = ["All", "Formation", "Personnel", "Professionnel"];

  return (
    <section id="projects" className="px-6 py-32 bg-softBlack overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-secondary font-bold mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">Sélection de <br/><span className="text-white/40">réalisations.</span></h3>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          <div className="flex p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 ${
                  filter === cat ? "text-softBlack" : "text-white/50 hover:text-white"
                }`}
              >
                <span className="relative z-10">{cat === "All" ? "Tous" : cat}</span>
                {filter === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-x-0 inset-y-0 bg-white rounded-[10px] shadow-lg"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                image={project.image}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
