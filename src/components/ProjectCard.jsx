import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  tech,
  details,
  context,
  liens,
  images = [],
  featured = false,
  index,
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = images[activeImageIndex];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group flex h-full flex-col ${featured ? "md:col-span-2" : ""}`}
    >
      <div
        className={`grid gap-6 ${
          featured ? "md:grid-cols-[1.25fr_0.75fr] md:items-center md:gap-12" : ""
        }`}
      >
        <div>
          {activeImage ? (
            <a
              href={activeImage.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ouvrir la capture : ${activeImage.label || title}`}
              className="group/image relative block aspect-[4/3] overflow-hidden border border-accent/15 bg-offWhite p-3 sm:p-5"
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt || `Écran de ${title}`}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-500 group-hover/image:scale-[1.015]"
              />
              <span className="absolute bottom-3 right-3 bg-offWhite px-2 py-1 font-mono text-[10px] uppercase text-accent/65">
                Agrandir ↗
              </span>
            </a>
          ) : (
            <div className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden border-y border-accent/20 bg-grayLight p-6">
              <span className="font-mono text-xs uppercase text-accent/55">
                Projet / {index}
              </span>
              <span className="self-end font-display text-8xl leading-none text-primary/25">
                {index}
              </span>
            </div>
          )}
          {images.length > 1 && (
            <div className="flex flex-wrap gap-2 border-b border-beigeGray py-3">
              {images.map((image, imageIndex) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImageIndex(imageIndex)}
                  aria-pressed={activeImageIndex === imageIndex}
                  className={`border-b-2 px-1 py-2 text-xs transition-colors ${
                    activeImageIndex === imageIndex
                      ? "border-primary text-primary"
                      : "border-transparent text-accent/60 hover:text-primary"
                  }`}
                >
                  {image.label || `Écran ${imageIndex + 1}`}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-grow flex-col items-start">
          <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase text-accent/55">
            <span className="text-primary">{index}</span>
            <span>{context}</span>
          </div>
          <h3 className="mb-3 font-display text-3xl font-normal leading-tight text-accent md:text-4xl">
            {title}
          </h3>
          <p className="mb-4 font-mono text-[11px] uppercase leading-relaxed text-primary">
            {tech}
          </p>
          <p className="mb-6 text-sm leading-6 text-accent/70 md:text-base">
            {details}
          </p>

          {liens ? (
            <a
              href={liens}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-auto inline-flex items-center gap-3 border-b border-accent/30 pb-2 text-sm font-semibold text-accent transition-colors hover:border-primary hover:text-primary"
            >
              Voir le projet
              <FaArrowRight className="transition-transform group-hover/link:translate-x-1" />
            </a>
          ) : (
            <span className="mt-auto border-b border-accent/20 pb-2 font-mono text-[11px] uppercase text-accent/55">
              Projet interne · accès privé
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
