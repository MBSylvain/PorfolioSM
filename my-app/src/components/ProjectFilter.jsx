// ProjectFilter.jsx
import { useState } from 'react';
import ProjectCard from './ProjectCard.jsx'

const projects = [
  { id: 1, title: 'Site vitrine', tech: 'HTML/ CSS',context:'Formation', details:'Création d’un site vitrine pour une association de sport.' },
  { id: 2, title: 'Site vitrine de Photgraphe', tech: 'React',context:'Formation',  details:'Création d’un site vitrine pour un photographe amateur.' },
  { id: 3, title: 'Site de covoiturage', tech: 'React-Js/PHP/SQL',context:'Formation',  details:'Création d’un site de covoiturage écofrinedly.' },
];

export default function ProjectFilter() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.context === filter);

  return (
    <div className=''>
    <section id="projects" className="px-6 py-16 bg-gray-50">
      <h2 className="mb-6 text-3xl font-semibold text-center">Mes projets  </h2>
      <div className="flex justify-center gap-4 mb-6">
        {['All', 'Formation', 'Personnel', 'Professionnel', 'Autres'].map(tech => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded ${filter === tech ? 'bg-teal-600 text-white' : 'bg-gray-200'}`}
          >
            {tech}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {filtered.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tech={project.tech}
            details={project.details}
            context={project.context}
          />
        ))}
      </div>
    </section>
   
    
      
 </div> 
  );
}
