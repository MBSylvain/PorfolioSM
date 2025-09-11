// ProjectCard.jsx
export default function ProjectCard({ title, tech, details, context }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">Technologie : {tech}</p>
      <p className="text-gray-700 mt-2">Description du projet:{details}</p>
      <p className="text-gray-700 mt-2">Contexte : {context}</p>
      <a href="#" className="text-teal-600 underline mt-2 inline-block">Voir plus</a>
    </div>
  );
}
