import Skills from "@/components/Skills";
import PersonalInfo from "@/components/PersonalInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about me",
  description: "about 살펴보기",
};

export default function About() {
  return (
    <div className="space-y-20 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-16 flex items-center justify-center gap-2 text-5xl font-black">
          <span>ABOUT ME</span>
        </h1>
        <PersonalInfo />
      </div>
      <Skills />
    </div>
  );
}
