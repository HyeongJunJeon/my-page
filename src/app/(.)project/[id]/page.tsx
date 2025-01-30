import ProjectPage from "@/app/project/[id]/page";
import ModalLayout from "@/components/ModalLayout";
import { getProjectData } from "@/service/projects";
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

export default async function Page({ params }: Props) {
  return (
    <ModalLayout
      open={true}
      title=""
      description="새로고침을 하면 모달이 아닌 상세페이지로 이동해요. (Next.js intercepting routes)"
    >
      <ProjectPage params={params} />
    </ModalLayout>
  );
}
