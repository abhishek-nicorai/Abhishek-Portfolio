import { Hero } from "@/sections/Hero";
import { Skills } from "@/sections/Skills"; 
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience /> 
      <Projects />
      <Contact />
      {/* We will add Skills and Projects next */}
    </main>
  );
}