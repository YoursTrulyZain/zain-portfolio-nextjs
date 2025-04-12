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
        Hi, I'm a{" "}
        <strong className="text-blue-500">Computer Engineering graduate</strong>{" "}
        and <strong className="text-teal-500">full-stack developer</strong> with
        a strong passion for building useful and reliable web applications.
      </p>

      <p className="mb-4">
        Since graduation, I’ve completed <strong>two coding bootcamps</strong>{" "}
        and earned <strong>multiple certifications</strong>, including:
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
        I’ve built <strong>three freelance full-stack applications</strong>{" "}
        using different tech stacks, and created{" "}
        <u>several personal projects</u> to keep learning and growing.
      </p>

      <p className="mb-4">
        My core stack includes: <br />
        <strong className="text-purple-600">React</strong> &{" "}
        <strong className="text-purple-600">Next.js</strong> (frontend),{" "}
        <strong className="text-blue-600">Java Spring Boot</strong> (backend),
        and <strong className="text-emerald-600">MySQL</strong> /{" "}
        <strong className="text-emerald-600">PostgreSQL</strong> for databases.{" "}
        <br />I also have a solid understanding of{" "}
        <strong className="text-orange-500">Docker</strong> and{" "}
        <strong className="text-orange-500">CI/CD pipelines</strong>.
      </p>

      <p className="mb-4">
        Outside of programming, I enjoy <em>playing video games</em>,{" "}
        <em>watching movies and TV shows</em>, <em>listening to music</em>, and{" "}
        <em>reading books</em>.
      </p>

      <p>
        I'm always eager to{" "}
        <strong className="text-green-600">learn new technologies</strong> and
        <strong className="text-green-600"> take on challenges</strong> that
        help me grow as a developer.
      </p>
    </motion.section>
  );
}

export default About;
