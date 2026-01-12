import { ExternalLink, Github, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Multi-Agent AI System",
    description:
      "Production-style multi-agent AI orchestration system enabling collaborative research, financial analysis, and autonomous code generation.",
    highlights: [
      "Integrated GPT-4o & Claude for diverse AI capabilities",
      "Web search and structured outputs (Pydantic/JSON)",
      "Persistent memory using vector + SQL databases",
      "Custom tools for autonomous task execution",
    ],
    tech: ["Python", "CrewAI", "GPT-4o", "Claude", "Pydantic", "Vector DB"],
    featured: true,
  },
  {
    title: "Career Conversation Bot",
    description:
      "An AI-powered chatbot trained on my resume that can answer questions about my experience, skills, and background.",
    highlights: [
      "Natural language Q&A about my career",
      "Built with Hugging Face Spaces",
      "Interactive and contextual responses",
    ],
    tech: ["Python", "Hugging Face", "LLM", "Gradio"],
    link: "https://huggingface.co/spaces/Micah1234/career_conversation",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass rounded-2xl p-8 glass-hover relative overflow-hidden group"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                      Featured
                    </span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                      {project.title}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 rounded text-xs font-mono bg-primary/10 text-primary">
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="hero" size="default">
                          <Bot className="w-4 h-4" />
                          Try the Bot
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
