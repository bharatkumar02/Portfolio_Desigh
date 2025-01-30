import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

function Aside() {
  const [show, setShow] = useState(false);
  function handelOnClick() {
    setShow((prev) => !prev);
  }
  function handelMenuClick(sectionId) {
    setShow(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }
  const menuItems = [
    { icon: <GoHome size={30} />, label: "Home", sectionId: "home" },
    { icon: <FiUsers size={30} />, label: "About Me", sectionId: "about" },
    {
      icon: <FiLayers size={30} />,
      label: "Portfolio",
      sectionId: "portfolio",
    },
    {
      icon: <RiContactsLine size={30} />,
      label: "Contact Me",
      sectionId: "contact",
    },
  ];
  return (
    <nav className="md:overscroll-scroll absolute top-0 z-50 w-full text-[#878e99] md:fixed md:flex md:h-full md:w-[35%] md:flex-col md:items-center md:justify-center md:bg-[linear-gradient(to_right_bottom,_#212428,_#16181c)] lg:w-[25%] xl:w-[20%]">
      <div
        onClick={handelOnClick}
        className="absolute top-5 right-5 rounded-lg border-[#212428] bg-[linear-gradient(to_right_bottom,_#212428,_#16181c)] p-2 shadow shadow-black/50 md:hidden"
      >
        {show ? (
          <IoMdClose size={35} className="text-red-800" />
        ) : (
          <CgMenuRight size={35} className="text-red-800" />
        )}
      </div>
      <section className="md:flex md:h-full md:flex-col md:justify-center md:gap-5">
        <div className="mx-auto hidden size-[10rem] overflow-hidden rounded-full border-[5px] border-[#32363b] bg-[linear-gradient(145deg,_#1e2024,_#23272b)] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] md:block">
          <img src="./bharat.png" alt="HomeImage" />
        </div>
        <ul
          className={`absolute top-[6.5rem] right-5 w-[80%] space-y-4 rounded-tl-4xl rounded-b-4xl bg-[linear-gradient(145deg,_#1e2024,_#23272b)] px-5 py-10 text-2xl font-light text-[#c4cfde] transition-all duration-300 ease-in-out *:not-last:border-b before:absolute before:-top-7 before:right-0 before:size-7 before:bg-[linear-gradient(to_right_bottom,_#212428,_#16181c)] before:[clip-path:polygon(100%_0,0%_100%,100%_100%)] md:bg-none ${show ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} md:relative md:top-0 md:right-0 md:w-full md:translate-y-0 md:px-5 md:text-xl md:opacity-100 *:md:border-none`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handelMenuClick(item.sectionId)}
              className="flex cursor-pointer items-center justify-start gap-4 border-black pb-3 transition-all duration-300 ease-in-out hover:text-red-500"
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-5 left-1/2 hidden w-full -translate-x-1/2 items-center justify-evenly gap-5 *:cursor-pointer *:rounded-lg *:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] *:p-2 *:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] *:transition-all *:duration-300 *:ease-in-out *:hover:translate-y-1 md:flex">
          <a href="https://www.linkedin.com/in/bharat-kumar-3046a4277/">
            <FaLinkedinIn size={25} />
          </a>
          <a href="https://www.instagram.com/bhkumar9995/?next=%2F&hl=en">
            <RiInstagramFill size={25} />
          </a>
          <a href="#">
            <FaFacebookF size={25} />
          </a>
        </div>
      </section>
    </nav>
  );
}

export default Aside;
