import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { ClientOnly } from "./ClientOnly";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Lazy load ParticleSystem to avoid SSG issues
const ParticleSystem = lazy(() => import("./ParticleSystem"));
import ShipsScalesIllustration from "./ShipsScalesIllustration";
const Hero = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLImageElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });
  const [rippleEffect, setRippleEffect] = useState({
    active: false,
    x: 0,
    y: 0,
  });
  const [showShipsScalesPopup, setShowShipsScalesPopup] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ezapata.nyc@gmail.com");
      toast({
        title: "Email copied!",
        description: "ezapata.nyc@gmail.com has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please manually copy: ezapata.nyc@gmail.com",
        variant: "destructive",
      });
    }
  };

  const handleFancyScroll = () => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    // If user prefers reduced motion, use simple scroll
    if (prefersReducedMotion) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Get scroll distance
    const startPosition = window.pageYOffset;
    const targetPosition = contactSection.offsetTop - 100; // Small offset from top
    const distance = targetPosition - startPosition;
    const duration = 1800; // 1.8 seconds
    let startTime: number | null = null;

    // Easing function for fancy animation
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    // Pre-scroll effect - subtle page shake
    document.body.style.transform = "translateX(2px)";
    setTimeout(() => {
      document.body.style.transform = "translateX(-2px)";
      setTimeout(() => {
        document.body.style.transform = "translateX(0px)";
      }, 50);
    }, 50);

    // Add scroll trail indicator
    const scrollIndicator = document.createElement("div");
    scrollIndicator.style.cssText = `
      position: fixed;
      right: 20px;
      top: 50%;
      width: 4px;
      height: 0;
      background: linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--accent)));
      border-radius: 2px;
      z-index: 1000;
      transition: height 0.1s ease;
      box-shadow: 0 0 10px hsl(var(--primary) / 0.5);
    `;
    document.body.appendChild(scrollIndicator);

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      // Update scroll position
      const currentPosition = startPosition + distance * easedProgress;
      window.scrollTo(0, currentPosition);

      // Update scroll indicator
      const indicatorHeight = Math.min(progress * 100, 100);
      scrollIndicator.style.height = `${indicatorHeight}px`;

      // Add sparkle particles during scroll
      if (progress < 1 && Math.random() > 0.8) {
        const sparkle = document.createElement("div");
        sparkle.style.cssText = `
          position: fixed;
          right: ${15 + Math.random() * 10}px;
          top: ${40 + Math.random() * 20}%;
          width: 3px;
          height: 3px;
          background: hsl(var(--primary));
          border-radius: 50%;
          z-index: 999;
          pointer-events: none;
          animation: sparkleFloat 0.8s ease-out forwards;
        `;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Post-scroll effects
        setTimeout(() => {
          // Remove scroll indicator
          scrollIndicator.remove();

          // Add glow effect to contact section
          contactSection.style.transition = "all 0.6s ease";
          contactSection.style.boxShadow = "0 0 40px hsl(var(--primary) / 0.3)";
          contactSection.style.transform = "scale(1.02)";

          setTimeout(() => {
            contactSection.style.boxShadow = "";
            contactSection.style.transform = "";
          }, 1000);
        }, 100);
      }
    };

    requestAnimationFrame(animate);
  };
  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMediaChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    // Handle scroll parallax effect with RAF throttling
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Fade out background gradient on scroll
          if (bgRef.current) {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            // Fade out completely by the time we scroll 100% of the viewport height
            const opacity = Math.max(0, 1 - scrollPosition / viewportHeight);
            bgRef.current.style.opacity = opacity.toString();
          }

          if (
            !prefersReducedMotion &&
            heroRef.current &&
            imageRef.current &&
            phoneRef.current
          ) {
            const scrollPosition = window.scrollY;
            // Only apply parallax if within first 600px of scroll
            if (scrollPosition <= 600) {
              const parallaxValue = scrollPosition * 0.1;
              const phoneParallaxValue = scrollPosition * 0.067;

              imageRef.current.style.transform = `translateY(-${parallaxValue}px)`;
              phoneRef.current.style.transform = `
                translateY(-${phoneParallaxValue}px) 
                rotateX(${coords.y * 4}deg) 
                rotateY(${-coords.x * 4}deg)
              `;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [coords, prefersReducedMotion]);

  // Mouse move handler for tilting effect (desktop only)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !phoneRef.current) return;

    // Throttle to ~30fps
    requestAnimationFrame(() => {
      const rect = phoneRef.current!.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate normalized position (-1 to 1)
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      // Update state with clamped values
      setCoords({
        x: Math.min(Math.max(x, -1), 1),
        y: Math.min(Math.max(y, -1), 1),
      });
    });
  };

  // Touch handler for ripple effect (mobile)
  const handleTouch = (e: React.TouchEvent) => {
    if (prefersReducedMotion || !phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Only trigger ripple if touch is within the phone screen area
    if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
      setRippleEffect({
        active: true,
        x,
        y,
      });

      // Reset ripple after animation completes
      setTimeout(
        () =>
          setRippleEffect({
            active: false,
            x: 0,
            y: 0,
          }),
        500,
      );
    }
  };

  // Handler for "ships and scales" hover
  const handleShipsScalesHover = () => {
    console.log("Hover triggered!");
    setShowShipsScalesPopup(true);
  };

  const handleShipsScalesLeave = () => {
    console.log("Hover leave triggered");
    setShowShipsScalesPopup(false);
  };

  // Handler for mobile tap
  const handleShipsScalesTap = () => {
    setShowShipsScalesPopup(!showShipsScalesPopup);
  };

  // Close panel on outside click (mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        showShipsScalesPopup &&
        spanRef.current &&
        !spanRef.current.contains(event.target as Node)
      ) {
        setShowShipsScalesPopup(false);
      }
    };

    if (showShipsScalesPopup) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showShipsScalesPopup]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center px-6 pt-20 pb-16 md:pb-0 overflow-hidden relative cursor-scroll-down"
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouch}
    >
      {/* Dynamic Background Gradient that fades on scroll */}
      <div
        ref={bgRef}
        className="exact-hero-gradient absolute inset-0 -z-20 pointer-events-none"
      ></div>

      {/* Starfield Background */}
      <div className="stars"></div>

      {/* P5.js Particle System - positioned absolute with z-index to sit behind content */}
      <ClientOnly
        fallback={
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        }
      >
        <Suspense
          fallback={
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          }
        >
          <ParticleSystem className="absolute inset-0 z-0" />
        </Suspense>
      </ClientOnly>

      <div className="max-w-6xl mx-auto relative w-full flex justify-center items-center z-10">
        {/* Background gradient elements */}

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6">
          {/* Illustration Container - Shows SVG on hover, positioned ABOVE headline */}
          <div
            className="relative mb-12 md:mb-20 h-48 md:h-60 flex items-center justify-center cursor-pointer"
            onMouseEnter={handleShipsScalesHover}
            onMouseLeave={handleShipsScalesLeave}
            onClick={handleShipsScalesTap}
          >
            <div
              style={{
                opacity: showShipsScalesPopup ? 1 : 0,
                transform: showShipsScalesPopup
                  ? "translateY(0) scale(1)"
                  : "translateY(-30px) scale(0.95)",
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <ShipsScalesIllustration
                className="w-full max-w-xl h-auto mx-auto"
                style={{
                  filter: "drop-shadow(0 10px 40px rgba(0, 212, 255, 0.3))",
                }}
              />
            </div>
          </div>

          <div className="animate-fade-in">
            <h1
              className="mb-4 font-black tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: "1.2",
              }}
            >
              UX that{" "}
              <span
                ref={spanRef}
                className="interactive-phrase"
                onMouseEnter={handleShipsScalesHover}
                onMouseLeave={handleShipsScalesLeave}
                onClick={handleShipsScalesTap}
              >
                ships and scales
              </span>
            </h1>
          </div>

          {/* Positioning headline */}
          <div className="animate-fade-in animation-delay-100">
            <p
              className="text-foreground/90 max-w-2xl mx-auto mb-6 font-bold tracking-tight"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
                lineHeight: "1.5",
              }}
            >
              Senior Product Designer and Interaction Designer based in NYC, turning complex workflows into clear, usable product experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in animation-delay-400">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: prefersReducedMotion ? "auto" : "smooth",
                  })
                }
                variant="default"
                size="lg"
                className="flex items-center gap-3 font-semibold rounded-full"
              >
                Get in touch
              </Button>

              <Button
                onClick={() =>
                  document.getElementById("work")?.scrollIntoView({
                    behavior: prefersReducedMotion ? "auto" : "smooth",
                  })
                }
                variant="outline"
                size="lg"
                className="flex items-center gap-3 font-semibold rounded-full"
              >
                View portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down arrow indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"></div>
    </section>
  );
};
export default Hero;
