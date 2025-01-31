import { client, urlFor } from "./sanity";
import { Career } from "@/model/Career";

export async function getCareers() {
  const careers = (await client.fetch('*[_type == "career"]')) as Career[];
  return careers.map((career) => ({
    ...career,
    logo: urlFor(career.logo),
  }));
}
