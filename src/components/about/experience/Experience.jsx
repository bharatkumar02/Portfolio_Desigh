import { MdLocationOn } from "react-icons/md";
import Card from "../Card";

function Experience() {
  return (
    <div>
      <span className="text-red-500">2024 - 2026</span>
      <h3 className="mb-3 font-[poppins] text-2xl font-medium md:mb-5">
        Professional Journey
      </h3>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card
          heading="Web Develoepr Intern"
          companyOrInstitute="SSITC Solution (Jan - 2024 / June - 2024)"
          icon={<MdLocationOn />}
          locationOrMarks="Bhiwadi"
          description="Contributed to the development of responsive web applications using React.js and JavaScript. Focused on optimizing component performance and ensuring pixel-perfect UI implementation from design mockups."
        />
        <Card
          heading="Frontend Developer"
          companyOrInstitute="SSITC Solution (July - 2024 / Dec - 2025)"
          icon={<MdLocationOn />}
          locationOrMarks="Bhiwadi"
          description="Architected scalable frontend solutions using React.js and Tailwind CSS. Implemented advanced UI components using Shadcn UI and integrated complex state management to improve user workflow and site interactivity."
        />
        <Card
          heading="Freelancing"
          companyOrInstitute="Together in India Travels (Dec - 2025 / Jan - 2026)"
          icon={<MdLocationOn />}
          locationOrMarks="Remote"
          description="Specialized in UI development, crafting a modern travel interface using React.js and Shadcn UI. Delivered a highly optimized, mobile-first responsive design with Tailwind CSS, focusing on clean architecture and smooth user interactions."
        />
      </div>
    </div>
  );
}

export default Experience;
