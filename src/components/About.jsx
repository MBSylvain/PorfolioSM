import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaDatabase } from "react-icons/fa";

export default function About() {
  const skills = [
    { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
    { name: "MySQL", icon: <FaDatabase />, color: "text-yellow-600" },
  ];

  return (
    <section
      id="about"
      className="overflow-hidden border-t border-beigeGray bg-softBlack px-6 py-32 text-accent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.4em] text-primary">
              L'essence du projet
            </h2>
            <h3 className="mb-8 text-4xl font-extrabold leading-tight md:text-5xl">
              Concevoir des outils <br />
              <span className="text-accent/40">pas seulement des sites.</span>
            </h3>
            <div className="space-y-6 text-lg font-light leading-relaxed text-accent/65">
              <p>
                Passionné par le développement web, je m'appuie sur des
                architectures robustes et les meilleures pratiques pour garantir
                accessibilité, performance et maintenabilité.
              </p>
              <p>
                PHP, React.js et MySQL sont mes outils de prédilection. Je les
                combine à des méthodes modernes pour livrer des solutions qui
                évoluent avec vos besoins.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group border border-beigeGray bg-white/60 p-6 transition-colors hover:border-primary"
              >
                <div
                  className={`text-3xl mb-4 transition-transform group-hover:scale-110 duration-500 ${skill.color}`}
                >
                  {skill.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent/50 transition-colors group-hover:text-accent">
                  {skill.name}
                </span>
              </div>
            ))}
            <div className="flex flex-col justify-center border border-primary/30 bg-primary/10 p-6">
              <span className="text-lg font-bold text-primary italic leading-none">
                & more.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
