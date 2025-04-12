import About from "@/components/About";
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

      {/* <About></About>
        <TimeLine></TimeLine>
        <Projects></Projects>
        <Contact></Contact> */}
    </main>
  );
}
