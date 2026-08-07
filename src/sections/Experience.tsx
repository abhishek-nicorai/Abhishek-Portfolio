import { EXPERIENCES } from "@/constants";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-on-surface tracking-tight">Professional Experience</h2>
          <div className="w-16 h-1.5 bg-primary mt-6 rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-outline-variant/30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-white border-4 border-primary rounded-full" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-on-surface">{exp.role}</h3>
                  <p className="text-lg text-primary font-semibold">{exp.company}</p>
                </div>
                <span className="px-4 py-1.5 bg-surface-container text-on-surface-variant text-xs font-bold rounded-full border border-outline-variant/20 uppercase tracking-wider">
                  {exp.duration}
                </span>
              </div>

              <ul className="mt-6 space-y-4 max-w-3xl">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex gap-3 text-on-surface-variant leading-relaxed">
                    <span className="text-primary mt-1.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>

              {exp.skills && (
                <div className="flex flex-wrap gap-2 mt-8">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="text-[10px] font-bold px-2.5 py-1 bg-surface-container-low border border-outline-variant/30 rounded text-on-surface-variant">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};