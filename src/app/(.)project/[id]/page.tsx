import ProjectPage from "@/app/project/[slug]/page";
import ModalLayout from "@/components/ModalLayout";
import { getProjectData } from "@/service/projects";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
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
  const { id } = await params;

  return (
    <ModalLayout
      open={true}
      title=""
      description="새로고침을 하면 모달이 아닌 상세페이지로 이동해요. (Next.js intercepting routes)"
    >
      <ProjectPage
        params={{
          slug: id,
        }}
      />
    </ModalLayout>
  );
}
