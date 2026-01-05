import CaseStudyLayout from "@/components/CaseStudyLayout";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

const FidemDD = () => {
    const project = projects.find(p => p.id === "fidemdd");
    if (!project) return <div>Project not found</div>;

    return (
        <CaseStudyLayout project={project} nextProject={projects.find(p => p.id === "citypups")}>
            <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-24 mt-12 pb-20">

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border/50 max-w-5xl mx-auto">
                    <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground mb-1">
                            <span className="text-sm font-medium uppercase tracking-wider">My Role</span>
                        </div>
                        <p className="font-semibold text-lg">Lead UX Designer</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground mb-1">
                            <span className="text-sm font-medium uppercase tracking-wider">Timeline</span>
                        </div>
                        <p className="font-semibold text-lg">3 Months</p>
                    </div>
                    <div className="space-y-2 col-span-2">
                        <div className="flex items-center text-muted-foreground mb-1">
                            <span className="text-sm font-medium uppercase tracking-wider">Tools</span>
                        </div>
                        <p className="font-semibold text-lg">Figma, Miro, Google Sites, Google Analytics</p>
                    </div>
                </div>

                {/* Intro Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gradient">Project Overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        FidemDD is a financial advisory firm based in Santo Domingo, Dominican Republic, offering services in auditing, taxes, consulting, and financial advisory. Despite their strong reputation, FidemDD lacked an online presence, relying solely on word-of-mouth referrals due to local marketing restrictions. Recognizing the need to expand their reach and attract new clients, FidemDD sought to establish a professional, user-friendly website that complied with regulations.
                    </p>
                </section>

                {/* Problem Section */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold text-gradient">The Problem</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-primary">Business Challenges</h3>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-3">
                                <li><strong>Lack of Online Presence:</strong> In today's digital landscape, not having a website significantly limited FidemDD's visibility and accessibility.</li>
                                <li><strong>Regulatory Constraints:</strong> Local regulations prohibited traditional marketing, making digital channels crucial yet challenging.</li>
                                <li><strong>Competitive Disadvantage:</strong> Competitors with established websites had an edge in attracting clients with convenient online services.</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-primary">Impact on Potential Clients</h3>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-3">
                                <li><strong>Accessibility Issues:</strong> Clients found it difficult to discover and engage with FidemDD.</li>
                                <li><strong>Trust Barrier:</strong> Establishing credibility was difficult without a professional digital footprint.</li>
                                <li><strong>Preference for Digital Solutions:</strong> Modern clients favored firms with an online presence for ease of access to information.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-primary">Key Metrics Before Launch</h3>
                        <div className="grid md:grid-cols-4 gap-4">
                            <div className="p-4 bg-secondary/5 rounded-xl border border-secondary/20 text-center">
                                <p className="text-2xl font-bold text-primary">2-3</p>
                                <p className="text-sm text-muted-foreground">Client Inquiries/Month<br />(100% word-of-mouth)</p>
                            </div>
                            <div className="p-4 bg-secondary/5 rounded-xl border border-secondary/20 text-center">
                                <p className="text-2xl font-bold text-primary">Local Only</p>
                                <p className="text-sm text-muted-foreground">Market Reach<br />(Santo Domingo region)</p>
                            </div>
                            <div className="p-4 bg-secondary/5 rounded-xl border border-secondary/20 text-center">
                                <p className="text-2xl font-bold text-primary">None</p>
                                <p className="text-sm text-muted-foreground">Online Visibility<br />(no website or social)</p>
                            </div>
                            <div className="p-4 bg-secondary/5 rounded-xl border border-secondary/20 text-center">
                                <p className="text-2xl font-bold text-primary">90%</p>
                                <p className="text-sm text-muted-foreground">Competitors Online<br />(had active websites)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Goals Section */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold text-gradient">Project Goals</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-primary">Primary Goals</h3>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-3">
                                <li><strong>Establish a Digital Presence:</strong> Develop a bilingual, professional website to represent FidemDD's services.</li>
                                <li><strong>Attract New Clients:</strong> Expand the client base beyond word-of-mouth, targeting both local and international clients.</li>
                                <li><strong>Comply with Regulations:</strong> Ensure the website adhered to marketing restrictions, avoiding prohibited promotional activities.</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-primary">Secondary Goals</h3>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-3">
                                <li><strong>Enhance Credibility:</strong> Build trust through a professional digital presence showcasing expertise.</li>
                                <li><strong>Maintain Control Over Client Interactions:</strong> Use direct contact methods (phone/email) without online forms or automated scheduling.</li>
                                <li><strong>Leverage Social Media:</strong> Use platforms like Instagram to promote the business within regulatory limits.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* User Research Section */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold text-gradient">User Research & Insights</h2>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Research Approach</h3>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                            <li><strong>Stakeholder Interviews:</strong> To understand business objectives, constraints, and expectations.</li>
                            <li><strong>User Interviews:</strong> Engaged with 8 small to medium business owners who were potential clients.</li>
                            <li><strong>Competitive Analysis:</strong> Evaluated 5 competitor websites to identify industry standards and opportunities.</li>
                            <li><strong>Surveys:</strong> Distributed online surveys to gather broader insights on user preferences.</li>
                        </ul>
                    </div>

                    {/* Personas */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20 space-y-4">
                            <h4 className="font-semibold text-lg">The Firm Owner (Anonymized)</h4>
                            <img
                                src="/assets/projects/fidemdd/firm-owner.png"
                                alt="Firm Owner Persona"
                                className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-primary/20"
                            />
                            <p className="text-sm text-muted-foreground">FidemDD Financial Services</p>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                                <li><strong>Goal:</strong> Establish a compliant website to attract clients.</li>
                                <li><strong>Pain Points:</strong> Limited marketing options, reliance on word-of-mouth.</li>
                                <li><strong>Impact on Design:</strong> Regulatory compliance, direct contact emphasis, resource-efficient solutions.</li>
                            </ul>
                        </div>
                        <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20 space-y-4">
                            <h4 className="font-semibold text-lg">Lissa Thompson – Entrepreneur</h4>
                            <img
                                src="/assets/projects/fidemdd/lissa-thompson.png"
                                alt="Lissa Thompson Persona"
                                className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-primary/20"
                            />
                            <p className="text-sm text-muted-foreground">Age: 32, Location: Seattle, USA</p>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                                <li><strong>Goal:</strong> Access clear online information, efficient communication.</li>
                                <li><strong>Pain Points:</strong> Difficulty finding trustworthy advisors, dislikes phone calls.</li>
                            </ul>
                        </div>
                        <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20 space-y-4">
                            <h4 className="font-semibold text-lg">Juan Pérez – Local Small Business Owner</h4>
                            <img
                                src="/assets/projects/fidemdd/juan-perez.png"
                                alt="Juan Pérez Persona"
                                className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-primary/20"
                            />
                            <p className="text-sm text-muted-foreground">Age: 45, Location: Santo Domingo, Dominican Republic</p>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                                <li><strong>Goal:</strong> Professional financial advice in Spanish, personal interaction.</li>
                                <li><strong>Pain Points:</strong> Unfamiliar with digital services, time constraints.</li>
                            </ul>
                        </div>
                        <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20 space-y-4">
                            <h4 className="font-semibold text-lg">Elena García – Aspiring Entrepreneur</h4>
                            <img
                                src="/assets/projects/fidemdd/elena-garcia.png"
                                alt="Elena García Persona"
                                className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-primary/20"
                            />
                            <p className="text-sm text-muted-foreground">Age: 29, Location: Punta Cana, Dominican Republic</p>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                                <li><strong>Goal:</strong> Clear online information to start her business, avoid unnecessary calls.</li>
                                <li><strong>Pain Points:</strong> Overwhelmed by requirements, difficulty finding trustworthy information.</li>
                            </ul>
                        </div>
                        <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20 space-y-4 md:col-span-2 md:max-w-md md:mx-auto">
                            <h4 className="font-semibold text-lg">Michael Lee – International Investor</h4>
                            <img
                                src="/assets/projects/fidemdd/michael-lee.png"
                                alt="Michael Lee Persona"
                                className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-primary/20"
                            />
                            <p className="text-sm text-muted-foreground">Age: 50, Location: New York City, USA</p>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                                <li><strong>Goal:</strong> Find reputable local firm with international expertise, English communication.</li>
                                <li><strong>Pain Points:</strong> Language barriers, regulatory uncertainty.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Insights */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Key Insights</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                                <p className="text-4xl font-bold text-primary mb-2">85%</p>
                                <p className="text-muted-foreground">of users prefer firms with an informative and accessible website</p>
                            </div>
                            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                                <p className="text-4xl font-bold text-primary mb-2">78%</p>
                                <p className="text-muted-foreground">value seeing detailed service descriptions and company background</p>
                            </div>
                            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                                <p className="text-4xl font-bold text-primary mb-2">65%</p>
                                <p className="text-muted-foreground">prefer to initiate contact via email rather than phone</p>
                            </div>
                            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                                <p className="text-lg font-semibold text-primary mb-2">Competitor Analysis</p>
                                <p className="text-muted-foreground">Competitors offered contact forms, detailed services, and client testimonials. Most had multilingual support.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Journey Maps Section */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold text-gradient">Journey Maps</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We created detailed journey maps for each of our primary personas to visualize their experience from awareness to retention, mapping their emotional highs and lows to identify key opportunities for intervention.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-secondary/5 rounded-xl border border-secondary/20">
                            <h4 className="font-semibold text-lg mb-3">Common Themes Across Personas</h4>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Need for trustworthy, professional financial services</li>
                                <li>Preference for clear, accessible online information</li>
                                <li>Desire for responsive and personalized communication</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-secondary/5 rounded-xl border border-secondary/20">
                            <h4 className="font-semibold text-lg mb-3">Key Pain Points to Address</h4>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Difficulty finding credible advisors online</li>
                                <li>Hesitation with initial contact methods (e.g., phone calls)</li>
                                <li>Need for assurance regarding expertise and credibility</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Lissa Thompson – Entrepreneur</h3>
                            <img src="/assets/projects/fidemdd/journey-maps/lissa-thompson-journey.png" alt="Lissa Thompson Journey Map" className="w-full rounded-xl border border-primary/20 shadow-lg" />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Juan Pérez – Small Business Owner</h3>
                            <img src="/assets/projects/fidemdd/journey-maps/juan-perez-journey.png" alt="Juan Pérez Journey Map" className="w-full rounded-xl border border-primary/20 shadow-lg" />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Elena García – Aspiring Entrepreneur</h3>
                            <img src="/assets/projects/fidemdd/journey-maps/elena-garcia-journey.png" alt="Elena García Journey Map" className="w-full rounded-xl border border-primary/20 shadow-lg" />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Michael Lee – International Investor</h3>
                            <img src="/assets/projects/fidemdd/journey-maps/michael-lee-journey.png" alt="Michael Lee Journey Map" className="w-full rounded-xl border border-primary/20 shadow-lg" />
                        </div>
                    </div>
                </section>

                {/* Design Solutions Implemented */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold text-gradient">Design Solutions Implemented</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-primary">Enhanced Website Content</h3>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Detailed service descriptions and team bios</li>
                                <li>Bilingual content catering to both local and international users</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-primary">Trust-Building Elements</h3>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Display of certifications, affiliations, and client testimonials</li>
                                <li>Inclusion of case studies and resources</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-primary">Accessible Contact Options</h3>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Prominent display of contact information</li>
                                <li>Offering email as a primary contact method</li>
                                <li>Clear expectations for response times</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-primary">Additional Opportunities</h3>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Develop client portals for ongoing engagement</li>
                                <li>Create blogs or guides to establish thought leadership</li>
                                <li>Utilize SEO strategies for improved visibility</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Ideation & Architecture Section */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold text-gradient">Design Process & Ideation</h2>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Understanding Constraints</h3>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                            <li><strong>Regulatory Limits:</strong> Marketing restrictions required careful crafting of non-promotional content.</li>
                            <li><strong>Stakeholder Requirements:</strong> No online forms; clients must contact via phone or email only.</li>
                            <li><strong>User Expectations:</strong> Desired online engagement, detailed information, and easy contact methods.</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Information Architecture</h3>
                        <p className="text-muted-foreground">
                            Created a sitemap to organize content and ensure intuitive navigation, highlighting essential services. We structured the site to be simple and direct, catering to users who need quick reassurance and contact information.
                        </p>
                        <div className="bg-white p-4 rounded-xl border border-primary/20">
                            <img src="/assets/projects/fidemdd/ia-diagram.png" alt="Information Architecture Diagram" className="w-full rounded-lg" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Sketches & Crazy 8s</h3>
                        <p className="text-muted-foreground">
                            Initial brainstorming used "Crazy 8s" to rapidly explore layout ideas, focusing on how to present complex financial services in an approachable way.
                        </p>
                        <div className="bg-white p-2 rounded-xl border border-primary/20">
                            <img src="/assets/projects/fidemdd/crazy-8s.png" alt="Crazy 8s Sketches" className="w-full rounded-lg" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Design Decisions</h3>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                            <li><strong>Trust Elements:</strong> Included professional photos and bios of the team, prominently displayed certifications and affiliations.</li>
                            <li><strong>Service Clarity:</strong> Created detailed service pages with straightforward descriptions. Avoided promotional tone to comply with regulations.</li>
                            <li><strong>Bilingual Content:</strong> Provided in both Spanish and English with a visible language toggle for seamless switching.</li>
                            <li><strong>Responsive Design:</strong> Optimized for mobile devices, ensuring smooth navigation across all screen sizes.</li>
                        </ul>
                    </div>
                </section>

                {/* Wireframes & Design Section */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold text-gradient">Wireframes & Prototyping</h2>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Low-Fidelity Wireframes</h3>
                        <p className="text-muted-foreground">
                            Digital wireframes helped define the content hierarchy for Service pages, ensuring clear value propositions and call-to-actions without visual distractions.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <img src="/assets/projects/fidemdd/wireframe-home-lofi.png" alt="Home Wireframe Lofi" className="w-full rounded-xl border border-primary/20 bg-white p-1" />
                            <img src="/assets/projects/fidemdd/wireframe-consulting-lofi.png" alt="Consulting Wireframe Lofi" className="w-full rounded-xl border border-primary/20 bg-white p-1" />
                            <img src="/assets/projects/fidemdd/wireframe-finance-lofi.png" alt="Finance Wireframe Lofi" className="w-full rounded-xl border border-primary/20 bg-white p-1" />
                            <img src="/assets/projects/fidemdd/wireframe-accounting-lofi.png" alt="Accounting Wireframe Lofi" className="w-full rounded-xl border border-primary/20 bg-white p-1" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Mid-Fi Iterations & Wireflows</h3>
                        <p className="text-muted-foreground">
                            Moving to higher fidelity, we refined the "Service with Advisor" vs "No Advisor" flows to verify the navigation logic.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <img src="/assets/projects/fidemdd/wireframe-v1.png" alt="Wireframe V1" className="w-full rounded-xl border border-primary/20 bg-white p-1" />
                            <img src="/assets/projects/fidemdd/wireflow-v4.png" alt="Wireflow V4" className="w-full rounded-xl border border-primary/20 bg-white p-1" />
                        </div>
                    </div>
                </section>

                {/* Usability Testing Section */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold text-gradient">Usability Testing & Iterations</h2>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Testing Methodology</h3>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                            <li><strong>Participants:</strong> 10 users matching our target personas (5 local, 5 international).</li>
                            <li><strong>Process:</strong> Conducted remote usability tests using screen-sharing tools, asking participants to complete specific tasks (e.g., finding a service, locating contact info).</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Feedback & Iterations</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/20">
                                <h4 className="font-semibold text-green-400 mb-2">✓ Positive Feedback</h4>
                                <p className="text-muted-foreground text-sm">Users found the website professional and trustworthy; navigation was intuitive.</p>
                            </div>
                            <div className="p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                                <h4 className="font-semibold text-yellow-400 mb-2">↑ Improvements Made</h4>
                                <p className="text-muted-foreground text-sm">Added a 'Services Overview' page for quick comparisons and enhanced the visibility of the language toggle.</p>
                            </div>
                            <div className="p-6 bg-blue-500/10 rounded-xl border border-blue-500/20">
                                <h4 className="font-semibold text-blue-400 mb-2">📱 Mobile Optimization</h4>
                                <p className="text-muted-foreground text-sm">Improved mobile responsiveness to ensure smooth layouts on all devices.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white p-2 rounded-xl border border-primary/20">
                            <img src="/assets/projects/fidemdd/usability-test.png" alt="Usability Testing" className="w-full rounded-lg" />
                        </div>
                    </div>
                </section>

                {/* The Solution (Final) */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold text-gradient">The Final Solution</h2>
                    <div className="space-y-6">
                        <p className="text-muted-foreground">
                            The final design balances professional authority with approachability, featuring a bilingual interface, clear service breakdowns, and prominent contact options.
                        </p>
                        <h3 className="text-2xl font-semibold">Key Features</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[
                                "User-Friendly Navigation: Clear menu structure with sticky header",
                                "Detailed Service Pages: Comprehensive descriptions and case studies",
                                "Trust Elements: Team bios, certifications, and testimonials",
                                "Bilingual Content: Seamless language switching (EN/ES)",
                                "Responsive Design: Mobile-friendly layouts across devices",
                                "Direct Contact Options: Prominent phone and email display"
                            ].map((item, i) => (
                                <li key={i} className="p-4 bg-primary/5 rounded-lg border border-primary/10 font-medium">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                            <div className="space-y-2">
                                <h4 className="font-medium text-center text-muted-foreground">Service Page: Business Consulting</h4>
                                <img src="/assets/projects/fidemdd/solution-1.png" alt="Final Solution: Business Consulting" className="w-full rounded-xl border border-primary/20 shadow-2xl" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-medium text-center text-muted-foreground">Service Page: Accounting</h4>
                                <img src="/assets/projects/fidemdd/solution-2.png" alt="Final Solution: Accounting" className="w-full rounded-xl border border-primary/20 shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section className="space-y-12 border-t border-border/50 pt-12">
                    <h2 className="text-3xl font-bold text-gradient">Outcome & Results</h2>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Key Success Metrics (3 Months Post-Launch)</h3>
                        <div className="grid md:grid-cols-5 gap-4">
                            <div className="text-center p-6 bg-secondary/5 rounded-xl border border-secondary/20">
                                <h4 className="text-3xl font-bold text-primary mb-2">150%</h4>
                                <p className="text-sm text-muted-foreground">Increase in Client Inquiries<br />(2-3 to 7-8/mo)</p>
                            </div>
                            <div className="text-center p-6 bg-secondary/5 rounded-xl border border-secondary/20">
                                <h4 className="text-3xl font-bold text-primary mb-2">1,200</h4>
                                <p className="text-sm text-muted-foreground">Website Visits<br />Per Month</p>
                            </div>
                            <div className="text-center p-6 bg-secondary/5 rounded-xl border border-secondary/20">
                                <h4 className="text-3xl font-bold text-primary mb-2">3 min</h4>
                                <p className="text-sm text-muted-foreground">Average Session<br />Duration</p>
                            </div>
                            <div className="text-center p-6 bg-secondary/5 rounded-xl border border-secondary/20">
                                <h4 className="text-3xl font-bold text-primary mb-2">40%</h4>
                                <p className="text-sm text-muted-foreground">Reduced<br />Bounce Rate</p>
                            </div>
                            <div className="text-center p-6 bg-secondary/5 rounded-xl border border-secondary/20">
                                <h4 className="text-3xl font-bold text-primary mb-2">25%</h4>
                                <p className="text-sm text-muted-foreground">International<br />Inquiries</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Business Impact</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                                <h4 className="font-semibold text-primary mb-2">Market Reach</h4>
                                <p className="text-muted-foreground">Expanded from Santo Domingo to national and international clients</p>
                            </div>
                            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                                <h4 className="font-semibold text-primary mb-2">Client Conversion</h4>
                                <p className="text-muted-foreground">20% of inquiries converted into clients</p>
                            </div>
                            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                                <h4 className="font-semibold text-primary mb-2">Revenue Growth</h4>
                                <p className="text-muted-foreground">Projected 15% increase based on new client acquisitions</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Testimonial */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gradient">Client Testimonial</h2>
                    <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-xl">
                        "Working with Emiliano was a transformative experience for FidemDD. The new website reflects our professionalism and has significantly expanded our reach. Emiliano's attention to regulatory constraints and our needs resulted in a solution that exceeded our expectations."
                    </blockquote>
                </section>

                {/* Conclusion */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold text-gradient">Conclusion</h2>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Project Impact</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            The FidemDD digital transformation bridged the gap between the firm and potential clients by establishing a professional online presence. By balancing user-centered design with regulatory compliance, the website enhanced credibility, expanded market reach, and drove business growth.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Key Learnings</h3>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                            <li><strong>Balancing Needs:</strong> Effective solutions are possible within constraints by prioritizing both user and stakeholder needs.</li>
                            <li><strong>Data-Driven Decisions:</strong> User research and feedback guided successful design choices.</li>
                            <li><strong>Adaptability:</strong> Iteration based on testing feedback led to improved user experience.</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Next Steps</h3>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                            <li><strong>Ongoing Monitoring:</strong> Use Google Analytics to track user behavior and engagement.</li>
                            <li><strong>SEO Optimization:</strong> Improve search engine rankings for key financial services.</li>
                            <li><strong>Content Updates:</strong> Regularly update the website with relevant financial insights and articles.</li>
                        </ul>
                    </div>
                </section>

                <div className="flex flex-col items-center gap-6 mt-16 pt-10 border-t border-border/40">
                    <Button
                        size="lg"
                        onClick={() => window.open("mailto:ezapata.nyc@gmail.com")}
                        className="text-lg px-8 py-6 rounded-full"
                    >
                        Contact to Work Together
                    </Button>
                </div>
            </div>
        </CaseStudyLayout>
    );
};

export default FidemDD;
