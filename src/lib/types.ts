import { projectsData } from "./data";

export type SectionHeadingProps = {
  children: React.ReactNode;
};

export type ProjectProps = (typeof projectsData)[number];
