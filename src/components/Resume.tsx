import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail } from "lucide-react";

const SkillBar = ({
  skill,
  level
}: {
  skill: string;
  level: number;
}) => <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <Progress value={level} className="h-2" />
  </div>;

const Resume = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'mailto:ezapata.nyc@gmail.com';
    }
  };

  return (
    <section id="resume" className="section-padding px-6 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading animate-color-shift text-3xl">Resume Highlights</h2>

        <div className="frosted-card p-6 md:p-8 rounded-xl relative">
          {/* Available badge - updated positioning for mobile */}
          <div className="absolute -top-3 md:right-[68px] right-4">
            <div className="badge-available py-[10px] my-[40px]">
              <span className="dot"></span> Open to New Opportunities
            </div>
          </div>

          {/* Increased top margin on mobile for spacing below badge */}
          <div className="mb-10 mt-20 md:mt-4">
            <h3 className="text-2xl font-bold mb-2 text-gradient">Designing the Future. Faster.</h3>
            <h4 className="text-lg font-semibold text-primary mb-4">Senior Product Designer | Emerging Tech & AI-Prototyping</h4>

            <div className="text-muted-foreground mb-6 leading-relaxed space-y-4">
              <p>
                I bridge the gap between "what if" and "what is." With 5+ years of experience and an AI-augmented workflow (<span className="text-foreground font-medium">Lovable, Cursor, UX Pilot</span>), I move from abstract concepts to functional prototypes 40% faster than traditional methods.
              </p>
              <p>
                My focus is on creating high-fidelity, inclusive, and physics-based experiences that align business strategy with human joy.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
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
                className="flex items-center gap-2 group border-primary/20 hover:bg-primary/5"
              >
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Let’s Connect
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:order-1">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Core Strengths</h3>
              <div className="space-y-3 text-muted-foreground mb-10">
                <p><span className="font-semibold text-primary">Emerging Tech & Prototyping:</span> High-fidelity storytelling, interaction design, physics-based UI (Google Antigravity), and functional prototyping (Figma to Code).</p>
                <p><span className="font-semibold text-primary">Design Strategy:</span> Navigating ambiguity, future-visioning, design sprints, heuristic analysis, and systems thinking.</p>
                <p><span className="font-semibold text-primary">Inclusive Design:</span> Deep knowledge of WCAG 2.2 AA standards, accessible interaction patterns, and user-centered research.</p>
                <p><span className="font-semibold text-primary">Collaboration:</span> Cross-functional facilitation, stakeholder alignment, and agile delivery.</p>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gradient">Professional Experience</h3>
              <ul className="space-y-4 text-muted-foreground list-none">
                <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">
                  <span className="font-semibold text-foreground">Freelance | Senior Product Designer (Emerging Tech)</span> <span className="text-sm opacity-70">(Jul 2022 – Present)</span>
                  <div className="text-sm mt-3 space-y-2 opacity-90">
                    <p>• <span className="font-medium text-primary">Rapid Prototyping:</span> Leverage Lovable and Cursor to move from concept to functional prototype 40% faster than traditional workflows, allowing stakeholders to "feel" the product earlier in the cycle.</p>
                    <p>• <span className="font-medium text-primary">Strategic Facilitation:</span> Utilize UX Pilot to synthesize complex stakeholder requirements during workshops, turning ambiguous goals into concrete, actionable roadmaps in real-time.</p>
                    <p>• <span className="font-medium text-primary">Experimental UI:</span> Explore physics-based interactions using Google Antigravity and spatial design principles to create immersive, "future-state" user interfaces.</p>
                    <p>• <span className="font-medium text-primary">Interaction Design:</span> Reworked a vehicle-tracking application, utilizing motion and simplified UI to increase engagement by ~30% and reduce cognitive load.</p>
                    <p>• <span className="font-medium text-primary">Global Accessibility:</span> Built bilingual (EN/ES) content architectures and inclusive design systems that opened products to LATAM audiences.</p>
                  </div>
                </li>
                <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">
                  <span className="font-semibold text-foreground">Americaneagle.com | UX Architect & Strategist</span> <span className="text-sm opacity-70">(Jun 2021 – Dec 2022)</span>
                  <div className="text-sm mt-3 space-y-2 opacity-90">
                    <p>• <span className="font-medium text-primary">Enterprise Strategy:</span> Guided experience design for 15+ complex web projects, balancing creative exploration with practical delivery for 1M+ daily visitors.</p>
                    <p>• <span className="font-medium text-primary">Inclusive Design Leadership:</span> Introduced and implemented a WCAG 2.2 AA playbook, ensuring "joyful and usable" experiences for guests of all abilities.</p>
                    <p>• <span className="font-medium text-primary">Cross-Functional Collaboration:</span> Led workshops with product owners and engineers to align on UX roadmaps, ensuring technical feasibility without sacrificing design quality.</p>
                  </div>
                </li>
                <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">
                  <span className="font-semibold text-foreground">Trianz | Senior Product Designer</span> <span className="text-sm opacity-70">(Feb 2021 – Mar 2021)</span>
                  <div className="text-sm mt-3 space-y-2 opacity-90">
                    <p>• <span className="font-medium text-primary">Design Sprints:</span> Drove a week-long intensive design sprint for a medical SaaS platform, rapidly iterating on wireframes based on real-time feedback.</p>
                    <p>• <span className="font-medium text-primary">System Design:</span> Authored a reusable component library that streamlined the handoff process, reducing development time by nearly one-third.</p>
                  </div>
                </li>
                <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">
                  <span className="font-semibold text-foreground">FidemDD Financial Advice | Product Designer & Developer</span> <span className="text-sm opacity-70">(Aug 2020 – Jan 2021)</span>
                  <div className="text-sm mt-3 space-y-2 opacity-90">
                    <p>• <span className="font-medium text-primary">End-to-End Delivery:</span> Led the full redesign and frontend implementation (React) of a financial services platform, increasing qualified traffic through clearer storytelling.</p>
                    <p>• <span className="font-medium text-primary">Data Visualization:</span> Translated complex financial data into intuitive, human-centric dashboards that provided clarity and emotional security for users.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="md:order-2">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Technical Toolkit</h3>
              <div className="mb-10">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">AI-Augmented Strategy</h4>
                  <div className="flex flex-wrap gap-2">
                    {["UX Pilot (Workshop Facilitation & Requirements)", "ChatGPT", "Claude"].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Prototyping & Build</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Lovable.dev", "Cursor", "Google Antigravity", "React", "Tailwind CSS", "HTML/CSS"].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-secondary/30 border border-secondary/50 rounded-full text-sm text-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Design & Motion</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "FigJam", "Framer", "Adobe XD", "Midjourney (Storyboarding)"].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm text-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Research & Ops</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Jira", "Notion", "GA4", "Mixpanel", "Maze", "Accessibility Inspection (Axe)"].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gradient">Education & Certifications</h3>
              <ul className="space-y-2 text-muted-foreground mb-10">
                <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">• B.A. Business Communications & Graphic Design – Baruch College</li>
                <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">• UX Design Immersive – General Assembly (Best Project Award)</li>
                <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">• UX/UI Career Track – Springboard (Capstone: Mobile App)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-gradient">Languages</h3>
              <p className="text-muted-foreground">English (Native) • Spanish (Fluent)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
