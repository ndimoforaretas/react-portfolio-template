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
      {/* Header Component for navigation*/}
      <HeaderComponent />

      {/* Main section for the rest of the sub sections */}
      <main className={isDarkMode ? "dark" : ""}>
        {/* Hero section */}
        <section>
          <HeroComponent />
        </section>
        {/*  */}
        {/* Simple horizontal line */}
        <hr className="border-1 dark:border-slate-950 border-gray-700  dark:block" />
        {/*  */}
        {/* Skills section */}
        <section
          id="skills"
          className="py-16 bg-slate-300 dark:bg-slate-900 min-h-screen flex flex-col items-center justify-around ">
          {/* this section title is a reusable component */}
          <SectionTitle text="My Skills" />

          <div className="container mx-auto">
            <SkillsComponent />
          </div>
        </section>
        {/* Simple horizontal line */}
        <hr className="border-1 dark:border-slate-950 border-gray-700  dark:block" />
        {/* Portfolio section */}
        <section
          id="portfolio"
          className=" py-16 bg-slate-300  dark:bg-slate-900  min-h-screen flex flex-col items-center justify-around ">
          <SectionTitle text="Portfolio" />
          <div className="container mx-auto">
            <ProjectsComponent />
          </div>
        </section>
        {/* Simple horizontal line */}
        <hr className="border-1 dark:border-slate-950 border-gray-700  dark:block" />
        {/* Why Me section */}
        <section
          id="why-me"
          className=" bg-slate-300  dark:bg-slate-900  py-16 pb-4 min-h-[50vh] flex flex-col items-center justify-around">
          <SectionTitle text="Why Me?" />

          <WhyMeComponent />
        </section>
        {/* Simple horizontal line */}
        <hr className="border-1 dark:border-slate-950 border-gray-700  dark:block" />
        {/* Testimonials section Sample 1*/}
        <section
          id="testimonials1"
          className=" py-16 bg-slate-300  dark:bg-slate-900 min-h-[50vh] flex flex-col items-center justify-around ">
          <SectionTitle text="Testimonial" />
          <div className="container mx-auto">
            <TestimonialsComponent />
          </div>
        </section>

        {/* Simple horizontal line */}
        <hr className="border-1 dark:border-slate-950 border-gray-700  dark:block" />
        {/* Testimonials section Sample 2*/}
        <section
          id="testimonials2"
          className="py-16 bg-slate-300  dark:bg-slate-900 min-h-[50vh] flex flex-col items-center justify-around">
          <SectionTitle text="From Satisfied Customers" />
          <div className="container mx-auto">
            <Testimonial2Component />
          </div>
        </section>
        {/* Simple horizontal line */}
        <hr className="border-1 dark:border-slate-950 border-gray-700  dark:block" />
        <section
          id="contact"
          className=" py-16  bg-slate-300  dark:bg-slate-900 flex flex-col items-center justify-around">
          <SectionTitle text="Contact" />
          <div className="container mx-auto">
            <ContactComponent />
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
