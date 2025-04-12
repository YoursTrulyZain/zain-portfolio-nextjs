import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Footer></Footer>

      {/* <About></About>
        <TimeLine></TimeLine>
        <Projects></Projects>
        <Contact></Contact> */}
    </main>
  );
}
