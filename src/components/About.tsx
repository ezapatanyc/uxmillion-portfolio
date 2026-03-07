import { CheckCircle2, Users, BarChart3, HeartHandshake, Search, Minimize2, Layers, RefreshCw } from "lucide-react";
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

  return <section id="about" className="section-padding section-about">
    <div className="max-w-5xl mx-auto px-4 md:px-6">

      {/* Profile + About Card */}
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-10 items-center frosted-card p-6 md:p-8 py-8 md:py-12 rounded-xl about-card mx-[15px] md:mx-0">
        <div className="mx-auto relative">
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10, x: "-50%" }}
                animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, scale: 0.8, y: 10, x: "-50%" }}
                className="absolute -top-16 md:-top-20 left-1/2 z-[60] pointer-events-none"
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowBubble(true)}
            className="w-40 h-40 md:w-54 md:h-54 lg:w-68 lg:h-68 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20 relative cursor-pointer z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-10 pointer-events-none"></div>
            <img
              src="/uxmillion-uploads/profile-pic-2026.jpg"
              alt="Emiliano"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gradient md:text-3xl">Systems-focused product design</h3>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I'm a Product Designer with experience across startup and enterprise environments.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I specialize in turning messy ideas and workflow-heavy experiences into clearer product journeys through research, product thinking, rapid prototyping, and practical design execution.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              <span className="text-neon-cyan font-semibold">I'm especially drawn to products where one important part of the experience needs to work better</span> — onboarding, dashboards, internal tools, quote flows, request journeys, and other decision-heavy moments.
            </p>
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

    </div>
  </section>;
};
export default About;