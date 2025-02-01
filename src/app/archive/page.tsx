import ArchiveCard from "@/components/ArchiveCard";
import { getArchives } from "@/service/archive";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "archive",
  description: "archive 살펴보기",
};

export default async function Archives() {
  const archives = await getArchives();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-16 flex items-center justify-center gap-2 text-5xl font-black">
        <span>ARCHIVE</span>
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {archives.map((archive) => (
          <ArchiveCard key={archive.title} {...archive} />
        ))}
      </div>
    </div>
  );
}
