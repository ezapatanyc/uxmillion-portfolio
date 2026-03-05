import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Check,
  Clock,
  DollarSign,
  Search,
  PenTool,
  TestTube,
  Rocket,
  Target,
  Sparkles,
  Play,
  ExternalLink,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CalendlyBooking from "@/components/CalendlyBooking";
import { AnimatedContainer, BgGradient, Hero, TextStagger } from "@/components/ui/hero-animated";
import SEOHead from "@/components/SEOHead";
import ThemeToggle from "@/components/ThemeToggle";
import ParticleSystem from "@/components/ParticleSystem";

/* ───────────────────────────────────────────────
   Engagement Card
   ─────────────────────────────────────────────── */
const EngagementCard = ({
  icon,
  title,
  subtitle,
  bestFor,
  timeline,
  deliverables,
  investment,
  investmentNote,
  ctaText,
  ctaAction,
  badge,
}: {
  icon: string;
  title: string;
  subtitle: string;
  bestFor: string;
  timeline: string;
  deliverables: string[];
  investment: string;
  investmentNote?: string;
  ctaText: string;
  ctaAction: () => void;
  badge?: string;
}) => {
  const titleId = `card-title-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <Card
      className="frosted-card group h-full flex flex-col items-start text-left relative overflow-visible transition-all duration-300 border border-border/10 hover-lift bg-transparent"
      role="region"
      aria-labelledby={titleId}
    >
      <CardHeader className="w-full pb-3 pt-8 px-6 relative z-10">
        <div className="flex flex-col gap-4 text-left items-start">
          <div className="flex items-center justify-between w-full">
            <div
              className="w-14 h-14 rounded-2xl bg-foreground/5 border border-border/10 flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-primary/30"
              aria-hidden="true"
            >
              <span className="text-3xl">{icon}</span>
            </div>
            {badge && (
              <Badge className="bg-primary/20 text-primary border-primary/30 font-black px-3 py-1 text-[10px] uppercase tracking-widest rounded-full h-fit">
                {badge}
              </Badge>
            )}
          </div>

          <div className="space-y-1">
            <CardTitle id={titleId} className="text-2xl font-black text-gradient">
              {title}
            </CardTitle>
            <p className="text-sm font-semibold text-foreground/60 italic">{subtitle}</p>
          </div>

          {/* Best For */}
          <div className="p-4 rounded-xl bg-foreground/5 border border-border/5 text-sm leading-relaxed w-full">
            <span className="font-black text-[11px] text-primary uppercase tracking-[0.1em] mr-2">
              Best for
            </span>
            <span className="text-muted-foreground font-medium">{bestFor}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="w-full flex-1 flex flex-col items-start text-left px-6 pb-8 relative z-10">
        <div className="w-full my-3 border-t border-border/5" />

        {/* Timeline */}
        <div className="flex items-center gap-2 mb-5 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-primary/60" />
          <span className="font-semibold">{timeline}</span>
        </div>

        {/* Deliverables */}
        <div className="mb-3">
          <span className="font-black text-[10px] text-primary uppercase tracking-[0.15em]">
            You'll get
          </span>
        </div>
        <ul className="w-full space-y-3 mb-8 flex-1">
          {deliverables.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm font-medium leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors"
            >
              <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" strokeWidth={3} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Investment */}
        <div className="w-full mb-8 p-4 rounded-xl bg-foreground/5 border border-border/5">
          <div className="text-[10px] font-black text-primary uppercase tracking-[0.15em] mb-1 flex items-center gap-1.5">
            <DollarSign className="w-3 h-3" />
            Investment
          </div>
          <div className="text-sm font-bold text-foreground/80">{investment}</div>
          {investmentNote && (
            <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              {investmentNote}
            </div>
          )}
        </div>

        <div className="mt-auto w-full">
          <Button
            onClick={ctaAction}
            variant="default"
            size="lg"
            className="w-full font-bold rounded-full active:scale-[0.98] transition-all"
          >
            {ctaText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

/* ───────────────────────────────────────────────
   Process Step
   ─────────────────────────────────────────────── */
const ProcessStep = ({
  icon: Icon,
  title,
  description,
  step,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  step: number;
}) => (
  <div className="group relative flex flex-col items-center text-center p-6 rounded-2xl frosted-card border border-border/10 hover-lift bg-transparent transition-all duration-300">
    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-black text-primary">
      {step}
    </div>
    <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-border/10 flex items-center justify-center mb-4 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-lg font-black text-gradient mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

/* ───────────────────────────────────────────────
   Main Page
   ─────────────────────────────────────────────── */
const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.type = "text/javascript";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/ezapata-nyc/call-meeting?hide_event_type_details=1&hide_gdpr_banner=1",
      });
    } else {
      window.open("mailto:ezapata.nyc@gmail.com?subject=Discovery Call Request", "_blank");
    }
  };

  /* ── Data ── */

  const engagements = [
    {
      icon: "🔍",
      title: "UX Audit Sprint",
      subtitle: "fast clarity",
      bestFor: "Teams with an existing product that needs clear, prioritized fixes.",
      timeline: "5–7 days",
      deliverables: [
        "Annotated findings (screenshots + notes)",
        "Prioritized fix list (high / med / low impact)",
        "UX recommendations + quick wireframe concepts (1–2 key areas)",
        'A "next 2 weeks" action plan for design + dev',
      ],
      investment: "Starts at $1,500",
      investmentNote: "Most audits land $2,500–$3,500 depending on scope.",
      ctaText: "Book a 15-min fit call",
      ctaAction: openCalendlyPopup,
    },
    {
      icon: "🎨",
      title: "MVP Design Sprint",
      subtitle: "launch what matters",
      bestFor: "Founders building an MVP or teams validating a new workflow.",
      timeline: "2–4 weeks",
      deliverables: [
        "User flow(s) + key screens mapped",
        "Wireframes → high-fidelity UI for core journey",
        "Clickable prototype for review / testing",
        "Handoff-ready specs (states, behaviors, responsive notes)",
      ],
      investment: "Typically $5K–$10K",
      investmentNote: "Depends on # of flows / screens.",
      ctaText: "Start your MVP",
      ctaAction: openCalendlyPopup,
      badge: "Most Popular",
    },
    {
      icon: "🔄",
      title: "Product UX Overhaul",
      subtitle: "scale the system",
      bestFor: "Growing products that need stronger foundations and cleaner workflows.",
      timeline: "4–8 weeks",
      deliverables: [
        "Discovery + workflow diagnosis",
        "Redesign of key journeys (navigation, onboarding, core tasks)",
        "Component / pattern foundation (design system starter)",
        "Iteration plan + rollout guidance",
      ],
      investment: "Starts at $15K+",
      investmentNote: "Scope-based.",
      ctaText: "Plan your overhaul",
      ctaAction: openCalendlyPopup,
    },
  ];

  const problemsSolved = [
    { text: "Simplify complex workflows", detail: "reduce steps, confusion, and drop-offs" },
    { text: "Improve usability + conversion", detail: "clearer paths, fewer dead ends" },
    { text: "Create scalable UX systems", detail: "patterns, components, consistent behavior" },
    { text: "Validate direction before building", detail: "so you don't ship guesswork" },
  ];

  const addOns = [
    { name: "Dev-ready handoff pack", price: "+$500", detail: "interaction notes, component states, redlines, acceptance checklist" },
    { name: "User testing lite", price: "+$750", detail: "3–5 sessions + findings summary" },
    { name: "Copy polish", price: "+$300", detail: "improve clarity + scannability for key screens" },
    { name: "Analytics / metrics setup guidance", price: "+$300", detail: "what to track + how to interpret" },
  ];

  const processSteps = [
    { icon: Search, title: "Discover", description: "Align on goals, users, constraints." },
    { icon: Target, title: "Define", description: "Pick the highest-impact problems to solve first." },
    { icon: PenTool, title: "Design", description: "Workflows + UI built for clarity and speed." },
    { icon: TestTube, title: "Test", description: "Validate quickly, reduce risk." },
    { icon: Rocket, title: "Ship", description: "Specs that devs can actually implement." },
  ];

  const notAFit = [
    "You want unlimited revisions without scope control",
    "You need full brand strategy or logo design as the main deliverable",
    'You\'re looking for "pretty UI" without addressing product clarity / workflows',
  ];

  return (
    <>
      <SEOHead
        title="UX Design Services"
        description="I help startups and product teams turn complex ideas into clear, usable products. Systems-focused product design for complex workflows, MVPs, and product overhauls."
        path="/services"
      />
      <div className="min-h-screen bg-theme-bg900 text-theme-body font-inter exact-hero-gradient relative">
        <div className="stars"></div>
        <ParticleSystem className="absolute inset-0 z-0 pointer-events-none" />

        {/* ── Header ── */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => {
                navigate("/");
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
              }}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>

            <ThemeToggle />

            <nav className="hidden md:flex items-center gap-6">
              <a href="#engagements" className="text-muted-foreground hover:text-foreground transition-colors">Engagements</a>
              <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Process</a>
              <Button
                onClick={openCalendlyPopup}
                variant="default"
                size="lg"
                className="flex items-center gap-3 font-bold rounded-full"
              >
                Book a Fit Call
              </Button>
            </nav>
          </div>
        </header>

        {/* ══════════════════════════════════════════════
            HERO
           ══════════════════════════════════════════════ */}
        <Hero className="pt-16 pb-12 px-6 text-center space-y-4 relative z-10 min-h-0">
          <BgGradient gradientColors="purple" gradientSize="lg" className="opacity-20" />
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest">
              Services
            </Badge>

            <h1
              className="mb-6 font-black tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: "1.15" }}
            >
              <TextStagger
                text="UX Design Services"
                as="span"
                direction="domino"
                stagger={0.02}
                className="inline-block text-primary"
              />
            </h1>

            <div className="animate-fade-in animation-delay-200 space-y-5 max-w-2xl mx-auto">
              <p className="text-foreground/80 font-normal leading-relaxed" style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}>
                I help startups and product teams turn complex ideas into clear, usable products.
              </p>
              <p className="text-muted-foreground font-normal leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
                I'm a systems-focused Product Designer. I specialize in simplifying multi-step workflows — configuration, quoting, onboarding, dashboards — and shipping design that's ready for development, fast.
              </p>

              {/* Best-fit + CTA chips */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <div className="px-5 py-2.5 rounded-full bg-foreground/5 border border-border/10 text-sm font-medium text-foreground/70">
                  <span className="font-black text-primary mr-1.5">Best fit:</span>
                  complex products · fast iteration · clarity + momentum
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={openCalendlyPopup}
                  variant="default"
                  size="lg"
                  className="font-bold rounded-full px-10 active:scale-[0.98] transition-all text-base"
                >
                  Book a 15-min Fit Call
                </Button>
              </div>
            </div>
          </div>
        </Hero>

        {/* ══════════════════════════════════════════════
            WHAT I HELP TEAMS SOLVE
           ══════════════════════════════════════════════ */}
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedContainer transition={{ delay: 0.1 }}>
              <div className="frosted-card border border-border/10 p-8 md:p-12 rounded-2xl bg-transparent">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gradient mb-6">
                  What I Help Teams Solve
                </h2>
                <p className="text-foreground/70 mb-2 leading-relaxed">
                  Most teams don't struggle because of bad ideas.
                </p>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  They struggle because the product experience gets harder to understand as features grow.
                </p>
                <p className="text-foreground/80 font-semibold mb-5">I help teams:</p>
                <ul className="space-y-4 mb-8">
                  {problemsSolved.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <Sparkles className="w-4 h-4 mt-1 text-primary shrink-0" />
                      <span>
                        <span className="font-bold">{item.text}</span>
                        <span className="text-muted-foreground font-normal"> — {item.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            ENGAGEMENT OPTIONS
           ══════════════════════════════════════════════ */}
        <section id="engagements" className="py-20 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest">
                Engagement Options
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gradient mb-4">
                Choose how we work together
              </h2>
              <p className="text-lg text-foreground/70 max-w-xl mx-auto font-medium">
                Each engagement is tailored to your product stage and goals.
              </p>
            </div>

            <AnimatedContainer transition={{ delay: 0.15 }}>
              <div className="grid md:grid-cols-3 gap-8">
                {engagements.map((engagement, index) => (
                  <EngagementCard key={index} {...engagement} />
                ))}
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            LOW-FRICTION OPTION — UX STARTER PACK
           ══════════════════════════════════════════════ */}
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedContainer transition={{ delay: 0.2 }}>
              <div className="frosted-card border border-border/10 p-8 md:p-12 rounded-2xl bg-transparent relative overflow-hidden">
                {/* Subtle accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Left — Info */}
                  <div className="flex-1">
                    <Badge className="mb-4 bg-foreground/5 text-foreground/60 border-border/10 px-3 py-1 text-[10px] uppercase tracking-widest rounded-full font-black">
                      Low-Friction Option
                    </Badge>
                    <h3 className="text-2xl font-black text-gradient mb-1">UX Starter Pack</h3>
                    <p className="text-sm italic text-foreground/50 mb-4">one page, quick wins</p>

                    <div className="p-3 rounded-xl bg-foreground/5 border border-border/5 text-sm leading-relaxed mb-5">
                      <span className="font-black text-[11px] text-primary uppercase tracking-[0.1em] mr-2">Best for</span>
                      <span className="text-muted-foreground font-medium">Landing pages or one critical screen that needs immediate improvement.</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary/60" />
                      <span className="font-semibold">3 days</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {[
                        "Quick audit + prioritized improvements",
                        "Revised wireframe or layout concept",
                        "Lightweight implementation notes",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                          <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" strokeWidth={3} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right — Pricing + CTA */}
                  <div className="md:w-64 flex flex-col items-center md:items-start gap-4 md:pt-14">
                    <div className="w-full p-4 rounded-xl bg-foreground/5 border border-border/5 text-center md:text-left">
                      <div className="text-[10px] font-black text-primary uppercase tracking-[0.15em] mb-1 flex items-center gap-1.5 justify-center md:justify-start">
                        <DollarSign className="w-3 h-3" /> Investment
                      </div>
                      <div className="text-2xl font-black text-foreground/90">$345</div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed text-center md:text-left">
                      Upgrade to a larger engagement within 14 days and I'll credit this cost toward your next package.
                    </p>
                    <Button
                      onClick={openCalendlyPopup}
                      variant="default"
                      size="lg"
                      className="w-full font-bold rounded-full active:scale-[0.98] transition-all"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            ADD-ONS
           ══════════════════════════════════════════════ */}
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedContainer transition={{ delay: 0.22 }}>
              <div className="frosted-card border border-border/10 p-8 md:p-12 rounded-2xl bg-transparent">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-gradient mb-2">Add-ons</h3>
                  <p className="text-sm text-muted-foreground">Optional extras for any engagement.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {addOns.map((addon, index) => (
                    <div
                      key={index}
                      className="group p-5 rounded-xl bg-foreground/5 border border-border/5 hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-foreground/90 text-sm">{addon.name}</span>
                        <Badge className="bg-primary/10 text-primary border-primary/20 font-black text-xs px-2.5 py-0.5 rounded-full">
                          {addon.price}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{addon.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            HOW I WORK (PROCESS)
           ══════════════════════════════════════════════ */}
        <section id="process" className="py-20 px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest">
                Process
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gradient mb-4">
                How I Work
              </h2>
            </div>

            <AnimatedContainer transition={{ delay: 0.25 }}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {processSteps.map((step, index) => (
                  <ProcessStep key={index} {...step} step={index + 1} />
                ))}
              </div>

              {/* Availability note */}
              <div className="text-center mt-10">
                <p className="text-foreground/60 text-sm">
                  I typically work with <span className="font-bold text-foreground/80">1–2 clients at a time</span> to keep turnaround fast and collaboration tight.
                </p>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            PROOF — SOCIAL PROOF / LINKS
           ══════════════════════════════════════════════ */}
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedContainer transition={{ delay: 0.28 }}>
              <div className="frosted-card border border-border/10 p-8 md:p-12 rounded-2xl bg-transparent">
                <h3 className="text-2xl font-black text-gradient mb-6 text-center">See the Work</h3>
                <div className="space-y-4">
                  <a
                    href="/projects/railbuild"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-foreground/5 border border-border/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-foreground/90 text-sm">Complex workflow case study — RailBuild</span>
                      <p className="text-xs text-muted-foreground mt-0.5">Construction procurement designed for clarity</p>
                    </div>
                  </a>

                  <a
                    href="/#work"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-foreground/5 border border-border/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-foreground/90 text-sm">Browse the full portfolio</span>
                      <p className="text-xs text-muted-foreground mt-0.5">uxmillion.com/projects</p>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            NOT A FIT
           ══════════════════════════════════════════════ */}
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedContainer transition={{ delay: 0.3 }}>
              <div className="frosted-card border border-border/10 p-8 md:p-10 rounded-2xl bg-transparent">
                <h3 className="text-xl font-black text-foreground/70 mb-5">Not a fit if…</h3>
                <ul className="space-y-3">
                  {notAFit.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <X className="w-4 h-4 mt-0.5 text-red-400/60 shrink-0" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FINAL CTA
           ══════════════════════════════════════════════ */}
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedContainer transition={{ delay: 0.32 }}>
              <div className="frosted-card border border-border/10 p-8 md:p-14 rounded-2xl bg-transparent">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gradient mb-4">
                  Let's Talk
                </h2>
                <p className="text-foreground/70 mb-8 leading-relaxed max-w-lg mx-auto">
                  Book a quick 15-minute call to see if we're a good fit. No pitch, no pressure — just a conversation about your product.
                </p>
                <Button
                  onClick={openCalendlyPopup}
                  variant="default"
                  size="lg"
                  className="font-bold rounded-full px-10 active:scale-[0.98] transition-all text-base"
                >
                  Book a 15-min Fit Call
                </Button>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* Calendly Booking Section */}
        <CalendlyBooking />
      </div>
    </>
  );
};

export default Services;

declare global {
  interface Window {
    Calendly: any;
  }
}
