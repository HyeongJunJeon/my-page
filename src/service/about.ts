import { PersonalInfo, Skill } from "@/model/About";
import { client, urlFor } from "./sanity";

export async function getPersonalInfos() {
  const personalInfos = (await client.fetch(
    '*[_type == "personal_info"]',
  )) as PersonalInfo[];

  return personalInfos.sort((a, b) => a.order - b.order);
}

export async function getSkills() {
  const skills = (await client.fetch('*[_type == "skill"]')) as Skill[];
  return skills.map((skill) => ({
    ...skill,
    icon: urlFor(skill.icon),
  }));
}
