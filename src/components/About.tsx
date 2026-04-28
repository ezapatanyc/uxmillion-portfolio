import { Search, Minimize2, Layers, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (showBubble) {
      const timer = setTimeout(() => setShowBubble(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showBubble]);

  const processSteps = [
    {
      icon: Search,
      title: "Understand",
      description: "Get clear on the goals, users, constraints, and where friction is showing up.",
    },
    {
      icon: Minimize2,
      title: "Simplify",
      description: "Identify the highest-impact issues and reduce unnecessary complexity.",
    },
    {
      icon: Layers,
      title: "Design",
      description: "Create flows and interfaces that feel clearer, faster, and easier to use.",
    },
    {
      icon: RefreshCw,
      title: "Validate",
      description: "Refine the direction so teams can move forward with confidence.",
    },
  ];

  const skillTags = [
    "Product Strategy",
    "Interaction Design",
    "Enterprise UX",
    "Visual Systems",
    "AI-Augmented Workflows",
  ];

  return <section id="about" className="section-padding section-about">
    <div className="max-w-5xl mx-auto px-4 md:px-6">

      {/* Profile + About Card */}
      <div className="about-card frosted-card rounded-2xl md:rounded-3xl overflow-hidden mx-[15px] md:mx-0">
        <div className="grid md:grid-cols-[auto_1fr] gap-0 items-start">
          
          {/* Left Column — Portrait */}
          <div className="relative flex items-start justify-center md:justify-start p-6 pb-2 md:p-8 md:pr-0">
            <AnimatePresence>
              {showBubble && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, scale: 0.8, y: 10, x: "-50%" }}
                  className="absolute -top-10 left-1/2 z-[60] pointer-events-none"
                  style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))' }}
                >
                  <div className="relative px-5 py-2.5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border-2 border-primary/50 shadow-[0_0_15px_rgba(78,214,255,0.3)]">
                    <span className="text-primary font-black text-xs md:text-sm whitespace-nowrap tracking-tight uppercase">
                      Check out my case studies above! ☝️
                    </span>
                    {/* Speech Bubble Arrow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900/95 border-r-2 border-b-2 border-primary/50 rotate-45"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowBubble(true)}
              className="about-portrait-wrapper cursor-pointer relative"
            >
              {/* Glow ring behind the portrait */}
              <div className="absolute -inset-[3px] rounded-[28px] md:rounded-[32px] bg-gradient-to-br from-[rgba(78,214,255,0.35)] via-[rgba(78,214,255,0.1)] to-[rgba(145,70,255,0.3)] blur-[2px] pointer-events-none" />
              
              <div className="about-portrait-frame relative overflow-hidden rounded-[24px] md:rounded-[28px]"
                style={{
                  border: '2px solid rgba(56, 189, 248, 0.25)',
                  boxShadow: '0 0 30px rgba(78, 214, 255, 0.12), 0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
              >
                <img
                  src="/uxmillion-uploads/profile-pic-2026.jpg"
                  alt="Emiliano Zapata — Product Designer"
                  className="about-portrait-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                  loading="lazy"
                />
                {/* Subtle overlay for cohesion with dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,15,26,0.15)] via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Right Column — Text Content */}
          <div className="flex flex-col justify-center p-6 pt-4 md:p-8 md:pt-9 md:pb-10 md:pl-8 lg:pl-10">
            {/* Micro-label */}
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary/60 mb-2.5 block">
              About Emiliano
            </span>

            <h3 className="text-2xl md:text-[1.7rem] lg:text-[1.85rem] font-black mb-5 text-gradient leading-[1.25]">
              Systems-focused product design<br className="hidden md:inline" /> with a human edge
            </h3>

            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed text-[0.95rem] md:text-base">
                I'm a Product Designer focused on turning complex workflows, messy ideas, and decision-heavy experiences into clear, polished product journeys.
              </p>
              <p className="text-muted-foreground leading-relaxed text-[0.95rem] md:text-base">
                My work combines research, interaction design, visual systems, and practical execution across startup and enterprise environments.
              </p>
              <p className="text-muted-foreground leading-relaxed text-[0.95rem] md:text-base">
                <span className="text-neon-cyan font-semibold">I'm especially drawn to products where one important part of the experience needs to work better</span>, including onboarding, dashboards, internal tools, quote flows, request journeys, and other moments where clarity affects trust, conversion, or team efficiency.
              </p>
              <p className="text-muted-foreground leading-relaxed text-[0.95rem] md:text-base">
                I also explore long-form publishing as a design and communication exercise. My first book, <em className="text-foreground/90 not-italic font-medium">Your First $10K Month as a Solo Consultant</em>, focuses on helping skilled professionals package their expertise into clearer offers, stronger client conversations, and more sustainable independent work.
              </p>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2.5 mt-6">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-200"
                  style={{
                    borderColor: 'rgba(78, 214, 255, 0.2)',
                    background: 'rgba(78, 214, 255, 0.06)',
                    color: 'rgba(78, 214, 255, 0.8)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* How I Work — Process Steps */}
      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl font-black text-gradient text-center mb-10">How I Work</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="frosted-card p-6 hover-lift rounded-xl text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-gradient mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Writing & Creative Experiments */}
      <div className="mt-20 md:mt-28 mb-8">
        <div className="text-center md:text-left mb-8 mx-[15px] md:mx-0">
          <h3 className="text-2xl md:text-3xl font-black text-gradient mb-4">Writing &amp; Creative Experiments</h3>
          <p className="text-muted-foreground leading-relaxed text-[0.95rem] md:text-base max-w-3xl">
            I’m also exploring long-form publishing as a design and communication exercise. My first book, <em className="text-foreground/90 not-italic font-medium">Your First $10K Month as a Solo Consultant</em>, focuses on packaging complex business ideas into a clear, practical reader experience.
          </p>
        </div>

        <div className="frosted-card rounded-2xl md:rounded-3xl overflow-hidden mx-[15px] md:mx-0">
          <div className="grid md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_320px] gap-8 p-6 md:p-8 lg:p-10 items-center">
            
            {/* Left Column — Text Content */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary/60 mb-2.5 block">
                Independent publishing experiment
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Your First $10K Month as a Solo Consultant
              </h4>
              <p className="text-muted-foreground leading-relaxed text-[0.95rem] mb-6">
                A practical guide for skilled professionals building toward independent consulting income through clearer offers, better client conversations, and more confident pricing.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Shipped a complete publishing project from concept to final manuscript",
                  "Designed the cover, positioning, and reader-facing presentation",
                  "Explored how metadata, visual hierarchy, and audience expectations shape content before someone even opens the book",
                  "Used the project as a practical exercise in clarity, structure, and product storytelling"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-[0.9rem] text-muted-foreground/90">
                    <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <a 
                  href="https://a.co/d/0bGv8yX7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors border border-primary/20"
                >
                  View on Amazon
                </a>
              </div>
            </div>

            {/* Right Column — Book Cover */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] aspect-[640/1024] rounded-md shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden bg-slate-800/50 flex items-center justify-center group">
                <img src="/books/your-first-10k-month-cover.jpg" alt="Book cover for Your First $10K Month as a Solo Consultant by Emiliano E. Zapata" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>;
};
export default About;