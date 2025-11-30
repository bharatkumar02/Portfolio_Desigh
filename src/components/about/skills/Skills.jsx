import { FaHtml5 } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import ProgressBar from "./ProgressBar";

const skillsIcon = [
  TbBrandFramerMotion,
  SiReactrouter,
  SiRedux,
  FaSass,
  FaGithub,
  VscVscode,
  FaGitAlt,
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
          <div className="flex flex-col gap-5 text-[#878e99]">
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
              percentage="70%"
              progress="w-[70%]"
            />
            <ProgressBar
              skillName="Javascript"
              Icon={IoLogoJavascript}
              percentage="50%"
              progress="w-[50%]"
            />
          </div>
        </div>

        <div className="mt-10">
          <span className="text-red-500">Other Key Strengths</span>
          <h3 className="mb-3 text-2xl font-medium">Additional Skills</h3>
          <ul className="flex flex-wrap items-center justify-evenly gap-5 text-[#878e99] nth-[even]:mt-4">
            {skillsIcon.map((Icon, index) => (
              <li
                key={index}
                className="rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-3 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]"
              >
                <Icon size={30} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
