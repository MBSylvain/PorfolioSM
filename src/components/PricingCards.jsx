import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const PRICING = [
  {
    title: "Vitrine",
    price: "600€",
    range: "- 800€",
    features: [
      "1 à 3 pages personnalisées",
      "Design responsive",
      "Formulaire de contact",
      "SEO basique",
      "Mise en ligne incluse"
    ],
    highlight: false,
  },
  {
    title: "Pro",
    price: "900€",
    range: "- 1200€",
    features: [
      "Jusqu'à 6 pages",
      "Design personnalisé & responsive",
      "Animations légères",
      "Optimisation SEO basique",
      "Formulaire de contact",
      "Mise en ligne & configuration",
      "Support 3 mois"
    ],
    highlight: true,
  },
  {
    title: "Premium",
    price: "1400€",
    range: "- 1800€",
    features: [
      "Site complet & fonctionnalités avancées",
      "Design sur-mesure",
      "Optimisation SEO avancée",
      "Animations modernes & micro-interactions",
      "Accompagnement projet & support 6 mois",
      "Maintenance évolutive"
    ],
    highlight: false,
  }
];

export default function PricingCards() {
  return (
    <section className="relative py-32 bg-softBlack overflow-hidden">
      <div className="max-w-6xl px-6 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4">Investissement</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">Des solutions pour <br/><span className="text-white/40">tous les budgets.</span></h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 items-start">
          {PRICING.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] flex flex-col transition-all duration-500 bg-white/5 border border-white/10 ${
                plan.highlight 
                  ? "md:-mt-4 md:mb-4 bg-white/10 border-primary/50 shadow-[0_0_40px_-10px_rgba(20,184,166,0.3)]" 
                  : "hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-softBlack text-xs font-bold rounded-full uppercase tracking-widest">
                  Plus populaire
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white/50 mb-2 tracking-wide uppercase">{plan.title}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-lg text-white/30 font-light">{plan.range}</span>
                </div>
              </div>

              <ul className="mb-10 space-y-4 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 group">
                    <div className="mt-1 w-5 h-5 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-primary group-hover:bg-primary group-hover:text-softBlack transition-colors">
                      <FaCheck />
                    </div>
                    <span className="text-white/60 text-sm font-light leading-snug group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-primary text-softBlack hover:scale-[1.02] shadow-[0_10px_20px_-10px_rgba(20,184,166,0.5)]"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                Choisir ce forfait
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
