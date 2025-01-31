import CareerCard from "@/components/CareerCard";
import type { Career } from "@/model/Career";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "career",
  description: "career 살펴보기",
};

async function fetchCareers(): Promise<Career[]> {
  const response = await fetch(`${process.env.API_BASE_URL}/api/career`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error("기록물을 불러오는데 실패했습니다.");
  }

  return response.json();
}

export default async function Career() {
  const careers = await fetchCareers();
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-16 flex items-center justify-center gap-2 text-5xl font-black">
        <span>CAREER</span>
      </h1>

      <div className="space-y-16">
        {careers.map((career) => (
          <CareerCard key={career.company} {...career} />
        ))}
      </div>
    </div>
  );
}
