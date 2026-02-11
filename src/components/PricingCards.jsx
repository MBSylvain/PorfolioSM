import React from "react";

const PRICING = [
  {
    title: "Pro",
    price: "900€ - 1200€",
    features: [
      "Jusqu'à 6 pages",
      "Design personnalisé",
      "Animations avancées",
      "Optimisation SEO",
      "Formulaire de contact",
      "Support technique 6 mois"
    ],
    highlight: true,
    badge: "bg-[color:var(--primary)] text-white border border-[color:var(--primary)]"
  },
  {
    title: "Vitrine",
    price: "600€ - 800€",
    features: [
      "1 à 3 pages personnalisées",
      "Design responsive",
      "Formulaire de contact",
      "SEO basique",
      "Mise en ligne incluse"
    ],
    highlight: false,
    badge: "bg-[color:var(--accent)] text-white border border-[color:var(--accent)]"
  },
  {
    title: "Sur-mesure premium",
    price: "1400€ - 1800€",
    features: [
      "Site complet & fonctionnalités avancées",
      "Accompagnement projet",
      "SEO avancé",
      "Animations modernes",
      "Intégration base de données",
      "Maintenance 3 mois & évolutions 3 mois"
    ],
    highlight: false,
    badge: "bg-[color:var(--surface)] text-[color:var(--accent)] border border-[color:var(--accent)]"
  }
];

export default function PricingCards() {
  return (
    <section className="py-16 bg-[color:var(--bg)]">
      <div className="max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[color:var(--text)]">Tarifs</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {PRICING.map((plan, idx) => (
            <div
              key={plan.title}
              className={`rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 flex flex-col items-center shadow-lg transition-transform hover:scale-105 ${plan.highlight ? 'ring-2 ring-[color:var(--primary)] ring-offset-2' : ''} ${idx === 1 ? 'md:scale-110 md:z-10' : ''}`}
            >
              <span className={`mb-4 px-4 py-1 rounded-full text-xs font-bold ${plan.badge} drop-shadow-sm`}>{plan.title}</span>
              <div className={`text-4xl font-extrabold mb-4 ${idx === 1 ? 'text-[color:var(--accent)]' : 'text-[color:var(--primary)]'} drop-shadow-lg`}> 
                {plan.price}
              </div>
              <ul className="mb-8 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--accent)]" />
                    <span className="text-[color:var(--text)] text-sm font-semibold drop-shadow-sm" style={{color: 'var(--text)', filter: 'brightness(1.2)'}}> {f} </span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto px-6 py-2 rounded-full font-bold shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 ${idx === 1 ? 'bg-[color:var(--accent)] hover:bg-[color:var(--primary)] text-white' : 'bg-[color:var(--primary)] hover:bg-[color:var(--accent)] text-white'}`}
                style={{filter: 'brightness(1.1)'}}
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
