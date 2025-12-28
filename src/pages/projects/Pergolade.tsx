import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Users, Wrench, Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';
import { useEffect } from 'react';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ProjectNav from '@/components/ProjectNav';

const Pergolade = () => {
    const navigate = useNavigate();
    const project = projects.find(p => p.id === "pergolade");
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
        <div className="min-h-screen bg-background text-foreground selection:bg-neon-cyan/30">
            <main className="pt-24 pb-16">
                <ProjectNav />

                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-20">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <motion.div {...fadeIn}>
                            <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5 px-4 py-1">
                                Lead UX Designer (end-to-end)
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                                Pergolade Blade Pro
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Redefining a premium configurator-led buying journey across desktop + mobile
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 mb-20"
                    >
                        <img
                            src="/lovable-uploads/pergolade-sunset-hero.png"
                            alt="Pergolade Blade Pro Homepage"
                            className="w-full h-full object-cover object-top scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                    </motion.div>

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
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center text-muted-foreground mb-1">
                                <Users className="w-4 h-4 mr-2" />
                                <span className="text-sm font-medium uppercase tracking-wider">Team</span>
                            </div>
                            <p className="font-semibold text-lg">Me (UX/UI) + 1 Developer + Owner/Stakeholder</p>
                        </div>
                        <div className="space-y-2 col-span-2">
                            <div className="flex items-center text-muted-foreground mb-1">
                                <Wrench className="w-4 h-4 mr-2" />
                                <span className="text-sm font-medium uppercase tracking-wider">Scope / Deliverables</span>
                            </div>
                            <p className="font-semibold text-lg">Information architecture + flows, responsive UI patterns, component specs, handoff assets</p>
                        </div>
                    </motion.div>
                </section>

                {/* Context & Challenge */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-4xl mx-auto">
                        <motion.div {...fadeIn}>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Context</h2>
                            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                Pergolade sells premium outdoor pergola systems with lots of customizable options. The existing digital experience didn't feel as premium as the product—and the buying journey made it easy for users to get lost in options before they felt confident.
                            </p>

                            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Challenge</h2>
                            <ul className="space-y-4 text-lg text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Product options (size, finish, add-ons) were easy to misinterpret without a guided structure</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Inspiration, specs, and commerce competed with each other, creating friction</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>The configurator needed to stay clear and usable on mobile—not just "shrink down"</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Goals */}
                <section className="bg-secondary/5 py-24 mb-24 border-y border-border/30">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <motion.div {...fadeIn}>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8">Goals</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-background border border-border/50">
                                        <span className="text-4xl font-bold text-primary">01</span>
                                        <p className="mt-3 text-lg">Make the buying journey feel confident, guided, and premium</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-background border border-border/50">
                                        <span className="text-4xl font-bold text-primary">02</span>
                                        <p className="mt-3 text-lg">Help users understand choices <em>as they configure</em> (not after the fact)</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-background border border-border/50">
                                        <span className="text-4xl font-bold text-primary">03</span>
                                        <p className="mt-3 text-lg">Reduce confusion through clearer information hierarchy and section flow</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-background border border-border/50">
                                        <span className="text-4xl font-bold text-primary">04</span>
                                        <p className="mt-3 text-lg">Ensure the configurator is responsive and usable on mobile</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>



                {/* Process */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-4xl mx-auto">
                        <motion.div {...fadeIn}>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Process (pragmatic + execution-driven)</h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Because formal customer research wasn't available, I focused on a pragmatic, execution-driven approach:
                            </p>
                            <ul className="space-y-4 text-lg text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Stakeholder working sessions</strong> (owner-led product knowledge + business priorities)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>UX + content audit</strong> of existing sections and the buying flow</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Competitive scan</strong> of premium DTC configuration patterns</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Flow mapping</strong> to reduce steps, ambiguity, and dead ends</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Rapid iteration</strong> with owner feedback + feasibility checks with the developer</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Information Architecture */}
                <section className="bg-secondary/5 py-24 mb-24 border-y border-border/30">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <motion.div {...fadeIn} className="mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Information Architecture</h2>
                                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                                    I reorganized the experience to match how a buyer thinks and decides:
                                </p>
                                <p className="text-lg text-primary font-semibold mt-4">
                                    Inspiration → What it is → Key benefits → Configure → Proof/Details → CTA
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <motion.div
                                    {...fadeIn}
                                    className="rounded-3xl overflow-hidden border border-border/50 bg-background p-2 shadow-xl"
                                >
                                    <img src="/lovable-uploads/pergolade-ia-flow-reorganized.png" alt="Page Sections Flow" className="w-full h-auto rounded-2xl" />
                                </motion.div>
                                <motion.div
                                    {...fadeIn}
                                    transition={{ delay: 0.2 }}
                                    className="rounded-3xl overflow-hidden border border-border/50 bg-background p-2 shadow-xl"
                                >
                                    <img src="/lovable-uploads/pergolade-lifestyle-flow.png" alt="Lifestyle Flow" className="w-full h-auto rounded-2xl" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core UX Work: Configurator */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-5xl mx-auto">
                        <motion.div {...fadeIn} className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Core UX work: The Digital Configurator</h2>
                            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                                The product is complex, so the UI needed to feel simple. I designed the configurator around:
                            </p>
                            <ul className="space-y-3 text-lg text-muted-foreground max-w-3xl">
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Clear decision steps</strong> (finish → size → add-ons)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Immediate feedback</strong> so users understand impact as they choose</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Consistency across platforms</strong> (desktop clarity, mobile comfort)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Reduced cognitive load</strong> via spacing, grouping, and progressive detail</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2 mb-8"
                        >
                            <div className="bg-muted/30 rounded-2xl overflow-hidden aspect-[16/10]">
                                <img src="/lovable-uploads/pergolade-config-desktop.png" alt="Desktop Configurator" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex items-center gap-2 text-sm text-muted-foreground">
                                <Monitor className="w-4 h-4" /> Desktop Experience
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.2 }}
                                className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2"
                            >
                                <div className="bg-muted/30 rounded-2xl overflow-hidden aspect-[9/19]">
                                    <img src="/lovable-uploads/pergolade-config-mobile.png" alt="Mobile Configurator - Selection" className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4 flex items-center gap-2 text-sm text-muted-foreground">
                                    <Smartphone className="w-4 h-4" /> Smart Formatting
                                </div>
                            </motion.div>
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.3 }}
                                className="rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-background p-2"
                            >
                                <div className="bg-muted/30 rounded-2xl overflow-hidden aspect-[9/19]">
                                    <img src="/lovable-uploads/pergolade-config-mobile-size.jpg" alt="Mobile Configurator - Sizing" className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4 flex items-center gap-2 text-sm text-muted-foreground">
                                    <Smartphone className="w-4 h-4" /> Clear Decision Points
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* AR Experience */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-5xl mx-auto">
                        <motion.div {...fadeIn} className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Bringing Designs to Life: AR Experience</h2>
                            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                                To bridge the gap between digital configuration and physical reality, we implemented an Augmented Reality feature. Users can seamlessly transition from designing on desktop to visualizing their custom pergola in their actual backyard.
                            </p>
                            <ul className="space-y-3 text-lg text-muted-foreground max-w-3xl">
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Seamless Handoff:</strong> A dynamic QR code carries the exact configuration to mobile</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Real-Time Visualization:</strong> View size, colors, and shadows in the real environment</span>
                                </li>
                            </ul>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Step 1: Scan */}
                            <motion.div
                                {...fadeIn}
                                className="rounded-3xl overflow-hidden border border-border/50 bg-background p-2 shadow-xl"
                            >
                                <img src="/lovable-uploads/pergolade-ar-qr-desktop.png" alt="Desktop QR Code Modal" className="w-full h-auto rounded-2xl" />
                                <div className="p-4 flex items-center gap-2 text-sm text-muted-foreground justify-center">
                                    <Monitor className="w-4 h-4" /> 1. Scan to Switch
                                </div>
                            </motion.div>

                            {/* Step 2: Mobile Entry */}
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.1 }}
                                className="rounded-3xl overflow-hidden border border-border/50 bg-background p-2 shadow-xl"
                            >
                                <img src="/lovable-uploads/pergolade-ar-view-button.jpg" alt="Mobile AR Launch" className="w-full h-auto rounded-2xl" />
                                <div className="p-4 flex items-center gap-2 text-sm text-muted-foreground justify-center">
                                    <Smartphone className="w-4 h-4" /> 2. One-Tap Launch
                                </div>
                            </motion.div>

                            {/* Step 3: Calibrate */}
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.2 }}
                                className="rounded-3xl overflow-hidden border border-border/50 bg-background p-2 shadow-xl"
                            >
                                <img src="/lovable-uploads/pergolade-ar-mobile-start.jpg" alt="Mobile AR Calibration" className="w-full h-auto rounded-2xl" />
                                <div className="p-4 flex items-center gap-2 text-sm text-muted-foreground justify-center">
                                    <Smartphone className="w-4 h-4" /> 3. Calibrate Space
                                </div>
                            </motion.div>

                            {/* Step 4: Visualise */}
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.3 }}
                                className="rounded-3xl overflow-hidden border border-border/50 bg-background p-2 shadow-xl"
                            >
                                <img src="/lovable-uploads/pergolade-ar-ui-frame.png" alt="Active AR Visualization" className="w-full h-auto rounded-2xl" />
                                <div className="p-4 flex items-center gap-2 text-sm text-muted-foreground justify-center">
                                    <Smartphone className="w-4 h-4" /> 4. Visualize Live
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.4 }}
                            className="rounded-3xl overflow-hidden border border-border/50 bg-background p-2 shadow-xl"
                        >
                            <img src="/lovable-uploads/pergolade-ar-context.png" alt="AR Visualization in Context" className="w-full h-auto rounded-2xl" />
                            <div className="p-4 flex items-center gap-2 text-sm text-muted-foreground justify-center">
                                <span className="font-semibold text-primary">Result:</span> Confidence in the final purchase
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content + UI decisions */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-5xl mx-auto">
                        <motion.div {...fadeIn} className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Content + UI decisions that made it feel premium</h2>
                            <ul className="space-y-3 text-lg text-muted-foreground max-w-3xl">
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>More breathing room</strong> and fewer competing elements per section</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Stronger hierarchy:</strong> headings that orient, subtext that explains, UI that guides</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Benefit-first microcopy</strong> to keep language buyer-friendly (not spec-heavy)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Repeatable components</strong> so the system can scale across future products</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            className="rounded-3xl overflow-hidden border border-border/50 bg-background p-2 shadow-xl"
                        >
                            <img src="/lovable-uploads/pergolade-ui-board.png" alt="Figma Layouts - Desktop and Mobile" className="w-full h-auto rounded-2xl" />
                        </motion.div>
                    </div>
                </section>

                {/* Iterations */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-5xl mx-auto">
                        <motion.div {...fadeIn} className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Iterations</h2>
                            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                                Before landing on the final direction, I explored multiple visual treatments to balance:
                            </p>
                            <ul className="space-y-4 text-lg text-muted-foreground mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Architectural precision</strong> (clean structure, confident hierarchy)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Lifestyle warmth</strong> (aspirational visuals that match the premium product)</span>
                                </li>
                            </ul>
                            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                                These explorations helped us converge on a layout that communicates value fast and supports decision-making.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                {...fadeIn}
                                className="rounded-3xl overflow-hidden border border-border/50 bg-background p-2 shadow-xl"
                            >
                                <img src="/lovable-uploads/pergolade-iteration-1.jpg" alt="Design Iteration - Exploration 1" className="w-full h-auto rounded-2xl" />
                                <div className="p-4 text-center text-sm text-muted-foreground">
                                    <span className="font-semibold block mb-1">Exploration A</span>
                                    Testing a moodier, cinematic lighting approach
                                </div>
                            </motion.div>
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.2 }}
                                className="rounded-3xl overflow-hidden border border-border/50 bg-background p-2 shadow-xl"
                            >
                                <img src="/lovable-uploads/pergolade-iteration-2.jpg" alt="Design Iteration - Exploration 2" className="w-full h-auto rounded-2xl" />
                                <div className="p-4 text-center text-sm text-muted-foreground">
                                    <span className="font-semibold block mb-1">Exploration B</span>
                                    Refining the connection between nature and structure
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Final Design Highlight */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-5xl mx-auto">
                        <motion.div {...fadeIn} className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Final Design Highlight</h2>
                            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                                A focused view of how the product presentation supports configuration decisions.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            className="rounded-3xl overflow-hidden border border-border/50 bg-background p-2 shadow-xl"
                        >
                            <img src="/lovable-uploads/pergolade-hero-render.png" alt="Blade Pro Product View" className="w-full h-auto rounded-2xl" />
                        </motion.div>
                    </div>
                </section>

                {/* Collaboration + Delivery */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-4xl mx-auto">
                        <motion.div {...fadeIn}>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Collaboration + delivery</h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                This project was highly collaborative with the owner, so I structured work around fast alignment and clean handoffs:
                            </p>
                            <ul className="space-y-4 text-lg text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Weekly working sessions to confirm priorities and messaging</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Design iterations paired with feasibility checks from the developer</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Component specs + behavior notes for implementation</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Responsive rules to ensure consistent UX across breakpoints</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Outcome */}
                <section className="container mx-auto px-6 mb-24">
                    <motion.div
                        {...fadeIn}
                        className="max-w-4xl mx-auto p-12 rounded-[2.5rem] bg-secondary/10 border border-primary/10"
                    >
                        <h2 className="text-3xl font-bold mb-6">Outcome (qualitative)</h2>
                        <ul className="space-y-4 text-lg text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span>A more premium-feeling page structure that guides users through decisions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span>Clearer configuration steps that reduce "guessing" and improve confidence</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span>A responsive configurator layout that maintains clarity on mobile</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span>A scalable section + component system that can be reused for future products</span>
                            </li>
                        </ul>
                    </motion.div>
                </section>

                {/* What I'd Do Next */}
                <section className="container mx-auto px-6 mb-32">
                    <div className="max-w-4xl mx-auto">
                        <motion.div {...fadeIn}>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">What I'd do next</h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                If I extended the project:
                            </p>
                            <ul className="space-y-4 text-lg text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Run lightweight validation (5–8 sessions) focused on comprehension + decision points</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Instrument key events (step completion, drop-off, add-to-cart intent)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Iterate based on behavior data plus support/sales feedback</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Next Project Navigation */}
                {nextProject && (
                    <div className="container mx-auto px-6 mt-32 max-w-4xl">
                        <div className="text-center mb-12">
                            <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4 font-bold">Continue Exploring</p>
                            <h3 className="text-4xl font-bold">{nextProject.title}</h3>
                        </div>

                        <Link to={nextProject.caseStudyUrl} className="block group relative overflow-hidden rounded-[2.5rem] aspect-[21/9] border border-border/50 shadow-2xl">
                            {nextProject.video ? (
                                <video
                                    src={nextProject.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <img
                                    src={nextProject.image}
                                    alt={nextProject.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center group-hover:bg-black/30 transition-all duration-500">
                                <Badge className="mb-4 bg-primary/20 backdrop-blur-md border-primary/30 text-white">Next Project</Badge>
                                <Button size="lg" className="rounded-full gap-2 px-8 py-6 text-lg hover:scale-105 transition-transform bg-primary text-primary-foreground">
                                    View RailBuild <ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>
                        </Link>
                    </div>
                )}
            </main>

            <Footer />
        </div >
    );
};

export default Pergolade;
