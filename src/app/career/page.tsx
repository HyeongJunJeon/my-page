import CareerCard from "@/components/CareerCard";
import { getCareers } from "@/service/career";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "career",
  description: "career 살펴보기",
};

export default async function Career() {
  const careers = await getCareers();
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
