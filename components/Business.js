import Image from "next/image";
import { homebussinesssize } from "./Helper";

const Business = () => {
    return (
        <>
            <div className="bg-[#D7E9A9] mt-16 sm:mt-[80px] 3xl:mt-[125px] relative">
                <div className="max-w-[100px] sm:max-w-full absolute z-[0]">
                    <Image
                        src="/images/bussiness-3.png"
                        width={120}
                        height={120}
                        alt="bussiness-img"
                    />
                </div>
                <div className="container mx-auto px-3 py-5 sm:py-24 z-10">
                    <div className="grid xl:grid-cols-2">
                        <div className="sm:mt-10">
                            <h1 className="font-chivo font-bold text-[36px] sm:leading-[64px] sm:text-3xl text-[#101828] max-w-[667px] ">
                                Scalable solution sets for all business size
                            </h1>
                            {homebussinesssize.map((item, index) => (
                                <div key={index} className="group">
                                    <h6 className="font-chivo group-hover:text-[#040D26] font-bold text-xl text-[#A9C65F] mt-8 sm:mt-10">
                                        {item.header}
                                    </h6>
                                    <p className="font-inter group-hover:text-[#040D26] font-normal mb-10 text-sm sm:text-md text-[#A9C65F] max-w-[687px]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center relative xl:mt-0 mt-9">
            <img
              className="h-[500px] w-[450px] object-contain"
              alt="bussiness-img-1"
              src="/images/bussiness-1.png"
            />
            <img
              className="w-[300px] h-[327px] mt-10 sm:mt-0 sm:absolute bottom-[0px] xl:-right-[30px] 2xl:-right-[70px] mr-3"
              src="/images/bussiness-2.png"
              alt="bussiness-img-2"
            />
          </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Business;