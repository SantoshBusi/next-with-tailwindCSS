import Image from "next/image"
import { LeftArrow2, LeftArrowBlue } from "../components/Icons";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";

export default function Docs() {
    return (
        <>
            <Layout>

                {/* <Image
                    className=" mt-[20px] sm:mt-[40px]"
                    src="/images/image737.png"
                    width={1920}
                    height={561}
                    alt="pos hero img"
                /> */}
                <div className="bg-[url('../public/images/image737.png')] py-1  mb-14 bg-center bg-cover h-auto px-5 sm:h-[350px] sm:px-10 lg:px-48 xl:px-80 ">
                    <SearchBar />
                    <p className="sm:mt-5 text-center text-[#475467] ff-inter">
                        Login to check your open tickets and create new tickets
                    </p>
                </div>
                <div className="mx-10 mb-14">
                    <h2 className="ff-inter mx-[10px] font-bold sm:text-3xl text-2xl text-darkBlack leading-[46px] md:leading-[64px] max-w-[667px] ">
                        Explore docs by apps
                    </h2>

                    <div className="grid grid-cols-1 mx-[10px] lg:grid-cols-3 xl:grid-cols-5 sm:grid-cols-2 gap-[30px] mt-[25px] sm:mt-[40px] 3xl:mt-[79px] pb-5">
                        <a href="./pos">
                            <div className="bg-[#FFF3EA] w-auto rounded-[16px] z-0 hover:scale-105  transition-all  ease-in hover:duration-200  relative">
                                <div className="pt-[25px] sm:pt-[35px] 3xl:pt-[53px] pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px] lg:pl-[29px] lg:pr-[29px]">
                                    <div className="flex space-x-5 ">
                                        <div className="bg-[#FFFFFF] rounded-full p-3">
                                            <Image
                                                className="max-w-max"
                                                src="/images/design-1.png"
                                                width={50}
                                                height={40}
                                                alt="Creating design img"
                                            />

                                        </div>
                                        <h3 className=" float-right ff-inter font-bold text-sm text-darkBlack mt-[15px] leading-10 ">
                                            POS
                                        </h3>
                                    </div>
                                    <p className="ff-inter font-norma text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] sm:mt-[20px] 3xl:mt-[30px]">
                                        Accept payments, track your sales, generate reports and more
                                    </p>
                                    <div className="mt-[15px]">
                                        <div className="ff-inter font-normal text-base text-[#101828]">
                                            Documents : 20
                                        </div>
                                        <div className="ff-inter font-normal text-base text-[#101828] ">
                                            Videos : 02
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </a>
                        <a href="./inventory">
                            <div className="bg-[#FDE2E4] w-auto rounded-[16px] z-0 hover:scale-105  transition-all  ease-in hover:duration-200  relative">
                                <div className="pt-[25px] sm:pt-[35px] 3xl:pt-[53px] pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px] lg:pl-[29px] lg:pr-[29px]">
                                    <div className="flex space-x-5 ">
                                        <div className="bg-[#FFFFFF] rounded-full p-3">
                                            <Image
                                                className="max-w-max"
                                                src="/images/design-1.png"
                                                width={50}
                                                height={40}
                                                alt="Creating design img"
                                            />

                                        </div>
                                        <h3 className=" float-right ff-inter font-bold text-sm text-darkBlack mt-[15px] leading-10 ">
                                            Inventory
                                        </h3>
                                    </div>
                                    <p className="ff-inter font-norma text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] sm:mt-[20px] 3xl:mt-[30px]">
                                        Accept payments, track your sales, generate reports and more
                                    </p>
                                    <div className="mt-[15px]">
                                        <div className="ff-inter font-normal text-base text-[#101828]">
                                            Documents : 20
                                        </div>
                                        <div className="ff-inter font-normal text-base text-[#101828] ">
                                            Videos : 02
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </a>
                        <a href="./purchase">
                            <div className="bg-[#DFE7FD] w-auto rounded-[16px] z-0 hover:scale-105  transition-all  ease-in hover:duration-200  relative">
                                <div className="pt-[25px] sm:pt-[35px] 3xl:pt-[53px] pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px] lg:pl-[29px] lg:pr-[29px]">
                                    <div className="flex space-x-5 ">
                                        <div className="bg-[#FFFFFF] rounded-full p-3">
                                            <Image
                                                className="max-w-max"
                                                src="/images/design-1.png"
                                                width={50}
                                                height={40}
                                                alt="Creating design img"
                                            />

                                        </div>
                                        <h3 className=" float-right ff-inter font-bold text-sm text-darkBlack mt-[15px] leading-10 ">
                                            Purchase
                                        </h3>
                                    </div>
                                    <p className="ff-inter font-norma text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] sm:mt-[20px] 3xl:mt-[30px]">
                                        Accept payments, track your sales, generate reports and more
                                    </p>
                                    <div className="mt-[15px]">
                                        <div className="ff-inter font-normal text-base text-[#101828]">
                                            Documents : 20
                                        </div>
                                        <div className="ff-inter font-normal text-base text-[#101828] ">
                                            Videos : 02
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </a>
                        <a href="./helpPos">
                            <div className="bg-[#D1ECFD] w-auto rounded-[16px] z-0 hover:scale-105  transition-all  ease-in hover:duration-200  relative">
                                <div className="pt-[25px] sm:pt-[35px] 3xl:pt-[53px] pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px] lg:pl-[29px] lg:pr-[29px]">
                                    <div className="flex space-x-5 ">
                                        <div className="bg-[#FFFFFF] rounded-full p-3">
                                            <Image
                                                className="max-w-max"
                                                src="/images/design-1.png"
                                                width={50}
                                                height={40}
                                                alt="Creating design img"
                                            />

                                        </div>
                                        <h3 className=" float-right ff-inter font-bold text-sm text-darkBlack mt-[15px] leading-10 ">
                                            Sales
                                        </h3>
                                    </div>
                                    <p className="ff-inter font-norma text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] sm:mt-[20px] 3xl:mt-[30px]">
                                        Accept payments, track your sales, generate reports and more
                                    </p>
                                    <div className="mt-[15px]">
                                        <div className="ff-inter font-normal text-base text-[#101828]">
                                            Documents : 20
                                        </div>
                                        <div className="ff-inter font-normal text-base text-[#101828] ">
                                            Videos : 02
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </a>
                        <a href="./hrms">
                            <div className="bg-[#DBECE5] w-auto rounded-[16px] z-0 hover:scale-105  transition-all  ease-in hover:duration-200  relative">
                                <div className="pt-[25px] sm:pt-[35px] 3xl:pt-[53px] pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px] lg:pl-[29px] lg:pr-[29px]">
                                    <div className="flex space-x-5 ">
                                        <div className="bg-[#FFFFFF] rounded-full p-3">
                                            <Image
                                                className="max-w-max"
                                                src="/images/design-1.png"
                                                width={50}
                                                height={40}
                                                alt="Creating design img"
                                            />

                                        </div>
                                        <h3 className=" float-right ff-inter font-bold text-sm text-darkBlack mt-[15px] leading-10 ">
                                            HRMS
                                        </h3>
                                    </div>
                                    <p className="ff-inter font-norma text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] sm:mt-[20px] 3xl:mt-[30px]">
                                        Accept payments, track your sales, generate reports and more
                                    </p>
                                    <div className="mt-[15px]">
                                        <div className="ff-inter font-normal text-base text-[#101828]">
                                            Documents : 20
                                        </div>
                                        <div className="ff-inter font-normal text-base text-[#101828] ">
                                            Videos : 02
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <button className="ff-inter mt-5 sm:mt-[0px] sm:ml-[22px] w-[186px] h-[45px] sm:h-[66px] justify-center  text-[#164AF1] text-sm flex items-center free-trial-btn-hover font-normal font-inter transition-all duration-200 ease-in">
                            See all apps
                            <LeftArrowBlue />
                        </button>
                    </div>
                </div>
                <div className="mx-10">
                    <h2 className="ff-chivo mx-[10px] ff-inter font-bold sm:text-3xl text-2xl text-darkBlack leading-[46px] md:leading-[64px] max-w-[667px] ">
                        Most browsed videos
                    </h2>

                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3 mx-[10px]  ">
                        <div className="mt-10">
                            <div className="text-[#667085] text-[12px] ff-inter">
                                POS
                            </div>
                            <h1 className="text-[#101828] font-bold mb-2 ff-inter h-12 w-[80%] lg:w-[70%]">
                                How to setup multiple payment methods in POS
                            </h1>
                            <Image
                                src="/images/happyuser-1.png"
                                width={493}
                                height={315}
                                alt="LOGO"
                                priority
                            />
                        </div>
                        <div className="mt-10">
                            <div className="text-[#667085] text-[12px] ff-inter">
                                Inventory
                            </div>
                            <h1 className="text-[#101828] font-bold mb-2 ff-inter h-12 w-[80%] lg:w-[70%]">
                                Reduce low-stock or no stock by setting alerts
                            </h1>
                            <Image
                                src="/images/pexels-rodnae-productions-6936384.png"
                                width={493}
                                height={315}
                                alt="LOGO"
                                priority
                            />
                        </div>
                        <div className="mt-10">
                            <div className="text-[#667085] text-[12px] ff-inter">
                                HRMS
                            </div>
                            <h1 className="text-[#101828] font-bold mb-2 ff-inter h-12 w-[70%]">
                                Timesheet tracker
                            </h1>
                            <Image
                                src="/images/pexels-rodnae-productions-6936384 1 (1).png"
                                width={493}
                                height={315}
                                alt="LOGO"
                                priority
                            />
                        </div>
                        <div className="mt-10">
                            <div className="text-[#667085] text-[12px] ff-inter">
                                POS
                            </div>
                            <h1 className="text-[#101828] font-bold mb-2 ff-inter h-12 w-[80%] lg:w-[70%]">
                                How to setup multiple payment methods in POS
                            </h1>
                            <Image
                                src="/images/happyuser-1.png"
                                width={493}
                                height={315}
                                alt="LOGO"
                                priority
                            />
                        </div>
                        <div className="mt-10">
                            <div className="text-[#667085] text-[12px] ff-inter">
                                Inventory
                            </div>
                            <h1 className="text-[#101828] font-bold mb-2 ff-inter h-12 w-[80%] lg:w-[70%]">
                                Reduce low-stock or no stock by setting alerts
                            </h1>
                            <Image
                                src="/images/pexels-rodnae-productions-6936384.png"
                                width={493}
                                height={315}
                                alt="LOGO"
                                priority
                            />
                        </div>
                        <div className="mt-10">
                            <div className="text-[#667085] text-[12px] ff-inter ">
                                HRMS
                            </div>
                            <h1 className="text-[#101828] font-bold mb-2 ff-inter h-12 w-[70%]">
                                Timesheet tracker
                            </h1>
                            <Image
                                src="/images/pexels-rodnae-productions-6936384 1 (1).png"
                                width={493}
                                height={315}
                                alt="LOGO"
                                priority
                            />
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}