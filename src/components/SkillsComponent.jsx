import {
  IoArchiveOutline,
  IoBrowsersOutline,
  IoCartOutline,
  IoCodeSlashOutline,
  IoPhonePortraitOutline,
  IoSwapHorizontalOutline,
} from "react-icons/io5";

const SkillsComponent = () => {
  return (
    <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-16">
      <div className="flex sm:gap-4 gap-1">
        <span className="">
          <IoCodeSlashOutline className="sm:text-5xl bg-slate-900 rounded px-0.5 text-3xl text-rose-600 dark:text-rose-400" />
        </span>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold dark:text-white text-slate-900">
            Web Development
          </h3>
          <p className="text-gray-800 dark:text-gray-400">
            Crafting responsive and intuitive websites tailored to your unique
            needs using cutting-edge technologies.
          </p>
        </div>
      </div>

      <div className="flex sm:gap-4 gap-2">
        <span className="">
          <IoBrowsersOutline className="sm:text-5xl bg-slate-900 rounded px-0.5  text-3xl text-rose-600 dark:text-rose-400" />
        </span>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold dark:text-white text-slate-900">
            UI/UX Design
          </h3>
          <p className="text-gray-800 dark:text-gray-400">
            Creating visually appealing and user-centric designs that enhance
            user experiences and engagement.
          </p>
        </div>
      </div>

      <div className="flex sm:gap-4 gap-2">
        <span className="">
          <IoArchiveOutline className="sm:text-5xl bg-slate-900 rounded px-0.5  text-3xl text-rose-600 dark:text-rose-400" />
        </span>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold dark:text-white text-slate-900">
            Custom CMS Solutions
          </h3>
          <p className="text-gray-800 dark:text-gray-400">
            Building reusable and efficient CMS APIs to simplify website
            management and scalability.
          </p>
        </div>
      </div>

      <div className="flex sm:gap-4 gap-2">
        <span className="">
          <IoPhonePortraitOutline className="sm:text-5xl bg-slate-900 rounded px-0.5  text-3xl text-rose-600 dark:text-rose-400" />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold dark:text-white text-slate-900">
            Mobile App Dev't
          </h3>
          <p className="text-gray-800 dark:text-gray-400">
            Designing and developing user-friendly mobile applications for iOS
            and Android, ensuring seamless performance and user satisfaction.
          </p>
        </div>
      </div>

      <div className="flex sm:gap-4 gap-2">
        <span className="">
          <IoCartOutline className="sm:text-5xl bg-slate-900 rounded px-0.5  text-3xl text-rose-600 dark:text-rose-400" />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold dark:text-white text-slate-900">
            E-commerce Development
          </h3>
          <p className="text-gray-800 dark:text-gray-400">
            Creating robust platforms to elevate your online business presence.
          </p>
        </div>
      </div>

      <div className="flex sm:gap-4 gap-2">
        <span className="">
          <IoSwapHorizontalOutline className="sm:text-5xl bg-slate-900 rounded px-0.5  text-3xl text-rose-600 dark:text-rose-400" />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold dark:text-white text-slate-900">
            API Integration
          </h3>
          <p className="text-gray-800 dark:text-gray-400">
            Seamlessly connecting systems to enhance functionality and
            performance.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SkillsComponent;
