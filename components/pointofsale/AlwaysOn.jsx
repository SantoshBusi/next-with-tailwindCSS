import Image from "next/image";
import React from "react";

const AlwaysOn = () => {
  return (
    <div>
      <div className="container mx-auto py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-[25px] sm:gap-[50px] mx-[10px] lg:mx-[0px] xl:gap-[67px]">
          <div>
            <Image
              src="/images/always-1.png"
              width={750}
              height={744}
              alt="always img"
            />
          </div>
          <div>
            <div className="flex justify-center sm:justify-start">
              <button className="font-normal ff-chivo text-xs text-greenyellow bg-[#EFFEC7] rounded-[50px] h-[42px] w-[139px]">
                Offline mode
              </button>
            </div>
            <h2 className="font-bold ff-chivo mt-4 sm:mt-0 text-center sm:text-start text-xl sm:text-4xl text-darkBlack">
              Always On!
            </h2>
            <p className="font-normal ff-notosans text-center sm:text-start text-lg sm:text-xl text-lightgrey max-w-[710px]">
              Continue operations, reduce chaos and improve customer
              satisfaction with offline mode.{" "}
            </p>
            <div className="mt-[20px] sm:mt-[48px] gap-[25px] sm:grid flex justify-center flex-col items-center sm:grid-cols-2">
              <div className="max-w-[303px]">
                <div className="flex items-center">
                  <Image
                    width={25}
                    height={18}
                    src="/images/posmainIcon.png"
                    alt="pos main icon"
                  />
                  <p className="ff-chivo ml-[5px] font-normal text-sm text-darkBlack">
                    Automatic Switch
                  </p>
                </div>
                <p className="font-normal mt-[10px] sm:mt-[18px] ff-notosans text-sm ">
                  Strong offline mode that kicks in automatically when the
                  internet is down
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
                    Automatic Sync
                  </p>
                </div>
                <p className="font-normal mt-[10px] sm:mt-[18px] ff-notosans text-sm ">
                  Transactions get automatically synced to channel database as
                  soon as connection is restored
                </p>
              </div>
              <div className=" sm:mt-[55px] max-w-[303px]">
                <div className="flex items-center">
                  <Image
                    width={25}
                    height={18}
                    src="/images/posmainIcon.png"
                    alt="pos main icon"
                  />
                  <p className="ff-chivo ml-[5px] font-normal text-sm text-darkBlack">
                    Offline Alert
                  </p>
                </div>
                <p className="font-normal mt-[10px] sm:mt-[18px] ff-notosans text-sm ">
                  Customize alerts to be notified when your POS goes offline
                </p>
              </div>
              <div className=" sm:mt-[55px] max-w-[303px]">
                <div className="flex items-center">
                  <Image
                    width={25}
                    height={18}
                    src="/images/posmainIcon.png"
                    alt="pos main icon"
                  />
                  <p className="ff-chivo ml-[5px] font-normal text-sm text-darkBlack">
                    Offline Payments
                  </p>
                </div>
                <p className="font-normal mt-[10px] sm:mt-[18px] ff-notosans text-sm ">
                  Create a threshold for offline payments and be notified when
                  payment is accepted offline
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlwaysOn;
