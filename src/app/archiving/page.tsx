import ArchiveCard from "@/components/ArchiveCard";
import GithubIcon from "@/assets/images/ic-github.png";
import VelogIcon from "@/assets/images/ic-velog.jpeg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "archiving",
  description: "archives 살펴보기",
};

export default function Archiving() {
  const archives = [
    {
      icon: GithubIcon,
      title: "GitHub",
      link: "https://github.com/HyeongJunJeon",
      main_description: "소스 코드 저장소",
    },
    {
      icon: VelogIcon,
      title: "Velog",
      link: "https://velog.io/@gud_wns/posts",
      main_description: "기록 목적의 블로그",
      sub_description: "공유보다는 기록을 위해 작성하고 있습니다 😅",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-16 flex items-center justify-center gap-2 text-5xl font-black">
        <span>ARCHIVING</span>
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {archives.map((archive) => (
          <ArchiveCard key={archive.title} {...archive} />
        ))}
      </div>
    </div>
  );
}
