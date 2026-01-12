import { Calendar, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer",
    company: "UBS",
    type: "Full-time",
    period: "Sep 2023 - Present",
    location: "Pune",
    projects: [
      {
        name: "Distributed System Health Monitoring Platform",
        highlights: [
          "Designed monitoring pipeline extracting span-level health metrics from Mainframe (z/OS) systems",
          "Built Java Spring Boot backend services with REST APIs for real-time observability",
          "Enabled monitoring of 4 test plexes across APAC region tracking CPU, latency, errors",
          "Integrated OpenTelemetry with Grafana dashboards for proactive issue detection",
          "Reduced manual health-check effort by ~60% with automated dashboards",
          "Improved incident triage time by ~35% in test environments",
        ],
        tech: ["Java 11", "Spring Boot", "Python", "REST APIs", "OpenTelemetry", "Grafana"],
      },
      {
        name: "Global Mainframe Health Monitoring Platform",
        highlights: [
          "Built live Power BI dashboard monitoring Mainframe health across APAC, USA, and Switzerland",
          "Implemented Data Mesh–based ingestion using Python automation",
          "Enabled automated email alerts reducing manual monitoring by ~50%",
        ],
        tech: ["Python", "Power BI", "Data Mesh", "Automation"],
      },
    ],
  },
  {
    title: "SDE Intern",
    company: "UBS",
    type: "Internship",
    period: "Jan 2023 - Jun 2023",
    location: "Pune",
    projects: [
      {
        name: "AI-Powered Knowledge Assistant",
        highlights: [
          "Built Java Spring Boot backend with AI-powered RAG chatbot for 1,000+ users",
          "Implemented retrieval-augmented search and natural-language Q&A with LLM integration",
          "Designed scalable REST APIs improving self-service onboarding accessibility",
        ],
        tech: ["Java", "Spring Boot", "Python", "LLM", "RAG"],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-8 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-primary shadow-glow" />

                  {/* Experience Card */}
                  <div className="glass rounded-xl p-6 glass-hover">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {exp.projects.map((project, pIndex) => (
                        <div key={pIndex} className="border-l-2 border-border pl-4">
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            {project.name}
                            <ArrowUpRight className="w-4 h-4 text-primary" />
                          </h4>
                          <ul className="space-y-2 mb-4">
                            {project.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1.5">▹</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                              <span key={t} className="px-2 py-1 rounded text-xs font-mono bg-primary/10 text-primary">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
