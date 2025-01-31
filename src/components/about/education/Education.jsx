import { PiGraduationCapFill } from "react-icons/pi";
import Card from "../Card";

function Education() {
  return (
    <div>
      <span className="text-red-500">2017 - 2024</span>
      <h3 className="mb-3 font-[poppins] text-2xl font-medium md:mb-5">
        Education Journey
      </h3>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card
          heading="B.Tech in Computer Science"
          companyOrInstitute="Indira Gandhi University (2020 - 2024)"
          icon={<PiGraduationCapFill />}
          locationOrMarks="6.7 / 10"
          description="Graduated with a B.Tech in Computer Science, with hands-on
            experience through various projects and events."
        />
        <Card
          heading="Secondary School Education"
          companyOrInstitute="Government Sr. Sec. School (2019 - 2020)"
          icon={<PiGraduationCapFill />}
          locationOrMarks="8.5 / 10"
          description="Studied Physics, Chemistry, and Mathematics, building strong
            analytical and problem-solving skills."
        />
        <Card
          heading="High School Education"
          companyOrInstitute="Vivekanand Sr. Sec. School (2017 - 2018)"
          icon={<PiGraduationCapFill />}
          locationOrMarks="8.0 / 10"
          description="Focused on core subjects, achieving academic excellence and a strong
            foundation for further studies."
        />
      </div>
    </div>
  );
}

export default Education;
