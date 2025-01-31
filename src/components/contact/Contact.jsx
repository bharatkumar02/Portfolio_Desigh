import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

function Contact() {
  let contactDetail = [
    {
      icon: <IoIosCall size={20} />,
      detail: "+91 8397826133",
    },
    {
      icon: <IoLocation size={20} />,
      detail: "Dharuhera, Rewari, Haryana",
    },
    {
      icon: <IoIosMail size={20} />,
      detail: "kumarbharat9416@gmail.com",
    },
  ];
  let socialMedia = [
    {
      icon: <FaLinkedinIn size={25} />,
      link: "https://www.linkedin.com/in/bharat-kumar-3046a4277/",
    },
    {
      icon: <RiInstagramFill size={25} />,
      link: "https://www.instagram.com/bhkumar9995/?next=%2F&hl=en",
    },
    {
      icon: <FaFacebookF size={25} />,
      detail: "#",
    },
  ];
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
          <img src="/contact.png" alt="Contact" />
        </div>
        <div className="p-5 lg:w-[50%]">
          <p>
            Need a freelancer? Let’s work together! Connect with me to discuss
            your project.
          </p>
          <ul className="mt-2 space-y-2 border-t border-black pt-2 lg:mt-7 lg:space-y-5 lg:pt-7">
            {contactDetail.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="rounded-full bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-2 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
                  {item.icon}
                </span>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 lg:mt-16">
            <div className="my-1 flex items-center justify-evenly">
              {socialMedia.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="cursor-pointer rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-2 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-300 ease-in-out hover:translate-y-1"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
