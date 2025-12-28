
export interface Service {
    id: string;
    icon: string;
    title: string;
    tagline: string;
    bestFor: string;
    bullets: string[];
    timelinePrice: string;
    ctaText: string;
    badge?: string;
    isHighROI?: boolean;
}

export const services: Service[] = [
    {
        id: "starter-pack",
        icon: "🚀",
        title: "UX Starter Pack",
        tagline: "Fix the one page that's costing you money.",
        bestFor: "Landing, signup, or checkout that isn't pulling its weight.",
        bullets: [
            "Immediate wins: 3–5 fixes that stop drop‑offs now.",
            "No guesswork: 30‑min walkthrough so you know exactly what to do next.",
            "Low risk, high return: Tiny spend → visible lift."
        ],
        timelinePrice: "3 business days · $345",
        ctaText: "See if it's a fit (Free Call)",
        isHighROI: true
    },
    {
        id: "mvp-package",
        icon: "🎨",
        title: "MVP UX Package",
        tagline: "Get something people can click—and love—fast.",
        bestFor: "Early products, investor demos, pilot launches.",
        bullets: [
            "See it now: Wireframes for 3–5 key screens + hi‑fi clickable demo.",
            "Proof beats opinion: 3–5 user tests with a simple \"do this next\" report.",
            "Save dev time: Validate flow before you touch code."
        ],
        timelinePrice: "≈2 weeks · $2,000–$3,500",
        ctaText: "See if it's a fit (Free Call)",
        badge: "Most Chosen"
    },
    {
        id: "full-overhaul",
        icon: "🔄",
        title: "Full UX Overhaul",
        tagline: "Redesign for scale—so growth doesn't break your product.",
        bestFor: "SaaS/e‑com teams fixing churn, confusion, or \"Frankenstein\" UX.",
        bullets: [
            "Confidence from research: Personas + journeys tied to goals.",
            "Speed with consistency: Clean IA + lightweight design system.",
            "Less risk, more clarity: Interactive prototypes + 2 revision rounds."
        ],
        timelinePrice: "4–6 weeks · $6,000–$12,000",
        ctaText: "Book a 15‑min strategy call"
    }
];
