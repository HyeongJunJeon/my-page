import { Project } from "./Project";

export type Career = {
  logo: string;
  company: string;
  period: string;
  description: string;
  position: string;
  projects: Pick<Project, "title" | "period" | "description" | "techStack">[];
};
