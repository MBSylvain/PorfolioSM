import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaDatabase } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="px-6 py-16 text-center bg-white">
      <h2 className="mb-4 text-3xl font-semibold">À propos</h2>
      <p className="max-w-3xl mx-auto text-gray-700">
        Passionné par le développement web, je monte en compétences via des cours en ligne et pratique en parallèle sur des projets concrets.<br />
        PHP, React.js et MySQL sont mes outils de prédilection — épaulés par l’IA pour optimiser, déboguer et structurer le code.<br />
        Mon objectif : livrer des solutions simples, performantes et faciles à faire évoluer, en mêlant savoir-faire manuel et intelligence des outils modernes.
      </p>
      <div className="flex justify-center gap-6 mt-8">
        <FaHtml5 className="text-4xl text-orange-500" title="HTML5" />
        <FaCss3Alt className="text-4xl text-blue-500" title="CSS3" />
        <FaPhp className="text-4xl text-indigo-700" title="PHP" />
        <FaReact className="text-4xl text-cyan-400" title="React.js" />
        <FaDatabase className="text-4xl text-yellow-600" title="MySQL" />
      </div>
    </section>
  );
}
