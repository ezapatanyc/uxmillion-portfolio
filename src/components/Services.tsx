import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
const ServiceCard = ({
  icon,
  title,
  tagline,
  bestFor,
  bullets,
  timelinePrice,
  ctaText,
  ctaAction,
  badge,
  isHighROI
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
  isHighROI?: boolean;
}) => <Card className="frosted-card hover-lift h-full flex flex-col relative overflow-hidden rounded-3xl shadow-xl shadow-primary/20 bg-gradient-to-b from-card via-card/95 to-card border border-border/50">
    {badge && <Badge className="absolute top-6 right-6 z-10 bg-neon-cyan/10 ring-1 ring-neon-cyan/30 text-neon-cyan font-semibold text-xs px-3 py-1.5">{badge}</Badge>}
    {isHighROI && <span className="absolute top-6 left-6 z-10 bg-primary/20 text-primary text-xs px-3 py-1.5 rounded-full font-medium">High ROI</span>}

    <CardHeader className="pb-8 pt-8 space-y-6 px-8">
      <div className="flex items-center gap-3">
        <span className="text-3xl" aria-hidden="true">{icon}</span>
        <CardTitle className="text-3xl font-bold tracking-tight">{title}</CardTitle>
      </div>

      <p className="text-xl leading-relaxed font-semibold text-neon-cyan" style={{ hyphens: "none", textShadow: "0 0 30px hsl(var(--neon-cyan) / 0.6), 0 0 60px hsl(var(--neon-cyan) / 0.3), 0 0 90px hsl(var(--neon-cyan) / 0.15)" }}>
        {tagline}
      </p>
      <p className="text-base text-muted-foreground leading-relaxed" style={{ hyphens: "none" }}>
        <span className="font-medium text-foreground">Best for:</span> {bestFor}
      </p>
    </CardHeader>

    <CardContent className="flex-1 flex flex-col pt-0 space-y-8 px-8 pb-8">
      <ul className="space-y-4 text-base leading-relaxed text-foreground/90" style={{ hyphens: "none" }}>
        {bullets.map((bullet, index) => {
          const bulletIcons = ['✓', '💡', '⚡'];
          return (
            <li key={index} className="flex items-start gap-3">
              <span className="text-lg shrink-0 mt-0.5" aria-hidden="true">{bulletIcons[index] || '✓'}</span>
              <span className="break-normal">{bullet}</span>
            </li>
          );
        })}
      </ul>

      <div className="flex-1" />

      <div className="space-y-5 pt-4">
        <p className="text-base text-muted-foreground font-medium" style={{ hyphens: "none" }}>
          {timelinePrice}
        </p>
        <div className="space-y-3">
          <Button
            onClick={ctaAction}
            className="w-full px-6 py-4 text-lg bg-neon-cyan text-black hover:bg-neon-cyan/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 rounded-full font-semibold shadow-lg shadow-neon-cyan/25"
            variant="default"
          >
            {ctaText}
          </Button>
          <p className="text-sm text-center text-muted-foreground/80 flex items-center justify-center gap-2">
            <span className="opacity-60">💬</span>
            <span>No commitment — just clarity on what's blocking conversions.</span>
          </p>
        </div>
      </div>
    </CardContent>
  </Card>;
const Services = () => {
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
    timelinePrice: "3 business days · $345",
    ctaText: "See if it's a fit (Free Call)",
    ctaAction: openCalendlyPopup,
    isHighROI: true
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
    timelinePrice: "≈2 weeks · $2,000–$3,500",
    ctaText: "See if it's a fit (Free Call)",
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
    timelinePrice: "4–6 weeks · $6,000–$12,000",
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
  return (
    <section id="services" className="section-padding px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="section-heading animate-color-shift text-3xl mb-4">Services</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the right package for your project needs. From quick audits to full redesigns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Fast Chooser */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-center mb-6">Fast Chooser</h4>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {fastChooser.map((item, index) => (
              <div key={index} className="text-center px-4">
                <span className="text-muted-foreground">{item.condition}</span>
                <span className="mx-2 text-primary">→</span>
                <span className="font-bold text-foreground">{item.solution}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h4 className="text-xl font-bold mb-4">Add-on Services</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {addOnServices.map((addon, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {addon}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;