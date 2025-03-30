import { getProjects } from "@/service/project";
import { Metadata } from "next";
import ClientWrapper from "@/components/ClientWrapper";
import ProjectFilter from "@/components/ProjectFilter";

export const metadata: Metadata = {
  title: "project",
  description: "project 살펴보기",
};

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-8 flex items-center justify-center gap-2 text-5xl font-black">
        <span>PROJECT</span>
      </h1>

      <ClientWrapper>
        <ProjectFilter initialProjects={projects} />
      </ClientWrapper>
    </div>
  );
}
