import { useEffect } from 'react';
import { Button } from './ui/button';

const CalendlyBooking = () => {
  useEffect(() => {
    // Load Calendly CSS if not already loaded
    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/ezapata-nyc/call-meeting?hide_event_type_details=1&hide_gdpr_banner=1'
      });
    }
  };

  return (
    <section id="booking" className="section-padding px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="section-heading text-4xl mb-6">
            Book a Discovery Call
          </h2>
          <p className="text-lg text-theme-body max-w-2xl mx-auto mb-8">
            Ready to transform your product's user experience? Let's discuss your project and explore how we can work together to create something amazing.
          </p>
        </div>

        <div className="frosted-card hover-lift p-8 md:p-12 text-center">
          <Button
            onClick={openCalendlyPopup}
            className="flex items-center gap-3 px-8 py-4 text-lg"
          >
            Book a Discovery Call
          </Button>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Can't find a suitable time? Email me directly at{' '}
            <a
              href="mailto:ezapata.nyc@gmail.com"
              className="text-primary hover:text-accent transition-colors underline"
            >
              ezapata.nyc@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};


export default CalendlyBooking;