import { Hero } from "@/sections/Hero";
import { Skills } from "@/sections/Skills"; 
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      {/* We will add Skills and Projects next */}
    </main>
  );
}