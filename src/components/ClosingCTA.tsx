import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SPRINT_OPTIONS = [
  "Product Clarity Sprint",
  "Core Flow Design Sprint",
  "Strategic UX Sprint",
] as const;

const ClosingCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10"></div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gradient mb-4">
          Work with me
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          I work with teams through focused product design sprints designed to create momentum without bloated process.
        </p>

        <div className="mb-8">
          <p className="text-sm text-muted-foreground/80 font-medium uppercase tracking-widest mb-5">
            Typical engagements include
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {SPRINT_OPTIONS.map((sprint) => (
              <div
                key={sprint}
                className="frosted-card px-5 py-3 rounded-xl hover-lift cursor-pointer border border-border/10 group transition-all"
                onClick={() => navigate("/services")}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                    {sprint}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={() => navigate("/services")}
          variant="default"
          size="lg"
          className="font-bold rounded-full px-10 active:scale-[0.98] transition-all"
        >
          Explore services
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
};
export default ClosingCTA;