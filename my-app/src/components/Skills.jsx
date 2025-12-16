import React from 'react';
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaDatabase } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    { name: 'HTML/CSS', icon: <><FaHtml5 className="text-orange-500 text-3xl" /> <FaCss3Alt className="text-blue-500 text-3xl ml-1" /></>, level: 4 },
    { name: 'PHP', icon: <FaPhp className="text-indigo-700 text-3xl" />, level: 3 },
    { name: 'React.js', icon: <FaReact className="text-cyan-400 text-3xl" />, level: 2 },
    { name: 'MySQL', icon: <FaDatabase className="text-yellow-600 text-3xl" />, level: 3 },
  ];

  return (
    <section className="px-6 py-16 text-center bg-white dark:bg-gray-900 font-sans">
      <h2 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white">Compétences</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map(skill => (
          <div 
            key={skill.name} 
            className="w-40 p-4 transition-all duration-300 bg-gray-100 dark:bg-gray-800 rounded shadow hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-lg hover:scale-105"
          >
            <div className="flex justify-center mb-3">
              {skill.icon}
            </div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
