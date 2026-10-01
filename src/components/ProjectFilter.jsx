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
    images: [
      {
        src: "/projects/Site vitrineActivite.png",
        label: "Activités",
        alt: "Présentation des activités de l’association sportive",
      },
      {
        src: "/projects/Site vitrineContact.png",
        label: "Contact",
        alt: "Page de contact du site de l’association sportive",
      },
    ],
  },
  {
    id: 2,
    title: "Site vitrine de photographe",
    tech: "React",
    context: "Formation",
    details: "Création d’un site vitrine pour un photographe amateur.",
    liens: "https://projet-charles-quantin-ecf.netlify.app/",
    images: [
      {
        src: "/projects/Site vitrine de photographe.png",
        label: "Accueil",
        alt: "Page d’accueil du site du photographe",
      },
      {
        src: "/projects/Site vitrine de photographeGalerie.png",
        label: "Galerie",
        alt: "Galerie des photographies du site",
      },
      {
        src: "/projects/Site vitrine de photographeServicesPhoto.png",
        label: "Services",
        alt: "Présentation des services photographiques",
      },
    ],
  },
  {
    id: 3,
    title: "Services Web Vitrine",
    tech: "React-Js / Tailwind / SQL",
    context: "Personnel",
    details:
      "Offre de services web clé en main pour artisans et PME du bâtiment.",
    liens: "https://plomb-expert.vercel.app/",
    images: [
      {
        src: "/projects/Plomberie.png",
        label: "Site plomberie",
        alt: "Aperçu du site vitrine Plomberie",
      },
      {
        src: "/projects/PlomberieAbout.png",
        label: "Site plomberie",
        alt: "Aperçu du site vitrine Plomberie de la page à propos de nous",
      },
      {
        src: "/projects/PlomberieDevis.png",
        label: "Site plomberie",
        alt: "Aperçu du site vitrine Plomberie  page contact",
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
        label: "Présentation",
        alt: "Aperçu de la plateforme de covoiturage Ecoride",
      },
      {
        src: "/projects/EcorideAcceuil.png",
        label: "Accueil",
        alt: "Page d’accueil de la plateforme Ecoride",
      },
      {
        src: "/projects/EcorideConnexion.png",
        label: "Connexion",
        alt: "Écran de connexion à Ecoride",
      },
      {
        src: "/projects/EcorideTrajet.png",
        label: "Trajet",
        alt: "Détail d’un trajet proposé sur Ecoride",
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
    images: [
      {
        src: "/projects/Révise tes maths.png",
        label: "Révisions",
        alt: "Écran de révision associé au projet SyncSheet Pro",
      },
      {
        src: "/projects/SyncSheet ProCreat.png",
        label: "Créations",
        alt: "Écran création d'un classe ou un élève associé au projet SyncSheet Pro",
      },
      {
        src: "/projects/SyncSheet ProCreationClass.png",
        label: "Création d'une classe",
        alt: "Écran création d'un classe ou un élève associé au projet SyncSheet Pro",
      },
      {
        src: "/projects/SyncSheet ProDashEleve.png",
        label: "Tableau de bord",
        alt: "Écran de tableau de bord élève associé au projet SyncSheet Pro",
      },
    ],
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
      {
        src: "/projects/Commandes FournisseursTableauBord.png",
        label: "Tableau de bord",
        alt: "Tableau de bord des commandes fournisseurs",
      },
      {
        src: "/projects/Commandes FournisseursListeCmde.png",
        label: "Commandes",
        alt: "Liste des commandes fournisseurs",
      },
      {
        src: "/projects/Commandes FournisseursListeCmdeAttente.png",
        label: "En attente",
        alt: "Commandes fournisseurs en attente de validation",
      },
      {
        src: "/projects/Commandes FournisseursListeCmdeRefus.png",
        label: "Refusées",
        alt: "Commandes fournisseurs refusées",
      },
    ],
  },
  {
    id: 8,
    title: "Gestion documentaire sous-traitants",
    tech: "Power Apps",
    context: "Professionnel",
    details:
      "Centralise et suit les documents administratifs des sous-traitants.",
    liens: "",
    images: [
      {
        src: "/projects/Gestion soustraitListe.png",
        label: "Liste des sous-traitants",
        alt: "Liste documentaire des sous-traitants",
      },
      {
        src: "/projects/Gestion soustraitDétailDocument.png",
        label: "Détail du document",
        alt: "Détail d’un document de sous-traitant",
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
      className="px-5 overflow-hidden border-t border-beigeGray bg-softBlack py-14 md:px-6 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 font-mono text-xs uppercase text-primary">
              01 / Travaux choisis
            </p>
            <h2 className="text-5xl font-normal leading-none font-display text-accent md:text-6xl">
              Des idées
              <br />
              <span className="italic text-primary">mises en œuvre.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-accent/65">
            Applications métiers, sites web et outils conçus pour répondre à un
            besoin concret.
          </p>
        </motion.div>

        <div className="flex flex-wrap mb-10 border-b gap-x-7 gap-y-3 border-beigeGray">
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
