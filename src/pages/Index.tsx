
import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { ClientOnly } from '@/components/ClientOnly';
import SEOHead from '@/components/SEOHead';
import { generateWebSiteSchema, generatePersonSchema } from '@/lib/jsonLd';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Work from '@/components/Work';
import Resume from '@/components/Resume';
import ClosingCTA from '@/components/ClosingCTA';
import Contact from '@/components/Contact';
import CalendlyBooking from '@/components/CalendlyBooking';
import Footer from '@/components/Footer';

// Lazy load heavy components
const VideoIntro = lazy(() => import('@/components/VideoIntro'));

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  // Check if user has already seen the intro this session
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasSeenIntro');
    }
    return true;
  });

  const [isClient, setIsClient] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Mark that user has seen the intro this session
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hasSeenIntro', 'true');
    }
  };

  // Track client-side mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle hash navigation
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    // Only run browser-specific code on client
    if (typeof window === 'undefined') return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Smooth scroll behavior for the entire page (unless reduced motion is preferred)
    document.documentElement.style.scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    // Add scroll animations with optimized IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Apply the neon-card effect to sections when they come into view
          if (entry.target.classList.contains('card')) {
            entry.target.classList.add('neon-card');
          } else if (entry.target.classList.contains('section-container')) {
            const cards = entry.target.querySelectorAll('.card');
            cards.forEach((card, index) => {
              // Add staggered animation delay
              setTimeout(() => {
                card.classList.add('neon-card');
                card.classList.add('animate-fade-in');
              }, index * 150);
            });
          }

          // Make sure content is visible when in view - use classList.add only
          entry.target.classList.add('animate-fade-in');
          // Unobserve after triggering to reduce overhead
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15, // Slightly higher threshold to reduce triggers
      rootMargin: '0px 0px -50px 0px'
    });

    // Target more specific elements for animation
    const sections = document.querySelectorAll('section > div, .section-container, .card');
    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
    };
  }, []);

  // Show intro only on client-side to ensure SSG renders main content
  if (isClient && showIntro) {
    return (
      <ClientOnly fallback={null}>
        <Suspense fallback={<div className="fixed inset-0 bg-theme-bg900 z-50" />}>
          <VideoIntro onComplete={handleIntroComplete} />
        </Suspense>
      </ClientOnly>
    );
  }

  return (
    <>
      <SEOHead
        title="UX Designer"
        description="UX designer crafting intuitive digital experiences powered by empathy and data. 15+ projects delivered in Healthcare, Fintech, and E-commerce."
        path="/"
        jsonLd={[generateWebSiteSchema(), generatePersonSchema()]}
      />
      <div className="min-h-screen bg-theme-bg900 text-theme-body font-inter" ref={mainRef}>
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-neon-cyan/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-neon-pink/5 rounded-full blur-[100px]"></div>
        </div>
        <Navbar />

        <Hero />
        <Work />
        <About />
        <Testimonials />
        <Resume />
        <ClosingCTA />
        <Contact />
        <Footer />

        {/* SVG gradient definitions for data visualization */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4ED6FF" />
              <stop offset="100%" stopColor="#FF72E7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Index;
