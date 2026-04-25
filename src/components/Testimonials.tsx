import { Quote } from "lucide-react";

const proofSignals = [
  "Scrappy execution",
  "Product thinking",
  "Cross-functional collaboration",
  "Startup + enterprise experience",
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">

        {/* Section header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary/60 mb-2.5 block">
            Recommendation
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-black text-gradient leading-[1.25] mb-3">
            Featured Recommendation
          </h2>
          <p className="text-muted-foreground text-[0.9rem] md:text-[0.95rem] max-w-lg mx-auto leading-relaxed">
            A real recommendation from a senior UX peer who has worked with me more than once.
          </p>
        </div>

        {/* Featured testimonial card */}
        <div
          className="frosted-card rounded-2xl md:rounded-3xl p-7 md:p-10 relative overflow-visible"
          style={{
            border: '1px solid rgba(56, 189, 248, 0.15)',
            boxShadow:
              '0 0 40px rgba(78, 214, 255, 0.06), 0 8px 32px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Large decorative quote mark */}
          <div
            className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-6"
            style={{
              background: 'rgba(78, 214, 255, 0.08)',
              border: '1px solid rgba(78, 214, 255, 0.18)',
            }}
          >
            <Quote className="w-5 h-5 text-primary/60" />
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl lg:text-[1.3rem] leading-[1.65] text-foreground/90 font-medium mb-8">
            "I've had the pleasure of working with Emiliano twice. He's scrappy,
            resourceful, and a true go-getter. Emiliano is entrepreneurial,
            adaptable, and always brings his best to the table."
          </blockquote>

          {/* Attribution */}
          <div
            className="pt-5 flex items-center gap-4"
            style={{ borderTop: '1px solid rgba(78, 214, 255, 0.1)' }}
          >
            {/* Accent bar */}
            <div
              className="w-1 h-10 rounded-full flex-shrink-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(78,214,255,0.6) 0%, rgba(145,70,255,0.4) 100%)',
              }}
            />
            <div>
              <p className="text-[0.95rem] font-semibold text-foreground/85">
                Paola Palacios
              </p>
              <p className="text-sm text-muted-foreground/70 mt-0.5">
                Senior UX Designer
              </p>
            </div>
          </div>
        </div>

        {/* Proof signals */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 mt-8 md:mt-10">
          {proofSignals.map((point, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-xs md:text-[0.8rem] text-muted-foreground/60"
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{
                  background:
                    i % 2 === 0
                      ? 'rgba(78, 214, 255, 0.5)'
                      : 'rgba(145, 70, 255, 0.5)',
                }}
              />
              {point}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;