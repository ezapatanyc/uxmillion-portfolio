import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Users, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { services } from '@/data/services';
import { Project } from '@/data/projects';
import { useEffect } from 'react';
import Footer from "@/components/Footer";
import ProjectNav from "@/components/ProjectNav";
import ProjectProtection from "@/components/ProjectProtection";
import Contact from "@/components/Contact";

import { PropsWithChildren } from 'react';

interface CaseStudyLayoutProps extends PropsWithChildren {
    project: Project;
    nextProject?: Project;
    hideDefaultMetadata?: boolean;
    hideDefaultHero?: boolean;
    fullWidthContent?: boolean;
}

const CaseStudyLayout = ({ project, nextProject, children, hideDefaultMetadata = false, hideDefaultHero = false, fullWidthContent = false }: CaseStudyLayoutProps) => {
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [project.id]);

    const projectServices = project.servicesUsed
        ? services.filter(s => project.servicesUsed?.includes(s.id))
        : [];

    return (
        <ProjectProtection project={project}>
            <div className="min-h-screen bg-background text-foreground selection:bg-neon-cyan/30">
                <main className="pt-24 pb-16">
                    <ProjectNav />

                    {/* Hero Section */}
                    {!hideDefaultHero && (
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
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                            </div>
                        </section>
                    )}

                    {/* Project Metadata */}
                    {!hideDefaultMetadata && (
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
                    )}

                    {/* Content Sections */}
                    {fullWidthContent ? (
                        children
                    ) : (
                        <div className="container mx-auto px-6 max-w-3xl space-y-20">
                            {children ? (
                                children
                            ) : (
                                <>
                                    {project.challenge && (
                                        <section className="space-y-4">
                                            <h2 className="text-2xl font-bold text-primary">The Challenge</h2>
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                {project.challenge}
                                            </p>
                                        </section>
                                    )}

                                    {project.solution && (
                                        <section className="space-y-4">
                                            <h2 className="text-2xl font-bold text-primary">The Solution</h2>
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                {project.solution}
                                            </p>
                                        </section>
                                    )}

                                    {project.results && (
                                        <section className="space-y-4">
                                            <h2 className="text-2xl font-bold text-primary">The Results</h2>
                                            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                                <p className="text-lg font-medium leading-relaxed">
                                                    {project.results}
                                                </p>
                                            </div>
                                        </section>
                                    )}
                                </>
                            )}
                        </div>
                    )}

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
        </ProjectProtection>
    );
};

export default CaseStudyLayout;
