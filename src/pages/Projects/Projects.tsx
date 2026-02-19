import { projects } from "../../data/content";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
    return (
        <div className="min-h-screen bg-base-200 py-16 px-4">
            <h2 className="text-4xl font-black text-center mb-12 tracking-tight">
                Projects
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
