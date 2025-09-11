export default function Skills() {
  const skills = [
    { name: 'HTML/CSS', level: 4 },
    { name: 'PHP', level: 3 },
    { name: 'React.js', level: 2 },
    { name: 'MySQL', level: 3 },
  ];

  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Compétences</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map(skill => (
          <div key={skill.name} className="bg-gray-100 p-4 rounded shadow w-40">
            <h3 className="font-bold">{skill.name}</h3>
            <p>{'★'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
