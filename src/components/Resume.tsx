import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  return <section id="resume" className="section-padding px-6 relative">
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
          <h3 className="text-2xl font-semibold mb-4 text-gradient">Summary</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            UX strategist and product designer translating complex ideas into revenue-ready products. Known for rapid audits, plain-language IA, design systems, and AI-accelerated prototyping.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="md:order-1">
            <h3 className="text-xl font-semibold mb-4 text-gradient">Core Strengths</h3>
            <div className="space-y-3 text-muted-foreground mb-10">
              <p><span className="font-semibold text-primary">UX Leadership:</span> Heuristic analysis, conversion-focused IA, design systems, stakeholder alignment</p>
              <p><span className="font-semibold text-primary">Workflow & Delivery:</span> Rapid prototyping, experimentation mindset, accessibility (WCAG 2.2 AA), agile facilitation, AI-assisted delivery</p>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gradient">Experience</h3>
            <ul className="space-y-4 text-muted-foreground list-none">
              <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">
                <span className="font-semibold text-foreground">AI-Accelerated UX Systems Designer</span> <span className="text-sm opacity-70">| Freelance (Jul 2022 – Present)</span>
                <p className="text-sm mt-2 opacity-90">Leveraging AI tools to reduce delivery time by 40% while maintaining high fidelity. Specializing in rapid prototyping and design system scaling.</p>
              </li>
              <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">
                <span className="font-semibold text-foreground">UX Architect</span> <span className="text-sm opacity-70">| Americaneagle.com (Jun 2021 – Dec 2022)</span>
                <p className="text-sm mt-2 opacity-90">Led IA and UX strategy for enterprise clients, improving site navigation and user retention metrics.</p>
              </li>
              <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">
                <span className="font-semibold text-foreground">Senior Product Designer</span> <span className="text-sm opacity-70">| Trianz (Feb – Mar 2021)</span>
                <p className="text-sm mt-2 opacity-90">Contracted to rapidly conceptualize a high-volume donor management dashboard, streamlining complex data collection workflows for a major healthcare client.</p>
              </li>
              <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">
                <span className="font-semibold text-foreground">Product Designer & Developer</span> <span className="text-sm opacity-70">| FidemDD Financial (Aug 2020 – Jan 2021)</span>
                <p className="text-sm mt-2 opacity-90">End-to-end design and frontend implementation (React) for a financial services platform.</p>
              </li>
            </ul>
          </div>

          <div className="md:order-2">
            <h3 className="text-xl font-semibold mb-4 text-gradient">Toolbox (2026)</h3>
            <div className="mb-10">
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">Design & Prototyping</h4>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "FigJam", "Material Design 3", "Framer", "ProtoPie", "Rive", "Lottie"].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">Research & Testing</h4>
                <div className="flex flex-wrap gap-2">
                  {["Maze", "Dovetail", "Optimal Workshop", "Axe", "WAVE", "Stark"].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm text-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">Analytics & Experimentation</h4>
                <div className="flex flex-wrap gap-2">
                  {["GA4", "Hotjar", "Microsoft Clarity", "Amplitude", "Mixpanel", "A/B Testing"].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-secondary/30 border border-secondary/50 rounded-full text-sm text-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">Build & Handoff (UX ↔ Eng)</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML/CSS", "TypeScript", "React", "Storybook", "Git/GitHub", "Jira", "Confluence"].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">AI & Automation</h4>
                <div className="flex flex-wrap gap-2">
                  {["ChatGPT", "Claude", "Google AI Studio", "Google Antigravity", "Midjourney", "Relume", "Lovable"].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm text-foreground">
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
            <p className="text-muted-foreground">English (native) • Spanish (fluent)</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="default" onClick={() => window.open("https://docs.google.com/document/d/12v4tqv8C9uIPKq2hg3sb_k8sE8B1kXmOEmvZq2uQHcY/edit?tab=t.0", "_blank")} className="flex items-center gap-3 px-8 py-4 text-lg group">
            Download Full Resume
          </Button>
        </div>
      </div>
    </div>
  </section>;
};
export default Resume;
