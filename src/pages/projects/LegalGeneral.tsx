import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Wrench, Menu, Smartphone, MousePointer, ShieldCheck, Activity, BarChart, MessageSquare } from 'lucide-react';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import FPOPlaceholder from '@/components/FPOPlaceholder';
import { projects } from '@/data/projects';

const LegalGeneral = () => {
    const project = projects.find(p => p.id === "legal-general");
    // Assuming the next project is Birder based on the text "View Next Case Study: RailBuild" (Wait, the text says RailBuild, but let's check the list logic later or just let it loop. Actually the request says "View Next Case Study: RailBuild", so let's try to set that if possible, otherwise default next)
    const nextProject = projects.find(p => p.id === "railbuild");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return <div>Project not found</div>;

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <CaseStudyLayout project={project} nextProject={nextProject} hideDefaultMetadata={true} hideDefaultHero={true} fullWidthContent={true}>
            <div className="bg-background text-foreground selection:bg-neon-cyan/30">
                <main>
                    {/* Hero Section */}
                    <section className="container mx-auto px-6 mb-20">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <motion.div {...fadeIn}>
                                <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5 px-4 py-1">
                                    Senior UX Designer
                                </Badge>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                                    Modernizing the Life Insurance Quote Engine
                                </h1>
                                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                    Redesigning a legacy quote engine to improve conversion rates and user trust through progressive disclosure.
                                </p>
                            </motion.div>
                        </div>

                        <div className="max-w-5xl mx-auto mb-12">
                            <motion.div {...fadeIn}>
                                <div className="rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 mb-6">
                                    <img
                                        src="/uxmillion-uploads/legal-general-hero.png"
                                        alt="Legal & General Quote Engine Redesign"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Snapshot */}
                        <motion.div
                            {...fadeIn}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border/50 max-w-5xl mx-auto"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center text-muted-foreground mb-1">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span className="text-sm font-medium uppercase tracking-wider">Timeline</span>
                                </div>
                                <p className="font-semibold text-lg">8 weeks</p>
                                <p className="text-sm text-muted-foreground">2w discovery + 4w design + 2w iteration</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center text-muted-foreground mb-1">
                                    <Users className="w-4 h-4 mr-2" />
                                    <span className="text-sm font-medium uppercase tracking-wider">Team</span>
                                </div>
                                <p className="font-semibold text-lg">Me (Lead UX)</p>
                                <p className="text-sm text-muted-foreground">Senior UX Architect, UX Director, 2 FE Developers</p>
                            </div>
                            <div className="space-y-2 col-span-2">
                                <div className="flex items-center text-muted-foreground mb-1">
                                    <Wrench className="w-4 h-4 mr-2" />
                                    <span className="text-sm font-medium uppercase tracking-wider">Scope</span>
                                </div>
                                <p className="font-semibold text-lg">CRO, IA Redesign, Canopy Design System Integration, Mobile-First Strategy</p>
                            </div>
                        </motion.div>
                    </section>

                    {/* 1. The Challenge */}
                    <section className="container mx-auto px-6 mb-24">
                        <div className="max-w-4xl mx-auto">
                            <motion.div {...fadeIn}>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8">The Challenge: A High-Friction Gateway</h2>
                                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                    Legal & General's legacy quote engine was a single-page form that acted as a significant barrier to lead generation. The experience was clinical, overwhelming users with over 10 dense input fields immediately upon landing.
                                </p>

                                <div className="grid md:grid-cols-3 gap-8 mb-12">
                                    <div className="bg-secondary/5 p-6 rounded-2xl border border-border/50">
                                        <Activity className="w-8 h-8 text-primary mb-4" />
                                        <h3 className="text-xl font-bold mb-2">Information Overload</h3>
                                        <p className="text-muted-foreground">Desktop users were forced to provide sensitive health data without established trust.</p>
                                    </div>
                                    <div className="bg-secondary/5 p-6 rounded-2xl border border-border/50">
                                        <Smartphone className="w-8 h-8 text-primary mb-4" />
                                        <h3 className="text-xl font-bold mb-2">Technical Failure on Mobile</h3>
                                        <p className="text-muted-foreground">On tablets and smartphones, the system keyboard routinely obscured input fields and the CTA.</p>
                                    </div>
                                    <div className="bg-secondary/5 p-6 rounded-2xl border border-border/50">
                                        <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                                        <h3 className="text-xl font-bold mb-2">Cognitive Load</h3>
                                        <p className="text-muted-foreground">The "all-at-once" approach felt like an interrogation rather than a helpful service.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* 2. Discovery */}
                    <section className="bg-secondary/5 py-24 mb-24 border-y border-border/30">
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl mx-auto">
                                <motion.div {...fadeIn}>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Discovery: Validating Friction with Data</h2>
                                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                        I conducted a deep-dive audit using Google Analytics to move beyond subjective design opinions and pinpoint exactly where the funnel was leaking.
                                    </p>

                                    <div className="space-y-12">
                                        <div className="grid md:grid-cols-2 gap-8 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">What the Data Revealed</h3>
                                                <ul className="space-y-4 text-lg text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                        <span><strong>The Mobile Gap:</strong> significant drop-off in conversion rates on mobile vs desktop.</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                        <span><strong>Input Bottlenecks:</strong> high exit rates at "Weight" and "Nicotine Use".</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                        <span><strong>Device Inconsistency:</strong> fragmented navigation confused returning users.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="space-y-6">
                                                <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2">
                                                    <img
                                                        src="/uxmillion-uploads/legal-general-original-audit.png"
                                                        alt="Original Legacy Form Audit"
                                                        className="w-full h-auto rounded-2xl"
                                                    />
                                                    <p className="text-sm text-center text-muted-foreground mt-2">Before: Cluttered single-page form with keyboard issues</p>
                                                </div>
                                                <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2">
                                                    <img
                                                        src="/uxmillion-uploads/legal-general-mobile-audit.png"
                                                        alt="Original Mobile Screenshots"
                                                        className="w-full h-auto rounded-2xl"
                                                    />
                                                    <p className="text-sm text-center text-muted-foreground mt-2">Mobile: Analyzing the cluttered form on Android vs iPhone</p>
                                                </div>
                                                <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2">
                                                    <img
                                                        src="/uxmillion-uploads/legal-general-analytics.png"
                                                        alt="Google Analytics Dashboard"
                                                        className="w-full h-auto rounded-2xl"
                                                    />
                                                    <p className="text-sm text-center text-muted-foreground mt-2">Data: 98% bounce rate on specific Android devices revealing the technical barrier</p>
                                                </div>
                                                <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2">
                                                    <img
                                                        src="/uxmillion-uploads/legal-general-hotjar-heatmap.png"
                                                        alt="Hotjar Heatmap Analysis"
                                                        className="w-full h-auto rounded-2xl"
                                                    />
                                                    <p className="text-sm text-center text-muted-foreground mt-2">Heatmap: Users struggled with field navigation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Strategy */}
                    <section className="container mx-auto px-6 mb-24">
                        <div className="max-w-4xl mx-auto">
                            <motion.div {...fadeIn}>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8">Strategy: From Data Entry to Conversation</h2>
                                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                    To solve these friction points, I reimagined the information architecture (IA) by shifting to a progressive disclosure model.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6 mb-12">
                                    <div className="p-6 rounded-2xl border border-border/50">
                                        <MessageSquare className="w-8 h-8 text-primary mb-4" />
                                        <h3 className="text-xl font-bold mb-2">Conversational Language</h3>
                                        <p className="text-muted-foreground">"Birth Date" → "When is your birthday?"</p>
                                    </div>
                                    <div className="p-6 rounded-2xl border border-border/50">
                                        <Menu className="w-8 h-8 text-primary mb-4" />
                                        <h3 className="text-xl font-bold mb-2">Logical Staging</h3>
                                        <p className="text-muted-foreground">Health Info → Strategy → Quote Results → Contact</p>
                                    </div>
                                    <div className="p-6 rounded-2xl border border-border/50">
                                        <BarChart className="w-8 h-8 text-primary mb-4" />
                                        <h3 className="text-xl font-bold mb-2">The "Value Exchange"</h3>
                                        <p className="text-muted-foreground">Provide quote estimate before lead collection to build trust.</p>
                                    </div>
                                </div>

                                <div className="space-y-6 mb-12">
                                    <h3 className="text-xl font-bold">Early Sketches & Iterations</h3>
                                    <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2">
                                        <img
                                            src="/uxmillion-uploads/legal-general-wireframe-iterations.png"
                                            alt="Hand-drawn Wireframe Sketches"
                                            className="w-full h-auto rounded-2xl"
                                        />
                                        <p className="text-sm text-center text-muted-foreground mt-2">Initial paper prototypes exploring field grouping and flow.</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold">The Evolution of the Information Architecture</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="rounded-2xl overflow-hidden border border-border/50 bg-background p-2">
                                            <img src="/uxmillion-uploads/legal-general-ia-original.png" alt="Original IA" className="w-full h-auto rounded-xl" />
                                            <p className="text-xs text-center text-muted-foreground mt-1">Original Structure</p>
                                        </div>
                                        <div className="rounded-2xl overflow-hidden border border-border/50 bg-background p-2">
                                            <img src="/uxmillion-uploads/legal-general-ia-v1-v2.png" alt="IA V1 & V2" className="w-full h-auto rounded-xl" />
                                            <p className="text-xs text-center text-muted-foreground mt-1">Iterations 1 & 2</p>
                                        </div>
                                        <div className="rounded-2xl overflow-hidden border border-border/50 bg-background p-2">
                                            <img src="/uxmillion-uploads/legal-general-ia-v3-v4.png" alt="IA V3 & V4" className="w-full h-auto rounded-xl" />
                                            <p className="text-xs text-center text-muted-foreground mt-1">Iterations 3 & 4</p>
                                        </div>
                                        <div className="rounded-2xl overflow-hidden border border-border/50 bg-background p-2">
                                            <img src="/uxmillion-uploads/legal-general-ia-diagram.png" alt="Final IA Diagram" className="w-full h-auto rounded-xl" />
                                            <p className="text-xs text-center text-muted-foreground mt-1">Final Flow</p>
                                        </div>
                                    </div>
                                    <p className="text-center text-sm text-muted-foreground">We iterated through 5 major versions of the flow to find the perfect balance of granularity and speed.</p>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* 4. Key Design Decisions */}
                    <section className="bg-secondary/5 py-24 mb-24 border-y border-border/30">
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl mx-auto">
                                <motion.div {...fadeIn}>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Key Design Decisions & Tradeoffs</h2>

                                    <div className="space-y-12">
                                        <div className="grid md:grid-cols-[1fr_2fr] gap-8 border-b border-border/30 pb-12">
                                            <h3 className="text-2xl font-bold text-primary">Progressive Disclosure vs. One-Page</h3>
                                            <div>
                                                <p className="text-lg font-semibold mb-2">The Tradeoff</p>
                                                <p className="text-muted-foreground mb-4">One-page is fast, but mobile users were abandoning due to overwhelm.</p>
                                                <p className="text-lg font-semibold mb-2">The Result</p>
                                                <p className="text-muted-foreground">Four stages created momentum. "Small commitments" rather than a daunting task.</p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-[1fr_2fr] gap-8 border-b border-border/30 pb-12">
                                            <h3 className="text-2xl font-bold text-primary">Sliders vs. Text Inputs</h3>
                                            <div>
                                                <p className="text-lg font-semibold mb-2">The Tradeoff</p>
                                                <p className="text-muted-foreground mb-4">Sliders are engaging but less precise. We allowed manual overrides.</p>
                                                <p className="text-lg font-semibold mb-2">The Result</p>
                                                <p className="text-muted-foreground">Users reported sliders felt "easier and more natural." No increase in data errors.</p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                                            <h3 className="text-2xl font-bold text-primary">Showing Quotes Before Lead Capture</h3>
                                            <div>
                                                <p className="text-lg font-semibold mb-2">The Tradeoff</p>
                                                <p className="text-muted-foreground mb-4">Sales worried about volume. I argued for quality.</p>
                                                <p className="text-lg font-semibold mb-2">The Resolution</p>
                                                <p className="text-muted-foreground">Client accepted based on competitive benchmarking and promise of qualified leads.</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* 5. Design System */}
                    <section className="container mx-auto px-6 mb-24">
                        <div className="max-w-4xl mx-auto">
                            <motion.div {...fadeIn}>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8">Design System & Brand Integration</h2>
                                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                    I ensured the solution was technically scalable and brand-aligned by strictly adhering to the Canopy design language (Legal & General's design system).
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-12">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">System Thinking</h3>
                                        <ul className="space-y-4 text-muted-foreground">
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Component Compliance:</strong> Mapped to Canopy's coding base for seamless handoff.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Visual Trust:</strong> Leveraged core brand palette (L&G Blue) for stability.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Touch-Optimized:</strong> Target sizes increased from 32px to 48px minimum.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2">
                                            <img
                                                src="/uxmillion-uploads/legal-general-lofi-hifi.png"
                                                alt="Low-Fi to Hi-Fi Progression"
                                                className="w-full h-auto rounded-2xl"
                                            />
                                            <p className="text-sm text-center text-muted-foreground mt-2">From Wireframes to High-Fidelity Canopy Components</p>
                                        </div>
                                        <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2">
                                            <img
                                                src="/uxmillion-uploads/legal-general-canopy-guidelines.png"
                                                alt="Canopy Design System Guidelines"
                                                className="w-full h-auto rounded-2xl"
                                            />
                                            <p className="text-sm text-center text-muted-foreground mt-2">Canopy Design System: Standardizing components for consistency</p>
                                        </div>
                                        <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2">
                                            <img
                                                src="/uxmillion-uploads/legal-general-form-controls.png"
                                                alt="New Form Controls System"
                                                className="w-full h-auto rounded-2xl"
                                            />
                                            <p className="text-sm text-center text-muted-foreground mt-2">Updated Form Controls: Defining interaction states for accessibility and clarity.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>


                    {/* 6. Iterative Prototyping */}
                    <section className="bg-secondary/5 py-24 mb-24 border-y border-border/30">
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl mx-auto">
                                <motion.div {...fadeIn}>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Iterative Prototyping & Collaboration</h2>
                                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                        We developed two distinct prototyping directions. After stakeholder review and internal testing, we moved forward with v2 (interactive-driven) as it better balanced efficiency with user confidence.
                                    </p>

                                    <div className="flex justify-center mb-12">
                                        <a
                                            href="https://www.figma.com/proto/VxUwGI4cS8ePDMZBP8cPSI/LGA-audit?page-id=0%3A1&node-id=418-854&p=f&viewport=-2413%2C-482%2C0.07&t=B1CJ1Hlcaqt80cCR-1&scaling=contain&content-scaling=fixed&starting-point-node-id=418%3A854&show-proto-sidebar=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                                        >
                                            <MousePointer className="w-5 h-5" />
                                            View Interactive Prototype on Figma
                                        </a>
                                    </div>

                                    <div className="mb-12">
                                        <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2">
                                            <img
                                                src="/uxmillion-uploads/legal-general-hifi-prototype.png"
                                                alt="Hi-Fi Progression to Clickable Prototype"
                                                className="w-full h-auto rounded-2xl"
                                            />
                                            <p className="text-sm text-center text-muted-foreground mt-2">Hi-Fi progression generating a clickable prototype</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center mb-12">
                                        <a
                                            href="https://www.figma.com/proto/VxUwGI4cS8ePDMZBP8cPSI/LGA-audit?page-id=0%3A1&node-id=418-854&p=f&viewport=-2413%2C-482%2C0.07&t=B1CJ1Hlcaqt80cCR-1&scaling=contain&content-scaling=fixed&starting-point-node-id=418%3A854&show-proto-sidebar=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                                        >
                                            <MousePointer className="w-5 h-5" />
                                            View Interactive Prototype on Figma
                                        </a>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="p-6 rounded-2xl bg-background border border-border/50">
                                            <Users className="w-6 h-6 text-primary mb-3" />
                                            <h3 className="font-bold mb-2">Stakeholder Management</h3>
                                            <p className="text-sm text-muted-foreground">Weekly reviews with UX Director to ensure strategic alignment.</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-background border border-border/50">
                                            <Users className="w-6 h-6 text-primary mb-3" />
                                            <h3 className="font-bold mb-2">Peer Review</h3>
                                            <p className="text-sm text-muted-foreground">Collaborated with Senior UX Architect to pressure-test interaction models.</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-background border border-border/50">
                                            <MousePointer className="w-6 h-6 text-primary mb-3" />
                                            <h3 className="font-bold mb-2">Version Testing</h3>
                                            <p className="text-sm text-muted-foreground">Validated "interactive" vs "focus-driven" approaches.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* 7. Design Principles */}
                    <section className="container mx-auto px-6 mb-24">
                        <div className="max-w-4xl mx-auto">
                            <motion.div {...fadeIn}>
                                <h2 className="text-3xl md:text-5xl font-bold mb-12">Design Principles That Guided This Work</h2>
                                <div className="space-y-4">
                                    {[
                                        "Trust Before Transaction — Provide value (quote estimate) before asking for contact info",
                                        "Progressive Disclosure Over Cognitive Load — One question at a time beats 10 at once",
                                        "Mobile-First, Always — Design for the smallest screen, then scale up",
                                        "Natural Language > Form Labels — 'When's your birthday?' beats 'DOB (MM/DD/YYYY)'",
                                        "Component Reusability — Every UI element mapped to Canopy for scale"
                                    ].map((principle, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border/30 hover:bg-secondary/10 transition-colors">
                                            <span className="text-2xl font-bold text-primary/40">{i + 1}</span>
                                            <span className="text-lg font-medium">{principle}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* 8. The Final Solution */}
                    <section className="bg-secondary/5 py-24 mb-24 border-y border-border/30">
                        <div className="container mx-auto px-6">
                            <div className="max-w-5xl mx-auto">
                                <motion.div {...fadeIn}>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-8">The Final Solution</h2>
                                    <p className="text-xl text-muted-foreground mb-12">
                                        The redesigned quote engine transformed a daunting administrative task into a streamlined, guided journey that respected users' time and built trust through transparency.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                                        <ul className="space-y-4 text-lg text-muted-foreground">
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Four-Stage Progressive Flow:</strong> Health Info → Strategy → Quote Results → Contact</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Conversational UI:</strong> Natural language questions that feel human.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Touch-Optimized Controls:</strong> Sliders and toggle cards for mobile.</span>
                                            </li>
                                        </ul>
                                        <ul className="space-y-4 text-lg text-muted-foreground">
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Value-First Approach:</strong> Show quote estimates before requesting contact info.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Responsive Design:</strong> Seamless from mobile (320px) to desktop.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Canopy-Compliant:</strong> Full design system integration.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2">
                                            <img
                                                src="/uxmillion-uploads/legal-general-mobile-screens.png"
                                                alt="Mobile Quote Engine Screens"
                                                className="w-full h-auto rounded-2xl"
                                            />
                                            <p className="text-sm text-center text-muted-foreground mt-2">Mobile Progressive Disclosure Flow</p>
                                        </div>
                                        <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2">
                                            <img
                                                src="/uxmillion-uploads/legal-general-mobile-keyboard-solved.png"
                                                alt="Mobile Keyboard Solution"
                                                className="w-full h-auto rounded-2xl"
                                            />
                                            <p className="text-sm text-center text-muted-foreground mt-2">Solving the viewport issue: The "Next" CTA is now permanently visible above the keyboard.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* 9. Outcome */}
                    <section className="container mx-auto px-6 mb-24">
                        <motion.div
                            {...fadeIn}
                            className="max-w-4xl mx-auto p-12 rounded-[2.5rem] bg-secondary/10 border border-primary/10"
                        >
                            <h2 className="text-3xl font-bold mb-6">Outcome: Validated Through Longevity</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Post-launch conversion data remained confidential due to client NDA, but the client's decision to keep the redesign live for over a year in a regulated, high-stakes environment speaks to its effectiveness.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-primary">What We Achieved</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-3">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span>Eliminated mobile keyboard overlap (100% visibility)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span>Reduced cognitive load (10+ fields → 4 stages)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span>Increased user confidence via upfront quotes</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span>Enterprise adoption of Canopy components</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-primary">Process Impact</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-3">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span>Increased touch target sizes (32px → 48px)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span>Mapped to Canopy design system</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span>Zero rollback requests in 12+ months</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* 10. Reflection */}
                    <section className="container mx-auto px-6 mb-32">
                        <div className="max-w-4xl mx-auto">
                            <motion.div {...fadeIn}>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8">Reflection</h2>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">What I'd Do Differently</h3>
                                        <ul className="space-y-4 text-muted-foreground">
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Instrument Analytics Earlier:</strong> Set up event tracking for each stage to validate drop-off.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Test Alternative Key Formats:</strong> A/B test comparison table vs card-based results.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Explore Voice UI:</strong> For users uncomfortable typing health data on small screens.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">What This Taught Me</h3>
                                        <ul className="space-y-4 text-muted-foreground">
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span>The importance of negotiating metric access in the SOW.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span>How to balance brand compliance with innovation.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span>Sometimes the best design is the one that gets out of the user's way.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                </main >
            </div >
        </CaseStudyLayout >
    );
};

export default LegalGeneral;
