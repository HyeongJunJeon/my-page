import SkillCard from "./SkillCard";
import HTMLIcon from "@/assets/images/ic-html.png";
import JSIcon from "@/assets/images/ic-js.png";
import CssIcon from "@/assets/images/ic-css.png";
import ReactIcon from "@/assets/images/ic-react.png";
import NextIcon from "@/assets/images/ic-next.png";
import TailwindIcon from "@/assets/images/ic-tailwind.png";
import StyledComponentIcon from "@/assets/images/ic-styled-component.png";
import TSIcon from "@/assets/images/ic-ts.png";
import FramerIcon from "@/assets/images/ic-framer.png";
import ZustandIcon from "@/assets/images/ic-zustand.png";
import ReactQueryIcon from "@/assets/images/ic-react-query.png";
import AwsIcon from "@/assets/images/ic-aws.png";
import VercelIcon from "@/assets/images/ic-vercel.png";
import GithubIcon from "@/assets/images/ic-github.png";

export default function Skills() {
  const skills = [
    { icon: HTMLIcon, name: "HTML5" },
    { icon: CssIcon, name: "CSS3" },
    { icon: JSIcon, name: "JavaScript" },
    { icon: TSIcon, name: "TypeScript" },
    { icon: StyledComponentIcon, name: "Styled-component" },
    { icon: TailwindIcon, name: "Tailwind CSS" },
    { icon: ReactIcon, name: "React.js" },
    { icon: NextIcon, name: "Next.js" },
    { icon: ReactQueryIcon, name: "React-query" },
    { icon: ZustandIcon, name: "Zustand" },
  ];

  const deployments = [
    { icon: AwsIcon, name: "AWS" },
    { icon: VercelIcon, name: "Vercel" },
    { icon: GithubIcon, name: "Github-action" },
  ];

  const extras = [{ icon: FramerIcon, name: "Framer" }];

  return (
    <div className="mx-auto max-w-7xl rounded-3xl bg-[#e6f3ff] p-12">
      <h2 className="mb-16 flex items-center justify-center gap-2 text-5xl font-black">
        <span>SKILLS</span>
      </h2>

      <div className="grid gap-8">
        <div className="rounded-xl bg-white p-8">
          <h3 className="mb-4 text-xl font-bold text-[#ff6b6b]">FrontEnd</h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white p-8">
          <h3 className="mb-4 text-xl font-bold text-[#ff922b]">Deployment</h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {deployments.map((deployment) => (
              <SkillCard key={deployment.name} {...deployment} />
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white p-8">
          <h3 className="mb-4 text-xl font-bold text-[#ff922b]">Extra</h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {extras.map((extra) => (
              <SkillCard key={extra.name} {...extra} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
