import Image from "next/image";
// import { Head } from "next/document";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <div className=" bg-[#363636] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#25D366]/80"> 



        <Header/>

      <section id="hero" className=" snap-start">
        <Hero/>
      </section>

      <section id="about" className=" snap-center"> 
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
      <section id="contactme" className="snap-start">
        <ContactMe/>
      </section>
    </div>
  );
}

