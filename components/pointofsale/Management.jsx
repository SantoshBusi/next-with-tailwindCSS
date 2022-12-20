import Image from "next/image";
import React from "react";
import { managementData } from "../Helper";

const Management = () => {
  return (
    <section className="mx-5 py-12 lg:py-24">
      <div className="container mx-auto z-0  bg-skyblue rounded-[58px] relative">
        <div className="absolute top-0 left-[-43px] z-[-1]">
          <Image
            src="/images/management-2.png"
            width={162}
            height={162}
            alt="management img"
          />
        </div>
        <h2 className="font-bold leading-[30px] sm:leading-[39px] md:leading-[64px] z-50 mx-4 pt-[20px] sm:pt-[40px] md:pt-[50] 3xl:pt-[91px] ff-chivo sm:text-3xl text-xl md:text-4xl text-darkBlack text-center">
          Efficient Inventory Management
        </h2>
        <div className="flex z-50 justify-center mt-[12px] sm:mt-[15px] 3xl:mt-[23px] mx-4">
          <p className="font-normal ff-notosans text-sm sm:text-lg text-lightgrey max-w-[880px] text-center">
            With accurate tracking, smart stock forecasts and automated
            replenishment alerts, simplify your workflow to improve performance
            and process time
          </p>
        </div>
        <div className="flex z-50 justify-center mt-[10px] px-4 pb-[20px] sm-pb-[40px] 3xl:pb-[43px]">
          <div className="grid sm:grid-cols-2 items-center md:grid-cols-3 gap-[20px] sm:gap-[20px] xl:gap-[59px] mx-[10px] max-w-[1150px]">
            {managementData.map((item, index) => (
              <div
                key={index}
                className=" z-50 w-[100%] hover:scale-[1.03] transition-all duration-200 ease-in  xl:w-[344px]"
              >
                <div className="max-w-[300px] mx-auto">
                  <Image
                    src={item.img}
                    width={344}
                    height={422}
                    alt="Management img"
                  />
                </div>
                <h5 className="mx-auto  ff-chivo text-center mt-[12px] sm:mt-3 font-bold text-[20px]  lg:text-[22px] text-darkBlack">
                  {item.title}
                </h5>
                <div className="flex justify-center mt-[5px] sm:mt-2]">
                  <p className="ff-notosans  font-normal text-base text-lightgrey text-center leading-[22px] sm:leading-[28px] max-w-[234px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
