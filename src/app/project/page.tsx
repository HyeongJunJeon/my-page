import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/model/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "project",
  description: "project 살펴보기",
};

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(`${process.env.API_BASE_URL}/api/project`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error("프로젝트를 불러오는데 실패했습니다.");
  }

  return response.json();
}

export default async function Project() {
  const projects = await fetchProjects();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-16 flex items-center justify-center gap-2 text-5xl font-black">
        <span>PROJECT</span>
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
