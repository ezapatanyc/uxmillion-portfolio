import CaseStudyLayout from "@/components/CaseStudyLayout";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Clock, User, Wrench } from 'lucide-react';

const Birder = () => {
    const project = projects.find(p => p.id === "birder");
    if (!project) return <div>Project not found</div>;

    return (
        <CaseStudyLayout project={project} nextProject={projects.find(p => p.id === "legal-general")} hideDefaultMetadata={true}>
            <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-24 mt-12 pb-20">


                {/* Metadata Grid */}
                {/* Metadata Grid */}
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
                        <p className="font-semibold text-lg">7 months</p>
                    </div>
                    <div className="space-y-2 col-span-2">
                        <div className="flex items-center text-muted-foreground mb-1">
                            <Wrench className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium uppercase tracking-wider">Tools</span>
                        </div>
                        <p className="font-semibold text-lg">Pen and paper, Miro, Sheets, Docs, Figma</p>
                    </div>
                </div>

                {/* Intro Section */}{" "}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gradient">Intro</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Birdwatching is one of America’s biggest pastimes, it involves the use of one senses to identify birds by sight or sound. New York City offers some of the best places in the world for bird watching; nonetheless, birds migrate throughout the whole year all around the world; for that reason, there are unlimited best places to watch birds everywhere.
                    </p>
                </section>

                {/* Problem & Solution Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">The Problem</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Bird enthusiasts often rely on various tools to recognize and find information about birds, which include digital apps, printed guides, and other birders. Very few apps on the market do a fair job recognizing a bird, and they often fall short offering the functionality, reliability, and ease of use that most users are looking for; therefore, seasoned birders often go back to rely on printed guides and switching between a handful of apps out of frustration.
                        </p>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">The Solution (Goal)</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            With the use of new technological implementations, user research, interviews, surveys and in-depth analysis of leading apps' strengths and weaknesses, Birder plans to provide an effective alternative solution. The purpose of the Birder app is to effectively identify any bird around the world while keeping the user engaged into exploring more about birds in one app while providing a seamless human–computer interaction.
                        </p>
                    </section>
                </div>



                {/* Process Section */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-bold text-gradient">Process</h2>

                    <img
                        src="/assets/projects/birder/process-diagram.png"
                        alt="Design Thinking Process: Empathize, Define, Ideate, Prototype, Test"
                        className="w-full rounded-xl border border-primary/20 bg-white p-2 mb-8"
                    />

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Research Methodologies</h3>
                        <ul className="space-y-4 text-muted-foreground list-disc pl-5">
                            <li><strong className="text-foreground">Primary and Secondary Research:</strong> Screener surveys were placed online to identify potential phone interviewees.</li>
                            <li><strong className="text-foreground">Guerrilla Research:</strong> Conducted at The Jamaica Wildlife Refuge and Central Park Bird Sanctuary to enlist and interview seasoned bird watchers on the spot.</li>
                            <li><strong className="text-foreground">Social Recruitment:</strong> Platforms like Instagram were used to reach target users with extensive birdwatching experience.</li>
                            <li><strong className="text-foreground">Interviews & Testing:</strong> Sessions lasted 30-60 mins, including briefings, interviews, and task performance on existing apps (e.g., demonstrating how they identify a bird).</li>
                        </ul>
                        <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-foreground/80 my-8">
                            “Sometimes Merlin(app) asks for your location and gives you a listing of none of your birds”
                            <footer className="text-sm text-muted-foreground mt-2">—Interviewee</footer>
                        </blockquote>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">Secondary Research</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I ran secondary research on various sources which included the U.S. Government Census of Wildlife surveys and major U.S. and European bird associations to find out how many birdwatchers are out there and what are some their behaviors.
                        </p>
                        <div className="mt-4">
                            <img
                                src="/images/projects/birder/research-stats.png"
                                alt="Bird Watchers Statistics Chart"
                                className="w-full rounded-lg border border-primary/20 max-w-lg"
                            />
                            <p className="text-xs text-muted-foreground mt-2 italic">
                                U.S. Department of the Interior FISH AND WILDLIFE SERVICE. Issued January 2018
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">Shadowing</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Observing users on their natural environment. On this phase, I observed bird watchers interact with their phones while using a bird app on their natural environment setting. A notable trait on these users was a peculiar use of holding the phone with one hand while using the other hand's index finger to navigate the phone.
                        </p>
                        <img
                            src="/images/projects/birder/shadowing-collage.jpg"
                            alt="Bird watcher shadowing observation collage"
                            className="w-full rounded-xl border border-primary/20 mt-6"
                        />
                    </div>
                </section>

                {/* Competitive Analysis */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-bold text-gradient">Competitive Analysis</h2>
                    <p className="text-muted-foreground">
                        To learn from existing apps, I reviewed various bird apps and identified 3 competitors: Audubon, Merlin Bird ID, and GoBird. I evaluated them on the basis of three of the ten Nielsen Norman Usability Heuristic principles.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-sm">
                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                            <h4 className="font-semibold mb-2 text-primary">Match between system and real world</h4>
                            <p className="opacity-80">The system should speak the users’ language, following real world conventions.</p>
                        </div>
                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                            <h4 className="font-semibold mb-2 text-primary">Flexibility and efficiency of use</h4>
                            <p className="opacity-80">Accelerators should cater to both inexperienced and experienced users.</p>
                        </div>
                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                            <h4 className="font-semibold mb-2 text-primary">Recognition rather than recall</h4>
                            <p className="opacity-80">Minimize memory load by making objects, actions, and options visible.</p>
                        </div>
                    </div>

                    <div className="space-y-12 mt-12">
                        {/* Merlin */}
                        <div className="frosted-card p-8 rounded-xl space-y-6">
                            <h3 className="text-2xl font-bold flex items-center justify-between">
                                Merlin
                                <span className="text-sm font-normal px-3 py-1 bg-green-500/10 text-green-500 rounded-full">Score: Great</span>
                            </h3>
                            <img
                                src="/assets/projects/birder/competitive-analysis-merlin.png"
                                alt="Merlin App Competitive Analysis"
                                className="w-full h-48 object-cover rounded-lg border border-primary/20 mb-4"
                            />
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-foreground">Match between system and real world</h4>
                                    <p className="text-muted-foreground text-sm mt-1">Excellent simplified IA. Uses 5 simple questions to guide identification. Great for beginners.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Flexibility and efficiency of use</h4>
                                    <p className="text-muted-foreground text-sm mt-1">Straightforward but lacks sorting by name. Copy is too small for the older target audience.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Recognition rather than recall</h4>
                                    <p className="text-muted-foreground text-sm mt-1">Does a great job guiding the user through a journey to recognition.</p>
                                </div>
                            </div>
                        </div>

                        {/* Audubon */}
                        <div className="frosted-card p-8 rounded-xl space-y-6">
                            <h3 className="text-2xl font-bold flex items-center justify-between">
                                Audubon
                                <span className="text-sm font-normal px-3 py-1 bg-red-500/10 text-red-500 rounded-full">Score: Poor</span>
                            </h3>
                            <img
                                src="/assets/projects/birder/competitive-analysis-audubon.png"
                                alt="Audubon App Competitive Analysis"
                                className="w-full h-48 object-cover rounded-lg border border-primary/20 mb-4"
                            />
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-foreground">Match between system and real world</h4>
                                    <p className="text-muted-foreground text-sm mt-1">Overabundance of information. Poor IA distribution. Search function lacks basic filters.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Flexibility and efficiency of use</h4>
                                    <p className="text-muted-foreground text-sm mt-1">Bird ID feature is good but feels like an external integration. Navigation is too deep.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Recognition rather than recall</h4>
                                    <p className="text-muted-foreground text-sm mt-1">Good job pairing images with names, but search fails to recall similar words.</p>
                                </div>
                            </div>
                        </div>

                        {/* GoBird */}
                        <div className="frosted-card p-8 rounded-xl space-y-6">
                            <h3 className="text-2xl font-bold flex items-center justify-between">
                                GoBird
                                <span className="text-sm font-normal px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full">Score: Average</span>
                            </h3>
                            <img
                                src="/assets/projects/birder/competitive-analysis-gobird.png"
                                alt="GoBird App Competitive Analysis"
                                className="w-full h-48 object-cover rounded-lg border border-primary/20 mb-4"
                            />
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-foreground">Match between system and real world</h4>
                                    <p className="text-muted-foreground text-sm mt-1">Simple, basic language. Links to Wikipedia for descriptions.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Flexibility and efficiency of use</h4>
                                    <p className="text-muted-foreground text-sm mt-1">Limited features. Relies on location matching. Lacks search or ID tools.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Recognition rather than recall</h4>
                                    <p className="text-muted-foreground text-sm mt-1">Straightforward list of images. Easy to recognize.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Discovery Section */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-bold text-gradient">Discovery</h2>

                    <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/20">
                        <h3 className="text-xl font-semibold mb-6">Key Takeaways</h3>
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>45.1 million enthusiast bird watchers in the USA</li>
                                <li>Average age is 50 yrs old (can benefit from visual enhancement)</li>
                                <li>Most apps require large data downloads</li>
                                <li>Average user owns old phones with limited storage</li>
                                <li>Many reported inaccurate bird IDs</li>
                                <li>Users use "birding" to stay active and socialize</li>
                                <li>Sound identification is a prominent feature request</li>
                                <li>Users mostly use two hands to operate phone</li>
                            </ul>
                            <img
                                src="/assets/projects/birder/stats.png"
                                alt="Bird watcher statistics chart"
                                className="w-full rounded-lg border border-primary/20"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Formulating a Solution</h3>
                        <p className="text-muted-foreground">
                            On the first phase I concentrated on creating a Minimum Viable Product (MVP) in order to deliver enough features to meet the needs of early customers. This strategy provides feedback for future product development.
                        </p>



                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            {["User Stories", "Empathy Map", "Persona", "Sitemap"].map((item) => (
                                <div key={item} className="p-4 bg-background border border-border rounded-lg text-center font-medium">
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 mt-12">
                            <h3 className="text-xl font-semibold">Redroutes (Critical User Journeys)</h3>
                            <p className="text-muted-foreground">
                                By creating red routes I can visualize the critical tasks that deliver the most value to the users, they are fundamental user journeys that make the product valuable.
                            </p>
                            <a href="https://marvelapp.com/d4f9e2e/screen/63619189" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-block mb-4">
                                View Marvel Prototype
                            </a>

                            {/* Key for Redroutes */}
                            <div className="mb-4">
                                <p className="text-sm font-semibold text-muted-foreground mb-2">Diagram Key:</p>
                                <img
                                    src="/assets/projects/birder/redroute-key.png"
                                    alt="Key for Redroute diagrams: Page, Decision, Unactive Page, Input Text"
                                    className="w-full max-w-lg rounded-lg border border-primary/20 bg-white/5 p-2"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <img src="/assets/projects/birder/redroute-sound.png" alt="Identifying a bird by sound flow" className="rounded-lg border border-primary/20 hover:scale-105 transition-transform duration-300 bg-white" />
                                <img src="/assets/projects/birder/redroute-description.png" alt="Identifying a bird by description flow" className="rounded-lg border border-primary/20 hover:scale-105 transition-transform duration-300 bg-white" />
                                <img src="/assets/projects/birder/redroute-picture.png" alt="Identifying a bird by picture flow" className="rounded-lg border border-primary/20 hover:scale-105 transition-transform duration-300 bg-white" />
                                <img src="/assets/projects/birder/redroute-search.png" alt="Searching a bird by name flow" className="rounded-lg border border-primary/20 hover:scale-105 transition-transform duration-300 bg-white" />
                            </div>
                        </div>
                    </div>

                    {/* Empathy Map Image */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Empathy Map</h3>
                        <p className="text-muted-foreground">
                            I created an Empathy Map based on all the interviews and observations to visualize the users' attitudes and behaviors. What they say, think, do, and feel is a critical component to create a great user experience.
                        </p>
                        <img
                            src="/assets/projects/birder/empathy-map.png"
                            alt="Empathy Map"
                            className="w-full rounded-xl border border-primary/20"
                        />
                    </div>

                    {/* Persona Image */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">User Persona: Peter</h3>
                        <p className="text-muted-foreground">
                            After synthesizing the interviews and observations, I created one user persona that matched the category of the targeted user according to research surveys.
                        </p>
                        <img
                            src="/assets/projects/birder/persona.png"
                            alt="User Persona Peter"
                            className="w-full rounded-xl border border-primary/20"
                        />
                    </div>

                    {/* Sitemap Image */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Sitemap</h3>
                        <p className="text-muted-foreground">
                            I created a sitemap to organize the content and navigation structure, ensuring a logical flow for the user experience.
                        </p>
                        <img
                            src="/images/projects/birder/sitemap.png"
                            alt="Birder App Sitemap"
                            className="w-full rounded-xl border border-primary/20"
                        />
                    </div>
                </section>

                {/* Design Section */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold text-gradient">Design Phase</h2>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Prototypes & Refinement</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I started with low-fidelity sketches to iterate quickly, then moved to wireflows to visualize complex user workflows.
                        </p>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                            <img src="/assets/projects/birder/sketch-step1.png" alt="Sketch: Location Step" className="rounded-lg border border-primary/20 hover:scale-105 transition-transform duration-300 bg-white" />
                            <img src="/assets/projects/birder/sketch-sound-id.png" alt="Sketch: Sound ID" className="rounded-lg border border-primary/20 hover:scale-105 transition-transform duration-300 bg-white" />
                            <img src="/assets/projects/birder/sketch-no-results.png" alt="Sketch: No Results" className="rounded-lg border border-primary/20 hover:scale-105 transition-transform duration-300 bg-white" />
                            <img src="/assets/projects/birder/sketch-result.png" alt="Sketch: Result" className="rounded-lg border border-primary/20 hover:scale-105 transition-transform duration-300 bg-white" />
                        </div>

                        <div className="space-y-4 mb-8">
                            <h4 className="text-xl font-medium">Wireflow</h4>
                            <img src="/assets/projects/birder/wireflow.png" alt="Detailed User Wireflow" className="w-full rounded-xl border border-primary/20 bg-white p-2" />
                        </div>

                        <div className="space-y-6 mt-12">
                            <h3 className="text-2xl font-semibold">Styling & Visual Design</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                For <strong className="text-foreground">Styling</strong>, I focused on legibility and optimal viewing conditions for birding.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-8">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-center text-muted-foreground">Color Theory Research</p>
                                    <img src="/assets/projects/birder/color-theory.png" alt="Color theory research for low light vision" className="rounded-lg border border-primary/20 bg-white" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-center text-muted-foreground">App Color Palette</p>
                                    <img src="/assets/projects/birder/color-palette.png" alt="Final color palette selection" className="rounded-lg border border-primary/20 bg-white" />
                                </div>
                            </div>

                            <div className="my-8">
                                <p className="text-sm font-medium text-center text-muted-foreground mb-2">Typography System</p>
                                <img src="/assets/projects/birder/ui-typography.png" alt="Typography system - Roboto and Oswald" className="w-full rounded-lg border border-primary/20 bg-white" />
                            </div>
                        </div>

                        <div className="space-y-6 mt-12">
                            <h3 className="text-2xl font-semibold">HiFi Mockups</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Menu styling and button positioning are based on the shadowing study for optimal photography previewing and easy clickable access. The landing/exploring page displays one single large image at the time with a black frame around it to showcase the subject at hand.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 my-8">
                                <img src="/assets/projects/birder/hifi-hawk.png" alt="High Fidelity Mockup - Main View" className="rounded-xl border border-primary/20 shadow-lg" />
                                <img src="/assets/projects/birder/hifi-screen-1.png" alt="High Fidelity Mockup - Search" className="rounded-xl border border-primary/20 shadow-lg" />
                                <img src="/assets/projects/birder/hifi-screen-2.png" alt="High Fidelity Mockup - Detail" className="rounded-xl border border-primary/20 shadow-lg" />
                            </div>
                        </div>

                        <div className="space-y-6 mt-16 text-center">
                            <h3 className="text-2xl font-semibold mb-6">Interaction Prototype</h3>
                            <div className="flex justify-center">
                                <div className="relative max-w-[280px] mx-auto border-8 border-gray-900 rounded-[3rem] overflow-hidden shadow-2xl">
                                    <img
                                        src="/assets/projects/birder/app-demo.gif"
                                        alt="Birder App Interaction Demo"
                                        className="w-full h-auto block"
                                    />
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm mt-4">
                                Demonstrating the "One-Handed Navigation" concept in action.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testing & Learnings */}
                <section className="space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gradient">Testing & Iterations</h2>
                        <ul className="space-y-4 text-muted-foreground list-disc pl-5">
                            <li>Most users ignored onboarding screens; therefore, onboarding screens were taken out and the design was simplified.</li>
                            <li>Several menu components were integrated into the visible menu instead of hiding it in the sub-menu. The user responded better to this strategy.</li>
                        </ul>

                        <div className="grid md:grid-cols-2 gap-8 my-8">
                            <div className="space-y-4">
                                <p className="text-center font-medium text-muted-foreground">Original Menu Interaction</p>
                                <img src="/assets/projects/birder/iteration-menu-1.png" alt="Original menu design" className="rounded-xl border border-primary/20 shadow-lg mx-auto" />
                            </div>
                            <div className="space-y-4">
                                <p className="text-center font-medium text-muted-foreground">Refined Menu Interaction</p>
                                <img src="/assets/projects/birder/iteration-menu-2.png" alt="Refined menu with better visibility" className="rounded-xl border border-primary/20 shadow-lg mx-auto" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gradient">Learnings</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Working on this project gave me the opportunity to learn so much about UX research, I had the chance to try out many different methodologies and incorporate new tools. I also learnt a lot about birds and it was a pretty fun, challenging and rewarding adventure. I also got to experience seeing from the eyes of many different levels of birders.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gradient">Next Steps</h2>
                        <div className="flex flex-wrap gap-4">
                            {["Understand impediments", "What works?", "Iterate quickly", "More testing"].map((step) => (
                                <span key={step} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                                    {step}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>


            </div>
        </CaseStudyLayout>
    );
};

export default Birder;
