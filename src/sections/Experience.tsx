import { EXPERIENCES } from "@/constants";

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-surface">
      <div className="max-w-[1120px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-24">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">Career Path</p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tighter">
            Work History<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Experience List */}
        <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/30 before:to-transparent">
          
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* The Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant bg-surface text-on-surface-variant absolute left-0 md:left-1/2 md:-ml-5 shadow-sm group-hover:border-primary group-hover:text-primary transition-colors duration-500 z-10">
                <span className="material-symbols-outlined text-[18px] font-fill-1">work</span>
              </div>

              {/* The Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-[2rem] border border-outline-variant/20 bg-white transition-all duration-500 hover:border-primary/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-on-surface tracking-tight">{exp.role}</h3>
                    <p className="text-primary font-bold text-sm tracking-wide">{exp.company}</p>
                  </div>
                  <time className="text-[10px] font-black px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant border border-outline-variant/10 whitespace-nowrap">
                    {exp.duration}
                  </time>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex gap-3 text-on-surface-variant text-sm leading-relaxed">
                      <span className="text-primary/40 flex-shrink-0 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Used in this Role */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-outline-variant/10">
                  {exp.skills?.map((skill) => (
                    <span key={skill} className="text-[9px] font-bold px-2 py-1 bg-surface-container-low text-on-surface-variant rounded uppercase tracking-tighter">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};