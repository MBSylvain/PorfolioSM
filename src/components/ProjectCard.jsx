import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, tech, details, context, liens, image }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative flex flex-col h-full rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-white/5">
        {image && !image.includes('placeholder') ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-softBlack to-accent/20 opacity-50 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
            <span className="text-white/10 font-black text-4xl uppercase tracking-tighter rotate-12 select-none">
              {title.split(' ')[0]}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-softBlack via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-softBlack/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/70">
          {context}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-xs font-semibold text-primary/60 uppercase tracking-[0.2em] mb-4">
          {tech}
        </p>
        <p className="text-white/50 text-sm font-light leading-relaxed mb-6 flex-grow">
          {details}
        </p>

        {liens ? (
          <a
            href={liens}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-white group/btn"
          >
            <span className="relative">
              Voir le projet
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover/btn:w-full transition-all duration-300" />
            </span>
            <FaArrowRight className="text-[10px] -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300 text-primary" />
          </a>
        ) : (
          <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            Project interne / Privé
          </span>
        )}
      </div>
    </motion.div>
  );
}
