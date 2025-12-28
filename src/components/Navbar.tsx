
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate scroll progress for progress bar
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercent = scrollPosition / windowHeight * 100;
      setScrollProgress(scrollPercent);

      // Check if on services page
      if (window.location.pathname === '/services') {
        setActiveSection('services');
        return;
      }

      // Determine active section based on scroll position with offset
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 120;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Handle external route for services
    if (id === 'services') {
      window.location.href = '/services';
      return;
    }

    // Handle in-page section scrolling
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80
      });
    }
  };

  const navItems = ['home', 'work', 'about', 'services', 'testimonials', 'resume', 'contact'];

  return (
    <>
      {/* Progress bar positioned at the very top */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${scrollProgress}%`
          }}
        ></div>
      </div>

      {/* Navbar with enough padding and full coverage */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 py-4 ${scrolled
          ? 'bg-theme-bg900/85 backdrop-blur-xl border-b border-white/5 shadow-sm'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Theme toggle on the left */}
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          {/* Desktop navigation - centered */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`scroll-link font-medium capitalize ${activeSection === item ? 'text-primary' : 'text-foreground hover:text-primary/80'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Empty div for balance */}
          <div className="hidden lg:block w-24"></div>

          {/* Mobile navigation with Sheet component - positioned on the left with proper alignment */}
          <div className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="text-foreground hover:text-primary transition-colors p-1"
                  aria-label="Menu"
                >
                  <Menu className="h-5 w-5" size={20} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-theme-bg900/95 backdrop-blur-xl border-r border-white/10 w-[75vw] sm:max-w-sm overflow-y-auto"
              >
                <div className="flex flex-col space-y-0 pt-6">
                  {navItems.map(item => (
                    <button
                      key={item}
                      onClick={() => {
                        scrollToSection(item);
                        // Close sheet immediately by finding and clicking the close button
                        const closeButton = document.querySelector('[data-state="open"] [data-radix-collection-item]');
                        if (closeButton && closeButton instanceof HTMLElement) {
                          closeButton.click();
                        }
                      }}
                      className={`scroll-link font-medium capitalize px-6 py-3 text-left text-lg ${activeSection === item ? 'text-primary' : 'text-foreground hover:text-primary/80'
                        }`}
                    >
                      {item}
                    </button>
                  ))}
                  {/* Theme toggle in mobile menu */}
                  <div className="px-6 pt-6 border-t border-white/10 mt-4">
                    <p className="text-sm text-muted-foreground mb-3">Theme</p>
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile theme toggle on the right */}
          <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Sidebar navigation for desktop */}
      <div className="hidden fixed right-5 top-1/2 transform -translate-y-1/2 z-30 lg:flex flex-col items-center">
        <div className="glass-effect py-4 px-2">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-3 h-3 my-3 rounded-full transition-all duration-200"
              style={{
                backgroundColor: activeSection === item ? 'hsl(var(--primary))' : 'hsl(var(--foreground) / 0.3)',
                transform: activeSection === item ? 'scale(1.3)' : 'scale(1)'
              }}
              aria-label={`Navigate to ${item} section`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
