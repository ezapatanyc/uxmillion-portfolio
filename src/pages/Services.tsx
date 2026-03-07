import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Check,
  Clock,
  DollarSign,
  ExternalLink,
  Play,
  Sparkles,
  X,
  Users,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback, lazy, Suspense } from "react";
import CalendlyBooking from "@/components/CalendlyBooking";
import { AnimatedContainer, BgGradient, Hero, TextStagger } from "@/components/ui/hero-animated";
import SEOHead from "@/components/SEOHead";
import ThemeToggle from "@/components/ThemeToggle";

// Lazy-load the heavy canvas particle system — not needed for first paint
const ParticleSystem = lazy(() => import("@/components/ParticleSystem"));

/* ───────────────────────────────────────────────
   Static data — hoisted outside the component
   so arrays are NOT recreated on every render
   ─────────────────────────────────────────────── */

const ENGAGEMENTS_DATA = [
  {
    icon: "🔍",
    title: "Product Clarity Sprint",
    subtitle: "diagnose what's not working",
    bestFor:
      "Existing products with friction, drop-off, confusing flows, or too many competing ideas in one important area.",
    deliverables: [
      "UX review of one selected product area or workflow",
      "Annotated findings and friction points",
      "Prioritized recommendations",
      "Redesign direction for one key moment",
      "A practical next-step plan",
    ],
    timeline: "1 week",
    collaborationStyle: "Mostly async, with 1 kickoff and 1 review call",
    investment: "Starting at $2,500",
    ctaText: "Book a 15-minute Fit Call",
  },
  {
    icon: "🚀",
    title: "Core Flow Design Sprint",
    subtitle: "design one high-impact journey",
    bestFor:
      "Founders or teams who need one high-impact flow designed clearly enough to test, present, or hand off for development.",
    examples:
      "Onboarding, quote requests, sign-up, booking, dashboard entry, or another conversion-critical journey.",
    deliverables: [
      "User flow for the selected journey",
      "Wireframes for key screens",
      "Polished high-fidelity UI",
      "Clickable prototype",
      "Handoff-ready design notes",
    ],
    timeline: "2–3 weeks",
    collaborationStyle: "1 kickoff, async check-ins, 1 final review",
    investment: "Starting at $5,000",
    ctaText: "Book a 15-minute Fit Call",
    badge: "Most Popular",
  },
  {
    icon: "🧭",
    title: "Strategic UX Sprint",
    subtitle: "product direction + selected redesign",
    bestFor:
      "Products with growing complexity that need stronger workflow structure, clearer prioritization, and improvement in a few high-impact moments.",
    deliverables: [
      "Workflow diagnosis and priority mapping",
      "Redesign of selected high-impact moments",
      "UX structure recommendations",
      "Pattern or component guidance",
      "Implementation direction for next steps",
    ],
    timeline: "3–4 weeks",
    collaborationStyle:
      "Limited, structured touchpoints with async collaboration between reviews",
    investment: "Starting at $7,500",
    ctaText: "Book a 15-minute Fit Call",
  },
] as const;

const WHAT_I_HELP_WITH = [
  { text: "Simplifying a confusing onboarding flow" },
  { text: "Improving a quote or request journey" },
  { text: "Making a dashboard easier to understand" },
  { text: "Shaping an MVP around the core experience" },
  { text: "Creating clearer structure before a product grows further" },
] as const;

const MINI_REVIEW_DELIVERABLES = [
  "Quick diagnostic review",
  "Top recommendations",
  "One revised direction or layout suggestion",
] as const;

const BEST_FIT_SIGNALS = [
  "Founders who need clarity fast",
  "Teams with one high-impact flow to improve",
  "Products with workflow-heavy moments that need simplification",
  "Teams comfortable with focused, async collaboration",
  "Startups that want thoughtful design without a bloated process",
] as const;

const NOT_A_FIT = [
  "You need daily design support",
  "You want an open-ended retainer",
  "You expect unlimited revisions",
  "You need a full product redesign all at once",
  "Your project requires an agency-sized delivery model",
] as const;

/* ───────────────────────────────────────────────
   Engagement Card
   ─────────────────────────────────────────────── */
