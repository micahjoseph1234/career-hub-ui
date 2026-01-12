import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageSquare, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-primary font-mono text-sm">05. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm currently open to new opportunities and collaborations. Whether you have a question,
            a project idea, or just want to say hi, feel free to reach out!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:micj88799@gmail.com">
              <Button variant="hero" size="xl">
                <Mail className="w-5 h-5" />
                Say Hello
              </Button>
            </a>
            <a href="https://huggingface.co/spaces/Micah1234/career_conversation" target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="xl">
                <MessageSquare className="w-5 h-5" />
                Chat with My Bot
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="mailto:micj88799@gmail.com"
              className="w-12 h-12 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            Designed & Built by Micah Joseph
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
