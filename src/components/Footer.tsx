import { CONTACT_INFO } from "@/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-outline-variant/10">
      <div className="max-w-[1120px] mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center gap-12">
        
        <div className="text-center md:text-left">
          <div className="text-2xl font-black text-on-surface mb-3 tracking-tighter">
            DevPortfolio
          </div>
          <p className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] uppercase">
            © {currentYear} SOFTWARE DEVELOPER. BUILT WITH PRECISION.
          </p>
        </div>

        <div className="flex gap-10">
          {[
            { label: "GITHUB", href: CONTACT_INFO.github },
            { label: "LINKEDIN", href: CONTACT_INFO.linkedin },
            { label: "TWITTER", href: CONTACT_INFO.twitter },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              className="text-[10px] font-bold text-on-surface-variant hover:text-primary transition-all tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};