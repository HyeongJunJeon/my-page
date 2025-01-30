import ProjectDetail from "@/components/ProjectDetail";
import { getAllProjects, getProjectData } from "@/service/projects";
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

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    id: project.path,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const project = await getProjectData(id);
  return <ProjectDetail project={project} />;
}
