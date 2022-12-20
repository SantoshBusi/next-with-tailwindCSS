import Image from "next/image";
import React from "react";
import { homeplatfom } from "./Helper";

const Platfom = () => {
  return (
    <section>
      <div className="container mx-auto mt-16 sm:mt-[80px] 3xl:mt-[117px] px-3">
        <div className="xl:mx-12">
          <h2 className="font-chivo text-[36px] sm:text-3xl text-center font-bold">
            A truly unified commerce platfom
          </h2>
          <div className="justify-center flex mt-[12px] 3xl:mt-[36px]">
            <p className="font-inter font-normal text-md sm:text-lg max-w-[746px] text-center text-[#475467]">
              We provide many categories, choose a category according to your
              expertise to make it easier to find a job.{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-2 mt-10 sm:mt-[15px] 3xl:mt-20 gap-10 xl:gap-18">
            {homeplatfom.map((item, index) => (
              <div key={index}>
                <Image
                  className="hover:scale-[1.02] transition-all duration-200 ease-in"
                  alt="platfom-img"
                  src={item.img}
                  width={500}
                  height={300}
                />
                <h4 className="font-chivo text-xl pt-[12px] 3xl:pt-[24px] text-[#101828] font-bold">
                  {item.header}
                </h4>
                <p className="font-inter font-normal text-sm mt-[6px] 3xl:mt-[12px] text-[#475467] max-w-[558px]">
                  {item.description}
                </p>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platfom;
