import Image from "next/image";
import React from "react";
import { LeftArrow } from "../Icons";

const TalkUs = () => {
  return (
    <div className="bg-greyshade1 py-16 sm:py-24">
      <div className="container flex flex-col lg:flex-row justify-between items-center px-3 mx-auto">
        <div className="w-full lg:w-[60%] xl:w-[50%]">
          <div className="flex justify-center flex-col">
            <h2 className="font-bold ff-chivo sm:text-3xl text-2xl md:text-4xl text-center lg:text-start text-darkBlack">
              Talk to us
            </h2>
            <p className="font-normal mt-[12px] sm:mt-5 text-center lg:text-start  text-sm sm:text-lg  text-lightgrey ff-notosans max-w-[702px]">
              Necessary to deliver white glove, fully managed campaigns that
              surpass industry benchmarks.Take your career to next level. Apply
              to our team and see what we can do together. You’re good enough.
            </p>
            <div className="mt-5 sm:mt-14 w-full flex flex-col sm:flex-row items-center">
              <div className="lg:max-w-[541px] w-full mr-4 lg:mr-0">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full text-xs outline-none font-normal ff-notosans h-[45px] lg:h-[60px] pl-[30px] py-[20px]"
                />
              </div>
              <div className="flex justify-center mt-4 sm:mt-0">
                <button className=" 2xl:ml-[30px] bg-darkBlack w-[183px] sm:w-[215px] h-[43px] sm:h-[66px] justify-center rounded-full  text-white text-sm flex items-center free-trial-btn-hover font-normal font-chivo transition-all duration-200 ease-in hover:shadow-lg">
                  Send Message
                  <LeftArrow />
                </button>
              </div>
            </div>
            <p className="font-normal text-center lg:text-start mt-[37px] ff-notosans text-1xs text-blueshade1">
              By clicking contact us button, you agree our terms and policy,
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[35%]">
          {" "}
          <div className="mt-[15px] lg:mt-0  flex justify-center lg:justify-start">
            <Image
              src="/images/talk-us-1.png"
              width={526}
              height={610}
              alt="talk us img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkUs;
