import About from "./components/about/About";
import Aside from "./components/aside/Aside";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <div className="md:flex md:w-full">
        <Aside />
        <main className="text-slate-50 md:absolute md:top-0 md:right-0 md:w-[65%] lg:w-[75%] xl:w-[80%]">
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
