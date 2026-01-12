import { MapPin, Mail, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Bio */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a Backend Developer at <span className="text-primary">UBS</span>, specializing in building distributed 
                systems and AI-powered solutions. With a strong foundation in Java and Python, I create scalable 
                backend services that handle real-world enterprise challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My work focuses on system observability, health monitoring platforms, and integrating 
                AI capabilities into enterprise applications. I'm passionate about clean architecture, 
                automation, and making complex systems understandable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I explore the latest in AI/ML, particularly around 
                <span className="text-primary"> LLMs and RAG systems</span>. I built a multi-agent AI system 
                using CrewAI that showcases my interest in autonomous AI workflows.
              </p>
            </div>

            {/* Right - Quick Info */}
            <div className="space-y-6">
              <div className="glass rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Current Role</p>
                    <p className="font-medium">Backend Developer @ UBS</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium">B.Tech IT - VIT Vellore</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Pune, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">micj88799@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Certifications
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">AZ-900 Cloud Fundamentals</span>
                    <span className="text-xs font-mono text-primary">Microsoft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">AI-900</span>
                    <span className="text-xs font-mono text-primary">Microsoft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
