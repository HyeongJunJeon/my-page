import { Archive } from "@/model/Archive";
import { client, urlFor } from "./sanity";

export async function getArchives() {
  const archives = (await client.fetch(
    '*[_type == "archive"] | order(lower(title) asc)',
  )) as Archive[];
  return archives.map((archive) => ({
    ...archive,
    icon: urlFor(archive.icon),
  }));
}
