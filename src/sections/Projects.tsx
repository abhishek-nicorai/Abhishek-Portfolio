import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-20 max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tighter mb-8">
            Selected <br /> <span className="text-primary">Engineering.</span>
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            A deep dive into the systems and tools I have built, focused on performance, 
            scalability, and clean user interfaces.
          </p>
        </div>

        {/* 2-Column Grid for "Breathing Room" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};