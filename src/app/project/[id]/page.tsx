import ProjectDetail from "@/components/ProjectDetail";
import { getProjectBy, getProjects } from "@/service/project";
import { Metadata } from "next";

type Props = {
  params: Promise<{
    id: string;
  }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const { title, description } = await getProjectBy(id);
  return {
    title: `project ${title}`,
    description,
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    id: project.path,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const project = await getProjectBy(id);
  return <ProjectDetail project={project} />;
}
