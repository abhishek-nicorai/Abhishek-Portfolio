import { Hero } from "@/sections/Hero";
import { Skills } from "@/sections/Skills"; 
import { Projects } from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      {/* We will add Skills and Projects next */}
    </main>
  );
}