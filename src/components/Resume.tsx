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
  const skills = [{
    name: "UX Research",
    level: 95
  }, {
    name: "User Interface Design",
    level: 90
  }, {
    name: "Wireframing",
    level: 97
  }, {
    name: "Prototyping",
    level: 85
  }, {
    name: "Design Systems",
    level: 80
  }];
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
            UX strategist and product designer with experience translating complex ideas into revenue‑ready digital products. Known for rapid audits, plain‑language IA, and AI‑powered delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mobile layout adjusted - Core Strengths first, then Skills */}
          <div className="md:order-1">
            <h3 className="text-xl font-semibold mb-4 text-gradient">Core Strengths</h3>
            <div className="space-y-3 text-muted-foreground mb-10">
              <p><span className="font-semibold text-primary">UX leadership:</span> heuristics, research & testing, conversion‑focused IA, design systems</p>
              <p><span className="font-semibold text-primary">Workflow & delivery:</span> AI‑assisted prototyping, agile facilitation, accessibility (WCAG 2.2 AA)</p>
            </div>

            {/* Skills section moved up on mobile, kept in original position on desktop */}
            <div className="block md:hidden mb-10">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Skills</h3>
              <div className="mb-6">
                {skills.map((skill, index) => <SkillBar key={index} skill={skill.name} level={skill.level} />)}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gradient">Experience</h3>
            <ul className="space-y-4 text-muted-foreground list-none">
              <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">• <span className="font-semibold">AI-Accelerated UX Systems Designer</span> at Freelance (Jul 2022 – Present)</li>
              <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">• <span className="font-semibold">UX Architect</span> at Americaneagle.com (Jun 2021 – Dec 2022)</li>
              <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">• <span className="font-semibold">Senior Product Designer</span> at Trianz (Feb – Mar 2021)</li>
              <li className="frosted-card p-3 md:p-4 rounded-lg mb-2">• <span className="font-semibold">Product Designer & Developer</span> at FidemDD Financial Advice (Aug 2020 – Jan 2021)</li>
            </ul>
          </div>

          <div className="md:order-2">
            {/* Skills section hidden on mobile since it's moved above */}
            <div className="hidden md:block mb-10">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Skills</h3>
              <div className="mb-6">
                {skills.map((skill, index) => <SkillBar key={index} skill={skill.name} level={skill.level} />)}
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
