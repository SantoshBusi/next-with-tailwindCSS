import Image from "next/image";
import React from "react";

const PosAnytime = () => {
  return (
    <div className="relative">
      <div className="max-2-[1649px] mx-auto  py-12 lg:py-20">
        <div className="grid xl:grid-cols-2 gap-[25px] mx-4 sm:mx-8">
          <div className="xl:max-w-[702px]">
            <div className="flex justify-center xl:justify-start">
              <h2 className="ff-chivo font-bold sm:text-3xl text-2xl text-darkBlack leading-[46px] md:leading-[64px] text-center xl:text-start max-w-[667px] ">
                The best retail experience, Anytime Anywhere!
              </h2>
            </div>
            <div className="flex justify-center xl:justify-start">
              <p className="ff-notosans font-normal text-center xl:text-start text-sm sm:text-md text-lightgrey max-w-[702px] mt-[22px]">
                Empower your store associates to provide customers with a
                delightful experience whether you keep your device mobie or on
                the counter
              </p>
            </div>
            <div className="border-t-2 mt-[25px] border-dashed xl:max-w-[702px] border-#006D77"></div>
            <div className="flex justify-center xl:justify-start">
              <div className="mt-[48px] grid sm:grid-cols-2 gap-[15px] md:gap-[30px]">
                <div className="max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-chivo ml-[5px] font-normal text-sm text-darkBlack">
                      Unified commerce capabilities
                    </p>
                  </div>
                  <p className="font-normal mt-[18px] ff-notosans text-base">
                    Provide a customer-centric experience with real-time data
                    across all your touchpoints
                  </p>
                </div>
                <div className="max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-chivo ml-[5px] font-normal text-sm text-darkBlack">
                      UResponsive design
                    </p>
                  </div>
                  <p className="font-normal mt-[18px] ff-notosans text-base ">
                    The latest design trends meet flexible grids, layouts and
                    intelligent use of CSS
                  </p>
                </div>
                <div className="mt-[15px] md:mt-[40px] max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-chivo ml-[5px] font-normal text-sm text-darkBlack">
                      Customizable
                    </p>
                  </div>
                  <p className="font-normal mt-[18px] ff-notosans text-base">
                    Custom fields, customizable buttons, receipts and invoices
                  </p>
                </div>
                <div className="mt-[15px] md:mt-[40px] max-w-[303px]">
                  <div className="flex items-center">
                    <Image
                      width={25}
                      height={18}
                      src="/images/posmainIcon.png"
                      alt="pos main icon"
                    />
                    <p className="ff-chivo ml-[5px] font-normal text-sm text-darkBlack">
                      Compatible
                    </p>
                  </div>
                  <p className="font-normal mt-[18px] ff-notosans text-base">
                    Compatible with any hardware, no installation or specific
                    hardware required
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[900px] 3xl:-mt-[50px] flex xl:block justify-center xl:justify-start">
            <Image
              src="/images/anytime-1.png"
              width={900}
              height={613}
              alt="Creating design img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosAnytime;
