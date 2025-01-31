import React, { useState, useEffect } from "react";

function Profession() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const profession = [
    "Frontend Developer",
    "React.js Developer",
    "UI/UX Developer",
  ];
  useEffect(() => {
    setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % profession.length);
        setShow(true);
      }, 2000);
    }, 4000);
  }, [profession.length]);
  return (
    <p className="flex items-center justify-center gap-2 text-2xl whitespace-nowrap lg:text-3xl">
      <span>I am a</span>
      <span
        className={`overflow-hidden text-red-500 transition-all duration-[2000ms] ease-in-out *:font-[400] ${show ? "w-full" : "w-0"}`}
      >
        <b>{profession[index]}.</b>
      </span>
      <span className="h-full w-[0.5px] bg-slate-100"></span>
    </p>
  );
}

export default Profession;
