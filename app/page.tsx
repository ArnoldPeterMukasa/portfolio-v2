import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import VideoShowcase from "@/components/sections/videoshowcase"; 
export default function Home() {
  return(
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <VideoShowcase />
    </>
  );
}
