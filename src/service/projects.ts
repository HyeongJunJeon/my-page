import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Project = {
  title: string;
  id: string;
  path: string;
  period: string;
  description: string;
  details: string[];
  link?: string;
  techStack: string[];
};

export type ProjectData = Project & {
  content: string;
};

export const getAllProjects = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  return readFile(filePath, "utf-8").then<Project[]>(JSON.parse);
});

export async function getProjectData(fileName: string): Promise<ProjectData> {
  const filePath = path.join(
    process.cwd(),
    "data",
    "projects",
    `${fileName}.md`,
  );
  const projects = await getAllProjects();
  const project = projects.find((project) => project.path === fileName);

  if (!project) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const content = await readFile(filePath, "utf-8");

  return { ...project, content };
}
