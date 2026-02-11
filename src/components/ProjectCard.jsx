// ProjectCard.jsx
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, tech, details, context, liens }) {
  return (
    <motion.div
      className="p-6 transition-transform duration-300 bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 font-sans group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">Technologie : {tech}</p>
      <p className="mt-2 text-gray-700 dark:text-gray-200">Description du projet : {details}</p>
      <p className="mt-2 text-gray-700 dark:text-gray-200">Contexte : {context}</p>
      <a
        href={liens}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-2 text-primary underline hover:text-accent transition-colors group-hover:scale-110 group-hover:shadow-md"
      >
        Voir le site <FaExternalLinkAlt className="text-xs" />
      </a>
    </motion.div>
  );
}
