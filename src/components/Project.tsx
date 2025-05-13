"use client";
import { ProjectProps } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

function Project({
  title,
  description,
  tags,
  imageUrl,
  demoLink,
  codeLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 md:mb-8 last:mb-0"
    >
      <section
        className="bg-blue-300/30 backdrop-blur-xl backdrop-saturate-150 
           border border-black/10 shadow-2xl dark:bg-zinc-800/90 max-w-[50rem] rounded-lg overflow-hidden md:pr-8 relative md:h-[25rem] hover:bg-amber-500 transition text-black dark:text-white hover:text-black"
      >
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 md:max-w-[50%] flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className=" leading-relaxed ">{description}</p>
          <div className="flex gap-3 ">
            {demoLink && (
              <Link
                href={demoLink}
                className="group bg-indigo-600 text-white px-7 py-3 flex items-center gap-2 rounded-md outline-none focus:scale-110 hover:scale-110  hover:bg-[#00BFFF] hover:text-black active:scale-105 transition"
                target="_blank"
              >
                View App{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>
            )}
            {codeLink && (
              <Link
                href={codeLink}
                className="group bg-indigo-600 text-white px-7 py-3 flex items-center gap-2 rounded-md outline-none focus:scale-110 hover:scale-110 hover:bg-[#00BFFF] hover:text-black active:scale-105 transition"
                target="_blank"
              >
                View Code{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>
            )}
          </div>
          <ul className="flex flex-wrap mt-4 gap-2 md:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-emerald-700 dark:bg-zinc-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full font-semibold"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden md:block top-22 -right-35 w-[31rem] rounded-t-lg shadow-white dark:shadow-black shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2"
        />
      </section>
    </motion.div>
  );
}

export default Project;

{
  /* <section className="bg-black dark:bg-white max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] hover:bg-[#00BFFF] transition sm:group-even:pl-8 text-white dark:text-black hover:text-black"></section>
<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] "></div>
<Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-22 -right-35 w-[31rem] rounded-t-lg shadow-white dark:shadow-black shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-45"
        /> */
}
