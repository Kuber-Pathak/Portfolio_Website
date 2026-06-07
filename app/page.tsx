import ScrollProgress from "@/components/ScrollProgress";
import CursorFX from "@/components/CursorFX";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Involvement from "@/components/Involvement";
import Stats from "@/components/Stats";
import Why from "@/components/Why";
import Marquee from "@/components/Marquee";
import CTAStrip from "@/components/CTAStrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorFX />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Resume />
      <Involvement />
      <Stats />
      <Why />
      <Marquee />
      <CTAStrip />
      <Contact />
      <Footer />
    </>
  );
}
