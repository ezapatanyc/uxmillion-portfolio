import { useState } from 'react';
import { ArrowRight, Lock, LockOpen } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { ContainerScroll, ContainerSticky, GalleryContainer, GalleryCol, ContainerStagger, ContainerAnimated } from "@/components/ui/animated-gallery";
import CaseStudyPasswordDialog from './CaseStudyPasswordDialog';
import { projects } from "@/data/projects";

const ProjectCard = ({
  image,
  video,
  title,
  role,
  description,
  caseStudyUrl,
  onProtectedClick,
  isProtected = false,
  isPriority = false
}: {
  image?: string;
  video?: string;
  title: string;
  role: string;
  description: string;
  caseStudyUrl?: string;
  onProtectedClick?: () => void;
  isProtected?: boolean;
  isPriority?: boolean;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (caseStudyUrl) {
      // RailBuild and Pergolade are not protected
      const isProtectedProject = !caseStudyUrl.includes('pergolade') && !caseStudyUrl.includes('railbuild');

      if (isProtectedProject && onProtectedClick) {
        onProtectedClick();
      } else {
        navigate(caseStudyUrl);
        window.scrollTo(0, 0);
      }
    }
  };

  const isSpecialProject = caseStudyUrl?.includes('pergolade') || caseStudyUrl?.includes('railbuild');

  return (
    <div
      onClick={handleClick}
      className={`frosted-card overflow-visible relative ${caseStudyUrl ? 'hover-lift cursor-pointer' : 'cursor-not-allowed opacity-60'
        } ${isSpecialProject ? 'ring-2 ring-primary/30 animate-electric-glow' : ''}`}
    >
      {/* Badge for status */}
      {caseStudyUrl && (
        <div className="absolute top-4 right-4 z-10">
          {!isProtected ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold backdrop-blur-sm">
              <LockOpen className="w-3 h-3" />
              Featured
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800/80 border border-gray-600/40 text-gray-300 text-xs font-medium backdrop-blur-sm">
              <Lock className="w-3 h-3" />
              Password Required
            </span>
          )}
        </div>
      )}

      <div className="h-60 overflow-hidden rounded-t-xl">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading={isPriority ? undefined : "lazy"}
            fetchPriority={isPriority ? "high" : undefined}
            decoding="async"
          />
        )}
      </div>

      <div className="px-4 py-4 md:p-6">
        <h4 className="text-xl font-bold mb-1">{title}</h4>
        <p className="text-sm text-primary mb-4">{role}</p>
        <p className="mb-6 text-muted-foreground">{description}</p>

        <div className={`font-semibold transition-colors flex items-center group text-lg ${caseStudyUrl
          ? isProtected
            ? 'text-muted-foreground hover:text-primary'
            : 'text-primary hover:text-accent animate-cta-pulse'
          : 'text-muted-foreground'
          }`}>
          {caseStudyUrl ? (
            <>
              {!isProtected ? 'View Full Case Study' : 'Request Access'}
              {!isProtected ? (
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              ) : (
                <Lock className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200" />
              )}
            </>
          ) : (
            'Coming Soon'
          )}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    caseStudyUrl: string;
  } | null>(null);

  const handleProtectedClick = (title: string, url: string) => {
    setSelectedProject({ title, caseStudyUrl: url });
    setIsDialogOpen(true);
  };




  // Split projects into three columns for the gallery effect
  // Filter for Work section - generally we want to show all, or specific ones. 
  // The original code was slicing and dicing. Let's keep the logic but use the imported data.
  // Note: ensure projects array in data/projects matches the order or content desired.

  const column1 = [projects[0], projects[3]];
  const column2 = [projects[1], projects[4]];
  const column3 = [projects[2], projects[5]];

  return (
    <>
      <section id="work" className="section-padding px-6 relative overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10"></div>

        <div className="relative overflow-visible">
          <ContainerStagger className="relative z-[9999] place-self-center px-6 pt-12 text-center">
            <ContainerAnimated>
              <h3 className="section-heading animate-color-shift text-3xl">Selected Work</h3>
            </ContainerAnimated>
          </ContainerStagger>

          {/* Mobile: Simple vertical stack - only first 3 cards */}
          <div className="md:hidden space-y-6 px-4 pt-8 max-w-5xl mx-auto">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={`mobile-${index}`}
                {...project}
                isProtected={project.isProtected}
                isPriority={index < 3}
                onProtectedClick={() => handleProtectedClick(project.title, project.caseStudyUrl!)}
              />
            ))}
          </div>

          {/* Desktop: Three columns with parallax */}
          <ContainerScroll className="relative h-[250vh] hidden md:block overflow-visible">
            <ContainerSticky className="h-svh">
              <GalleryContainer className="p-16 px-20 mx-auto overflow-visible">
                <GalleryCol yRange={["-8%", "2%"]} className="-mt-2">
                  {column1.map((project, index) => (
                    <div key={`col1-${index}`} className="mb-6 overflow-visible">
                      <ProjectCard
                        {...project}
                        isProtected={project.isProtected}
                        isPriority={index === 0}
                        onProtectedClick={() => handleProtectedClick(project.title, project.caseStudyUrl!)}
                      />
                    </div>
                  ))}
                </GalleryCol>

                <GalleryCol className="mt-[-20%]" yRange={["12%", "4%"]}>
                  {column2.map((project, index) => (
                    <div key={`col2-${index}`} className="mb-6 overflow-visible">
                      <ProjectCard
                        {...project}
                        isProtected={project.isProtected}
                        isPriority={index === 0}
                        onProtectedClick={() => handleProtectedClick(project.title, project.caseStudyUrl!)}
                      />
                    </div>
                  ))}
                </GalleryCol>

                <GalleryCol yRange={["-8%", "2%"]} className="-mt-2">
                  {column3.map((project, index) => (
                    <div key={`col3-${index}`} className="mb-6 overflow-visible">
                      <ProjectCard
                        {...project}
                        isProtected={project.isProtected}
                        isPriority={index === 0}
                        onProtectedClick={() => handleProtectedClick(project.title, project.caseStudyUrl!)}
                      />
                    </div>
                  ))}
                </GalleryCol>
              </GalleryContainer>
            </ContainerSticky>
          </ContainerScroll>
        </div>
      </section>

      {selectedProject && (
        <CaseStudyPasswordDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          caseStudyUrl={selectedProject.caseStudyUrl}
          title={selectedProject.title}
        />
      )}
    </>
  );
};

export default Work;
