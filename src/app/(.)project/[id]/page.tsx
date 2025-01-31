import ProjectPage from "@/app/project/[id]/page";
import ModalLayout from "@/components/ModalLayout";
import { ProjectData } from "@/service/project";
import { Metadata } from "next";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const { title, description } = await fetchProjectById(id);
  return {
    title: `project ${title}`,
    description,
  };
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
