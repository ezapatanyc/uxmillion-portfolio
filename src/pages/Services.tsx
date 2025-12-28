import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CalendlyBooking from "@/components/CalendlyBooking";
import { AnimatedContainer, BgGradient, Hero, TextStagger } from "@/components/ui/hero-animated";
import SEOHead from "@/components/SEOHead";
import ThemeToggle from "@/components/ThemeToggle";
const ServiceCard = ({
  icon,
  title,
  tagline,
  bestFor,
  bullets,
  timelinePrice,
  ctaText,
  ctaAction,
  badge
}: {
  icon: string;
  title: string;
  tagline: string;
  bestFor: string;
  bullets: string[];
  timelinePrice: string;
  ctaText: string;
  ctaAction: () => void;
  badge?: string;
}) => <Card className="frosted-card group hover-lift h-full flex flex-col relative overflow-hidden border-primary/10 transition-all duration-500 hover:border-primary/30">
    {badge && (
      <Badge className="absolute top-4 right-4 z-10 bg-neon-cyan/90 text-black font-extrabold px-3 py-1 shadow-[0_0_15px_rgba(78,214,255,0.5)] ring-1 ring-white/20 animate-pulse-slow">
        {badge}
      </Badge>
    )}

    {/* Subtle background glow effect using a pseudo-element logic via absolute div */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />

    <CardHeader className="pb-6 pt-8 px-8 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/20 flex items-center justify-center text-2xl shadow-inner backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
          <span role="img" aria-label="icon">{icon}</span>
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
      </div>

      <div className="space-y-4">
        <p className="text-lg leading-relaxed font-semibold text-foreground/90 group-hover:text-primary transition-colors duration-300">
          {tagline}
        </p>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 text-xs font-medium text-muted-foreground">
          <span className="uppercase tracking-wider text-[10px] font-bold text-primary/70">Best For</span>
          <span>{bestFor}</span>
        </div>
      </div>
    </CardHeader>

    <CardContent className="flex-1 flex flex-col px-8 pb-8 relative z-10">
      <div className="my-6 border-t border-border/40" />

      <ul className="space-y-4 mb-8">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            <div className="mt-1 p-0.5 rounded-full bg-primary/10 text-primary shrink-0">
              <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-4">
        <div className="flex flex-col gap-1 p-4 rounded-xl bg-secondary/30 border border-border/30 backdrop-blur-sm">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Est. Timeline & Investment</div>
          <div className="text-sm font-semibold text-foreground">{timelinePrice}</div>
        </div>

        <Button
          onClick={ctaAction}
          className="w-full h-12 text-base bg-gradient-to-r from-neon-cyan to-primary text-black font-bold hover:brightness-110 active:scale-[0.98] transition-all duration-200 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40"
        >
          {ctaText}
        </Button>
      </div>
    </CardContent>
  </Card>;
const Services = () => {
  const navigate = useNavigate();

  // Load Calendly scripts
  useEffect(() => {
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.type = 'text/javascript';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/ezapata-nyc/call-meeting?hide_event_type_details=1&hide_gdpr_banner=1'
      });
    } else {
      window.open('mailto:ezapata.nyc@gmail.com?subject=Discovery Call Request', '_blank');
    }
  };
  const services = [{
    icon: "🚀",
    title: "UX Starter Pack",
    tagline: "Fix the one page that's costing you money.",
    bestFor: "Landing, signup, or checkout that isn't pulling its weight.",
    bullets: [
      "Immediate wins: 3–5 fixes that stop drop‑offs now.",
      "No guesswork: 30‑min walkthrough so you know exactly what to do next.",
      "Low risk, high return: Tiny spend → visible lift."
    ],
    timelinePrice: "3 business days · Starts at $345",
    ctaText: "Book a 15‑min fit call",
    ctaAction: openCalendlyPopup
  }, {
    icon: "🎨",
    title: "MVP UX Package",
    tagline: "Get something people can click—and love—fast.",
    bestFor: "Early products, investor demos, pilot launches.",
    bullets: [
      "See it now: Wireframes for 3–5 key screens + hi‑fi clickable demo.",
      "Proof beats opinion: 3–5 user tests with a simple \"do this next\" report.",
      "Save dev time: Validate flow before you touch code."
    ],
    timelinePrice: "≈2 weeks · Typically $2k–$3.5k · Custom quote after call",
    ctaText: "Book a 15‑min fit call",
    ctaAction: openCalendlyPopup,
    badge: "Most Chosen"
  }, {
    icon: "🔄",
    title: "Full UX Overhaul",
    tagline: "Redesign for scale—so growth doesn't break your product.",
    bestFor: "SaaS/e‑com teams fixing churn, confusion, or \"Frankenstein\" UX.",
    bullets: [
      "Confidence from research: Personas + journeys tied to goals.",
      "Speed with consistency: Clean IA + lightweight design system.",
      "Less risk, more clarity: Interactive prototypes + 2 revision rounds."
    ],
    timelinePrice: "4–6 weeks · Typically $6k–$12k · Tailored to your needs",
    ctaText: "Book a 15‑min strategy call",
    ctaAction: openCalendlyPopup
  }];
  const addOnServices = [
    "Dev-ready specs (+$500)",
    "Upgrade credit (Starter → MVP/Overhaul within 14 days)",
    "60-sec Loom teardown sample"
  ];

  const fastChooser = [
    { condition: "One leaky page?", solution: "Starter Pack" },
    { condition: "Need a testable demo?", solution: "MVP" },
    { condition: "Ready to scale?", solution: "Overhaul" }
  ];
  return <>
    <SEOHead
      title="UX Services"
      description="Flexible UX packages for growing startups. From quick audits to full redesigns, choose the right package to accelerate your product's growth and user satisfaction."
      path="/services"
    />
    <div className="min-h-screen bg-theme-bg900 text-theme-body font-inter">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-neon-cyan/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-neon-pink/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Header with back navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => {
            navigate('/');
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
          }} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>

          <ThemeToggle />

          <nav className="hidden md:flex items-center gap-6">
            <a href="#packages" className="text-muted-foreground hover:text-foreground transition-colors">Packages</a>
            <Button onClick={openCalendlyPopup} variant="default" className="flex items-center gap-3 px-8 py-4 text-lg">
              Book a Call
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Hero className="pt-12 pb-48 px-6 text-center space-y-2">
        <BgGradient
          gradientColors="purple"
          gradientSize="lg"
          className="opacity-20"
        />
        <div className="max-w-4xl mx-auto">
          <TextStagger
            className="text-4xl md:text-6xl font-bold mb-4 text-gradient"
            text="Flexible UX packages for growing startups"
            as="h1"
          />
          <AnimatedContainer className="max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground mb-0">
              From quick audits to full redesigns, choose the right package to accelerate your product's growth and user satisfaction.
            </p>
          </AnimatedContainer>
        </div>
      </Hero>

      {/* Packages Section */}
      <section id="packages" className="-mt-48 pb-20 pt-0 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>

          {/* Fast Chooser */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-3 border-primary/20 text-primary/80 bg-primary/5 backdrop-blur-sm">
                Quick Guide
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                Which package is right for you?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {fastChooser.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-secondary/30 to-background border border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-default overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <p className="text-muted-foreground font-medium text-lg">
                      {item.condition}
                    </p>

                    <div className="text-primary/50 group-hover:text-primary group-hover:translate-y-1 transition-all duration-300">
                      <ArrowRight className="w-6 h-6" />
                    </div>

                    <p className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Add-on Services</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {addOnServices.map((addon, index) => <Badge key={index} variant="secondary" className="text-sm">
                {addon}
              </Badge>)}
            </div>
          </div>
        </div>
      </section>


      {/* Calendly Booking Section */}
      <CalendlyBooking />
    </div >
  </>;
};
export default Services;

// Extend window type for Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}