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
            <div>
              <span className="uppercase">HTML</span>
              <div className="flex h-4 w-full items-center justify-start rounded-full bg-[#878e99]">
                <div className="relative h-full w-[70%] rounded-full bg-[#212428] shadow-[inset_8px_8px_16px_rgba(0,_0,_0,_0.4588235294),_inset_-8px_-8px_16px_rgba(56,_62,_69,_0.4588235294)]">
                  <FaHtml5 size={20} className="absolute right-0 bottom-5" />
                  <span className="absolute top-1/2 right-1 -translate-y-1/2 text-xs tracking-widest">
                    70%
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="uppercase">CSS</span>
              <div className="flex h-4 w-full items-center justify-start rounded-full bg-[#878e99]">
                <div className="relative h-full w-[80%] rounded-full bg-[#212428] shadow-[inset_8px_8px_16px_rgba(0,_0,_0,_0.4588235294),_inset_-8px_-8px_16px_rgba(56,_62,_69,_0.4588235294)]">
                  <FaCss3Alt size={20} className="absolute right-0 bottom-5" />
                  <span className="absolute top-1/2 right-1 -translate-y-1/2 text-xs tracking-widest">
                    80%
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="uppercase">Tailwind css</span>
              <div className="flex h-4 w-full items-center justify-start rounded-full bg-[#878e99]">
                <div className="relative h-full w-[90%] rounded-full bg-[#212428] shadow-[inset_8px_8px_16px_rgba(0,_0,_0,_0.4588235294),_inset_-8px_-8px_16px_rgba(56,_62,_69,_0.4588235294)]">
                  <RiTailwindCssFill
                    size={20}
                    className="absolute right-0 bottom-5"
                  />
                  <span className="absolute top-1/2 right-1 -translate-y-1/2 text-xs tracking-widest">
                    90%
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="uppercase">React.js</span>
              <div className="flex h-4 w-full items-center justify-start rounded-full bg-[#878e99]">
                <div className="relative h-full w-[70%] rounded-full bg-[#212428] shadow-[inset_8px_8px_16px_rgba(0,_0,_0,_0.4588235294),_inset_-8px_-8px_16px_rgba(56,_62,_69,_0.4588235294)]">
                  <FaReact size={20} className="absolute right-0 bottom-5" />
                  <span className="absolute top-1/2 right-1 -translate-y-1/2 text-xs tracking-widest">
                    70%
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="uppercase">Javascript</span>
              <div className="flex h-4 w-full items-center justify-start rounded-full bg-[#878e99]">
                <div className="relative h-full w-[50%] rounded-full bg-[#212428] shadow-[inset_8px_8px_16px_rgba(0,_0,_0,_0.4588235294),_inset_-8px_-8px_16px_rgba(56,_62,_69,_0.4588235294)]">
                  <IoLogoJavascript
                    size={20}
                    className="absolute right-0 bottom-5"
                  />
                  <span className="absolute top-1/2 right-1 -translate-y-1/2 text-xs tracking-widest">
                    50%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <span className="text-red-500">Other Key Strengths</span>
          <h3 className="mb-3 text-2xl font-medium">Additional Skills</h3>
          <ul className="flex flex-wrap items-center justify-evenly gap-5 text-[#878e99] nth-[even]:mt-4">
            <li className="rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-3 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
              <TbBrandFramerMotion size={30} />
            </li>
            <li className="rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-3 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
              <SiReactrouter size={30} />
            </li>
            <li className="rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-3 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
              <SiRedux size={30} />
            </li>
            <li className="rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-3 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
              <FaSass size={30} />
            </li>
            <li className="rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-3 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
              <FaGithub size={30} />
            </li>
            <li className="rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-3 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
              <VscVscode size={30} />
            </li>
            <li className="rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-3 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
              <FaGitAlt size={30} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
