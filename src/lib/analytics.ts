
import mixpanel from "mixpanel-browser";

// Initialize Mixpanel SDK with your project token
export const initMixpanel = () => {
  mixpanel.init("f383806bb58b90a2cdba92c0cc562927", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });
  
  // Log initialization
  console.log("Mixpanel initialized");
};

// Helper functions for tracking
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  mixpanel.track(eventName, properties);
};

export const trackPageView = (pageName: string) => {
  mixpanel.track_pageview({
    page: pageName
  });
};

// For direct access to mixpanel instance
export { mixpanel };
