import { motion } from "framer-motion";

export default function About() {
  const practices = [
    {
      number: "01",
      title: "Applications web",
      detail: "Interfaces réactives, accessibles et pensées pour leurs usages.",
    },
    {
      number: "02",
      title: "Outils métiers",
      detail: "Applications Power Apps pour simplifier les opérations terrain.",
    },
    {
      number: "03",
      title: "Automatisations",
      detail: "Flux Power Automate pour réduire les tâches répétitives.",
    },
  ];

  return (
    <section
      id="about"
      className="overflow-hidden border-t border-beigeGray bg-offWhite px-5 py-20 text-accent md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 font-mono text-xs uppercase text-primary">
              02 / Ma démarche
            </p>
            <h2 className="mb-7 font-display text-5xl font-normal leading-[1.02] md:text-6xl">
              Du besoin
              <br />
              métier à l’outil
              <br />
              <span className="text-primary italic">qui fonctionne.</span>
            </h2>
            <p className="max-w-lg text-base leading-7 text-accent/70">
              Je développe des sites, des applications web et des outils
              internes. Le point de départ reste le même : comprendre le besoin,
              puis choisir la solution adaptée.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] uppercase text-accent/60">
              <span className="border border-beigeGray px-3 py-2">React</span>
              <span className="border border-beigeGray px-3 py-2">PHP</span>
              <span className="border border-beigeGray px-3 py-2">Power Apps</span>
              <span className="border border-beigeGray px-3 py-2">Power Automate</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="divide-y divide-beigeGray border-y border-beigeGray"
          >
            {practices.map((practice) => (
              <article
                key={practice.number}
                className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5"
              >
                <span className="font-mono text-xs text-primary">
                  {practice.number}
                </span>
                <div>
                  <h3 className="mb-1 font-display text-2xl text-accent">
                    {practice.title}
                  </h3>
                  <p className="text-sm leading-6 text-accent/65">
                    {practice.detail}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
