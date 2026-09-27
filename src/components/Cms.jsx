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
      className="scroll-mt-24 border-t border-beigeGray bg-white/50 px-6 py-24 text-accent md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Gestion de contenu
          </p>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Un site que l'on peut faire vivre.
          </h2>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-accent/65">
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
            className="h-fit border-l-2 border-primary pl-6"
          >
            <h3 className="mb-4 text-xl font-bold">Pourquoi choisir cette solution ?</h3>
            <p className="mb-5 leading-relaxed text-accent/65">
              Les contenus deviennent plus simples à actualiser, la publication
              est plus rapide et des extensions peuvent répondre à des besoins
              courants.
            </p>
            <p className="text-sm leading-relaxed text-accent/55">
              Le bon choix dépend du projet : budget, autonomie, sécurité,
              maintenance et niveau de personnalisation sont à prendre en compte.
            </p>
          </motion.aside>

          <div className="divide-y divide-beigeGray border-y border-beigeGray">
            {cmsGroups.map((group, index) => (
              <motion.article
                key={group.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-5"
              >
                <span className="text-sm font-semibold tabular-nums text-primary">
                  {group.number}
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-bold">{group.name}</h3>
                  <p className="mb-2 text-sm font-semibold text-primary/90">
                    {group.platforms}
                  </p>
                  <p className="max-w-xl leading-relaxed text-accent/60">
                    {group.description}
                  </p>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-accent/45 sm:max-w-36 sm:text-right">
                  {group.fit}
                </span>
              </motion.article>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-accent/45">
          Panorama des principales solutions, présenté à titre informatif.
        </p>
      </div>
    </section>
  );
}