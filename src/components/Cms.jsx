import { motion } from "framer-motion";

const cmsGroups = [
  {
    number: "01",
    name: "CMS polyvalents",
    platforms: "WordPress · Drupal · Joomla",
    description:
      "Pour publier et organiser des contenus variés, du site vitrine au portail plus structuré.",
    fit: "Sites éditoriaux et institutionnels",
  },
  {
    number: "02",
    name: "E-commerce",
    platforms: "Shopify · WooCommerce",
    description:
      "Pour gérer un catalogue, les commandes et les paiements depuis une même interface.",
    fit: "Boutiques en ligne",
  },
  {
    number: "03",
    name: "Créateurs de sites",
    platforms: "Wix · Squarespace",
    description:
      "Des outils hébergés qui rendent la création et les mises à jour accessibles sans équipe technique.",
    fit: "Sites simples à administrer",
  },
  {
    number: "04",
    name: "CMS headless",
    platforms: "Strapi · Contentful",
    description:
      "Le contenu est géré séparément du site, puis diffusé vers plusieurs interfaces via une API.",
    fit: "Expériences web sur mesure",
  },
];

export default function Cms() {
  return (
    <section
      id="cms"
      className="scroll-mt-20 border-t border-accent bg-accent px-5 py-20 text-offWhite md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-4 font-mono text-xs uppercase text-secondary">
            03 / Gestion de contenu
          </p>
          <h2 className="mb-5 font-display text-5xl font-normal leading-none md:text-6xl">
            Un site que l'on peut faire vivre.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-offWhite/70">
            Un CMS (système de gestion de contenu) permet de créer et mettre à
            jour les pages d'un site depuis une interface dédiée, sans modifier
            le code à chaque changement. C'est une solution pertinente quand
            l'équipe souhaite garder la main sur ses contenus.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <motion.aside
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-fit border-l border-secondary pl-6"
          >
            <h3 className="mb-4 font-display text-2xl font-normal">Choisir le bon outil.</h3>
            <p className="mb-5 text-sm leading-6 text-offWhite/70">
              Les contenus deviennent plus simples à actualiser, la publication
              est plus rapide et des extensions peuvent répondre à des besoins
              courants.
            </p>
            <p className="text-sm leading-6 text-offWhite/60">
              Le bon choix dépend du projet : budget, autonomie, sécurité,
              maintenance et niveau de personnalisation sont à prendre en compte.
            </p>
          </motion.aside>

          <div className="divide-y divide-white/15 border-y border-white/20">
            {cmsGroups.map((group, index) => (
              <motion.article
                key={group.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-5"
              >
                <span className="font-mono text-xs tabular-nums text-secondary">
                  {group.number}
                </span>
                <div>
                  <h3 className="mb-1 font-display text-2xl font-normal">{group.name}</h3>
                  <p className="mb-2 font-mono text-xs text-secondary">
                    {group.platforms}
                  </p>
                  <p className="max-w-xl text-sm leading-6 text-offWhite/65">
                    {group.description}
                  </p>
                </div>
                <span className="font-mono text-[10px] uppercase text-offWhite/50 sm:max-w-36 sm:text-right">
                  {group.fit}
                </span>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}