import { Sparkles } from "lucide-react";

const VALUE_PROPS = [
  "Simplify complex user flows",
  "Reduce friction in key journeys",
  "Improve usability and clarity",
  "Shape stronger MVP experiences",
  "Create better UX foundations for growth",
] as const;

const ValueProp = () => {
  return (
    <section className="section-padding px-6">
      <div className="max-w-3xl mx-auto">
        <div className="frosted-card p-8 md:p-12 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-black text-gradient mb-6">
            I help teams make important product moments easier to use
          </h2>

          <div className="space-y-3 mb-6">
            <p className="text-muted-foreground leading-relaxed">
              As products grow, the experience often gets harder to understand before it gets better.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Features pile up. Key flows become harder to complete. Teams feel the friction, but they don't always know what to fix first.
            </p>
          </div>

          <p className="text-foreground/80 leading-relaxed">
            I help simplify those moments through stronger product structure, clearer UX thinking, and focused design work that helps teams move forward with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
