import Image from "next/image";
import { Head } from "next/document";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0"> 

        <Header/>

      <section id="hero" className=" snap-center">
        <Hero/>
      </section>

      <section id="about" className=" snap-start"> 
        <About/>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience/>
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      {/* Projects */}
      <section id="projects" className=" snap-start">
        <Projects/>
      </section>

      {/* Contact Me */}
    </div>
  );
}
