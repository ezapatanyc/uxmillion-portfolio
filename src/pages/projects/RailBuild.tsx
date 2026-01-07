import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Users, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { useEffect } from 'react';
import Footer from '@/components/Footer';
import ProjectNav from '@/components/ProjectNav';
import Contact from '@/components/Contact';


const RailBuild = () => {
    const navigate = useNavigate();
    const project = projects.find(p => p.id === "railbuild");
    const nextProject = projects.find(p => p.id === "fidemdd");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return <div>Project not found</div>;

    const projectServices = project.servicesUsed
        ? services.filter(s => project.servicesUsed?.includes(s.id))
        : [];

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-neon-cyan/30">
            <main className="pt-24 pb-16">
                <ProjectNav />

                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-16 md:mb-24">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5">
                            {project.role.replace('Role: ', '')}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                            {project.subtitle || project.description}
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
                        <img
                            src="/lovable-uploads/railbuild-new-hero.png"
                            alt="RailBuild Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                    </div>
                </section>

                {/* Project Metadata */}
                <section className="container mx-auto px-6 mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/50 max-w-5xl mx-auto">
                        {project.timeline && (
                            <div className="space-y-2">
                                <div className="flex items-center text-muted-foreground mb-1">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span className="text-sm font-medium uppercase tracking-wider">Timeline</span>
                                </div>
                                <p className="font-semibold">{project.timeline}</p>
                            </div>
                        )}
                        {project.team && (
                            <div className="space-y-2">
                                <div className="flex items-center text-muted-foreground mb-1">
                                    <Users className="w-4 h-4 mr-2" />
                                    <span className="text-sm font-medium uppercase tracking-wider">Team</span>
                                </div>
                                <p className="font-semibold">{project.team}</p>
                            </div>
                        )}
                        <div className="space-y-2 col-span-2">
                            <div className="flex items-center text-muted-foreground mb-1">
                                <Wrench className="w-4 h-4 mr-2" />
                                <span className="text-sm font-medium uppercase tracking-wider">Services</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {projectServices.length > 0 ? (
                                    projectServices.map(service => (
                                        <Badge key={service.id} variant="secondary" className="hover:bg-secondary/80">
                                            {service.title}
                                        </Badge>
                                    ))
                                ) : (
                                    <span className="text-sm">UX Design</span>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <div className="container mx-auto px-6 max-w-4xl space-y-24">

                    {/* Overview */}
                    <section className="space-y-6 max-w-3xl">
                        <h2 className="text-2xl font-bold text-primary">Overview</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            RailBuild designs and manufactures premium rail systems. The website had to serve <strong>three different audiences</strong> with very different needs—without overwhelming anyone or hiding critical specs.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            In a tight three-week window, I led a UX overhaul that clarified navigation, secured fast access to specs for pros, and created a guided "Quote Request" path that reduced drop-offs.
                        </p>
                    </section>

                    {/* The Challenge */}
                    <section className="space-y-6 max-w-3xl">
                        <h2 className="text-2xl font-bold text-primary">The Challenge</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            RailBuild’s existing site was confusing for its three core user groups:
                        </p>
                        <ul className="space-y-4 text-lg text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span><strong>Homeowners</strong> needed inspiration and plain-language guidance to request a quote confidently</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span><strong>Architects</strong> needed fast access to specs, details, and documentation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span><strong>Contractors</strong> needed product clarity, options, and a straightforward path to pricing/quotes</span>
                            </li>
                        </ul>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
                            <strong>Key friction points:</strong> Hard-to-find technical docs, competing content (marketing vs. specs), and a "Request a Quote" flow that lacked context.
                        </p>
                    </section>

                    {/* Visual Experience */}
                    {project.video && (
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-primary">Visual Experience</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                A cleaner, more modern presentation helped align the digital experience with RailBuild’s premium product quality.
                            </p>
                            <div className="rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover scale-110"
                                />
                            </div>
                        </section>
                    )}

                    {/* My Role */}
                    <section className="space-y-6 max-w-3xl">
                        <h2 className="text-2xl font-bold text-primary">My Role (Senior UX Focus)</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            I led the UX direction end-to-end:
                        </p>
                        <ul className="space-y-4 text-lg text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span><strong>IA + Nav Model:</strong> Rebuilt structure to support three distinct audience pathways</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span><strong>Page Template System:</strong> Designed responsive templates for scannability and scale</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span><strong>Resource Hub Structure:</strong> Centralized easier access to specs for professionals</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span><strong>Quote Entry Pattern:</strong> Created a contextual, low-friction entry point for leads</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span><strong>Handoff Specs:</strong> Delivered states, behaviors, and edge cases for dev</span>
                            </li>
                        </ul>
                    </section>

                    {/* Process */}
                    <section className="space-y-8">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold text-primary mb-6">Process (3-week sprint)</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                                Because timeline was aggressive, I ran a structured sprint approach:
                            </p>
                            <p className="text-sm text-muted-foreground italic">
                                Constraints: 3-week timeline, existing CMS/content, engineering capacity, and stakeholder review cadence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-secondary/5 border border-border/50">
                                <span className="text-4xl font-bold text-primary mb-4 block">01</span>
                                <h3 className="text-xl font-semibold mb-3">Audit + Alignment</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Rapid content/UX audit</li>
                                    <li>• Stakeholder goal sessions</li>
                                    <li>• Content + brand alignment reviews (Marketing)</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl bg-secondary/5 border border-border/50">
                                <span className="text-4xl font-bold text-primary mb-4 block">02</span>
                                <h3 className="text-xl font-semibold mb-3">Architecture + Flows</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Defined top-level IA</li>
                                    <li>• Persona-based pathways</li>
                                    <li>• Sticky flow mapping</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl bg-secondary/5 border border-border/50">
                                <span className="text-4xl font-bold text-primary mb-4 block">03</span>
                                <h3 className="text-xl font-semibold mb-3">Design + Handoff</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Key template design</li>
                                    <li>• Component patterns</li>
                                    <li>• Dev feasibility syncs</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Personas */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-primary">User Personas</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We aligned the experience around three clear audiences and what “success” looks like for each one.
                        </p>
                        <div className="rounded-3xl overflow-hidden border border-border/50 bg-secondary/5 shadow-lg">
                            <img
                                src="/lovable-uploads/railbuild-personas.png"
                                alt="Railbuild User Personas"
                                className="w-full h-auto"
                            />
                        </div>
                    </section>

                    {/* Information Architecture */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-primary">Information Architecture & Sitemap</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I restructured the IA to reduce ambiguity and help each audience self-select quickly.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="rounded-3xl overflow-hidden border border-border/50 bg-secondary/5 shadow-lg p-2">
                                    <img
                                        src="/lovable-uploads/railbuild-sitemap.png"
                                        alt="Railbuild Product Structure"
                                        className="w-full h-auto rounded-2xl"
                                    />
                                </div>
                                <p className="text-sm font-medium text-center text-muted-foreground">Product Structure</p>
                            </div>
                            <div className="space-y-3">
                                <div className="rounded-3xl overflow-hidden border border-border/50 bg-secondary/5 shadow-lg p-2">
                                    <img
                                        src="/lovable-uploads/railbuild-marketing-sitemap.png"
                                        alt="Marketing Content Structure"
                                        className="w-full h-auto rounded-2xl"
                                    />
                                </div>
                                <p className="text-sm font-medium text-center text-muted-foreground">Marketing & Content</p>
                            </div>
                        </div>
                    </section>

                    {/* User Flows */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-primary">User Flows</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Clear pathways reduced friction and made the site feel “guided” instead of “dense.”
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="space-y-3">
                                <div className="rounded-2xl overflow-hidden border border-border/50 bg-secondary/5 shadow-md">
                                    <img src="/lovable-uploads/railbuild-flow-homeowner.png" alt="Homeowner Flow" className="w-full h-auto" />
                                </div>
                                <p className="text-sm font-medium text-center">Homeowner Journey</p>
                            </div>
                            <div className="space-y-3">
                                <div className="rounded-2xl overflow-hidden border border-border/50 bg-secondary/5 shadow-md">
                                    <img src="/lovable-uploads/railbuild-flow-contractor.png" alt="Contractor Flow" className="w-full h-auto" />
                                </div>
                                <p className="text-sm font-medium text-center">Contractor Journey</p>
                            </div>
                            <div className="space-y-3">
                                <div className="rounded-2xl overflow-hidden border border-border/50 bg-secondary/5 shadow-md">
                                    <img src="/lovable-uploads/railbuild-flow-architect.png" alt="Architect Flow" className="w-full h-auto" />
                                </div>
                                <p className="text-sm font-medium text-center">Architect Journey</p>
                            </div>
                        </div>
                    </section>

                    {/* Visual Design */}
                    <section className="space-y-8">
                        <h2 className="text-2xl font-bold text-primary">Visual Design & Key Features</h2>

                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Product Detail Page</h3>
                                <p className="text-lg text-muted-foreground">
                                    A clearer layout that separates: what it is, why it matters, what options exist, and what to do next.
                                </p>
                                <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl">
                                    <img
                                        src="/lovable-uploads/railbuild-product-detail.png"
                                        alt="Product Detail Page"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Product Configuration (UI Pattern)</h3>
                                <p className="text-lg text-muted-foreground">
                                    A more intuitive way to explore finishes and mounting options without hunting through pages.
                                </p>
                                <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl">
                                    <img
                                        src="/lovable-uploads/railbuild-configurator-ui.png"
                                        alt="Configurator UI Pattern"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Quote Request Experience</h3>
                                <p className="text-lg text-muted-foreground">
                                    Refined the quote entry point so it feels like the natural next step after product exploration—while keeping the form lightweight.
                                </p>
                                <div className="rounded-3xl overflow-hidden border border-border/50 shadow-xl">
                                    <img
                                        src="/lovable-uploads/railbuild-quote-form.png"
                                        alt="Quote Request Form"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* The Solution */}
                    <section className="space-y-6 max-w-3xl">
                        <h2 className="text-2xl font-bold text-primary">The Solution</h2>
                        <ul className="space-y-4 text-lg text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span>Rebuilt the IA so each persona has a clear “front door”</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span>Introduced a more usable product exploration structure (less guessing, fewer dead ends)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span>Strengthened the Resource/Specs experience for pros</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span>Improved content hierarchy and CTAs so users understand <em>what to do next</em> at every step</span>
                            </li>
                        </ul>
                    </section>

                    {/* Outcomes */}
                    <section className="space-y-6 max-w-3xl">
                        <h2 className="text-2xl font-bold text-primary">Outcomes</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            The updated experience delivered:
                        </p>
                        <div className="p-8 rounded-[2.5rem] bg-secondary/10 border border-primary/10">
                            <ul className="space-y-4 text-lg text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Access Speed:</strong> Pros found technical specs significantly faster, reducing support requests</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Process Efficiency:</strong> Reduced stakeholder back-and-forth by standardizing templates</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Conversion Context:</strong> Quote requests became more qualified due to clearer product options</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Marketing Velocity:</strong> Marketing approvals moved faster due to a clearer content structure</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Next Project Navigation */}
                {nextProject && (
                    <div className="container mx-auto px-6 mt-32 max-w-4xl">
                        <div className="text-center mb-8">
                            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-2">Next Project</p>
                            <h3 className="text-2xl font-bold">{nextProject.title}</h3>
                        </div>

                        <Link to={nextProject.caseStudyUrl} className="block group relative overflow-hidden rounded-3xl aspect-[21/9] border border-border/50">
                            {nextProject.video ? (
                                <video
                                    src={nextProject.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <img
                                    src={nextProject.image}
                                    alt={nextProject.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                <Button size="lg" className="rounded-full gap-2">
                                    View Case Study <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </Link>
                    </div>
                )}
            </main>

            <Contact />
            <Footer />
        </div>
    );
};

export default RailBuild;
