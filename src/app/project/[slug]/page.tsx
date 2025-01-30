import ProjectDetail from "@/components/ProjectDetail";
import { getAllProjects, getProjectData } from "@/service/projects";

type Props = {
  params: {
    slug: string;
  };
};

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
