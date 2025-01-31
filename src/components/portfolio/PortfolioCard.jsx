import { RxExternalLink } from "react-icons/rx";
import { RiGithubFill } from "react-icons/ri";

function PortfolioCard({
  heading,
  gitLink,
  previewLink,
  projectImage,
  children,
}) {
  return (
    <>
      <div>
        <img src={projectImage} alt="Project" />
        <div className="space-y-3 p-2">
          <h3 className="text-xl">{heading}</h3>
          <div className="flex items-center justify-evenly">{children}</div>
        </div>
        <div className="relative flex *:flex *:w-1/2 *:cursor-pointer *:items-center *:justify-center *:gap-2 *:bg-[#212428] *:p-2 *:uppercase *:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] *:transition-all *:duration-200 *:ease-in-out *:hover:text-red-500 *:hover:shadow-none">
          <a href={gitLink}>
            <RiGithubFill size={20} />
            Code
          </a>
          <a href={previewLink}>
            <RxExternalLink size={20} />
            Preview
          </a>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;
