import { Skill } from "@/model/About";
import SkillCard from "./SkillCard";

async function fetchSkills(): Promise<Skill[]> {
  const response = await fetch(`${process.env.API_BASE_URL}/api/skill`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error("skill정보를 불러오는데 실패했습니다.");
  }

  return response.json();
}

function sortSkills(skills: Skill[] | undefined): Skill[] | undefined {
  return skills?.sort((a, b) => a.order - b.order);
}

export default async function Skills() {
  const skills = await fetchSkills();

  // 처음에 sanity에 type별로 저장했어야 했는데, groupBy를 사용해볼겸 구현해봤습니다.
  const SkillsGroupedByType = Object.groupBy(skills, (skill) => skill.type);

  const frontEnd = sortSkills(SkillsGroupedByType["FE"]);
  const deployment = sortSkills(SkillsGroupedByType["deployments"]);
  const extra = sortSkills(SkillsGroupedByType["extra"]);

  return (
    <div className="mx-auto max-w-7xl rounded-3xl bg-[#e6f3ff] p-12">
      <h2 className="mb-16 flex items-center justify-center gap-2 text-5xl font-black">
        <span>SKILLS</span>
      </h2>

      <div className="grid gap-8">
        {frontEnd && (
          <div className="rounded-xl bg-white p-8">
            <h3 className="mb-4 text-xl font-bold text-[#ff6b6b]">FrontEnd</h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
              {frontEnd.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
              ))}
            </div>
          </div>
        )}

        {deployment && (
          <div className="rounded-xl bg-white p-8">
            <h3 className="mb-4 text-xl font-bold text-[#ff922b]">
              Deployment
            </h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
              {deployment.map((deployment) => (
                <SkillCard key={deployment.title} {...deployment} />
              ))}
            </div>
          </div>
        )}

        {extra && (
          <div className="rounded-xl bg-white p-8">
            <h3 className="mb-4 text-xl font-bold text-[#7838e7]">Extra</h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
              {extra.map((extra) => (
                <SkillCard key={extra.title} {...extra} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
