import Link from "next/link";
import { MdLibraryBooks } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { Project } from "@/model/Project";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, period, description, details, techStack, link, path } =
    project;

  return (
    <div className="flex h-full flex-col justify-between rounded-lg border p-4 shadow-md">
      <div>
        <div className="mb-2 border-b pb-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <h3 className="mt-2 text-gray-600">{period}</h3>
        </div>
        <div>
          <p className="mb-2 text-xl font-semibold">{description}</p>
          <ul className="list-disc space-y-2 pl-5">
            {details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>

          <div className="my-4 w-fit rounded-lg border border-yellow-300 bg-yellow-200 p-2 text-yellow-800">
            {techStack.join(", ")}
          </div>
        </div>
      </div>
      <div className="flex-center mt-4 w-full gap-4">
        <Link
          href={`/project/${path}`}
          className="flex-center flex-1 gap-2 rounded-lg border border-black p-2 hover:bg-gray-100"
        >
          <MdLibraryBooks />
          README
        </Link>
        {link && (
          <Link
            href={link}
            target="_blank"
            className="flex-center flex-1 gap-2 rounded-lg bg-blue-400 p-2 text-white hover:bg-blue-500"
          >
            <FaLink />
            <p>바로가기</p>
          </Link>
        )}
      </div>
    </div>
  );
}
