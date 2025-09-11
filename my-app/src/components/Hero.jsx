
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 text-center bg-gradient-to-br from-[#F5F5F5] to-[#FAFAFA]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-4 text-5xl font-bold text-[#222222]">Développeur Web et web mobile </h1>
        <p className="mb-6 text-lg text-[#5A6D7A]">
          Je conçois des sites personnalisés et performants pour les indépendants et petites entreprises.
        </p>
        <a href="#projects" className="px-6 py-3 text-[#FAFAFA] transition bg-[#333333] rounded hover:bg-[#5A6D7A]">
          Voir mes projets
        </a>
      </motion.div>
    </section>
  );
}
