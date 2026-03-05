
export interface Service {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    bestFor: string;
    timeline: string;
    deliverables: string[];
    investment: string;
    investmentNote?: string;
    ctaText: string;
    badge?: string;
}

export const services: Service[] = [
    {
        id: "ux-audit-sprint",
        icon: "🔍",
        title: "UX Audit Sprint",
        subtitle: "fast clarity",
        bestFor: "Teams with an existing product that needs clear, prioritized fixes.",
        timeline: "5–7 days",
        deliverables: [
            "Annotated findings (screenshots + notes)",
            "Prioritized fix list (high / med / low impact)",
            "UX recommendations + quick wireframe concepts (1–2 key areas)",
            "A \"next 2 weeks\" action plan for design + dev"
        ],
        investment: "Starts at $1,500",
        investmentNote: "Most audits land $2,500–$3,500 depending on scope.",
        ctaText: "Book a 15-min fit call"
    },
    {
        id: "mvp-design-sprint",
        icon: "🎨",
        title: "MVP Design Sprint",
        subtitle: "launch what matters",
        bestFor: "Founders building an MVP or teams validating a new workflow.",
        timeline: "2–4 weeks",
        deliverables: [
            "User flow(s) + key screens mapped",
            "Wireframes → high-fidelity UI for core journey",
            "Clickable prototype for review / testing",
            "Handoff-ready specs (states, behaviors, responsive notes)"
        ],
        investment: "Typically $5K–$10K",
        investmentNote: "Depends on # of flows / screens.",
        ctaText: "Start your MVP",
        badge: "Most Popular"
    },
    {
        id: "product-ux-overhaul",
        icon: "🔄",
        title: "Product UX Overhaul",
        subtitle: "scale the system",
        bestFor: "Growing products that need stronger foundations and cleaner workflows.",
        timeline: "4–8 weeks",
        deliverables: [
            "Discovery + workflow diagnosis",
            "Redesign of key journeys (navigation, onboarding, core tasks)",
            "Component / pattern foundation (design system starter)",
            "Iteration plan + rollout guidance"
        ],
        investment: "Starts at $15K+",
        investmentNote: "Scope-based.",
        ctaText: "Plan your overhaul"
    }
];

export interface StarterPack {
    title: string;
    bestFor: string;
    timeline: string;
    deliverables: string[];
    investment: string;
    upgradeNote: string;
}

export const starterPack: StarterPack = {
    title: "UX Starter Pack",
    bestFor: "Landing pages or one critical screen that needs immediate improvement.",
    timeline: "3 days",
    deliverables: [
        "Quick audit + prioritized improvements",
        "Revised wireframe or layout concept",
        "Lightweight implementation notes"
    ],
    investment: "$345",
    upgradeNote: "If you upgrade to a larger engagement within 14 days, I'll credit this cost toward the next package."
};

export interface AddOn {
    name: string;
    price: string;
    detail: string;
}

export const addOns: AddOn[] = [
    { name: "Dev-ready handoff pack", price: "+$500", detail: "interaction notes, component states, redlines, acceptance checklist" },
    { name: "User testing lite", price: "+$750", detail: "3–5 sessions + findings summary" },
    { name: "Copy polish", price: "+$300", detail: "improve clarity + scannability for key screens" },
    { name: "Analytics / metrics setup guidance", price: "+$300", detail: "what to track + how to interpret" }
];
