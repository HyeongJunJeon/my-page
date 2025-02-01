import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/service/project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "project",
  description: "project 살펴보기",
};

export default async function Project() {
  const projects = await getProjects();

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
