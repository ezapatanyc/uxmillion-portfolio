import CaseStudyLayout from "@/components/CaseStudyLayout";
import { projects } from "@/data/projects";

const HealthTrack = () => {
    const project = projects.find(p => p.id === "healthtrack");
    if (!project) return <div>Project not found</div>;

    // Loop back to start
    return <CaseStudyLayout project={project} nextProject={projects.find(p => p.id === "pergolade")} />;
};

export default HealthTrack;
