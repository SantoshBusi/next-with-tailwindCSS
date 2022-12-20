import React from "react";
import { bestplanData } from "../Helper";
import { LeftArrow, YesIcon } from "../Icons";

const BestPlan = () => {
  return (
    <div>
      <div className="container mx-auto mt-12 lg:py-24">
        <h2 className="font-bold ff-chivo leading-[45px] sm:leading-0 text-xl sm:text-3xl md:text-4xl text-darkBlack text-center">
          Pick a plan that’s best for you
        </h2>
        <div className="flex justify-center mt-[18px] sm:mt-[36px]">
          <div className="form-check form-switch pl-0 flex items-center">
            <p className="ff-notosans font-normal pr-[10px] text-base text-darkBlack">
              Bill Monthly
            </p>
            <input
              className="form-check-input  appearance-none w-[69px] rounded-full float-left h-[34px] align-top bg-white bg-no-repeat bg-contain bg-maryblue focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
            />
            <p className="ff-notosans pl-[10px] font-normal text-base text-darkBlack">
              Bill Annually
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] lg:gap-[30px] mx-5 mt-[27px] sm:mt-[54px]">
          {bestplanData.map((item, index) => (
            <div
              key={index}
              className="max-w-[336px] hover:bg-maryblue group flex flex-col justify-between sm:h-[486px] h-[100%] rounded-[16px] py-[17px] sm:py-[35px] px-[16px] sm:px-[32px] border-[1px] border-darkBlack"
            >
              <div>
                <p className="font-bold leading-[38px] group-hover:text-white ff-chivo text-2xl text-darkBlack">
                  <span>{item.price} </span>
                  <span className="text-[12px] text-[#98A2B3] font-normal">
                    /{item.month}
                  </span>
                </p>

                <h5 className="font-bold ff-chivo group-hover:text-white text-[22px] text-darkBlack">
                  {item.title}
                </h5>
                <p className="ff-notosans font-bold group-hover:text-white text-1xs text-[#98A2B3] max-w-[218px]">
                  {item.description}
                </p>
                <div className="h-[1px] mt-10 sm:mt-[43px] bg-[#D0D5DD]"></div>

                {item.list.map((items, index) => (
                  <div key={index} className="flex items-center mt-[22px]">
                    <YesIcon />
                    <span className="ml-[10px] font-normal text-xs group-hover:text-grey text-blueshade1 ff-notosans">
                      {items.listData}
                    </span>
                  </div>
                ))}
              </div>
              <button className=" mt-5 sm:mt-0  group-hover:bg-transparent border-2 border-white  bg-darkBlack w-[100%] h-[46px] justify-center rounded-[6px]  text-white text-sm flex items-center free-trial-btn-hover font-normal font-chivo transition-all duration-200 ease-in hover:shadow-lg">
                Learn More
                <LeftArrow />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestPlan;
