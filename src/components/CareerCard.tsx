import { Career } from "@/model/Career";
import Image from "next/image";
import Tags from "./tags";

export default function CareerCard({
  logo,
  company,
  period,
  description,
  position,
  projects,
}: Career) {
  return (
    <div className="flex gap-8">
      <div className="flex-shrink-0">
        <Image
          src={logo}
          alt={company}
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div className="relative flex-grow space-y-4 pl-8">
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-200" />
        <div>
          <h2 className="text-2xl font-bold">{company}</h2>
          <p className="text-gray-600">{period}</p>
          <p className="mt-2 text-lg">{description}</p>
        </div>

        <div className="space-y-6">
          <div className="w-fit rounded-lg bg-black px-4 py-2 text-white">
            {position}
          </div>

          {projects.map((project, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-bold">| {project.title}</h3>
              <p className="text-gray-600">{project.period}</p>
              <p className="text-gray-800">{project.description}</p>
              {project.techStack && <Tags tags={project.techStack} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
