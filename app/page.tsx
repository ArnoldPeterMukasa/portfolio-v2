import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import VideoShowcase from "@/components/sections/VideoShowcase"; 
import Experience from "@/components/sections/Experience";
import GithubStats from "@/components/sections/GithubStats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Certifications from "@/components/sections/Certifications";
import Blog from "@/components/sections/Blog";
import Testimonials from "@/components/sections/Testimonials";
export default function Home() {
  return(
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <VideoShowcase />
      <Experience />
      <GithubStats />
      <Contact />
      <Footer />
      <Certifications/>
      <Blog/>
      <Testimonials/>
    </>
  );
}
