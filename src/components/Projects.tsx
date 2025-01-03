const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS",
      tags: ["React", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Weather App",
      description: "A weather application that shows current weather conditions",
      tags: ["JavaScript", "API Integration", "CSS"],
    },
    {
      title: "Task Manager",
      description: "A simple task management application",
      tags: ["React", "Local Storage", "CSS"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-text-primary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-text-primary">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;