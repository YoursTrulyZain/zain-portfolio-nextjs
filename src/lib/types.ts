import { StaticImageData } from "next/image";
import { navLinks, projectsData } from "./data";

export type SectionName = (typeof navLinks)[number]["name"];

export type SectionHeadingProps = {
  children: React.ReactNode;
};

export type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  demoLink?: string;
  codeLink?: string;
};

export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type Theme = "light" | "dark";

export type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
