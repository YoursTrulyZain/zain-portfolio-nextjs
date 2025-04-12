import corpcommentImg from "@/../public/corpcomment.png";
import rmtdevImg from "@/../public/rmtdev.png";
import wordanalyticsImg from "@/../public/wordanalytics.png";
import React from "react";
import { FaAngular } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiDotnet } from "react-icons/si";

export const navLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Next.js",
  "Node.js",
  "Express",
  "Java",
  "Spring Boot",
  "Python",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Docker",
  "CI/CD",
  "AWS",
] as const;

export const experiencesData = [
  {
    title: "Graduated college",
    location: "Ottawa, ON, Canada",
    description:
      "Graduated with honors after a 3 year Computer Engineering Program from Algonquin College. Achieved deans list every semester.",
    icon: React.createElement(LuGraduationCap),
    date: "April, 2022",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I worked as an Angular front-end developer for a startup named Caremada where I designed and implementd a real time chat page, a calendar page that tracked user appointments and a search page with sorting.",
    icon: React.createElement(FaAngular),
    date: "September, 2022 - March, 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "Developed a financial web app for a startup named FirePools where users can input their financial data, make calculations and recieve insights. I worked as part of a team where we built the front end and back end using C# and the .NET framework.",
      icon: React.createElement(SiDotnet),
    date: "May, 2023 - September, 2023",
  },
] as const;
