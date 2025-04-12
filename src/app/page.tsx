import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <About></About>
      <SectionDivider></SectionDivider>
      {/* <About></About>
        <TimeLine></TimeLine>
        <Projects></Projects>
        <Contact></Contact> */}
    </main>
  );
}
