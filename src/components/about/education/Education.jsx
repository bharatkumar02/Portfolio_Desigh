import { PiGraduationCapFill } from "react-icons/pi";

function Education() {
  return (
    <div >
      <span className="text-red-500">2017 - 2024</span>
      <h3 className="mb-3 font-[poppins] text-2xl font-medium md:mb-5">
        Education Journey
      </h3>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-2 rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-5 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] hover:bg-[linear-gradient(to_right_bottom,_#212428,_#16181c)]">
          <h4 className="text-xl">B.Tech in Computer Science</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#878e99]">
              Indira Gandhi University (2020 - 2024)
            </span>
            <span className="flex w-fit items-center gap-2 rounded bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-1 px-3 text-sm text-red-500 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
              <PiGraduationCapFill />
              6.7 / 10
            </span>
          </div>
          <p className="mt-3 border-t border-[#1a1d23] pt-2 text-[#878e99]">
            Graduated with a B.Tech in Computer Science, with hands-on
            experience through various projects and events.
          </p>
        </div>
        <div className="space-y-2 rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-5 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] hover:bg-[linear-gradient(to_right_bottom,_#212428,_#16181c)]">
          <h4 className="text-xl">Secondary School Education</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#878e99]">
              Government Sr. Sec. School (2019 - 2020)
            </span>
            <span className="flex w-fit items-center gap-2 rounded bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-1 px-3 text-sm text-red-500 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
              <PiGraduationCapFill />
              8.5 / 10
            </span>
          </div>
          <p className="mt-3 border-t border-[#1a1d23] pt-2 text-[#878e99]">
            Studied Physics, Chemistry, and Mathematics, building strong
            analytical and problem-solving skills.
          </p>
        </div>
        <div className="space-y-2 rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-5 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] hover:bg-[linear-gradient(to_right_bottom,_#212428,_#16181c)]">
          <h4 className="text-xl">High School Education</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#878e99]">
              Vivekanand Sr. Sec. School (2017 - 2018)
            </span>
            <span className="flex w-fit items-center gap-2 rounded bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-1 px-3 text-sm text-red-500 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
              <PiGraduationCapFill />
              8.0 / 10
            </span>
          </div>
          <p className="mt-3 border-t border-[#1a1d23] pt-2 text-[#878e99]">
            Focused on core subjects, achieving academic excellence and a strong
            foundation for further studies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
