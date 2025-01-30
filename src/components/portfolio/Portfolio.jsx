import React, { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxExternalLink } from "react-icons/rx";
import { RiGithubFill } from "react-icons/ri";
import "../../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
// import { Pagination } from "swiper/modules";

function Portfolio() {
  const swiperRef = useRef(null);
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center gap-3 bg-[#212428] py-10"
    >
      <span className="text-red-500 uppercase">
        Mini Projects but Major Learning
      </span>
      <h2 className="font-[poppins] text-3xl font-semibold md:mb-5">
        My Portfolio
      </h2>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        // pagination={{
        //   type: "fraction",
        // }}
        spaceBetween={20}
        breakpoints={{
          1024: { slidesPerView: 2, spaceBetween: 20 },
        }}
        // modules={[Pagination]}
        className="mx-auto max-w-[325px] bg-[linear-gradient(145deg,_#1e2024,_#23272b)] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] md:max-w-[90%]"
      >
        <SwiperSlide className="overflow-hidden rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] text-[#878e99] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
          <img src="/form.jpeg" alt="Project" />
          <div className="space-y-3 p-2">
            <h3 className="text-xl">Contact Form Page</h3>
            <div className="flex items-center justify-evenly">
              <FaReact size={30} />
              <RiTailwindCssFill size={30} />
            </div>
          </div>
          <div className="relative flex *:flex *:w-1/2 *:cursor-pointer *:items-center *:justify-center *:gap-2 *:bg-[#212428] *:p-2 *:uppercase *:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] *:transition-all *:duration-200 *:ease-in-out *:hover:text-red-500 *:hover:shadow-none">
            <a href="https://github.com/bharatkumar02/Sign_Up_Form">
              <RiGithubFill size={20} />
              Code
            </a>
            <a href="https://sign-up-form-three-psi.vercel.app/">
              <RxExternalLink size={20} />
              Preview
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] text-[#878e99] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
          <img src="/coming.png" alt="Project" />
          <div className="space-y-3 p-2">
            <h3 className="text-xl">Rating Page</h3>
            <div className="flex items-center justify-evenly">
              <FaReact size={30} />
              <RiTailwindCssFill size={30} />
            </div>
          </div>
          <div className="relative flex *:flex *:w-1/2 *:cursor-pointer *:items-center *:justify-center *:gap-2 *:bg-[#212428] *:p-2 *:uppercase *:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] *:transition-all *:duration-200 *:ease-in-out *:hover:text-red-500 *:hover:shadow-none">
            <a href="https://github.com/bharatkumar02/Ping_Single_Coming_Soon">
              <RiGithubFill size={20} />
              Code
            </a>
            <a href="https://ping-single-coming-soon.vercel.app/">
              <RxExternalLink size={20} />
              Preview
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] text-[#878e99] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
          <img src="/rating.png" alt="Project" />
          <div className="space-y-3 p-2">
            <h3 className="text-xl">Modern Quiz Application</h3>
            <div className="flex items-center justify-evenly">
              <FaReact size={30} />
              <RiTailwindCssFill size={30} />
            </div>
          </div>
          <div className="relative flex *:flex *:w-1/2 *:cursor-pointer *:items-center *:justify-center *:gap-2 *:bg-[#212428] *:p-2 *:uppercase *:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] *:transition-all *:duration-200 *:ease-in-out *:hover:text-red-500 *:hover:shadow-none">
            <a href="https://github.com/bharatkumar02/Rating_Page">
              <RiGithubFill size={20} />
              Code
            </a>
            <a href="https://rating-page-seven.vercel.app/">
              <RxExternalLink size={20} />
              Preview
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] text-[#878e99] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
          <img src="/price.png" alt="Project" />
          <div className="space-y-3 p-2">
            <h3 className="text-xl">Price Listing Page</h3>
            <div className="flex items-center justify-evenly">
              <FaReact size={30} />
              <RiTailwindCssFill size={30} />
            </div>
          </div>
          <div className="relative flex *:flex *:w-1/2 *:cursor-pointer *:items-center *:justify-center *:gap-2 *:bg-[#212428] *:p-2 *:uppercase *:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] *:transition-all *:duration-200 *:ease-in-out *:hover:text-red-500 *:hover:shadow-none">
            <a href="https://github.com/bharatkumar02/Price_Cards">
              <RiGithubFill size={20} />
              Code
            </a>
            <a href="https://price-cards-livid.vercel.app/">
              <RxExternalLink size={20} />
              Preview
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mt-2 flex w-full items-center justify-evenly *:cursor-pointer *:transition-all *:duration-300 *:ease-in-out *:hover:text-red-500">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="rounded-full bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-4 text-[#878e99] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="rounded-full bg-[linear-gradient(145deg,_#1e2024,_#23272b)] p-4 text-[#878e99] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
