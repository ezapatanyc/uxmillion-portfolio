import CaseStudyLayout from "@/components/CaseStudyLayout";
import { projects } from "@/data/projects";

const Birder = () => {
    const project = projects.find(p => p.id === "birder");
    if (!project) return <div>Project not found</div>;

    return <CaseStudyLayout project={project} nextProject={projects.find(p => p.id === "healthtrack")} />;
};

export default Birder;
