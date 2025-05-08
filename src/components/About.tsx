"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-8 scroll-mt-28 mb-28 sm:mb-40 dark:text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
        I'm a{" "}
        <strong className="text-blue-500">Computer Engineering graduate</strong>{" "}
        and <strong className="text-blue-500">full-stack developer</strong> with
        a strong passion for building useful and reliable web applications.
      </p>

      <p className="mb-4">
        Since graduating, I’ve completed{" "}
        <strong className="text-blue-500">two coding bootcamps</strong> and
        earned{" "}
        <strong className="text-blue-500">multiple certifications</strong>,
        including:
      </p>

      <ul className="list-disc list-inside mb-4 ml-4">
        <li>
          <em className="font-bold">
            AWS Certified Solutions Architect – Associate
          </em>
        </li>
        <li>
          <em className="font-bold">AWS Certified Developer – Associate</em>
        </li>
        <li>
          <em className="font-bold">Google IT Automation with Python</em>
        </li>
      </ul>

      <p className="mb-4">
        I’ve built{" "}
        <strong className="text-blue-500">
          three freelance full-stack applications
        </strong>{" "}
        using a variety of tech stacks, and created{" "}
        <strong className="text-blue-500">several personal projects</strong> to
        further sharpen my skills.
      </p>

      <p className="mb-4">
        My core stack includes: <br />
        <strong className="text-purple-600">React</strong> &{" "}
        <strong className="text-purple-600">Next.js</strong> (frontend),{" "}
        <strong className="text-[#FF1493]">TypeScript (Nest.js)</strong>{" "}
        (backend), and <strong className="text-[#FF6347]">MySQL</strong> /{" "}
        <strong className="text-[#FF6347]">PostgreSQL</strong> for databases.{" "}
        <br />I also have a solid understanding of{" "}
        <strong className="text-red-500">Docker</strong> and{" "}
        <strong className="text-red-500">CI/CD pipelines</strong>.
      </p>

      <p className="mb-4">
        While the majority of my experience is in{" "}
        <strong className="text-[#FF1493]">TypeScript</strong>,{" "}
        <strong className="text-purple-600">HTML</strong>, and{" "}
        <strong className="text-purple-600">CSS</strong>, I’ve also built
        full-stack applications in{" "}
        <strong className="text-[#FF1493]">C# (.NET)</strong> and{" "}
        <strong className="text-[#FF1493]">Java (Spring Boot)</strong>. I have
        experience building front ends with{" "}
        <strong className="text-purple-600">Angular</strong>, and during my
        studies, I even built a compiler in{" "}
        <strong className="text-[#FF1493]">C</strong>. These experiences reflect
        my ability to adapt and work across a wide range of technologies.
      </p>

      <p className="mb-4">
        Technology isn’t just work to me — it’s a{" "}
        <strong className="text-green-600">genuine passion</strong>. I actively
        follow the software space and stay up to date with{" "}
        <strong className="text-green-600">emerging technologies</strong>. I'm
        always <strong className="text-green-600">eager to learn</strong> and{" "}
        <strong className="text-green-600">take on challenges</strong> that push
        me to <strong className="text-green-600 underline">GROW</strong> both
        personally and professionally.
      </p>

      <p className="mb-4">
        Outside of programming, I enjoy <em>playing video games</em>,{" "}
        <em>watching movies and TV shows</em>, <em>listening to music</em>, and{" "}
        <em>reading books</em>.
      </p>
    </motion.section>
  );
}

export default About;
