import Intro from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro></Intro>
      {/* <About></About>
        <TimeLine></TimeLine>
        <Projects></Projects>
        <Contact></Contact> */}
    </main>
  );
}
