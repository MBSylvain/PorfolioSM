import React from 'react';

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-6 py-20 min-h-[500px] text-center bg-gray-50 overflow-hidden"
      style={{
        backgroundImage: `url('/accompagnement.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none bg-white/70 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="relative z-10">
        <h2 className="mb-8 text-3xl font-semibold">Je vous accompagne pour</h2>
        <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="mb-3 text-xl font-semibold">💻 Création de site vitrine</h3>
            <p className="text-gray-600">Conception et développement de sites web professionnels pour présenter votre entreprise avec une interface moderne et responsive.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="mb-3 text-xl font-semibold">✅ Développement PHP/MySQL</h3>
            <p className="text-gray-600">Création d'applications web dynamiques et bases de données personnalisées pour répondre à vos besoins spécifiques.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="mb-3 text-xl font-semibold">🔧 Maintenance et optimisation</h3>
            <p className="text-gray-600">Suivi régulier, mise à jour de contenu et amélioration des performances pour garantir le fonctionnement optimal de votre site.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
