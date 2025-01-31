import ArchiveCard from "@/components/ArchiveCard";
import { Archive } from "@/model/Archive";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "archive",
  description: "archive 살펴보기",
};

async function fetchArchives(): Promise<Archive[]> {
  const response = await fetch(`${process.env.API_BASE_URL}/api/archive`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error("기록물을 불러오는데 실패했습니다.");
  }

  return response.json();
}

export default async function Archives() {
  const archives = await fetchArchives();

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
