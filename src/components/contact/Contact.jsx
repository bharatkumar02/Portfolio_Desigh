import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-3 bg-[#212428] py-10 text-slate-50"
    >
      <span className="text-red-500 uppercase">Get in Touch</span>
      <h2 className="font-[poppins] text-3xl font-semibold md:mb-5">
        Contact Me
      </h2>
      <div className="mx-auto max-w-[325px] overflow-hidden rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] text-[#878e99] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] md:max-w-[90%] lg:flex lg:items-center">
        <div className="overflow-hidden lg:w-[50%]">
          <img src="/homeImage.png" alt="Contact" />
        </div>
        <div className="p-5 lg:w-[50%]">
          <p>
            Need a freelancer? Let’s work together! Connect with me to discuss
            your project.
          </p>
          <ul className="mt-2 space-y-2 border-t border-black pt-2 *:flex *:items-center *:gap-2">
            <li>
              <span className="rounded-full bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-2 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
                <IoIosCall size={20} />
              </span>
              <span>+91 8397826133</span>
            </li>
            <li>
              <span className="rounded-full bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-2 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
                <IoLocation size={20} />
              </span>
              <span>Dharuhera, Rewari, Haryana</span>
            </li>
            <li>
              <span className="rounded-full bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-2 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
                <IoIosMail size={20} />
              </span>
              <span>kumarbharat9416@gmail.com</span>
            </li>
          </ul>
          <div className="mt-5">
            <div className="my-1 flex items-center justify-evenly *:cursor-pointer *:rounded-lg *:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] *:p-2 *:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] *:transition-all *:duration-300 *:ease-in-out *:hover:translate-y-1">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
