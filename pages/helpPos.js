import Layout from "../components/Layout";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import { RightCommaIcon } from "../components/Icons";

export default function helpPos() {
    return (
        <>
            <Layout>
                <div className="help-pos sm:px-20 py-20 mb-10 h-auto bg-center bg-cover xl:flex sm:flex-none w-full    ">
                    <div className="w-[65%] sm:w-full  ">
                        <a href="./docs" className="rounded-full py-5 text-[#164AF1] text-sm flex ff-inter">
                            See all apps
                        </a >
                        <div className="py-5">
                            <h1 className="text-[#0C173A] font-bold text-[50px] mb-5 ff-inter">
                                Sales
                            </h1>
                            <p className="text-[#475467] text-[18px] ff-inter">
                                Create higher value for your clients, higher margins for your organization, and maximize their commission checks. If you’re a sales leader, think about your team for a moment.

                            </p>
                        </div>
                        <SearchBar />
                    </div>
                    {/* <div className="w-1/3 sm:flex-col "> */}
                    <Image
                        src="/images/Untitled design (23) 1.png"
                        width={621}
                        height={31}
                        alt="LOGO"
                        priority
                        className="xl:w-[35%] sm:w-full sm:h-auto sm:mt-10"
                    />
                    {/* </div> */}


                </div>
                <div className="sm:px-20">
                    <h2 className="ff-inter  font-bold sm:text-3xl text-2xl text-darkBlack leading-[46px] md:leading-[64px] max-w-[667px] ">
                        6 Documents
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <a href="./helpDocument">
                            <div className="mt-10 border-[#CDCDCD] border-[1px] rounded-[17px] p-5">

                                <div className="flex">
                                    <h1 className="text-[#101828] text-[30px] font-bold mb-2 ff-inter w-[90%]">
                                        General settings
                                    </h1>
                                    {/* <div className="flex">
                                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.501 4.40406H12.759V0.789062H3.834V4.40406H3.09C2.80109 4.39996 2.51419 4.45282 2.2457 4.55961C1.97722 4.66639 1.7324 4.82503 1.52522 5.02644C1.31805 5.22786 1.15258 5.46811 1.03827 5.73348C0.92396 5.99886 0.863044 6.28415 0.859001 6.57306V10.9111H3.834V13.8031H12.759V10.9111H15.734V6.57306C15.73 6.28398 15.669 5.99852 15.5545 5.73302C15.4401 5.46751 15.2745 5.22717 15.0671 5.02573C14.8597 4.82428 14.6146 4.66569 14.3459 4.55902C14.0772 4.45236 13.7901 4.3997 13.501 4.40406V4.40406ZM5.321 2.23506H11.27V4.40406H5.321V2.23506ZM11.27 10.9111V12.3571H5.321V9.46506H11.27V10.9111ZM12.759 9.46506V8.01906H3.834V9.46506H2.346V6.57306C2.34942 6.37873 2.42957 6.19364 2.56896 6.05819C2.70835 5.92274 2.89565 5.84792 3.09 5.85006H13.501C13.6954 5.84792 13.8827 5.92274 14.022 6.05819C14.1614 6.19364 14.2416 6.37873 14.245 6.57306V9.46506H12.759Z" fill="#3D4561" />
                                        </svg> */}
                                        <img src="/images/Vector.svg" width={16} height={14} alt=""/>
                                    {/* </div> */}
                                </div>
                                <div className="text-[#667085] text-[18px] ff-inter">
                                    Accept payments, track your sales, generate reports and more
                                </div>
                                <div className="pt-10">
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054] mr-5">
                                        Settings
                                    </button>
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054]">
                                        Sales
                                    </button>
                                </div>

                            </div>
                        </a>
                        <a href="./helpDocument">
                            <div className="mt-10 border-[#CDCDCD] border-[1px] rounded-[17px] p-5">

                                <div className="flex">
                                    <h1 className="text-[#101828] text-[30px] font-bold mb-2 ff-inter w-[90%]">
                                        General settings
                                    </h1>
                                    {/* <div className="flex">
                                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.501 4.40406H12.759V0.789062H3.834V4.40406H3.09C2.80109 4.39996 2.51419 4.45282 2.2457 4.55961C1.97722 4.66639 1.7324 4.82503 1.52522 5.02644C1.31805 5.22786 1.15258 5.46811 1.03827 5.73348C0.92396 5.99886 0.863044 6.28415 0.859001 6.57306V10.9111H3.834V13.8031H12.759V10.9111H15.734V6.57306C15.73 6.28398 15.669 5.99852 15.5545 5.73302C15.4401 5.46751 15.2745 5.22717 15.0671 5.02573C14.8597 4.82428 14.6146 4.66569 14.3459 4.55902C14.0772 4.45236 13.7901 4.3997 13.501 4.40406V4.40406ZM5.321 2.23506H11.27V4.40406H5.321V2.23506ZM11.27 10.9111V12.3571H5.321V9.46506H11.27V10.9111ZM12.759 9.46506V8.01906H3.834V9.46506H2.346V6.57306C2.34942 6.37873 2.42957 6.19364 2.56896 6.05819C2.70835 5.92274 2.89565 5.84792 3.09 5.85006H13.501C13.6954 5.84792 13.8827 5.92274 14.022 6.05819C14.1614 6.19364 14.2416 6.37873 14.245 6.57306V9.46506H12.759Z" fill="#3D4561" />
                                        </svg> */}
                                        <img src="/images/Vector.svg" width={16} height={14} alt=""/>
                                    {/* </div> */}
                                </div>
                                <div className="text-[#667085] text-[18px] ff-inter">
                                    Accept payments, track your sales, generate reports and more
                                </div>
                                <div className="pt-10">
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054] mr-5">
                                        Settings
                                    </button>
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054]">
                                        Sales
                                    </button>
                                </div>

                            </div>
                        </a>
                        <a href="./helpDocument">
                            <div className="mt-10 border-[#CDCDCD] border-[1px] rounded-[17px] p-5">

                                <div className="flex">
                                    <h1 className="text-[#101828] text-[30px] font-bold mb-2 ff-inter w-[90%]">
                                        General settings
                                    </h1>
                                    {/* <div className="flex">
                                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.501 4.40406H12.759V0.789062H3.834V4.40406H3.09C2.80109 4.39996 2.51419 4.45282 2.2457 4.55961C1.97722 4.66639 1.7324 4.82503 1.52522 5.02644C1.31805 5.22786 1.15258 5.46811 1.03827 5.73348C0.92396 5.99886 0.863044 6.28415 0.859001 6.57306V10.9111H3.834V13.8031H12.759V10.9111H15.734V6.57306C15.73 6.28398 15.669 5.99852 15.5545 5.73302C15.4401 5.46751 15.2745 5.22717 15.0671 5.02573C14.8597 4.82428 14.6146 4.66569 14.3459 4.55902C14.0772 4.45236 13.7901 4.3997 13.501 4.40406V4.40406ZM5.321 2.23506H11.27V4.40406H5.321V2.23506ZM11.27 10.9111V12.3571H5.321V9.46506H11.27V10.9111ZM12.759 9.46506V8.01906H3.834V9.46506H2.346V6.57306C2.34942 6.37873 2.42957 6.19364 2.56896 6.05819C2.70835 5.92274 2.89565 5.84792 3.09 5.85006H13.501C13.6954 5.84792 13.8827 5.92274 14.022 6.05819C14.1614 6.19364 14.2416 6.37873 14.245 6.57306V9.46506H12.759Z" fill="#3D4561" />
                                        </svg> */}
                                        <img src="/images/Vector.svg" width={16} height={14} alt=""/>
                                    {/* </div> */}
                                </div>
                                <div className="text-[#667085] text-[18px] ff-inter">
                                    Accept payments, track your sales, generate reports and more
                                </div>
                                <div className="pt-10">
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054] mr-5">
                                        Settings
                                    </button>
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054]">
                                        Sales
                                    </button>
                                </div>

                            </div>
                        </a>
                         <a href="./helpDocument">
                            <div className="mt-10 border-[#CDCDCD] border-[1px] rounded-[17px] p-5">

                                <div className="flex">
                                    <h1 className="text-[#101828] text-[30px] font-bold mb-2 ff-inter w-[90%]">
                                        General settings
                                    </h1>
                                    {/* <div className="flex">
                                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.501 4.40406H12.759V0.789062H3.834V4.40406H3.09C2.80109 4.39996 2.51419 4.45282 2.2457 4.55961C1.97722 4.66639 1.7324 4.82503 1.52522 5.02644C1.31805 5.22786 1.15258 5.46811 1.03827 5.73348C0.92396 5.99886 0.863044 6.28415 0.859001 6.57306V10.9111H3.834V13.8031H12.759V10.9111H15.734V6.57306C15.73 6.28398 15.669 5.99852 15.5545 5.73302C15.4401 5.46751 15.2745 5.22717 15.0671 5.02573C14.8597 4.82428 14.6146 4.66569 14.3459 4.55902C14.0772 4.45236 13.7901 4.3997 13.501 4.40406V4.40406ZM5.321 2.23506H11.27V4.40406H5.321V2.23506ZM11.27 10.9111V12.3571H5.321V9.46506H11.27V10.9111ZM12.759 9.46506V8.01906H3.834V9.46506H2.346V6.57306C2.34942 6.37873 2.42957 6.19364 2.56896 6.05819C2.70835 5.92274 2.89565 5.84792 3.09 5.85006H13.501C13.6954 5.84792 13.8827 5.92274 14.022 6.05819C14.1614 6.19364 14.2416 6.37873 14.245 6.57306V9.46506H12.759Z" fill="#3D4561" />
                                        </svg> */}
                                        <img src="/images/Vector.svg" width={16} height={14} alt=""/>
                                    {/* </div> */}
                                </div>
                                <div className="text-[#667085] text-[18px] ff-inter">
                                    Accept payments, track your sales, generate reports and more
                                </div>
                                <div className="pt-10">
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054] mr-5">
                                        Settings
                                    </button>
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054]">
                                        Sales
                                    </button>
                                </div>

                            </div>
                        </a>
                        <a href="./helpDocument">
                            <div className="mt-10 border-[#CDCDCD] border-[1px] rounded-[17px] p-5">

                                <div className="flex">
                                    <h1 className="text-[#101828] text-[30px] font-bold mb-2 ff-inter w-[90%]">
                                        General settings
                                    </h1>
                                    {/* <div className="flex">
                                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.501 4.40406H12.759V0.789062H3.834V4.40406H3.09C2.80109 4.39996 2.51419 4.45282 2.2457 4.55961C1.97722 4.66639 1.7324 4.82503 1.52522 5.02644C1.31805 5.22786 1.15258 5.46811 1.03827 5.73348C0.92396 5.99886 0.863044 6.28415 0.859001 6.57306V10.9111H3.834V13.8031H12.759V10.9111H15.734V6.57306C15.73 6.28398 15.669 5.99852 15.5545 5.73302C15.4401 5.46751 15.2745 5.22717 15.0671 5.02573C14.8597 4.82428 14.6146 4.66569 14.3459 4.55902C14.0772 4.45236 13.7901 4.3997 13.501 4.40406V4.40406ZM5.321 2.23506H11.27V4.40406H5.321V2.23506ZM11.27 10.9111V12.3571H5.321V9.46506H11.27V10.9111ZM12.759 9.46506V8.01906H3.834V9.46506H2.346V6.57306C2.34942 6.37873 2.42957 6.19364 2.56896 6.05819C2.70835 5.92274 2.89565 5.84792 3.09 5.85006H13.501C13.6954 5.84792 13.8827 5.92274 14.022 6.05819C14.1614 6.19364 14.2416 6.37873 14.245 6.57306V9.46506H12.759Z" fill="#3D4561" />
                                        </svg> */}
                                        <img src="/images/Vector.svg" width={16} height={14} alt=""/>
                                    {/* </div> */}
                                </div>
                                <div className="text-[#667085] text-[18px] ff-inter">
                                    Accept payments, track your sales, generate reports and more
                                </div>
                                <div className="pt-10">
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054] mr-5">
                                        Settings
                                    </button>
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054]">
                                        Sales
                                    </button>
                                </div>

                            </div>
                        </a>
                        <a href="./helpDocument">
                            <div className="mt-10 border-[#CDCDCD] border-[1px] rounded-[17px] p-5">

                                <div className="flex">
                                    <h1 className="text-[#101828] text-[30px] font-bold mb-2 ff-inter w-[90%]">
                                        General settings
                                    </h1>
                                    {/* <div className="flex">
                                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.501 4.40406H12.759V0.789062H3.834V4.40406H3.09C2.80109 4.39996 2.51419 4.45282 2.2457 4.55961C1.97722 4.66639 1.7324 4.82503 1.52522 5.02644C1.31805 5.22786 1.15258 5.46811 1.03827 5.73348C0.92396 5.99886 0.863044 6.28415 0.859001 6.57306V10.9111H3.834V13.8031H12.759V10.9111H15.734V6.57306C15.73 6.28398 15.669 5.99852 15.5545 5.73302C15.4401 5.46751 15.2745 5.22717 15.0671 5.02573C14.8597 4.82428 14.6146 4.66569 14.3459 4.55902C14.0772 4.45236 13.7901 4.3997 13.501 4.40406V4.40406ZM5.321 2.23506H11.27V4.40406H5.321V2.23506ZM11.27 10.9111V12.3571H5.321V9.46506H11.27V10.9111ZM12.759 9.46506V8.01906H3.834V9.46506H2.346V6.57306C2.34942 6.37873 2.42957 6.19364 2.56896 6.05819C2.70835 5.92274 2.89565 5.84792 3.09 5.85006H13.501C13.6954 5.84792 13.8827 5.92274 14.022 6.05819C14.1614 6.19364 14.2416 6.37873 14.245 6.57306V9.46506H12.759Z" fill="#3D4561" />
                                        </svg> */}
                                        <img src="/images/Vector.svg" width={16} height={14} alt=""/>
                                    {/* </div> */}
                                </div>
                                <div className="text-[#667085] text-[18px] ff-inter">
                                    Accept payments, track your sales, generate reports and more
                                </div>
                                <div className="pt-10">
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054] mr-5">
                                        Settings
                                    </button>
                                    <button className="ff-inter rounded-[17px] py-1 px-5 bg-[#E4E7EC] text-[18px] text-[#344054]">
                                        Sales
                                    </button>
                                </div>

                            </div>
                        </a>

                    </div>
                </div>
            </Layout>
        </>
    )
}