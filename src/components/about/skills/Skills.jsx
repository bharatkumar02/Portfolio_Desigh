import { FaHtml5 } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import ProgressBar from "./ProgressBar";
import { FaMobile } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { GrIntegration } from "react-icons/gr";
import { SiReacthookform } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiSwiper } from "react-icons/si";

const skills = [
  { name: "Shadcn UI", icon: SiShadcnui },

  { name: "Framer Motion", icon: TbBrandFramerMotion },
  { name: "React Router", icon: SiReactrouter },
  { name: "Redux", icon: SiRedux },
  { name: "Sass", icon: FaSass },
  { name: "React Hook Form", icon: SiReacthookform },
  { name: "Axios", icon: SiAxios },

  { name: "GitHub", icon: FaGithub },
  { name: "VS Code", icon: VscVscode },
  { name: "Vite", icon: SiVite },
  { name: "Swiper.js", icon: SiSwiper },
];
function Skills() {
  return (
    <>
      <div>
        <div>
          <span className="text-red-500">Skill Highlights</span>
          <h3 className="mb-3 font-[poppins] text-2xl font-medium md:mb-5">
            Development Skills
          </h3>
          <div className="flex flex-col gap-5 text-[#878e99] lg:grid lg:grid-cols-2 lg:gap-10 lg:gap-x-20">
            <ProgressBar
              skillName="HTML"
              Icon={FaHtml5}
              percentage="70%"
              progress="w-[70%]"
            />
            <ProgressBar
              skillName="CSS"
              Icon={FaCss3Alt}
              percentage="90%"
              progress="w-[90%]"
            />
            <ProgressBar
              skillName="Tailwind css"
              Icon={RiTailwindCssFill}
              percentage="90%"
              progress="w-[90%]"
            />
            <ProgressBar
              skillName="React.js"
              Icon={FaReact}
              percentage="80%"
              progress="w-[80%]"
            />
            <ProgressBar
              skillName="Javascript"
              Icon={IoLogoJavascript}
              percentage="75%"
              progress="w-[75%]"
            />
            <ProgressBar
              skillName="Typescript"
              Icon={BiLogoTypescript}
              percentage="50%"
              progress="w-[50%]"
            />
            <ProgressBar
              skillName="Responsive UI"
              Icon={FaMobile}
              percentage="98%"
              progress="w-[98%]"
            />
            <ProgressBar
              skillName="Shadcn UI"
              Icon={SiShadcnui}
              percentage="85%"
              progress="w-[85%]"
            />
            <ProgressBar
              skillName="REST API Integration"
              Icon={GrIntegration}
              percentage="90%"
              progress="w-[90%]"
            />
          </div>
        </div>

        <div className="mt-10">
          <span className="text-red-500">Other Key Strengths</span>
          <h3 className="mb-3 text-2xl font-medium">Additional Skills</h3>
          <ul className="grid grid-cols-3 items-center gap-5 text-[#878e99] nth-[even]:mt-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-10">
            {skills.map((item, index) => (
              <li
                key={index}
                className="h-full space-y-1.5 rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-3 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]"
              >
                <item.icon size={30} />
                <span className="text-xs lg:text-sm">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
