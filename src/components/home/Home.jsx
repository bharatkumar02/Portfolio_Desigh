import ParticleComponent from "../ParticleComponent";
import Profession from "./Profession";

function Home() {
  function handelOnClick(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section id="home" className="relative h-screen tracking-wider">
      <div className="fixed -z-10 h-screen w-full bg-[url('/home.jpg')] bg-cover bg-center bg-no-repeat">
        <ParticleComponent />
      </div>
      <div className="relative z-10 h-screen w-full bg-black/50">
        <div className="flex h-screen flex-col items-center justify-center gap-5 lg:gap-10">
          <div className="size-[10rem] overflow-hidden rounded-full border-8 border-[#212428] bg-[linear-gradient(145deg,_#1e2024,_#23272b)] md:hidden">
            <img src="./bharat.png" alt="HomeImage" />
          </div>
          <h1 className="text-center font-[poppins] text-4xl leading-14 font-medium uppercase lg:text-6xl">
            Bharat Kumar
          </h1>
          <Profession />
          <div className="space-x-5 *:cursor-pointer *:rounded-lg *:bg-[linear-gradient(to_right_bottom,_#212428,_#16181c)] *:px-5 *:py-3 *:text-red-600 *:uppercase *:shadow-lg *:hover:scale-105">
            <button onClick={() => handelOnClick("contact")}>Contact Me</button>
            <button>
              <a href="/CV.pdf" download="Bharat_Kumar_CV">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
