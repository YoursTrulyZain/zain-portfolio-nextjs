import cinemaFrontendNextjs from "@/../public/cinema-frontend-nextjs.png";
import asteroids from "@/../public/asteroids-python.png";
import React from "react";
import { FaAngular } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiDotnet } from "react-icons/si";
import cinemaBackendNestjs from "@/../public/cinema-backend-nestjs.png";
import acmeInc from "@/../public/financial-dashboard-nextjs.png";
import resumeCreator from "@/../public/resume-creator.png";
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
    title: "TicketZ Cinema - Frontend",
    description:
      "A web app made using React and Next.js where users can view theatres, movies, screenings and seats. Screenings can be filtered by movie, theatre and date. Users can also sign in to buy and view their tickets.",
    tags: ["React", "Next.js", "Tailwind", "Shadcn/ui", "Vercel"],
    imageUrl: cinemaFrontendNextjs,
    demoLink: "https://cinema.z41n.dev/",
    codeLink: "https://github.com/YoursTrulyZain/cinema-frontend-nextjs",
  },

  {
    title: "TicketZ Cinema - Backend",
    description:
      "Backend for the TicketZ Cinema app made using NestJS. The app contains an API, a completely decoupled data access layer, a Neon PostgreSQL database accessed through Prisma and JWT authentication.",
    tags: ["NestJS", "Prisma", "NeonDb", "PostgreSQL", "JWT", "Railway"],
    imageUrl: cinemaBackendNestjs,
    codeLink: "https://github.com/YoursTrulyZain/cinema-backend-nestjs",
  },
  {
    title: "Acme Inc.",
    description:
      "A fullstack Next.js application where users can add and manage their customers, create and manage invoices, and view charts and tables based on the invoice data. The app has authentication and authorization. All data is stored in a NeonDB PostgreSQL database.",
    tags: ["React", "Next.js", "Tailwind", "Vercel", "NeonDB"],
    imageUrl: acmeInc,
    demoLink: "https://acme.z41n.dev/",
    codeLink: "https://github.com/YoursTrulyZain/dashboard-nextjs",
  },
  {
    title: "Resume Creator",
    description:
      "One of the first React applications I made. This application provides a user-friendly interface for inputting personal information, education history, work experience, and skills, which are then formatted into a clean resume layout that can be downloaded as a PDF.",
    tags: ["React", "Tailwind", "Vercel"],
    imageUrl: resumeCreator,
    demoLink: "https://resume.z41n.dev/",
    codeLink: "https://github.com/YoursTrulyZain/resume-creator",
  },
  {
    title: "Asteroids",
    description:
      "A python game where you take control of a spaceship and blast asteroids. Game featurres collision detection for player-asteroid and shot-asteroid interactions. Player spaceship operates Vector-based movement",
    tags: ["Python", "Pygame", "VENV"],
    imageUrl: asteroids,
    codeLink: "https://github.com/YoursTrulyZain/asteroids-python",
  },
];

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
      "Worked as an Angular front-end developer for a startup named Caremada where I designed and implementd a real time chat page, a calendar page that tracked user appointments and a search page with sorting.",
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
