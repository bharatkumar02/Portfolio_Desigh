import React, { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import PortfolioCard from "./PortfolioCard";
import SlideButton from "./SlideButton";
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
        className="mx-auto max-w-[325px] bg-[linear-gradient(145deg,_#1e2024,_#23272b)] text-[#878e99] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] md:max-w-[90%]"
      >
        <SwiperSlide className="overflow-hidden rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
          <PortfolioCard
            heading="Contact Form Page"
            projectImage="/form.jpeg"
            gitLink="https://github.com/bharatkumar02/Sign_Up_Form"
            previewLink="https://sign-up-form-three-psi.vercel.app/"
          >
            <FaReact size={30} />
            <RiTailwindCssFill size={30} />
          </PortfolioCard>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
          <PortfolioCard
            heading="Rating Page"
            projectImage="/coming.png"
            gitLink="https://github.com/bharatkumar02/Ping_Single_Coming_Soon"
            previewLink="https://ping-single-coming-soon.vercel.app/"
          >
            <FaReact size={30} />
            <RiTailwindCssFill size={30} />
          </PortfolioCard>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
          <PortfolioCard
            heading="Modern Quiz Application"
            projectImage="/rating.png"
            gitLink="https://github.com/bharatkumar02/Rating_Page"
            previewLink="https://rating-page-seven.vercel.app/"
          >
            <FaReact size={30} />
            <RiTailwindCssFill size={30} />
          </PortfolioCard>
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
          <PortfolioCard
            heading="Price Listing Page"
            projectImage="/price.png"
            gitLink="https://github.com/bharatkumar02/Price_Cards"
            previewLink="https://price-cards-livid.vercel.app/"
          >
            <FaReact size={30} />
            <RiTailwindCssFill size={30} />
          </PortfolioCard>
        </SwiperSlide>
      </Swiper>
      <div className="mt-2 flex w-full items-center justify-evenly">
        <SlideButton
          handelClick={() => swiperRef.current?.slidePrev()}
          icon={<FaArrowLeft size={20} />}
        />
        <SlideButton
          handelClick={() => swiperRef.current?.slideNext()}
          icon={<FaArrowRight size={20} />}
        />
      </div>
    </section>
  );
}

export default Portfolio;
