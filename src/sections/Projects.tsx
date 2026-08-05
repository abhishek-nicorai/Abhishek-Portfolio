import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-[1120px] mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-on-surface tracking-tight">Featured Work</h2>
        <div className="w-16 h-1.5 bg-primary mt-6 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};