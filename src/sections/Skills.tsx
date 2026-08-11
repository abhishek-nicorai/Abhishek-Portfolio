import { EXPERTISE_DATA } from "@/constants";
import { ExpertiseRow } from "@/components/ExpertiseRow";

export const Skills = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-[1120px] mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter mb-8">
            Technical<br/>       
            <span className="text-primary">Expertise.</span>
          </h2>
          <div className="h-1 w-40 bg-primary"></div>
        </div>

        {/* Interactive List */}
        <div className="border-t border-outline-variant/30">
          {EXPERTISE_DATA.map((item) => (
            <ExpertiseRow key={item.id} {...item} />
          ))}
        </div>

        {/* Sub-text footer */}
       
      </div>
    </section>
  );
};