import Image from "next/image";
import React from "react";
import { LeftArrow, LeftArrow2 } from "../Icons";

const PosHero = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h1 className="font-chivo text-darkBlack font-bold sm:mx-0 mx-[5px] leading-[35px] sm:leading-[70px] xl:leading-[88px] mt-[50px] sm:mt-[107px] max-w-[700px] xl:max-w-[980px] text-center text-xl sm:text-2xl md:text-4xl xl:text-[70px]">
            The POS system you have been waiting for!
          </h1>
        </div>
        <div className="flex justify-center mt-[17px] sm:mt-[34px]">
          <p className="font-noto font-normal text-lgx sm:text-xl max-w-[638px] text-center text-lightgrey ">
            Centralize the operations of your store, process transactions,
            manage inventory, follow orders, create reports of the store’s
            activities and much more!
          </p>
        </div>
        <div className="flex justify-center items-center flex-col sm:flex-row mt-[16px]">
          <button className="mt-5 sm:mt-[0px] bg-blue w-[186px] sm:w-[213px] h-[45px] sm:h-[66px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-chivo transition-all duration-200 ease-in hover:shadow-lg">
            Start free trial
            <LeftArrow />
          </button>
          <button className="mt-5 sm:mt-[0px] sm:ml-[22px] bg-greyshade1 w-[186px] h-[45px] sm:h-[66px] justify-center rounded-full  text-darkBlack text-sm flex items-center free-trial-btn-hover font-normal font-chivo transition-all duration-200 ease-in hover:shadow-lg">
            See Pricing
            <LeftArrow2 />
          </button>
        </div>
      </div>
      <Image
        className=" mt-[20px] sm:mt-[40px]"
        src="/images/poshero-1.png"
        width={1920}
        height={561}
        alt="pos hero img"
      />
    </div>
  );
};

export default PosHero;
