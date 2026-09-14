
import { EXPERIENCES } from "@/constants";
import { ExperienceCard } from "@/components/ExperienceCard";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-surface px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1120px]">

        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Career Path
            </span>
          </div>

          <div className="flex flex-col gap-8 md:flex-col">
            <h2 className="text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] text-on-surface md:text-7xl">
              Work
              <br />
              <span className="text-primary">History.</span>
            </h2>

            <p className="max-w-md pb-1 text-sm leading-6 text-on-surface-variant md:text-base">
              A timeline of the roles, projects and technologies that have shaped my experience as a software engineer.
              
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">

          {/* Desktop Timeline */}
          <div
            className="
              absolute
              left-[104px]
              top-0
              hidden
              h-full
              w-px
              bg-gradient-to-b
              from-transparent
              via-outline-variant/40
              to-transparent
              md:block
            "
          />

          <div className="space-y-14 md:space-y-20">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${exp.role}-${index}`}
                experience={exp}
                index={index}
                isLatest={index === 0}
              />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex items-center gap-4 md:mt-20">
          <div className="h-px flex-1 bg-outline-variant/20" />

          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-on-surface-variant/50">
            Experience · Growth · Impact
          </span>

          <div className="h-px flex-1 bg-outline-variant/20" />
        </div>
      </div>
    </section>
  );
};
