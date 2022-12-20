import Image from "next/image"
import { LeftArrow2 } from "../components/Icons";

export default function Docs() {
    return (
        <>
        <div className="mx-16">
              <h2 className="ff-chivo mx-[10px] font-bold sm:text-3xl text-2xl text-darkBlack leading-[46px] md:leading-[64px] max-w-[667px] ">
              Explore docs by apps
              </h2>
            
            <div className="grid mx-[10px] lg:grid-cols-3 xl:grid-cols-4 1xl:grid-cols-5 sm:grid-cols-2 gap-[30px] mt-[25px] sm:mt-[40px] 3xl:mt-[79px] pb-[40px] sm:pb-[40px] 3xl:pb-[98px]">
                <a href="./pointofsale">
                <div className="bg-[#FFF3EA] w-[250px] rounded-[16px] z-0 hover:scale-105  transition-all  ease-in hover:duration-200  relative">
                    <div className="pt-[25px] sm:pt-[35px] 3xl:pt-[53px] pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px] lg:pl-[29px] lg:pr-[29px]">
                        <div className="flex space-x-5 ">
                            {/* <Image
                                src="/images/design-1.png"
                                width={50}
                                height={40}
                                alt="Creating design img"
                            /> */}
                            <div className="bg-[#FFFFFF] rounded-full p-3">
                            <Image
                                src="/images/design-1.png"
                                width={50}
                                height={40}
                                alt="Creating design img"
                            />
                            </div>
                            <h3 className="ff-chivo font-bold text-xl sm:text-lg text-darkBlack mt-[15px] leading-[45px] sm:mt-[15px] 3xl:mt-[30px]">
                                POS
                            </h3>
                        </div>
                        <p className="ff-notosans font-norma text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] sm:mt-[20px] 3xl:mt-[30px]">
                            Accept payments, track your sales, generate reports and more
                        </p>
                       <div className="mt-[15px]">
                       <div className="ff-notosans font-normal text-base text-[#101828]">
                            Documents : 20
                        </div>
                        <div className="ff-notosans font-normal text-base text-[#101828] ">
                            Videos : 02
                        </div>
                       </div>

                    </div>
                </div>
                </a>
                <a href="./inventory">
                <div className="bg-[#FDE2E4] w-[250px] rounded-[16px] z-0 hover:scale-105  transition-all  ease-in hover:duration-200  relative">
                    <div className="pt-[25px] sm:pt-[35px] 3xl:pt-[53px] pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px] lg:pl-[29px] lg:pr-[29px]">
                        <div className="flex space-x-5 ">
                            {/* <Image
                                src="/images/design-1.png"
                                width={50}
                                height={40}
                                alt="Creating design img"
                            /> */}
                            <div className="bg-[#FFFFFF] rounded-full p-3">
                            <Image
                                src="/images/design-1.png"
                                width={50}
                                height={40}
                                alt="Creating design img"
                            />
                            </div>
                            <h3 className="ff-chivo font-bold text-xl sm:text-lg text-darkBlack mt-[15px] leading-[45px] sm:mt-[15px] 3xl:mt-[30px]">
                                Inventory
                            </h3>
                        </div>
                        <p className="ff-notosans font-norma text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] sm:mt-[20px] 3xl:mt-[30px]">
                            Accept payments, track your sales, generate reports and more
                        </p>
                       <div className="mt-[15px]">
                       <div className="ff-notosans font-normal text-base text-[#101828]">
                            Documents : 20
                        </div>
                        <div className="ff-notosans font-normal text-base text-[#101828] ">
                            Videos : 02
                        </div>
                       </div>

                    </div>
                </div>
                </a>
                <a href="./purchase">
                <div className="bg-[#DFE7FD] w-[250px] rounded-[16px] z-0 hover:scale-105  transition-all  ease-in hover:duration-200  relative">
                    <div className="pt-[25px] sm:pt-[35px] 3xl:pt-[53px] pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px] lg:pl-[29px] lg:pr-[29px]">
                        <div className="flex space-x-5 ">
                            {/* <Image
                                src="/images/design-1.png"
                                width={50}
                                height={40}
                                alt="Creating design img"
                            /> */}
                            <div className="bg-[#FFFFFF] rounded-full p-3">
                            <Image
                                src="/images/design-1.png"
                                width={50}
                                height={40}
                                alt="Creating design img"
                            />
                            </div>
                            <h3 className="ff-chivo font-bold text-xl sm:text-lg text-darkBlack mt-[15px] leading-[45px] sm:mt-[15px] 3xl:mt-[30px]">
                                Purchase
                            </h3>
                        </div>
                        <p className="ff-notosans font-norma text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] sm:mt-[20px] 3xl:mt-[30px]">
                            Accept payments, track your sales, generate reports and more
                        </p>
                       <div className="mt-[15px]">
                       <div className="ff-notosans font-normal text-base text-[#101828]">
                            Documents : 20
                        </div>
                        <div className="ff-notosans font-normal text-base text-[#101828] ">
                            Videos : 02
                        </div>
                       </div>

                    </div>
                </div>
                </a>
                <a href="./sales">
                <div className="bg-[#D1ECFD] w-[250px] rounded-[16px] z-0 hover:scale-105  transition-all  ease-in hover:duration-200  relative">
                    <div className="pt-[25px] sm:pt-[35px] 3xl:pt-[53px] pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px] lg:pl-[29px] lg:pr-[29px]">
                        <div className="flex space-x-5 ">
                            {/* <Image
                                src="/images/design-1.png"
                                width={50}
                                height={40}
                                alt="Creating design img"
                            /> */}
                            <div className="bg-[#FFFFFF] rounded-full p-3">
                            <Image
                                src="/images/design-1.png"
                                width={50}
                                height={40}
                                alt="Creating design img"
                            />
                            </div>
                            <h3 className="ff-chivo font-bold text-xl sm:text-lg text-darkBlack mt-[15px] leading-[45px] sm:mt-[15px] 3xl:mt-[30px]">
                                Sales
                            </h3>
                        </div>
                        <p className="ff-notosans font-norma text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] sm:mt-[20px] 3xl:mt-[30px]">
                            Accept payments, track your sales, generate reports and more
                        </p>
                       <div className="mt-[15px]">
                       <div className="ff-notosans font-normal text-base text-[#101828]">
                            Documents : 20
                        </div>
                        <div className="ff-notosans font-normal text-base text-[#101828] ">
                            Videos : 02
                        </div>
                       </div>

                    </div>
                </div>
                </a>
                <a href="./hrms">
                <div className="bg-[#DBECE5] w-[250px] rounded-[16px] z-0 hover:scale-105  transition-all  ease-in hover:duration-200  relative">
                    <div className="pt-[25px] sm:pt-[35px] 3xl:pt-[53px] pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px] lg:pl-[29px] lg:pr-[29px]">
                        <div className="flex space-x-5 ">
                            {/* <Image
                                src="/images/design-1.png"
                                width={50}
                                height={40}
                                alt="Creating design img"
                            /> */}
                            <div className="bg-[#FFFFFF] rounded-full p-3">
                            <Image
                                src="/images/design-1.png"
                                width={50}
                                height={40}
                                alt="Creating design img"
                            />
                            </div>
                            <h3 className="ff-chivo font-bold text-xl sm:text-lg text-darkBlack mt-[15px] leading-[45px] sm:mt-[15px] 3xl:mt-[30px]">
                                HRMS
                            </h3>
                        </div>
                        <p className="ff-notosans font-norma text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] sm:mt-[20px] 3xl:mt-[30px]">
                            Accept payments, track your sales, generate reports and more
                        </p>
                       <div className="mt-[15px]">
                       <div className="ff-notosans font-normal text-base text-[#101828]">
                            Documents : 20
                        </div>
                        <div className="ff-notosans font-normal text-base text-[#101828] ">
                            Videos : 02
                        </div>
                       </div>

                    </div>
                </div>
                </a>

            </div>
            </div>
        </>
    )
}