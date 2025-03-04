import {
  IoAlarmOutline,
  IoBrowsersOutline,
  IoCashOutline,
  IoDiamondOutline,
  IoLogoStackoverflow,
  IoTrendingUpSharp,
} from "react-icons/io5";

const WhyMeComponent = () => {
  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-wrap text-center justify-center">
        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6">
            <div className="flex justify-center">
              <IoLogoStackoverflow className="sm:text-6xl text-4xl text-rose-400 mb-3" />
            </div>
            <h2 className="title-font font-regular text-2xl text-slate-100">
              Latest Tech Stack
            </h2>
          </div>
        </div>

        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6">
            <div className="flex justify-center">
              <IoCashOutline className="sm:text-6xl text-4xl text-rose-400 mb-3" />
            </div>
            <h2 className="title-font font-regular text-2xl text-slate-100">
              Reasonable Rates
            </h2>
          </div>
        </div>

        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6">
            <div className="flex justify-center">
              <IoAlarmOutline className="sm:text-6xl text-4xl text-rose-400 mb-3" />
            </div>
            <h2 className="title-font font-regular text-2xl text-slate-100">
              Time Efficiency
            </h2>
          </div>
        </div>

        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6">
            <div className="flex justify-center">
              <IoDiamondOutline className="sm:text-6xl text-4xl text-rose-400 mb-3" />
            </div>
            <h2 className="title-font font-regular text-2xl text-slate-100">
              Expertise in Industry
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyMeComponent;
