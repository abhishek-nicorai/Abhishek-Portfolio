import { Hero3D } from "@/components/Hero3D";

export const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-6 max-w-[1120px] mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="md:col-span-7 space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
              Available for projects
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1]">
            Building clean & <br />
            <span className="text-primary">efficient</span> solutions.
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            I specialize in building robust digital products with a focus on code 
            maintainability and user-centric design.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-8 py-4 bg-on-surface text-white rounded-full font-bold hover:bg-black transition-all flex items-center gap-2 shadow-xl shadow-primary/10">
              View Work
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a href="#contact" className="px-8 py-4 bg-white border border-outline-variant text-on-surface rounded-full font-bold hover:bg-surface-container-low transition-all">
              Let's Talk
            </a>
          </div>
        </div>

        {/* 3D Animation */}
        <div className="md:col-span-5 flex justify-center items-center">
          <Hero3D />
        </div>
      </div>
    </section>
  );
};