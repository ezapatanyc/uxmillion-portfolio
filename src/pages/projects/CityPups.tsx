import CaseStudyLayout from "@/components/CaseStudyLayout";
import { projects } from "@/data/projects";

const CityPups = () => {
    const project = projects.find(p => p.id === "citypups");
    if (!project) return <div>Project not found</div>;

    return <CaseStudyLayout project={project} nextProject={projects.find(p => p.id === "birder")} />;
};

export default CityPups;
