import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import DotGrid from "@/components/DotGrid";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <div className="-z-20 fixed left-0 top-0 h-dvh w-full">
          <DotGrid
            dotSize={2}
            gap={12}
            baseColor="#271e37aa"
            activeColor="#512CE4"
            proximity={120}
            shockRadius={250}
            shockStrength={10}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
