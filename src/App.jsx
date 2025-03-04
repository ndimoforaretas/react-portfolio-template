import HeroComponent from "./components/HeroComponent";
import FooterComponent from "./components/FooterComponent";
import SectionTitle from "./components/SectionTitle";
import ProjectsComponent from "./components/ProjectsComponent";
import SkillsComponent from "./components/SkillsComponent";
import WhyMeComponent from "./components/WhyMeComponent";
import TestimonialsComponent from "./components/TestimonialsComponent";
import Testimonial2Component from "./components/Testimonial2Component";
import ContactComponent from "./components/ContactComponent";
import HeaderComponent from "./components/HeaderComponent";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkmodeContext";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <HeaderComponent />
      <main className={isDarkMode ? "dark" : ""}>
        <section>
          <HeroComponent />
        </section>
        <hr className="border-1 dark:border-slate-950 border-gray-700  dark:block" />
        <section
          id="skills"
          className="py-16 bg-slate-300 dark:bg-slate-900 min-h-screen flex flex-col items-center justify-around ">
          <SectionTitle text="My Skills" />
          <div className="container mx-auto">
            <SkillsComponent />
          </div>
        </section>
        <hr className="border-1 dark:border-slate-950 border-gray-700  dark:block" />
        <section
          id="portfolio"
          className=" py-16 bg-slate-300 min-h-screen flex flex-col items-center justify-around mb-20">
          <SectionTitle text="Portfolio" />
          <div className="container mx-auto">
            <ProjectsComponent />
          </div>
        </section>{" "}
        <section
          id="why-me"
          className=" pt-16 pb-4 bg-base-300 min-h-[50vh] flex flex-col items-center justify-around">
          <SectionTitle text="Why Me?" />

          <WhyMeComponent />
        </section>{" "}
        <section
          id="testimonials1"
          className="container mx-auto pt-16 pb-4 bg-base-100 min-h-[50vh] flex flex-col items-center justify-around mb-20">
          <SectionTitle text="Testimonial" />

          <TestimonialsComponent />
        </section>{" "}
        <section
          id="testimonials2"
          className="py-16 bg-base-300 min-h-[50vh] flex flex-col items-center justify-around mb-20">
          <SectionTitle text="From Satisfied Customers" />
          <div className="container mx-auto">
            <Testimonial2Component />
          </div>
        </section>{" "}
        <section
          id="contact"
          className="container mx-auto pt-16 pb-4 bg-base-100 flex flex-col items-center justify-around">
          <SectionTitle text="Contact" />

          <ContactComponent />
        </section>
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
