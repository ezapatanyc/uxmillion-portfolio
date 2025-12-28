import CaseStudyLayout from "@/components/CaseStudyLayout";
import { projects } from "@/data/projects";

const FidemDD = () => {
    const project = projects.find(p => p.id === "fidemdd");
    if (!project) return <div>Project not found</div>;

    return <CaseStudyLayout project={project} nextProject={projects.find(p => p.id === "citypups")} />;
};

export default FidemDD;
