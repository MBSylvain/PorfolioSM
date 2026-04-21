import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaDatabase, FaTools } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: "Site Vitrine & UI/UX",
      description: "Conception et développement de sites web professionnels avec une interface moderne, fluide et responsive.",
      icon: <FaLaptopCode />,
      color: "from-primary/20",
    },
    {
      title: "Développement Web",
      description: "Applications web dynamiques et bases de données robustes (React, PHP, MySQL) sur-mesure.",
      icon: <FaDatabase />,
      color: "from-accent/20",
    },
    {
      title: "Support & Évolution",
      description: "Maintenance, optimisation des performances et mises à jour pour garantir la pérennité de votre outil.",
      icon: <FaTools />,
      color: "from-secondary/20",
    },
  ];

  return (
    <section id="services" className="relative px-6 py-32 bg-softBlack overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4">Mes Services</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">L'expertise au service de <br/><span className="text-white/40">vos idées.</span></h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-white/50 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-4 right-8 text-white/5 text-6xl font-black italic pointer-events-none group-hover:text-white/10 transition-colors duration-500">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

