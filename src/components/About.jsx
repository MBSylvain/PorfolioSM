import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaDatabase } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="px-6 py-16 text-center bg-white">
      <h2 className="mb-4 text-3xl font-semibold">À propos</h2>
      <p className="max-w-3xl mx-auto text-gray-700">
        Passionné par le développement web, j'ai suivi des formations en ligne
        structurées afin d'acquérir les bons réflexes et les bonnes pratiques :
        architecture claire, accessibilité, performance et méthodologies de
        développement. Je mets ces principes en application sur des projets
        concrets pour produire des solutions maintenables et efficaces.
        <br />
        PHP, React.js et MySQL sont mes outils de prédilection, complétés par
        des outils modernes (dont l'IA) pour optimiser, déboguer et structurer
        le code. Mon objectif : livrer des sites simples, performants et faciles
        à faire évoluer.
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
