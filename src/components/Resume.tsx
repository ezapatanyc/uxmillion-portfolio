import { Button } from "@/components/ui/button";
import { Download, Mail, CheckCircle2 } from "lucide-react";

const Resume = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'mailto:ezapata.nyc@gmail.com';
    }
  };

  const highlights = [
    "Delivered 15+ complex web projects",
    "Experience across healthcare, fintech, e-commerce, and workflow-heavy products",
    "Strong in interaction design, rapid prototyping, accessibility, and stakeholder alignment",
    "AI-augmented workflow using Lovable, Cursor, Claude, and Antigravity",
  ];

  return (
    <section id="resume" className="section-padding px-6 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading animate-color-shift text-3xl">Resume Highlights</h2>

        <div className="frosted-card p-6 md:p-8 rounded-xl">
          {/* Content */}
          <div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Senior Product Designer with 5+ years across startup and enterprise teams
            </p>

            {/* Quick Snapshot */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-5 text-gradient">Quick Snapshot</h3>
              <ul className="space-y-3">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                onClick={() => window.open("https://docs.google.com/document/d/12v4tqv8C9uIPKq2hg3sb_k8sE8B1kXmOEmvZq2uQHcY/edit?usp=sharing", "_blank")}
                className="flex items-center gap-2 group"
              >
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Download Full CV
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
