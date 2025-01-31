import React from "react";

function Button({activeButton, checkState, handelClick}) {
  return (
    <button
      onClick={handelClick}
      className={`w-1/3 rounded-lg py-4 ${
          checkState
          ? "bg-[linear-gradient(145deg,_#1e2024,_#23272b)] text-red-500 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]"
          : "text-white"
      }`}
    >
      {activeButton}
    </button>
  );
}

export default Button;
