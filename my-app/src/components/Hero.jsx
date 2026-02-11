

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center pt-24 pb-16 text-center overflow-hidden min-h-[500px]"
      style={{
        backgroundImage: `url('/Banier hero portfolio.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/40" aria-hidden="true"></div>
      <motion.div
        className="relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-5xl font-bold text-white drop-shadow-lg"
        >
          Développeur Web & Mobile
        </motion.h1>
        <p className="mb-6 text-lg text-white/90 drop-shadow">
          Je conçois des sites personnalisés et performants pour les indépendants et petites entreprises.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#projects" className="px-6 py-3 text-white bg-[#333333] rounded hover:bg-[#5A6D7A] transition">
            Voir mes projets
          </a>
          <a href="#contact" className="px-6 py-3 text-[#333333] bg-white rounded hover:bg-[#5A6D7A] hover:text-white transition">
            Me contacter
          </a>
        </div>
      </motion.div>
    </section>
  );
}
