import { MdLocationOn } from "react-icons/md";

function Experience() {
  return (
    <div>
      <span className="text-red-500">2024 - 2025</span>
      <h3 className="mb-3 text-2xl font-medium font-[poppins] md:mb-5">Experience Journey</h3>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-2 rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-5 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] hover:bg-[linear-gradient(to_right_bottom,_#212428,_#16181c)]">
          <h4 className="text-xl">Web Develoepr Intern</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#878e99]">
              SSITC Solution (Jan - 2024 / June - 2024)
            </span>
            <span className="flex w-fit items-center gap-2 rounded bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-1 px-3 text-sm text-red-500 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] uppercase">
              <MdLocationOn />
              Bhiwadi
            </span>
          </div>
          <p className="mt-3 border-t border-[#1a1d23] pt-2 text-[#878e99]">
            I built responsive web interfaces using HTML, CSS, JavaScript, and
            React, optimizing performance and enhancing UI/UX.
          </p>
        </div>
        <div className="space-y-2 rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-5 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] hover:bg-[linear-gradient(to_right_bottom,_#212428,_#16181c)]">
          <h4 className="text-xl">Frontend Developer</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#878e99]">
              SSITC Solution (August - 2024 / ...)
            </span>
            <span className="flex w-fit items-center gap-2 rounded bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-1 px-3 text-sm text-red-500 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] uppercase">
              <MdLocationOn />
              Bhiwadi
            </span>
          </div>
          <p className="mt-3 border-t border-[#1a1d23] pt-2 text-[#878e99]">
            I create visually appealing and interactive web experiences,
            translating designs into clean, efficient code while ensuring
            seamless user interactions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
