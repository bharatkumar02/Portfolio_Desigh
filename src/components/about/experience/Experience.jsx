import { MdLocationOn } from "react-icons/md";
import Card from "../Card";

function Experience() {
  return (
    <div>
      <span className="text-red-500">2024 - 2025</span>
      <h3 className="mb-3 font-[poppins] text-2xl font-medium md:mb-5">
        Experience Journey
      </h3>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card
          heading="Web Develoepr Intern"
          companyOrInstitute="SSITC Solution (Jan - 2024 / June - 2024)"
          icon={<MdLocationOn />}
          locationOrMarks="Bhiwadi"
          description="I built responsive web interfaces using HTML, CSS, JavaScript, and
            React, optimizing performance and enhancing UI/UX."
        />
        <Card
          heading="Frontend Developer"
          companyOrInstitute="SSITC Solution (July - 2024 / ...)"
          icon={<MdLocationOn />}
          locationOrMarks="Bhiwadi"
          description="I create visually appealing and interactive web experiences,
            translating designs into clean, efficient code while ensuring
            seamless user interactions."
        />
      </div>
    </div>
  );
}

export default Experience;
