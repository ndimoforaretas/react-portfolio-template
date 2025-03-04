import { useContext } from "react";
import { DarkModeContext } from "../context/DarkmodeContext";

const HeaderComponent = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className="navbar bg-slate-900  px-3  sticky top-0 z-50 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
            <li className="text-md  lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white  transition-all ease-in-out duration-300">
              <a href="#">HOME</a>
            </li>
            <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
              <a href="#skills">SKILLS</a>
            </li>
            <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
              <a href="#portfolio">PORTFOLIO</a>
            </li>{" "}
            <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
              <a href="#why-me">WHY ME</a>
            </li>{" "}
            <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
              <a href="#testimonials1">TESTIMONIAL 1</a>
            </li>{" "}
            <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
              <a href="#testimonials2">TESTIMONIAL 2</a>
            </li>
            <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Aretas</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
            <a href="#">HOME</a>
          </li>
          <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
            <a href="#portfolio">PORTFOLIO</a>
          </li>{" "}
          <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
            <a href="#why-me">WHY ME</a>
          </li>{" "}
          <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
            <a href="#testimonials1">TESTIMONIAL 1</a>
          </li>{" "}
          <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
            <a href="#testimonials2">TESTIMONIAL 2</a>
          </li>{" "}
          <li className="text-md lg:text-lg hover:bg-rose-600 rounded-sm hover:text-white transition-all ease-in-out duration-300">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-4">
          {" "}
          <a className="btn bg-rose-500 text-white">Hire Me</a>
          <button onClick={toggleDarkMode} className="btn">
            {isDarkMode ? "🌞" : "🌜"}
          </button>
        </div>
      </div>
    </header>
  );
};
export default HeaderComponent;