const EngagementCard = ({
  icon,
  title,
  subtitle,
  bestFor,
  examples,
  timeline,
  collaborationStyle,
  deliverables,
  investment,
  ctaText,
  ctaAction,
  badge,
}: {
  icon: string;
  title: string;
  subtitle: string;
  bestFor: string;
  examples?: string;
  timeline: string;
  collaborationStyle: string;
  deliverables: readonly string[];
  investment: string;
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
            {examples && (
              <p className="text-muted-foreground/70 text-xs mt-2 leading-relaxed italic">
                {examples}
              </p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="w-full flex-1 flex flex-col items-start text-left px-6 pb-8 relative z-10">
        <div className="w-full my-3 border-t border-border/5" />

        {/* Timeline + Collaboration */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary/60" />
            <span className="font-semibold">{timeline}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
            <span className="font-medium text-xs leading-relaxed">{collaborationStyle}</span>
          </div>
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
   Main Page
   ─────────────────────────────────────────────── */
const Services = () => {
  const navigate = useNavigate();

  // Load Calendly assets once
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

  // Stable callback
  const openCalendlyPopup = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/ezapata-nyc/call-meeting?hide_event_type_details=1&hide_gdpr_banner=1",
      });
    } else {
      window.open("mailto:ezapata.nyc@gmail.com?subject=Fit Call Request", "_blank");
    }
  }, []);

  return (
    <>
      <SEOHead
        title="Focused Product Design Sprints for High-Impact Workflows"
        description="I help startups and product teams improve important parts of the product experience through focused, well-scoped design sprints. Sprint-based UX consulting for onboarding flows, dashboards, quote flows, and workflow-heavy products."
        path="/services"
      />
      <div className="min-h-screen bg-theme-bg900 text-theme-body font-inter exact-hero-gradient relative">
        <div className="stars"></div>
        {/* Lazy-loaded particle canvas — won't block first paint */}
        <Suspense fallback={null}>
          <ParticleSystem className="absolute inset-0 z-0 pointer-events-none" />
        </Suspense>

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
              <a href="#how-i-work" className="text-muted-foreground hover:text-foreground transition-colors">How I Work</a>
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
              Sprint-Based Product Design
            </Badge>

            <h1
              className="mb-6 font-black tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", lineHeight: "1.15" }}
            >
              <TextStagger
                text="Focused Product Design Sprints for High-Impact Workflows"
                as="span"
                direction="domino"
                stagger={0.02}
                className="inline-block text-primary"
              />
            </h1>

            <div className="animate-fade-in animation-delay-200 space-y-5 max-w-2xl mx-auto">
              <p className="text-foreground/80 font-normal leading-relaxed" style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}>
                I help startups and product teams improve important parts of the product experience through focused, well-scoped design sprints.
              </p>
              <p className="text-muted-foreground font-normal leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
                My work is best suited for onboarding, dashboards, quote flows, configuration journeys, request flows, internal tools, and other workflow-heavy moments that need more clarity.
              </p>
              <p className="text-muted-foreground/80 font-medium leading-relaxed text-sm">
                I work in a focused, sprint-based model and take on a limited number of engagements at a time.
              </p>

              <div className="pt-4">
                <Button
                  onClick={openCalendlyPopup}
                  variant="default"
                  size="lg"
                  className="font-bold rounded-full px-10 active:scale-[0.98] transition-all text-base"
                >
                  Book a 15-minute Fit Call
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
                  What I Help With
                </h2>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  I work best when a team needs to improve one important product area, clarify a key user journey, or reduce friction in a workflow that is slowing momentum.
                </p>
                <p className="text-foreground/80 font-semibold mb-5">That might mean:</p>
                <ul className="space-y-4 mb-6">
                  {WHAT_I_HELP_WITH.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <Sparkles className="w-4 h-4 mt-1 text-primary shrink-0" />
                      <span className="font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-foreground/70 leading-relaxed border-t border-border/10 pt-6 mt-2">
                  The goal is not just better-looking screens.{" "}
                  <span className="font-bold text-foreground/90">The goal is a product that makes more sense where it matters most.</span>
                </p>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            HOW I WORK
           ══════════════════════════════════════════════ */}
        <section id="how-i-work" className="py-16 px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedContainer transition={{ delay: 0.13 }}>
              <div className="frosted-card border border-border/10 p-8 md:p-12 rounded-2xl bg-transparent">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gradient mb-6">
                  How I Work
                </h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  I work best with teams that value:
                </p>
                <ul className="space-y-3 mb-6">
                  {["Clear scope", "Focused feedback", "Async collaboration", "Fast decision-making"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                      <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" strokeWidth={3} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-foreground/70 leading-relaxed">
                  Most engagements are intentionally structured to minimize meeting time and maximize progress.
                </p>
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
                Each engagement is intentionally scoped to your product stage and goals.
              </p>
            </div>

            <AnimatedContainer transition={{ delay: 0.15 }}>
              <div className="grid md:grid-cols-3 gap-8">
                {ENGAGEMENTS_DATA.map((engagement, index) => (
                  <EngagementCard key={index} {...engagement} ctaAction={openCalendlyPopup} />
                ))}
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            MINI UX REVIEW — Smaller Entry Point
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
                      Smaller Entry Point
                    </Badge>
                    <h3 className="text-2xl font-black text-gradient mb-1">Mini UX Review</h3>
                    <p className="text-sm italic text-foreground/50 mb-4">one screen, fast improvement</p>

                    <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                      A lightweight review for one important page or screen. This works well for landing pages, sign-up screens, quote steps, or one conversion-critical moment that needs fast improvement.
                    </p>

                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary/60" />
                      <span className="font-semibold">2–3 business days</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {MINI_REVIEW_DELIVERABLES.map((item, idx) => (
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
                      <div className="text-2xl font-black text-foreground/90">Starting at $500</div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed text-center md:text-left">
                      If we continue into a larger sprint, this can be credited toward the next engagement.
                    </p>
                    <Button
                      onClick={openCalendlyPopup}
                      variant="default"
                      size="lg"
                      className="w-full font-bold rounded-full active:scale-[0.98] transition-all"
                    >
                      Book a 15-minute Fit Call
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            BEST FIT + NOT A FIT
           ══════════════════════════════════════════════ */}
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedContainer transition={{ delay: 0.25 }}>
              <div className="frosted-card border border-border/10 p-8 md:p-10 rounded-2xl bg-transparent">
                <h3 className="text-xl font-black text-gradient mb-5">I'm usually a strong fit for…</h3>
                <ul className="space-y-3 mb-8">
                  {BEST_FIT_SIGNALS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                      <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border/10 pt-6">
                  <h3 className="text-xl font-black text-foreground/70 mb-5">Not a fit if…</h3>
                  <ul className="space-y-3">
                    {NOT_A_FIT.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <X className="w-4 h-4 mt-0.5 text-red-400/60 shrink-0" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            WHAT TO EXPECT
           ══════════════════════════════════════════════ */}
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedContainer transition={{ delay: 0.27 }}>
              <div className="frosted-card border border-border/10 p-8 md:p-12 rounded-2xl bg-transparent">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gradient mb-6">
                  What to Expect
                </h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Every engagement is intentionally scoped.
                </p>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  That means clear goals, clear boundaries, and a realistic path to progress. I do my best work when I can focus on a meaningful product problem, solve it thoughtfully, and give teams something they can actually move forward with.
                </p>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  Because of that, I take on a limited number of projects at a time.
                </p>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            PROOF
           ══════════════════════════════════════════════ */}
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedContainer transition={{ delay: 0.28 }}>
              <div className="frosted-card border border-border/10 p-8 md:p-12 rounded-2xl bg-transparent">
                <h3 className="text-2xl font-black text-gradient mb-3 text-center">Proof</h3>
                <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
                  Recent work includes workflow-heavy product experiences, configuration and quote-request flows, responsive product design, and systems-focused UX thinking across startup environments.
                </p>
                <div className="space-y-4">
                  <a
                    href="/projects/railbuild"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-foreground/5 border border-border/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-foreground/90 text-sm">View selected work</span>
                      <p className="text-xs text-muted-foreground mt-0.5">Case study: RailBuild</p>
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
                      <span className="font-bold text-foreground/90 text-sm">Explore case studies</span>
                      <p className="text-xs text-muted-foreground mt-0.5">uxmillion.com/projects</p>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FINAL CTA — LET'S TALK
           ══════════════════════════════════════════════ */}
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedContainer transition={{ delay: 0.32 }}>
              <div className="frosted-card border border-border/10 p-8 md:p-14 rounded-2xl bg-transparent">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gradient mb-4">
                  Let's Talk
                </h2>
                <p className="text-foreground/70 mb-8 leading-relaxed max-w-lg mx-auto">
                  If you have a product area that feels confusing, overloaded, or harder to use than it should be, send me the link or a few screenshots. I can usually tell pretty quickly where the friction is and whether there's a good sprint fit.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    onClick={openCalendlyPopup}
                    variant="default"
                    size="lg"
                    className="font-bold rounded-full px-10 active:scale-[0.98] transition-all text-base"
                  >
                    Book a 15-minute Fit Call
                  </Button>
                  <a
                    href="mailto:ezapata.nyc@gmail.com"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    ezapata.nyc@gmail.com
                  </a>
                </div>
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
