import { SKILLS } from "@/constants";
import { SkillCard } from "@/components/SkillCard";

export const Skills = () => {
  return (
    <section id="about" className="py-24 bg-surface-container/30 border-y border-outline-variant/5">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl space-y-4">
            <h2 className="text-4xl font-bold text-on-surface tracking-tight">
              Technical Stack
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              My toolkit is built around modern, scalable technologies. I focus on 
              deep understanding of core concepts rather than just learning syntax.
            </p>
          </div>
          
          <div className="flex gap-2 pb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};