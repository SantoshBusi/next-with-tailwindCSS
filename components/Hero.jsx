import React from "react";
import { LeftArrow } from "./Icons";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <>
      <div className="bg-blue py-10 sm:py-16">
        <div className="container mx-auto px-3 flex flex-col xl:flex-row">
          <div className="w-full xl:w-1/2 mb-5 sm:mb-32 xl:my-auto">
            <div className="mb-7">
              <h1 className="text-[40px] sm:text-[52px] text-white leading-[50px] sm:leading-normal font-bold">
                Modern age solution
              </h1>
              <p className="text-md sm:text-lg text-white my-6 sm:my-10">
                When technology meets simplicity all that follows is a breeze.
                Modern age solution that scales as your business grows. For all
                sizes of business
              </p>

              <button className="bg-green px-14 rounded-full py-5 text-white text-sm flex items-center free-trial-btn-hover  transition-all duration-200 ease-in hover:shadow-lg hover:shadow-green">
                Watch Demo
                <LeftArrow />
              </button>
            </div>
          </div>
          {/* <div className="w-full xl:w-1/2">
            <HeroSlider />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
