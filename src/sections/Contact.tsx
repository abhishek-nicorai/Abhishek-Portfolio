import { CONTACT_INFO } from "@/constants";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-on-surface mb-8 tracking-tight">
          Ready to build something <span className="text-primary">together?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-16 leading-relaxed">
          I am currently seeking a full-time role or freelance opportunities 
          where I can contribute to high-impact projects and continue growing as an engineer.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="px-12 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-container transition-all shadow-xl shadow-primary/20"
          >
            SEND AN EMAIL
          </a>
          <a 
            href={CONTACT_INFO.linkedin}
            target="_blank"
            className="px-12 py-5 bg-white border-2 border-outline-variant text-on-surface rounded-full font-bold text-lg hover:bg-surface-container transition-all"
          >
            LINKEDIN PROFILE
          </a>
        </div>
      </div>
    </section>
  );
};