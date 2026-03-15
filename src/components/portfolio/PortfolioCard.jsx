function PortfolioCard({ heading, projectImage, tech, description }) {
  return (
    <>
      <div className="group flex flex-col gap-5 p-3 md:p-5 lg:flex-row">
        <div className="md:h-[15rem] lg:h-[20rem] lg:w-[60rem]">
          <img
            src={projectImage}
            alt="Project"
            className="size-full object-cover opacity-20 transition-all group-hover:opacity-100"
          />
        </div>
        <div className="w-full space-y-3">
          <h3 className="text-xl">{heading}</h3>
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col gap-2 lg:gap-3">
              <i className="text-sm">{tech}</i>
              <div>
                {description.map((item, index) => (
                  <p key={index} className="leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;
