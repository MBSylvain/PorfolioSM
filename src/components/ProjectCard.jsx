import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({ title, tech, details, context, liens }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden border border-beigeGray bg-white/75 transition-colors duration-200 hover:border-primary hover:bg-white"
    >
      {/* Project Image / Pattern Placeholder */}
      <div className="relative h-32 overflow-hidden border-b border-beigeGray bg-blueGray/10">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-primary" />
        <div className="absolute left-5 top-5 border border-beigeGray bg-softBlack px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent/70">
          {context}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-7">
        <h3 className="mb-2 text-xl font-bold text-accent transition-colors duration-200 group-hover:text-primary">
          {title}
        </h3>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {tech}
        </p>
        <p className="mb-6 flex-grow text-sm font-light leading-relaxed text-accent/65">
          {details}
        </p>

        {liens ? (
          <a
            href={liens}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 text-sm font-bold text-accent"
          >
            <span className="relative">
              Voir le projet
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-200 group-hover/btn:w-full" />
            </span>
            <FaArrowRight className="-rotate-45 text-[10px] text-primary transition-transform duration-200 group-hover/btn:rotate-0" />
          </a>
        ) : (
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent/35">
            Project interne / Privé
          </span>
        )}
      </div>
    </motion.div>
  );
}
