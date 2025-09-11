import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-100 to-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Développeur Web et web mobile </h1>
        <p className="text-lg text-gray-600 mb-6">
          Je conçois des sites personnalisés et performants pour les indépendants et petites entreprises.
        </p>
        <a href="#projects" className="bg-teal-600 text-purple-700 px-6 py-3 rounded hover:bg-teal-700 transition">
          Voir mes projets
        </a>
      </motion.div>
    </section>
  );
}
