const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python"],
    icon: "⚡",
  },
  {
    title: "Backend & APIs",
    skills: ["Spring Boot", "Spring Web", "REST APIs", "Spring Security", "JWT/Basic Auth"],
    icon: "🔧",
  },
  {
    title: "AI/ML",
    skills: ["LLM Integration", "RAG", "Embeddings", "CrewAI", "GPT-4o", "Claude"],
    icon: "🤖",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL"],
    icon: "🗄️",
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "GitLab", "OpenTelemetry", "Grafana"],
    icon: "🛠️",
  },
  {
    title: "Cloud & Platforms",
    skills: ["Azure (AZ-900)", "Power BI", "Mainframe (z/OS)"],
    icon: "☁️",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass rounded-xl p-6 glass-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-secondary/50 text-sm text-muted-foreground 
                               transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
