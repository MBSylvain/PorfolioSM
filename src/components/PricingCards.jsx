import React from "react";

const PRICING = [
  {
    title: "Pro",
    price: "900€ - 1200€",
    features: [
      "Jusqu'à 6 pages",
      "Design personnalisé & responsive",
      "Animations légères",
      "Optimisation SEO basique",
      "Formulaire de contact",
      "Mise en ligne & configuration",
      "Support 3 mois",
    ],
    highlight: true,
    badge: "bg-teal-500 text-white border border-teal-500",
    cardClass: "bg-white text-gray-900",
    borderClass: "border border-teal-500",
    buttonClass:
      "bg-teal-500 hover:bg-indigo-500 text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-150",
  },
  {
    title: "Vitrine",
    price: "600€ - 800€",
    features: [
      "1 à 3 pages personnalisées",
      "Design responsive",
      "Formulaire de contact",
      "SEO basique",
      "Mise en ligne & configuration",
      "Maintenance 1 mois",
    ],
    highlight: false,
    badge: "bg-indigo-500 text-white border border-indigo-500",
    cardClass: "bg-gray-900 text-white md:scale-110 md:z-10 shadow-2xl",
    borderClass: "border border-indigo-500",
    buttonClass:
      "bg-indigo-500 hover:bg-teal-500 text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-150",
  },
  {
    title: "Sur-mesure premium",
    price: " à partir de 1400€",
    features: [
      "Site complet & fonctionnalités avancées",
      "Design sur-mesure",
      "Optimisation SEO avancée",
      "Animations modernes & micro-interactions",
      "Accompagnement projet & support 6 mois",
      "Maintenance évolutive",
    ],
    highlight: false,
    badge: "bg-white text-indigo-500 border border-indigo-500",
    cardClass: "bg-white text-gray-900",
    borderClass: "border border-gray-200",
    buttonClass:
      "bg-teal-500 hover:bg-indigo-500 text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-150",
  },
];

export default function PricingCards() {
  return (
    <section className="py-16 bg-[color:var(--bg-light)]">
      <div className="max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[color:var(--text)]">
          Tarifs
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {PRICING.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-2xl ${plan.borderClass} ${plan.cardClass} p-8 flex flex-col items-center transition-transform hover:scale-105 ${plan.highlight ? "ring-2 ring-[color:var(--primary)] ring-offset-2" : ""}`}
            >
              <span
                className={`mb-4 px-4 py-1 rounded-full text-xs font-bold ${plan.badge} drop-shadow-sm`}
              >
                {plan.title}
              </span>
              <div className={`text-4xl font-extrabold mb-4 drop-shadow-lg`}>
                {plan.price}
              </div>
              <ul className="mb-8 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-sm font-semibold drop-shadow-sm">
                      {" "}
                      {f}{" "}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto px-6 py-2 rounded-full font-bold focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 ${plan.buttonClass}`}
                style={{ filter: "brightness(1.05)" }}
              >
                {plan.price === "Sur devis" ? "Demander un devis" : "Choisir"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
