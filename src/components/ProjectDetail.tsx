import MarkdownViewer from "@/components/MarkdownViewer";
import { ProjectData } from "@/service/projects";

import { AiTwotoneCalendar } from "react-icons/ai";

export default function ProjectDetail({ project }: { project: ProjectData }) {
  const { title, description, period, content } = project;
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col px-4 py-12">
      <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar />
        <p className="ml-2 font-semibold">{period}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="mb-8 mt-4 w-44 border-2 border-sky-600" />
      <MarkdownViewer content={content} />
    </section>
  );
}
