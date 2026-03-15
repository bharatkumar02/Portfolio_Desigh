import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import PortfolioCard from "./PortfolioCard";

const swiperSlide = [
  {
    heading: "everBound - Personalized Gift Shop | Ongoing Project",
    projectImage: "/gift.svg",
    tech: "MERN Stack (MongoDB, Express, React, Node.js), Tailwind CSS, Framer Motion",
    description: [
      "A full-stack e-commerce platform specializing in personalized acrylic gifts and apparel. I am architecting this using the MERN stack to handle complex data relationships and user authentication, ensuring a robust and secure shopping experience.",
      "The project features a custom 2D product editor built with React, allowing customers to visualize personalizations in real-time. I am focusing on creating a modular and maintainable codebase while interactive user interface.",
    ],
  },
  {
    heading: "Travel Agency Web App | Freelancing",
    projectImage: "/travel.svg",
    tech: "React.js, Tailwind CSS, React Router, ShadCN UI",
    description: [
      "I architected and delivered this high-performance travel platform using React.js and Tailwind CSS, focusing on a mobile-first, fully responsive UI that ensures a seamless user experience across all devices. The site features modern navigation flows designed to drive user engagement and conversions.",
      "To ensure long-term scalability, I engineered a component-based frontend architecture and executed a complete project handover with production-ready, well-documented code.",
    ],
  },
  {
    heading: "E-Commerce Website | SSITC Solutions Pvt. Ltd",
    projectImage: "/e-commerce.svg",
    tech: "React.js, Tailwind CSS, Framer Motion, Swiper.js",
    description: [
      "During my tenure at SSITC Solutions, I built this modern single-page application using a scalable, component-based architecture. I utilized Tailwind CSS to efficiently style and design web pages, contributing to a streamlined and visually appealing user interface that works across all screen sizes.",
      "I enhanced the overall visual engagement by implementing smooth animations and interactive product sliders using Framer Motion and Swiper.js. ",
    ],
  },
  {
    heading: "Dverto Portfolio | SSITC Solutions Pvt. Ltd",
    projectImage: "/portfolio.svg",
    tech: "Tailwind CSS, JavaScript",
    description: [
      "I designed and developed this fully responsive portfolio to showcase professional work, ensuring a consistent UI across all devices.",
      "The project involved implementing interactive navigation components using JavaScript to enhance the browsing experience. I specifically optimized performance and page load speeds through a clean layout structure and the strategic use of reusable Tailwind CSS utility classes.",
    ],
  },
];

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center gap-3 bg-[#212428] py-10"
    >
      <span className="font-medium tracking-wider text-red-500 uppercase">
        Professional Projects & Technical Work
      </span>
      <h2 className="font-[poppins] text-3xl font-semibold text-white md:mb-5">
        My Portfolio
      </h2>

      <div className="mx-auto flex max-w-[325px] flex-col gap-8 md:max-w-[90%]">
        {swiperSlide.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-[linear-gradient(145deg,_#1e2024,_#23272b)] text-[#878e99] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] lg:odd:flex-row-reverse"
          >
            <PortfolioCard
              heading={item.heading}
              projectImage={item.projectImage}
              gitLink={item.gitLink}
              previewLink={item.previewLink}
              tech={item.tech}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
