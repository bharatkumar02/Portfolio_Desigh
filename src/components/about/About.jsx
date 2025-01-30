import { useState } from "react";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";

function About() {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <section
      id="about"
      className="mx-auto flex flex-col items-center justify-center gap-3 bg-[#212428] py-10 text-slate-50 *:max-w-[325px] *:md:max-w-[90%]"
    >
      <span className="text-red-500 uppercase">1+ Year of Experience</span>
      <h2 className="font-[poppins] text-3xl font-semibold md:mb-5">About Me</h2>

      <div className="mx-auto mb-3 flex w-full max-w-[340px] items-center overflow-hidden rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] *:lg:py-7 *:lg:text-xl *:cursor-pointer">
        <button
          onClick={() => setActiveTab("Education")}
          className={`w-1/3 rounded-lg py-4 ${
            activeTab === "Education"
              ? "bg-[linear-gradient(145deg,_#1e2024,_#23272b)] text-red-500 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]"
              : "text-white"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveTab("Experience")}
          className={`w-1/3 rounded-lg py-4 ${
            activeTab === "Experience"
              ? "bg-[linear-gradient(145deg,_#1e2024,_#23272b)] text-red-500 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]"
              : "text-white"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab("Skills")}
          className={`w-1/3 rounded-lg py-4 ${
            activeTab === "Skills"
              ? "bg-[linear-gradient(145deg,_#1e2024,_#23272b)] text-red-500 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]"
              : "text-white"
          }`}
        >
          Skills
        </button>
      </div>

      <div className="w-full">
        {activeTab === "Education" && <Education />}
        {activeTab === "Experience" && <Experience />}
        {activeTab === "Skills" && <Skills />}
      </div>
    </section>
  );
}

export default About;
