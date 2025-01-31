import React from "react";

function Card({
  heading,
  companyOrInstitute,
  icon,
  locationOrMarks,
  description,
}) {
  return (
    <>
      <div className="space-y-2 rounded-xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-5 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] hover:bg-[linear-gradient(to_right_bottom,_#212428,_#16181c)]">
        <h4 className="text-xl">{heading}</h4>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-[#878e99]">[companyOrInstitute]</span>
          <span className="flex w-fit items-center gap-2 rounded bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-1 px-3 text-sm text-red-500 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
            {icon}
            {locationOrMarks}
          </span>
        </div>
        <p className="mt-3 border-t border-[#1a1d23] pt-2 text-[#878e99]">
          {description}
        </p>
      </div>
    </>
  );
}

export default Card;
