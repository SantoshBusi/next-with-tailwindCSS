import Image from "next/image";
import React from "react";
import { bussiness } from "../Helper";
const BussinessLoved = () => {
  return (
    <div>
      <div className="container mx-auto mt-16 sm:mt-[80px] 3xl:mt-[107px]">
        <h2 className="ff-chivo font-bold sm:text-3xl text-xl leading-[35px] sm:leading-[65px] md:text-4xl text-darkBlack text-center">
          Trusted and loved by over 2000 businesses
        </h2>
        <p className="ff-notosans font-normal mt-[14px] text-lg sm:text-lg text-center text-lightgrey">
          Don’t take our word for it. Check out what our users say
        </p>
        <div className="flex xl:flex-row flex-col justify-between mx-5 mt-[20px] 3xl:mt-[37px]">
          <div className="xl:w-[65%] 3xl:w-[80%] 3xl:max-w-[906px]">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <Image
                src="/images/bussiness-img-1.png"
                width={435}
                height={480}
                alt="bussiness img"
              />
              <Image
                className="mt-5 hidden sm:block  lg:mt-0 lg:ml-[30px]"
                src="/images/bussiness-img-2.png"
                width={435}
                height={480}
                alt="bussiness img"
              />
            </div>
            <div>
              <h4 className="ff-chivo font-bold leading-[30px] sm:leading-0 text-lg sm:text-[28px] mt-[17px] text-darkBlack">
                CW POS integrates seamlessly with all your favorite tools
              </h4>
              <p className="ff-notosans font-normal mt-[8px] text-base max-w-[946px] text-lightgrey">
                With CW POS, we were able to increase our sales by 8% within the
                first 2 months and can see opportunities for better speed and
                stability.
              </p>
            </div>
            <div className="flex  items-center mt-4">
              <Image
                src="/images/bussiness-img-3.png"
                width={55}
                height={56}
                alt="bussiness img"
              />
              <div className="pl-[15px]">
                <h6 className="ff-chivo font-normal text-sm text-darkBlack">
                  Joshua Wilson
                </h6>
                <p className="ff-notosans font-bold text-[12px] text-blueshade1">
                  COO, Trendy Casuals
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-[30%]">
            {bussiness.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mt-[20px] lg:mt-[0px]">
                  <div className="">
                    <h6 className="ff-chivo font-normal sm:mt-4 text-sm max-w-[289px]">
                      {item.header}
                    </h6>
                    <div className="flex items-center mt-4">
                      <Image
                        src={item.img}
                        width={41}
                        height={42}
                        alt="bussiness img"
                      />
                      <div className="ml-2">
                        <p className="ff-notosans font-bold text-base text-blueshade1">
                          {item.name}
                        </p>
                        <p className="ff-notosans font-bold text-[12px] text-blueshade1">
                          {item.job}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={item.img2}
                      width={133}
                      height={134}
                      alt="bussiness img"
                    />
                  </div>
                </div>
                <div className="h-[1px] w-[100%] mt-[11px] 3xl:mt-[22px] mb-[10px] 3xl:mb-[20px] bg-grey"></div>
              </div>
            ))}
            {/* <div className="flex justify-between mt-[20px]">
                            <div>
                                <h6 className="ff-chivo font-normal sm:mt-[18px] text-sm max-w-[289px]">CW POS fits like a glove to our business</h6>
                                <div className="flex items-center mt-[19px]">
                                    <Image src="/images/bussiness-img-4.png" width={41} height={42} alt="bussiness img" />
                                    <div className="ml-[11px]">
                                        <p className="ff-notosans font-bold text-base text-blueshade1">Kinjal Parmar</p>
                                        <p className="ff-notosans font-bold text-[12px] text-blueshade1">Fancy Joker</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image src="/images/bussiness-img-5.png" width={133} height={134} alt="bussiness img" />
                            </div>
                        </div>
                        <div className="h-[1px] w-[100%] mt-[22px] bg-grey"></div>
                        <div className="flex justify-between mt-[20px]">
                            <div>
                                <h6 className="ff-chivo font-normal sm:mt-[18px] text-sm max-w-[289px]">CW POS fits like a glove to our business</h6>
                                <div className="flex items-center mt-[19px]">
                                    <Image src="/images/bussiness-img-4.png" width={41} height={42} alt="bussiness img" />
                                    <div className="ml-[11px]">
                                        <p className="ff-notosans font-bold text-base text-blueshade1">Kinjal Parmar</p>
                                        <p className="ff-notosans font-bold text-[12px] text-blueshade1">Fancy Joker</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image src="/images/bussiness-img-5.png" width={133} height={134} alt="bussiness img" />
                            </div>
                        </div>
                        <div className="h-[1px] w-[100%] mt-[22px] bg-grey"></div>
                        <div className="flex justify-between mt-[20px]">
                            <div>
                                <h6 className="ff-chivo font-normal sm:mt-[18px] text-sm max-w-[289px]">CW POS fits like a glove to our business</h6>
                                <div className="flex items-center mt-[19px]">
                                    <Image src="/images/bussiness-img-4.png" width={41} height={42} alt="bussiness img" />
                                    <div className="ml-[11px]">
                                        <p className="ff-notosans font-bold text-base text-blueshade1">Kinjal Parmar</p>
                                        <p className="ff-notosans font-bold text-[12px] text-blueshade1">Fancy Joker</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image src="/images/bussiness-img-5.png" width={133} height={134} alt="bussiness img" />
                            </div>
                        </div>
                        <div className="h-[1px] w-[100%] mt-[22px] bg-grey"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessLoved;
