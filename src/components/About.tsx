"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");

  const aboutContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className="max-w-[50rem] text-center leading-8 scroll-mt-28 mb-28 sm:mb-40 dark:text-white text-black dark:bg-zinc-800 bg-blue-300/30 backdrop-blur-xl backdrop-saturate-150 
           border border-black/10 shadow-2xl p-8 rounded-2xl transition-all duration-300"
      variants={aboutContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <motion.p className="mb-4" variants={fadeUpItem}>
        I’m a{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          Computer Engineering graduate
        </strong>{" "}
        and{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          full-stack developer
        </strong>{" "}
        with a passion for building useful, reliable web applications.
      </motion.p>

      <motion.p className="mb-4" variants={fadeUpItem}>
        Since graduating, I’ve completed{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          two coding bootcamps
        </strong>{" "}
        and earned the following{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          certifications
        </strong>
        :
      </motion.p>

      <motion.ul
        className="list-disc list-inside mb-4 ml-4 text-left sm:text-center"
        variants={fadeUpItem}
      >
        <motion.li className="mb-1" variants={fadeUpItem}>
          <em className="font-bold">
            AWS Certified Solutions Architect – Associate
          </em>
        </motion.li>
        <motion.li className="mb-1" variants={fadeUpItem}>
          <em className="font-bold">AWS Certified Developer – Associate</em>
        </motion.li>
        <motion.li variants={fadeUpItem}>
          <em className="font-bold">Google IT Automation with Python</em>
        </motion.li>
      </motion.ul>

      <motion.p className="mb-4" variants={fadeUpItem}>
        I’ve built multiple{" "}
        <strong className="text-blue-600 dark:text-blue-400">
          freelance applications
        </strong>{" "}
        and several personal projects to sharpen my skills. My core stack
        includes{" "}
        <span className="text-purple-700 dark:text-purple-400">React</span>,{" "}
        <span className="text-purple-700 dark:text-purple-400">Next.js</span>,
        and{" "}
        <span className="text-pink-700 dark:text-pink-400">
          TypeScript (NestJS)
        </span>
        , with{" "}
        <span className="text-orange-700 dark:text-orange-400">MySQL</span> and{" "}
        <span className="text-orange-700 dark:text-orange-400">PostgreSQL</span>{" "}
        on the database side. I also have hands-on experience with{" "}
        <span className="text-rose-700 dark:text-rose-400">Docker</span> and
        CI/CD pipelines.
      </motion.p>

      <motion.p className="mb-4" variants={fadeUpItem}>
        Beyond TypeScript, I’ve built full-stack projects using{" "}
        <span className="text-pink-700 dark:text-pink-400">C# (.NET)</span> and{" "}
        <span className="text-pink-700 dark:text-pink-400">
          Java (Spring Boot)
        </span>
        , created frontends with{" "}
        <span className="text-purple-700 dark:text-purple-400">Angular</span>,
        and even built a compiler in{" "}
        <span className="text-pink-700 dark:text-pink-400">C</span>. I enjoy
        learning new tools and adapting quickly.
      </motion.p>

      <motion.p className="mb-4" variants={fadeUpItem}>
        Technology isn’t just work for me—it’s a{" "}
        <span className="text-emerald-800 dark:text-emerald-400 font-semibold">
          genuine passion
        </span>
        . I actively follow the software world and enjoy staying up to date with{" "}
        <span className="text-emerald-800 dark:text-emerald-400 font-semibold">
          emerging tech
        </span>
        . I'm always eager to learn and grow—both personally and professionally.
      </motion.p>

      <motion.p variants={fadeUpItem}>
        Outside of tech, I enjoy <em>gaming</em>, <em>movies and TV</em>,{" "}
        <em>music</em>, and <em>books</em>. (Ask me about Hollow Knight!)
      </motion.p>
    </motion.section>
  );
}

export default About;
