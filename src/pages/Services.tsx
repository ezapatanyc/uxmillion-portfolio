import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CalendlyBooking from "@/components/CalendlyBooking";
import { AnimatedContainer, BgGradient, Hero, TextStagger } from "@/components/ui/hero-animated";
import SEOHead from "@/components/SEOHead";
import ThemeToggle from "@/components/ThemeToggle";
import ParticleSystem from "@/components/ParticleSystem";

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
  index
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
  index: number;
}) => {
  const titleId = `card-title-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <Card
      className="frosted-card group h-full flex flex-col relative overflow-visible transition-all duration-300 border border-white/5 hover-lift bg-transparent"
      role="region"
      aria-labelledby={titleId}
    >
      <CardHeader className="pb-4 pt-8 px-6 relative z-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-primary/30" aria-hidden="true">
              <span className="text-3xl">{icon}</span>
            </div>
            {badge && (
              <Badge className="bg-primary/20 text-primary border-primary/30 font-black px-3 py-1 text-[10px] uppercase tracking-widest rounded-full h-fit">
                {badge}
              </Badge>
            )}
          </div>

          <div className="space-y-2">
            <CardTitle id={titleId} className="text-2xl font-black text-gradient">
              {title}
            </CardTitle>
            <p className="text-lg leading-snug font-bold text-white/90">
              {tagline}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm leading-relaxed">
            <span className="font-black text-[11px] text-neon-cyan uppercase tracking-[0.1em] mr-2">BEST FOR</span>
            <span className="text-muted-foreground font-medium">{bestFor}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col px-6 pb-8 relative z-10">
        <div className="my-4 border-t border-white/5" />

        <ul className="space-y-4 mb-8 flex-1">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors">
              <Check className="w-4 h-4 mt-0.5 text-neon-cyan shrink-0" strokeWidth={3} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Investment & Timeline */}
        <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5">
          <div className="text-[10px] font-black text-neon-cyan uppercase tracking-[0.15em] mb-1">Timeline & Investment</div>
          <div className="text-sm font-bold text-white/80">{timelinePrice}</div>
        </div>

        <div className="mt-auto space-y-4">
          <Button
            onClick={ctaAction}
            className="w-full h-12 btn-glow text-white font-bold rounded-full active:scale-[0.98] transition-all"
          >
            {ctaText}
          </Button>


        </div>
      </CardContent>
    </Card>
  );
};

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
      "No guesswork: 30–min walkthrough so you know exactly what to do next.",
      "Low risk, high return: Tiny spend → visible lift."
    ],
    timelinePrice: "3 business days · Starts at $345",
    ctaText: "Book a 15-min call",
    ctaAction: openCalendlyPopup
  }, {
    icon: "🎨",
    title: "MVP UX Package",
    tagline: "Get something people can click—and love—fast.",
    bestFor: "Early products, investor demos, pilot launches.",
    bullets: [
      "See it now: Wireframes for 3-5 key screens + hi-fi clickable demo.",
      "Proof beats opinion: 3–5 user tests with a simple \"do this next\" report.",
      "Save dev time: Validate flow before you touch code."
    ],
    timelinePrice: "≈2 weeks · Typically $2k–$3.5k · Custom quote after call",
    ctaText: "Start MVP",
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
    ctaText: "Plan overhaul",
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
    <div className="min-h-screen bg-theme-bg900 text-theme-body font-inter exact-hero-gradient relative">
      <div className="stars"></div>
      <ParticleSystem className="absolute inset-0 z-0 pointer-events-none" />

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
            <Button onClick={openCalendlyPopup} variant="default" className="flex items-center gap-3 px-6 py-2 btn-glow rounded-full font-bold">
              Book a Call
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Hero className="pt-16 pb-12 px-6 text-center space-y-4 relative z-10 min-h-0">
        <BgGradient
          gradientColors="purple"
          gradientSize="lg"
          className="opacity-20"
        />
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="animate-fade-in mb-4 font-black tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: '1.2' }}>
              Flexible UX packages for{" "}
              <span className="interactive-phrase">
                growing startups
              </span>
            </h1>
            <div className="animate-fade-in animation-delay-200">
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6 font-normal tracking-normal" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: '1.6' }}>
                From quick audits to full redesigns, choose the right package to accelerate your product's growth and user satisfaction.
              </p>
            </div>
          </div>

          <AnimatedContainer transition={{ delay: 0.4 }}>
            <div className="grid md:grid-cols-3 gap-8 mb-4">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </AnimatedContainer>
        </div>
      </Hero>

      {/* Supplementary Info Section */}
      <section id="additional-info" className="pb-24 pt-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Fast Chooser */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest">
                Quick Guide
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gradient mb-4">
                Which package is right for you?
              </h2>
              <p className="text-lg text-foreground/70 max-w-xl mx-auto font-medium">
                Choose based on your current product stage and immediate goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {fastChooser.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-xl frosted-card border border-white/5 hover-lift cursor-default overflow-hidden bg-transparent"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col items-center text-center gap-6">
                    <p className="text-white/80 font-bold text-lg leading-tight">
                      {item.condition}
                    </p>

                    <div className="text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-8 h-8" />
                    </div>

                    <p className="text-2xl font-black text-gradient transition-colors duration-300">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center frosted-card border border-white/5 p-12 rounded-xl backdrop-blur-sm bg-transparent">
            <h3 className="text-2xl font-black mb-8 text-gradient">Add-on Services</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {addOnServices.map((addon, index) => (
                <Badge key={index} className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors text-sm font-bold py-2 px-5 rounded-full">
                  {addon}
                </Badge>
              ))}
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