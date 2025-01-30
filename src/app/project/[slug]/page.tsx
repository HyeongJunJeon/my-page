import ProjectDetail from "@/components/ProjectDetail";
import { getAllProjects, getProjectData } from "@/service/projects";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { title, description } = await getProjectData(slug);
  return {
    title: `project ${title}`,
    description,
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    slug: project.path,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const project = await getProjectData(slug);
  return <ProjectDetail project={project} />;
}
