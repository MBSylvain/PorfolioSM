export default function Skills() {
  const skills = [
    { name: 'HTML/CSS', level: 4 },
    { name: 'PHP', level: 3 },
    { name: 'React.js', level: 2 },
    { name: 'MySQL', level: 3 },
  ];

  return (
    <section className="px-6 py-16 text-center bg-white">
      <h2 className="mb-6 text-3xl font-semibold">Compétences</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map(skill => (
          <div 
            key={skill.name} 
            className="w-40 p-4 transition-all duration-300 bg-gray-100 rounded shadow hover:bg-gray-50 hover:shadow-lg hover:scale-105"
          >
            {skill.icon && (
              <div className="flex justify-center mb-3">
                {skill.icon}
              </div>
            )}
            <h3 className="font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
