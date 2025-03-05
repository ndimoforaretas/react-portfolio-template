import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

const HeroComponent = () => {
  return (
    <div className="hero bg-slate-300 dark:bg-slate-900 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 p-8">
          <img
            src="https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764524_1280.jpg"
            className=" w-full rounded-lg shadow-2xl"
          />
        </div>

        <div className="lg:w-1/2 p-8">
          <h1 className="text-6xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Hi, I'm <span className="text-rose-500">Aretas</span>
          </h1>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
            Fullstack Web Developer
          </h2>
          <p className="py-6 text-lg text-slate-600 dark:text-slate-400">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="py-6 text-lg text-slate-600 dark:text-slate-400">
            Contact me on social media:
          </p>
          {/* icons div */}
          <div className="flex items-center justify-start gap-4">
            <a
              href="#"
              className="p-3 bg-slate-800 rounded-lg flex items-center justify-around">
              <IoLogoLinkedin className="text-3xl text-rose-500 dark:text-slate-200" />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800  rounded-lg flex items-center justify-around">
              <IoLogoTwitter className="text-3xl text-rose-500 dark:text-slate-200" />
            </a>

            <a
              href="#"
              className="p-3 bg-slate-800  rounded-lg flex items-center justify-around">
              <IoLogoGithub className="text-3xl text-rose-500 dark:text-slate-200" />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800  rounded-lg flex items-center justify-around">
              <IoLogoInstagram className="text-3xl text-rose-500 dark:text-slate-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroComponent;
