
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-20 px-6 relative">
      <div className="container mx-auto">
        <a
          href="/services"
          className="text-gray-600 dark:text-gray-300 hover:text-neon-cyan transition-all duration-300 mb-6 text-center block group"
        >
          Looking to hire me for a project? → <span className="font-bold text-neon-cyan underline decoration-2 underline-offset-4 group-hover:decoration-neon-cyan/60" style={{ textShadow: "0 0 15px hsl(var(--neon-cyan) / 0.4)" }}>Explore Services</span>
        </a>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <p className="text-center text-gray-500">
              © 2025 Emiliano Zapata. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
