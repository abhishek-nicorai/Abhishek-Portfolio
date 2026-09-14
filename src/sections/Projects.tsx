import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ProjectCard";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1120px]">

        {/* ------------------------------------------
            HEADER
        ------------------------------------------ */}
        <div className="mb-14 md:mb-20">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-primary
              "
            >
              Selected Work
            </span>
          </div>

          <div className="flex flex-col gap-8 md:flex-col md:items-start md:justify-between">

            <h2
              className="
                text-5xl
                font-extrabold
                leading-[0.9]
                tracking-[-0.05em]
                text-on-surface
                md:text-7xl
              "
            >
              Selected
              <br />
              <span className="text-primary">Projects.</span>
            </h2>

            <p
              className="
                max-w-md
                pb-1
                text-sm
                leading-6
                text-on-surface-variant
                md:text-base
              "
            >
              A selection of projects focused on solving real problems
              through thoughtful engineering, clean interfaces and modern
              technology.
            </p>
          </div>
        </div>

        {/* ------------------------------------------
            PROJECT GRID
        ------------------------------------------ */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className={
                index === 0
                  ? "md:col-span-2"
                  : ""
              }
            >
              <ProjectCard
                {...project}
              />
            </div>
          ))}
        </div>

        {/* ------------------------------------------
            BOTTOM
        ------------------------------------------ */}
        <div className="mt-14 flex items-center gap-4 md:mt-20">
          <div className="h-px flex-1 bg-outline-variant/20" />

          <span
            className="
              text-[10px]
              font-mono
              uppercase
              tracking-[0.25em]
              text-on-surface-variant/50
            "
          >
            Selected work · Built with purpose
          </span>

          <div className="h-px flex-1 bg-outline-variant/20" />
        </div>
      </div>
    </section>
  );
};