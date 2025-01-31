import React from "react";

function SlideButton({ handelClick, icon }) {
  return (
    <button
      onClick={handelClick}
      className="cursor-pointer rounded-full bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-4 text-[#878e99] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-300 ease-in-out hover:text-red-500"
    >
      {icon}
    </button>
  );
}

export default SlideButton;
