
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
    hasPublicSummary?: boolean;
}

export const projects: Project[] = [
    {
        id: "pergolade",
        image: "/uxmillion-uploads/pergolade-hero.png",
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
        isProtected: false,
        hasPublicSummary: true,
        subtitle: "Trust in Financial Services",
        timeline: "3 Weeks",
        challenge: "FidemDD's digital presence did not reflect their position as a premium financial consultancy. The site was outdated, difficult to navigate on mobile, and failed to convert visitors into consultations.",
        solution: "We implemented a minimalist design system focused on clarity and trust. This included high-end typography, a streamlined user flow for booking calls, and clear service categorization.",
        results: "35% increase in online lead generation and a 20% reduction in bounce rate on the homepage.",
        servicesUsed: ["starter-pack"]
    },
    {
        id: "citypups",
        image: "/assets/projects/citypups/hero.png",
        title: "CityPups Dog Adoption Tool",
        role: "Role: UX Designer",
        description: "Applied Google Ventures Design Sprint to create a matching tool prototype in 5 days—demonstrating rapid ideation and user testing under tight constraints.",
        caseStudyUrl: "/projects/citypups-dog-adoption",
        isProtected: false,
        hasPublicSummary: true,
        subtitle: "Matching Pups with People",
        timeline: "2 Weeks",
        challenge: "The adoption process was overly clinical and often resulted in poor matches between dogs and urban dwellers. CityPups needed a way to guide potential owners based on lifestyle, not just breed.",
        solution: "We designed a persona-based matching engine that evaluates factors like apartment size, activity level, and noise tolerance to recommend the perfect canine companion.",
        results: "Adoption success rate (no return within 90 days) increased by 40%, and the application completion rate rose by 25%.",
        servicesUsed: ["mvp-package"]
    },
    {
        id: "birder",
        image: "/uxmillion-uploads/6366f2b9-ed19-4d2e-8cdb-c898f220edda.png",
        title: "Birder",
        role: "Role: UX Designer",
        description: "An app to identify and explore birds all around the world.",
        caseStudyUrl: "/projects/birder-mobile-app",
        isProtected: false,
        hasPublicSummary: true,
        subtitle: "A Passion Project",
        timeline: "7 months",
        challenge: "Bird enthusiasts often rely on various tools to recognize and find information about birds, which include digital apps, printed guides, and other birders. Very few apps on the market do a fair job recognizing a bird, and they often fall short offering the functionality, reliability, and ease of use that most users are looking for.",
        solution: "With the use of new technological implementations, user research, interviews, surveys and in-depth analysis of leading apps' strengths and weaknesses, Birder plans to provide an effective alternative solution. The purpose of the Birder app is to effectively identify any bird around the world while keeping the user engaged into exploring more about birds in one app while providing a seamless human–computer interaction.",
        results: "The final design prioritizes a visually pleasing and user-centric experience with a simplified interface and color scheme optimized for various lighting conditions, resulting in increased user engagement and satisfaction.",
        servicesUsed: ["mvp-package"]
    },
    {
        id: "legal-general",
        image: "/uxmillion-uploads/legal-general-hero.png",
        title: "Modernizing the Life Insurance Quote Engine",
        role: "Role: Senior UX Designer",
        description: "Redesigning a legacy quote engine to improve conversion rates and user trust through progressive disclosure.",
        caseStudyUrl: "/projects/legal-general-quote-engine",
        isProtected: false,
        subtitle: "Conversion Rate Optimization & Design System Integration",
        timeline: "8 Weeks",
        team: "Me (Lead UX), Senior UX Architect, UX Director, 2 Front-End Developers",
        challenge: "Legal & General's legacy quote engine was a single-page form that acted as a significant barrier to lead generation due to information overload, technical failures on mobile, and high cognitive load.",
        solution: "We reimagined the IA by shifting to a 4-stage progressive disclosure model, translated clinical labels into natural language, and established trust by providing quotes before lead capture.",
        results: "Eliminated mobile keyboard overlap, reduced cognitive load, increased user confidence, and achieved enterprise-wide adoption of new Canopy-compliant components.",
        servicesUsed: ["full-overhaul"]
    }
];
