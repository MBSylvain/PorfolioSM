import React from "react";

const PRICING = [
  {
    title: "Basique",
    price: "299€",
    features: [
      "1 page personnalisée",
      "Design responsive",
      "Déploiement offert",
      "Support 7j/7 par email"
    ],
    highlight: false
  },
  {
    title: "Pro",
    price: "599€",
    features: [
      "Jusqu'à 5 pages",
      "Animations avancées",
      "Optimisation SEO",
      "Formulaire de contact inclus",
      "Support prioritaire"
    ],
    highlight: true
  },
  {
    title: "Sur-mesure",
    price: "Sur devis",
    features: [
      "Site complet & fonctionnalités avancées",
      "Accompagnement personnalisé",
      "Intégration API, blog, e-commerce...",
      "Maintenance & évolutions"
    ],
    highlight: false
  }
];

export default function PricingCards() {
  return (
    <section className="py-16 bg-[color:var(--bg)]">
      <div className="max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[color:var(--text)]">Tarifs</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {PRICING.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 flex flex-col items-center shadow-sm transition-transform hover:scale-105 ${plan.highlight ? 'ring-2 ring-[color:var(--primary)]' : ''}`}
            >
              <h3 className="text-xl font-semibold mb-2 text-[color:var(--text)]">{plan.title}</h3>
              <div className="text-4xl font-bold mb-4 text-[color:var(--primary)]">{plan.price}</div>
              <ul className="mb-8 space-y-2 text-[color:var(--muted)]">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--primary)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-auto px-6 py-2 rounded-full bg-[color:var(--primary)] text-white font-medium hover:bg-[color:var(--accent)] transition-colors">
                {plan.price === "Sur devis" ? "Demander un devis" : "Choisir"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
