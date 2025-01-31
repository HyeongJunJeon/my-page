import ProjectDetail from "@/components/ProjectDetail";
import type { Project } from "@/model/Project";
import { getProjectData, ProjectData } from "@/service/project";
import { Metadata } from "next";

type Props = {
  params: Promise<{
    id: string;
  }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const { title, description } = await getProjectData(id);
  return {
    title: `project ${title}`,
    description,
  };
}

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(`${process.env.API_BASE_URL}/api/project`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error("프로젝트를 불러오는데 실패했습니다.");
  }

  return response.json();
}

async function fetchProjectById(id: string): Promise<ProjectData> {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/project/${id}`,
    {
      cache: "force-cache",
    },
  );
  if (!response.ok) {
    throw new Error("프로젝트를 불러오는데 실패했습니다.");
  }

  return response.json();
}

export async function generateStaticParams() {
  const projects = await fetchProjects();

  return projects.map((project) => ({
    id: project.path,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const project = await fetchProjectById(id);
  return <ProjectDetail project={project} />;
}
