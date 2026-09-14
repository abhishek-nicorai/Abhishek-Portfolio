import { EXPERTISE_DATA } from "@/constants";
import { ExpertiseRow } from "@/components/ExpertiseRow";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative px-6 py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-[1120px] mx-auto">

        {/* Header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-primary">
              Skills & Technologies
            </span>
          </div>

          <div className="flex flex-col md:flex-col md:items-start md:justify-between gap-8">
            <h2 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-[-0.05em] leading-[0.9]">
              Technical
              <br />
              <span className="text-primary">Expertise.</span>
            </h2>

            <p className="max-w-md text-sm md:text-base leading-relaxed text-on-surface-variant md:pb-1">
              Technologies and tools I use to design, build and deliver
              modern digital experiences.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {EXPERTISE_DATA.map((item, index) => (
            <ExpertiseRow
              key={item.id}
              {...item}
              index={index}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-outline-variant/20" />

          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-on-surface-variant/50">
            Always learning · Always building
          </span>

          <div className="h-px flex-1 bg-outline-variant/20" />
        </div>
      </div>
    </section>
  );
};