"use client";

import React from "react";
import Image from "next/image";
import profilepic from "@/../public/z2-xl-t.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const container = {
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
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center scroll-mt-[100rem] mb-28 sm:mb-40"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <Image
              src={profilepic}
              alt="zain profile picture"
              width="192"
              height="192"
              quality={100}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-black dark:border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-2xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.3 }}
          >
            ❤️
          </motion.span>
        </div>
      </div>
      <motion.div
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-relaxed sm:text-4xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="text-neutral-900 dark:text-white"
          variants={fadeUpItem}
        >
          <span className="font-bold">Hello, I'm Zain</span> — a{" "}
          <strong className="text-blue-600 dark:text-blue-400 font-semibold">
            software engineer
          </strong>{" "}
          specializing in{" "}
          <span className="italic text-purple-700 dark:text-purple-400">
            full-stack web development
          </span>{" "}
          with{" "}
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">
            TypeScript
          </span>
          .
        </motion.p>

        <motion.p
          className="text-neutral-900 dark:text-white mt-4"
          variants={fadeUpItem}
        >
          I build{" "}
          <span className="underline decoration-dotted underline-offset-2">
            responsive interfaces
          </span>
          ,{" "}
          <span className="underline decoration-dotted underline-offset-2">
            scalable backend systems
          </span>
          , and <span className="font-medium">real-world applications</span>{" "}
          with{" "}
          <span className="text-green-800 dark:text-green-400 font-semibold">
            production-grade quality
          </span>{" "}
          and{" "}
          <span className="text-teal-700 dark:text-teal-300 font-semibold">
            meticulous attention to detail
          </span>
          .
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-indigo-600 hover:bg-[#00BFFF] text-white hover:text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-black dark:bg-white hover:bg-[#00BFFF] text-white hover:text-black dark:text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          href="/zain-resume-fullstack.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-black dark:bg-white p-4 text-white dark:text-black hover:text-blue-500 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
          href="https://www.linkedin.com/in/zainsarfraz/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-black dark:bg-white p-4 text-white dark:text-black flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-fuchsia-500 active:scale-105 transition cursor-pointer "
          href="https://github.com/YoursTrulyZain"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
