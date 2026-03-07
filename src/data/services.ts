
export interface Engagement {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  bestFor: string;
  deliverables: string[];
  timeline: string;
  collaborationStyle: string;
  investment: string;
  badge?: string;
}

export const engagements: Engagement[] = [
  {
    id: "product-clarity-sprint",
    icon: "🔍",
    title: "Product Clarity Sprint",
    subtitle: "diagnose what's not working",
    bestFor:
      "Existing products with friction, drop-off, confusing flows, or too many competing ideas.",
    deliverables: [
      "UX review of one selected product area or workflow",
      "Annotated findings and friction points",
      "Prioritized recommendations",
      "Redesign direction for one key moment",
      "A practical next-step plan",
    ],
    timeline: "1 week",
    collaborationStyle: "Mostly async, with 1 kickoff and 1 review call",
    investment: "Starting at $2,500",
  },
  {
    id: "core-flow-design-sprint",
    icon: "🚀",
    title: "Core Flow Design Sprint",
    subtitle: "design one high-impact journey",
    bestFor:
      "Teams that need one important flow designed clearly enough to test, present, or hand off for development.",
    deliverables: [
      "User flow for the selected journey",
      "Wireframes for key screens",
      "Polished high-fidelity UI",
      "Clickable prototype",
      "Handoff-ready design notes",
    ],
    timeline: "2–3 weeks",
    collaborationStyle: "1 kickoff, async check-ins, 1 final review",
    investment: "Starting at $5,000",
    badge: "Most Popular",
  },
  {
    id: "strategic-ux-sprint",
    icon: "🧭",
    title: "Strategic UX Sprint",
    subtitle: "product direction + selected redesign",
    bestFor:
      "Products with growing complexity that need stronger workflow structure, clearer prioritization, and a more coherent user experience.",
    deliverables: [
      "Workflow diagnosis and priority mapping",
      "Redesign of selected high-impact moments",
      "UX structure recommendations",
      "Pattern or component guidance",
      "Implementation direction for next steps",
    ],
    timeline: "3–4 weeks",
    collaborationStyle:
      "Limited, structured touchpoints with async collaboration between reviews",
    investment: "Starting at $7,500",
  },
];

export interface MiniReview {
  title: string;
  subtitle: string;
  bestFor: string;
  deliverables: string[];
  timeline: string;
  investment: string;
  creditNote: string;
}

export const miniReview: MiniReview = {
  title: "Mini UX Review",
  subtitle: "one screen, fast improvement",
  bestFor:
    "Landing pages, sign-up screens, quote steps, or one conversion-critical moment that needs fast improvement.",
  deliverables: [
    "Quick diagnostic review",
    "Top recommendations",
    "One revised direction or layout suggestion",
  ],
  timeline: "2–3 business days",
  investment: "Starting at $500",
  creditNote:
    "If we continue into a larger sprint, this can be credited toward the next engagement.",
};

export const bestFitSignals: string[] = [
  "Founders who need clarity fast",
  "Teams with one high-impact flow to improve",
  "Products with workflow complexity",
  "Teams comfortable with focused, async collaboration",
  "Startups that want thoughtful design without a bloated process",
];

export const notAFitSignals: string[] = [
  "You need daily design support",
  "You want an open-ended retainer",
  "You expect unlimited revisions",
  "You're only looking for surface-level visual polish",
  "You need a full-service agency model",
];

export { engagements as services };
