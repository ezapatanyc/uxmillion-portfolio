import { Timeline } from "@/components/ui/timeline";
import { CheckCircle2, Users, BarChart3, HeartHandshake } from "lucide-react";
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

  const timelineData = [{
    title: "Discover",
    content: <div className="frosted-card p-6 hover-lift">
      <div className="flex items-center mb-4">
        <img src="/uxmillion-uploads/53a70808-c38d-4122-a7f5-d006e5746b32.png" alt="Discover" className="h-12 w-12 object-contain mr-4" />
        <h4 className="text-lg font-semibold text-gradient">Research & Insights</h4>
      </div>
      <p className="text-muted-foreground mb-4">Understand users & opportunities through research and analysis.</p>
      <div className="text-sm text-primary">
        • User interviews & surveys<br />
        • Market & competitive analysis<br />
        • Stakeholder alignment sessions
      </div>
    </div>
  }, {
    title: "Define",
    content: <div className="frosted-card p-6 hover-lift">
      <div className="flex items-center mb-4">
        <img src="/uxmillion-uploads/312d9efb-fc8b-4b3f-b082-202ac9625681.png" alt="Define" className="h-12 w-12 object-contain mr-4" />
        <h4 className="text-lg font-semibold text-gradient">Strategy & Planning</h4>
      </div>
      <p className="text-muted-foreground mb-4">Turn insights into clear direction.</p>
      <div className="text-sm text-primary">
        • User personas & journey maps<br />
        • Information architecture<br />
        • Success metrics & KPIs
      </div>
    </div>
  }, {
    title: "Design",
    content: <div className="frosted-card p-6 hover-lift">
      <div className="flex items-center mb-4">
        <img src="/uxmillion-uploads/aa567325-e3e5-4297-b6bf-ef8eda239279.png" alt="Design" className="h-12 w-12 object-contain mr-4" />
        <h4 className="text-lg font-semibold text-gradient">Prototyping & Iteration</h4>
      </div>
      <p className="text-muted-foreground mb-4">Bring ideas to life with user-friendly solutions.</p>
      <div className="text-sm text-primary">
        • Wireframes & user flows<br />
        • Interactive prototypes<br />
        • Design system components
      </div>
    </div>
  }, {
    title: "Validate",
    content: <div className="frosted-card p-6 hover-lift">
      <div className="flex items-center mb-4">
        <img src="/uxmillion-uploads/131a64b6-8edc-43b8-b053-5a45b8119f8c.png" alt="Validate" className="h-12 w-12 object-contain mr-4" />
        <h4 className="text-lg font-semibold text-gradient">Testing & Refinement</h4>
      </div>
      <p className="text-muted-foreground mb-4">Refine with real feedback.</p>
      <div className="text-sm text-primary">
        • Usability testing sessions<br />
        • A/B testing & analytics<br />
        • Continuous user feedback
      </div>
    </div>
  }, {
    title: "Launch & Learn",
    content: <div className="frosted-card p-6 hover-lift">
      <div className="flex items-center mb-4">
        <img src="/uxmillion-uploads/a15b747c-bda1-4973-acca-b09c14f85a1c.png" alt="Launch & Learn" className="h-12 w-12 object-contain mr-4" />
        <h4 className="text-lg font-semibold text-gradient">Deploy & Optimize</h4>
      </div>
      <p className="text-muted-foreground mb-4">Ship and optimize continuously.</p>
      <div className="text-sm text-primary">
        • Launch strategy & rollout<br />
        • User onboarding flows<br />
        • Performance monitoring & optimization
      </div>
      <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <p className="text-sm italic text-foreground">
          "Great design isn't just about visuals, it's about creating experiences that genuinely resonate with users and drive meaningful business outcomes."
        </p>
      </div>
    </div>
  }];
  return <section id="about" className="section-padding section-about">
    <div className="max-w-5xl mx-auto px-4 md:px-6">


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
          <h3 className="text-xl font-semibold mb-4 text-gradient md:text-3xl">About</h3>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            <span className="text-neon-cyan font-semibold">10+ years delivering revenue-ready digital products.</span> I specialize in rapid prototyping, design systems, and AI-accelerated workflows that bridge the gap between design and development. Outside of design, I’m constantly experimenting with new creative tech.
          </p>

        </div>
      </div>

      <Timeline data={timelineData} />



    </div>
  </section>;
};
export default About;