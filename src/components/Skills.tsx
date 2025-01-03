const Skills = () => {
  const skills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 65 },
    { name: "React", level: 60 },
    { name: "Python", level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-text-primary">My Skills</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-text-primary font-medium">{skill.name}</span>
                <span className="text-text-secondary">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;