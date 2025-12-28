
export interface Project {
    id: string;
    image?: string;
    video?: string;
    title: string;
    role: string;
    description: string;
    caseStudyUrl: string;
    isProtected: boolean;

    // Extended Case Study Data
    subtitle?: string;
    heroImage?: string;
    timeline?: string;
    team?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    servicesUsed?: string[]; // IDs from services.ts
}

export const projects: Project[] = [
    {
        id: "pergolade",
        image: "/lovable-uploads/pergolade-hero.png",
        title: "Pergolade Blade Pro",
        role: "Role: Lead UX Designer (end-to-end)",
        description: "Redefining a premium configurator-led buying journey across desktop + mobile",
        caseStudyUrl: "/projects/pergolade-blade-pro",
        isProtected: false,
        subtitle: "Digital Experience for Luxury Outdoor Living",
        timeline: "8 Weeks",
        team: "Me (UX/UI) + 1 Developer + Owner/Stakeholder",
        challenge: "Pergolade needed a digital presence that matched the premium quality of their physical product. The challenge was to communicate complex technical features in an elegant, easy-to-understand way for homeowners.",
        solution: "We designed a visually immersive scroll-based experience that breaks down the product features (louver control, weather resistance, styling) into digestible sections. We used large imagery and subtle interactions to convey luxury.",
        results: "The new landing page led to a significant increase in dealer inquiries and customer engagement time.",
        servicesUsed: ["mvp-package"]
    },
    {
        id: "railbuild",
        video: "/assets/railbuild-hero-bg-video.mp4",
        title: "RailBuild",
        role: "Role: Lead UX Designer",
        description: "Streamlining construction procurement for three audiences (Homeowners, Architects, Contractors)",
        caseStudyUrl: "/projects/railbuild",
        isProtected: false,
        subtitle: "Streamlining product discovery + quoting for three buyer types",
        timeline: "3 Weeks",
        team: "Lead UX (me), 2 Front-End Developers, Marketing Team (feedback + reviews)",
        challenge: "RailBuild's existing site was confusing for their three distinct user groups: homeowners, architects, and contractors. Users struggled to locate relevant technical documentation and product specifications, and the path to requesting a quote was unclear.",
        solution: "We restructured the Information Architecture (IA) to create distinct pathways for each user persona. We implemented a robust filtering system for products and a dedicated resource center for professionals.",
        results: "Reduced support tickets regarding product specs by 40%. Increased quote requests from contractors by 25%.",
        servicesUsed: ["full-overhaul"]
    },
    {
        id: "fidemdd",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        title: "FidemDD Website Redesign",
        role: "Role: Product Designer",
        description: "Redesigned financial services site → improved credibility, increased lead generation by 35%",
        caseStudyUrl: "/projects/fidemdd-website-redesign",
        isProtected: true,
        subtitle: "Trust in Financial Services",
        timeline: "3 Weeks",
        challenge: "FidemDD's digital presence did not reflect their position as a premium financial consultancy. The site was outdated, difficult to navigate on mobile, and failed to convert visitors into consultations.",
        solution: "We implemented a minimalist design system focused on clarity and trust. This included high-end typography, a streamlined user flow for booking calls, and clear service categorization.",
        results: "35% increase in online lead generation and a 20% reduction in bounce rate on the homepage.",
        servicesUsed: ["starter-pack"]
    },
    {
        id: "citypups",
        image: "/lovable-uploads/11d85155-61ef-4560-a93a-95db49084dc3.png",
        title: "CityPups Dog Adoption Tool",
        role: "Role: UX Designer",
        description: "Redesigned adoption flow → improved match success rate by 40% and reduced abandonment by 25%",
        caseStudyUrl: "/projects/citypups-dog-adoption",
        isProtected: true,
        subtitle: "Matching Pups with People",
        timeline: "2 Weeks",
        challenge: "The adoption process was overly clinical and often resulted in poor matches between dogs and urban dwellers. CityPups needed a way to guide potential owners based on lifestyle, not just breed.",
        solution: "We designed a persona-based matching engine that evaluates factors like apartment size, activity level, and noise tolerance to recommend the perfect canine companion.",
        results: "Adoption success rate (no return within 90 days) increased by 40%, and the application completion rate rose by 25%.",
        servicesUsed: ["mvp-package"]
    },
    {
        id: "birder",
        image: "/lovable-uploads/6366f2b9-ed19-4d2e-8cdb-c898f220edda.png",
        title: "Birder Mobile App Design",
        role: "Role: UX Designer",
        description: "Designed community features → boosted user engagement by 60% and daily active users by 45%",
        caseStudyUrl: "/projects/birder-mobile-app",
        isProtected: true,
        subtitle: "Building a Community for Birdwatchers",
        timeline: "4 Weeks",
        challenge: "Birder's initial launch had good downloads but low retention. Users were logging sightings but weren't interacting with each other, leading to a stale experience.",
        solution: "We introduced 'Social Sightings', a feature that allows users to tag others, comment on rare finds, and participate in local 'Bird Challenges'. We also redesigned the notification system to be less intrusive and more relevant.",
        results: "Engagement metrics jumped by 60%, and daily active users increased by 45% as the app became a daily destination for the birding community.",
        servicesUsed: ["mvp-package"]
    },
    {
        id: "healthtrack",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        title: "HealthTrack Wearable App",
        role: "Role: UX/UI Designer",
        description: "Created data visualization system → increased user retention by 50% and daily check-ins by 70%",
        caseStudyUrl: "/projects/healthtrack",
        isProtected: true,
        subtitle: "Actionable Insights for Daily Wellness",
        timeline: "8 Weeks",
        challenge: "Wearable technology provides mountains of data, but users often don't know what to do with it. HealthTrack needed to pivot from 'data tracker' to 'wellness coach'.",
        solution: "We designed a new 'Daily Story' dashboard that summarizes key trends using plain language (e.g., 'You walked more but slept less than average this week') and provides one clear recommendation per day.",
        results: "User retention at the 30-day mark increased by 50%, and the number of users checking the app at least once a day rose by 70%.",
        servicesUsed: ["mvp-package"]
    }
];
