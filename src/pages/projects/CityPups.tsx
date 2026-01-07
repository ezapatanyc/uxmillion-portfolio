import CaseStudyLayout from "@/components/CaseStudyLayout";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Clock, User, Wrench } from 'lucide-react';

const CityPups = () => {
    const project = projects.find(p => p.id === "citypups");
    if (!project) return <div>Project not found</div>;

    return (
        <CaseStudyLayout project={project} nextProject={projects.find(p => p.id === "birder")} hideDefaultMetadata={true}>
            <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-24 mt-12 pb-20">

                {/* Metadata Grid - Pergolade-style */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border/50 max-w-5xl mx-auto">
                    <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground mb-1">
                            <User className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium uppercase tracking-wider">My Role</span>
                        </div>
                        <p className="font-semibold text-lg">UX Designer</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground mb-1">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium uppercase tracking-wider">Timeline</span>
                        </div>
                        <p className="font-semibold text-lg">1 Week (GV Sprint)</p>
                    </div>
                    <div className="space-y-2 col-span-2">
                        <div className="flex items-center text-muted-foreground mb-1">
                            <Wrench className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium uppercase tracking-wider">Tools</span>
                        </div>
                        <p className="font-semibold text-lg">Figma, Pen & Paper, Google Ventures Sprint framework</p>
                    </div>
                </div>

                {/* Project Context Section */}
                <section className="frosted-card p-8 rounded-2xl border-l-4 border-primary space-y-4">
                    <h2 className="text-2xl font-bold text-gradient">Project Context</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        This was a practice project completed as part of my UX training to apply the Google Ventures Design Sprint framework under a compressed 1-week timeline. The startup scenario and initial user research were provided as part of the exercise.
                    </p>
                    <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                        <p className="text-foreground font-medium mb-2">Why I'm including it:</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            This project demonstrates my ability to move quickly through structured ideation, translate research insights into design decisions, and facilitate effective user testing—all within a 5-day constraint. While not a shipped product, the framework discipline I developed here has directly informed how I approach early-stage discovery and rapid prototyping in client projects like RailBuild (3-week delivery) and Pergolade Blade Pro (8-week end-to-end).
                        </p>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gradient">Intro</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        CityPups is a new startup that wants to help people living in cities find the perfect dog to adopt by matching shelter dogs with people interested in adopting.
                        For this project, I was provided with research notes from previous conducted user interviews by the startup research team.
                        I used a modified version of (GV) Google Ventures Sprint in order to quickly answer critical business questions through design, prototyping and testing out the ideas.
                    </p>
                </section>

                {/* Problem & Solution Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">The Problem</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Based on the notes of previous interviews carried out by the team, people are mainly interested in dogs that accommodate to the size of their living space and lifestyles. They are willing to adopt, but the adoption process is a bit daunting because they lack knowledge about the process. Some key points dog adopters consider on their dog decisions are the dog's age, size, personality, trainability, energy level, the amount of attention needed, and how does the dog interact around people and other animals.
                        </p>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">The Solution (Goal)</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Create a (HCD) Human centered design system that allows the users to be matched with the adopting centers in order to increase adoptions, have happier owners and find better "forever" homes for dogs in need.
                        </p>
                    </section>
                </div>

                {/* Process Section */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-bold text-gradient">Process</h2>
                    <img
                        src="/assets/projects/citypups/process.png"
                        alt="Design Process"
                        className="w-full rounded-xl border border-primary/20 bg-white p-2"
                    />
                </section>

                {/* Process Section - Day 1 */}
                {/* Process Section - Day 1 */}
                <section className="space-y-12 bg-secondary/5 p-10 rounded-3xl border border-secondary/10">
                    <h2 className="text-3xl font-bold text-gradient">Day 1: Map</h2>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Persona</h3>
                        <p className="text-muted-foreground">
                            Based on research made by the team I created a user persona to represent the behavior, frustrations and goals of our user base.
                        </p>
                        <div className="bg-background/50 p-6 rounded-xl border border-secondary/20 space-y-4">
                            <h4 className="font-semibold text-lg">Fashion Designer (NYC)</h4>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Lives alone in a NYC studio</li>
                                <li>Asks for adoption advice from dog owners she encounters</li>
                                <li>Follows dog profiles on social media</li>
                                <li><strong>Frustrations:</strong> Falls for dogs with needs she cannot provide, descriptions are too general, adoption process unclear.</li>
                                <li><strong>Goals:</strong> Find a dog to adopt from nearby shelter, feel confident in the match.</li>
                            </ul>
                        </div>
                        <img
                            src="/assets/projects/citypups/persona.png"
                            alt="CityPups User Persona"
                            className="w-full rounded-xl border border-primary/20 bg-white/5"
                        />
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">User Story Mapping</h3>
                        <p className="text-muted-foreground">
                            I worked on creating a map of the user journey of adopting a pet. Some of the main points I kept in mind were to:
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Start at the end (long term goal)</li>
                            <li>Focus on point to solve</li>
                            <li>Get feedback from the experts to improve the map while keeping track of time</li>
                        </ul>
                        <div className="bg-background/50 p-6 rounded-xl border border-secondary/20 my-4">
                            <h4 className="font-semibold text-foreground mb-2">Challenges Identified:</h4>
                            <ul className="list-disc pl-5 text-muted-foreground">
                                <li>Living and Outdoor space is very limited in the city.</li>
                                <li>Schedule of the adopter.</li>
                                <li>Dog personality compatibility.</li>
                            </ul>
                            <h4 className="font-semibold text-foreground mt-4 mb-2">Constraints:</h4>
                            <ul className="list-disc pl-5 text-muted-foreground">
                                <li>Website platform</li>
                                <li>Local organizations - Users are sent to 3rd party to start process</li>
                            </ul>
                        </div>
                        <img
                            src="/assets/projects/citypups/user-map.png"
                            alt="User Story Mapping"
                            className="w-full rounded-xl border border-primary/20 bg-white/5"
                        />
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">How Might We...</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {["Keep the user engaged through the whole process?", "Match the adopter with a dog that fits?", "Educate the user on the adoption process?", "Match the user with different shelters?", "Pave out a smooth adoption process."].map((item, i) => (
                                <li key={i} className="p-4 bg-background/50 rounded-lg border border-primary/10 text-center font-medium">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Process Section - Day 2 */}
                <section className="space-y-12 bg-primary/5 p-10 rounded-3xl border border-primary/10">
                    <h2 className="text-3xl font-bold text-gradient mb-8">Day 2: Sketch</h2>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Lighting Demos & Crazy 8s</h3>
                        <p className="text-muted-foreground">
                            Inspiration comes from many different places. By researching many websites including competitors I drew some ideas that could be implemented in applying solutions.
                            Once I had analyzed the project, it was time to sketch out some ideas. I sketched various ideas by brainstorming on quick sketches (Crazy 8s).
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <img
                                src="/assets/projects/citypups/lighting-demos.png"
                                alt="Lighting Demos Sketches"
                                className="w-full rounded-xl border border-primary/20 bg-white"
                            />
                            <img
                                src="/assets/projects/citypups/crazy-8s.png"
                                alt="Crazy 8s Sketches"
                                className="w-full rounded-xl border border-primary/20 bg-white"
                            />
                        </div>
                    </div>
                </section>

                {/* Process Section - Day 3 */}
                <section className="space-y-12 bg-secondary/5 p-10 rounded-3xl border border-secondary/10">
                    <h2 className="text-3xl font-bold text-gradient mb-8">Day 3: Decide</h2>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Storyboarding & Deciding</h3>
                        <p className="text-muted-foreground">
                            After giving the initial brainstorm sketches some time to sink in, it was time to further develop on one of the ideas to see things from a higher point of view. I decided to go with a solution that intended to help the user find a pet that accommodates to the their lifestyle.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <img
                                src="/assets/projects/citypups/storyboard.png"
                                alt="Storyboarding the solution"
                                className="w-full rounded-xl border border-primary/20 bg-white/5"
                            />
                            <img
                                src="/assets/projects/citypups/deciding.png"
                                alt="Deciding on the solution"
                                className="w-full rounded-xl border border-primary/20 bg-white/5"
                            />
                        </div>
                    </div>
                </section>

                {/* Process Section - Day 4 */}
                <section className="space-y-12 bg-primary/5 p-10 rounded-3xl border border-primary/10">
                    <h2 className="text-3xl font-bold text-gradient">Day 4: Prototype</h2>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Wireframes to Prototype</h3>
                        <p className="text-muted-foreground">
                            In order for me to visualize the layout dimensions and see a cleaner idea, I created wireframes of the previous hand drawn sketches.
                            I created 3 sections: Landing page (CTA), Matching process, and Adopting a dog.
                        </p>
                        <img
                            src="/assets/projects/citypups/wireframes.png"
                            alt="CityPups Wireframes"
                            className="w-full rounded-xl border border-primary/20 bg-white"
                        />
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">High Fidelity Prototype</h3>
                        <p className="text-muted-foreground">
                            I used Figma to create an interactive prototype to test the critical points: Call-to-action (CTA), The Matching tool, The Adopting process, and Requesting info.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <img
                                src="/assets/projects/citypups/prototype-1.png"
                                alt="Prototype Screen 1"
                                className="w-full rounded-xl border border-primary/20 shadow-lg"
                            />
                            <img
                                src="/assets/projects/citypups/prototype-2.png"
                                alt="Prototype Screen 2"
                                className="w-full rounded-xl border border-primary/20 shadow-lg"
                            />
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold">Prototype Walkthrough</h4>
                            <div className="aspect-video w-full rounded-xl overflow-hidden border border-primary/20 shadow-lg">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/86Vs68qfeLM"
                                    title="CityPups Prototype Walkthrough"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section - Day 5 & Takeaways */}
                <section className="space-y-12 bg-secondary/5 p-10 rounded-3xl border border-secondary/10">
                    <h2 className="text-3xl font-bold text-gradient">Day 5: Test</h2>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Usability Test & Ideation</h3>
                        <p className="text-muted-foreground">
                            On this usability test I tested out basic assumptions and also heuristics, language, information architecture, interface design and overall usability.
                            After interviewing 5 participants, the results were in. All participants completed the tasks easily. After analyzing the information obtained, I made some quick ideations notes to update the prototype.
                        </p>
                        <img
                            src="/assets/projects/citypups/usability-test.png"
                            alt="Usability Testing Results/Notes"
                            className="w-full rounded-xl border border-primary/20 bg-white/5"
                        />
                    </div>
                </section>

                <div className="border-t border-border/50 pt-12 mt-12 space-y-8">
                    <h2 className="text-3xl font-bold text-gradient">What I Learned (And Still Apply Today)</h2>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-primary">Framework discipline under pressure</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                The 5-day constraint forced ruthless scope prioritization—focusing only on the critical path to validation. I've since applied this "essential features only" mindset when stakeholders request expansive features with limited timelines.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-primary">Research synthesis at speed</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I learned to distill interview insights into actionable "How Might We" statements within hours, not days. This rapid synthesis skill now helps me present research findings to non-UX stakeholders in client meetings without overwhelming them with raw data.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-primary">Testing assumptions, not aesthetics</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                The sprint taught me to prototype the riskiest assumption first—in this case, whether users would trust an algorithmic match over browsing freely. In later client work (RailBuild), this mindset prevented me from designing an entire information architecture before validating whether users understood the persona-based navigation.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-primary">What I'd change if I ran this today</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I'd conduct 2-3 quick interviews with actual shelter staff before ideation. The provided research notes focused on adopter needs but missed operational constraints (approval timelines, capacity limits) that would've shifted the solution design.
                            </p>
                        </div>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                        <p className="text-foreground font-medium mb-2">User feedback during testing:</p>
                        <p className="text-muted-foreground italic leading-relaxed">
                            Participants specifically noted the completeness of my interview approach, mentioning it was more thorough than other usability tests they'd participated in—a reminder that investing time in proper task framing and follow-up questions yields richer insights.
                        </p>
                    </div>
                </div>


            </div>
        </CaseStudyLayout >
    );
};

export default CityPups;
