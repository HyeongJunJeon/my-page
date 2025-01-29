import CareerCard from "@/components/CareerCard";
import BlockoIcon from "@/assets/images/ic-blocko.png";

export default function Career() {
  const careers = [
    {
      logo: BlockoIcon,
      company: "(주) 블로코",
      period: "2022.09 ~ (재직중)",
      description: "블록체인 전문 MSP 기업",
      position: "Frontend 개발 및 FE CI/CD 담당",
      projects: [
        {
          title: "GEMVERSE",
          period: "2024년 중반기 ~ 2024년 하반기",
          description:
            "React-flow를 활용한 노드 다이어그램 기반 노코드 업무 자동화 플랫폼 개발",
          techStack: [
            "React.js",
            "Typescript",
            "Emotion",
            "Mui",
            "React-Query",
            "Zustand",
            "React-hook-form",
            "React-flow",
          ],
        },
        {
          title: "WINCL",
          period: "2023년 상반기 ~ 2023년 하반기",
          description: "탄소배출권 관련 WINCL 스토어 개발 (백오피스 동시 개발)",
          techStack: ["React.js", "Scss"],
        },
        {
          title: "대표 홈페이지 개발 참여",
          period: "2024년 하반기",
          description:
            "Framer를 통해 구현되었으며, react 프로그래밍 부분 개발 및 페이지 호스팅",
          techStack: ["AWS", "Framer"],
        },
        {
          title: "사내 FE 프로젝트 CI/CD 담당",
          period: "2023년 상반기 ~ 현재",
          description:
            "Route53, S3, CloudFront, Amplify, ACM, Github Actions을 활용하여 CI/CD 환경 구축",
          techStack: ["AWS", "Github Actions"],
        },
      ],
    },
  ];

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
