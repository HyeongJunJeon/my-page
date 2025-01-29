import ProjectDetail from "@/components/ProjectDetail";
import { getProjectData } from "@/service/projects";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const project = await getProjectData(slug);
  return <ProjectDetail project={project} />;
}
