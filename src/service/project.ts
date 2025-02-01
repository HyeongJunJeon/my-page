import { Project } from "@/model/Project";
import { readFile } from "fs/promises";
import path from "path";
import { client } from "./sanity";

export type ProjectData = Project & {
  content: string;
};

export async function getProjects() {
  const projects = (await client.fetch('*[_type == "project"]')) as Project[];
  return projects.sort((a, b) => b.order - a.order);
}

export async function getProjectBy(fileName: string): Promise<ProjectData> {
  const filePath = path.join(
    process.cwd(),
    "data",
    "projects",
    `${fileName}.md`,
  );
  const projects = await getProjects();
  const project = projects.find((project) => project.path === fileName);

  if (!project)
    throw new Error(`${fileName}에 해당하는 프로젝트를 찾을 수 없습니다.`);

  const content = await readFile(filePath, "utf-8");

  return { ...project, content };
}
