import Layout from "../components/Layout"
import Header from "../components/Header"
import { ToggleIcon } from "../components/Icons"
// import { useState } from "react"

export default function helpDocument() {

    // const [sideMenu,setSideMenu] =useState(false)
    const Data = [
        {
            "title": "How to configure a customer",
            "ind": "1",
            "pGraph": "The Customer setup document will help you configure the settngs to add a customer to your database The Customer setup document will help you configuhkja "
        },
        {
            "title": "How to add a customer",
            "ind": "2",
            "pGraph": "The Customer setup document will help you configure the settngs to add a customer to your database The Customer setup document will help you configuhkja"
        },
        {
            "title": "How to add search criteria for customers",
            "ind": "3",
            "pGraph": "The Customer setup document will help you configure the settngs to add a customer to your database The Customer setup document will help you configuhkja"
        },
        {
            "title": "How to configure a customer",
            "ind": "4",
            "pGraph": "The Customer setup document will help you configure the settngs to add a customer to your database The Customer setup document will help you configuhkja"
        },
        {
            "title": "How to add a customer",
            "ind": "5",
            "pGraph": "The Customer setup document will help you configure the settngs to add a customer to your database The Customer setup document will help you configuhkja"
        },
        {
            "title": "How to add search criteria for customers",
            "ind": "6",
            "pGraph": "The Customer setup document will help you configure the settngs to add a customer to your database The Customer setup document will help you configuhkja"
        }
    ]

    return (
        <>
            <div className="w-auto">
                <Header />
                <div className="bg-[#F2F2F2] sm:flex sm:px-5 pt-2 w-full ">
                    <div className="font-bold text-[#0C173A] text-[22px]  ff-inter w-[84%] flex ">
                        <span
                            className=" sm:hidden  cursor-pointer mr-5"
                            onClick={()=>{
                                setSideMenu(true)
                            }}
                        >
                            {" "}
                            <ToggleIcon />
                        </span>
                        General Settings
                    </div>
                    <div className="flex">
                        <button className="rounded py-1 px-5 mr-3 bg-[#FFFFFF] text-[16px] text-[#0C173A] ff-inter">
                            Print
                        </button>
                        <button className="rounded flex  py-1 px-5 bg-[#FFFFFF] text-[16px] text-[#0C173A] ff-inter">
                            <img src="images/Vector.svg" alt="" className="mr-2" />
                            Download
                        </button>
                    </div>

                </div>
                <div className="flex space-x-5 bg-[#F2F2F2] p-5">
                    <div className="w-auto bg-[#FFFFFF] h-auto p-3 hidden sm:block ">
                        <div className="font-bold text-[#35383a] text-[16px] pb-3 pl-10 ff-inter ">
                            Content
                        </div>
                        <div className="max-w-full h-[43px] w-full rounded flex items-center border-2 border-[#D1D1D1] bg-[#FFFFFF]">
                            <span className="px-3">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.5006 13.9996H14.7106L14.4306 13.7296C15.6306 12.3296 16.2506 10.4196 15.9106 8.38965C15.4406 5.60965 13.1206 3.38965 10.3206 3.04965C6.09063 2.52965 2.53063 6.08965 3.05063 10.3196C3.39063 13.1196 5.61063 15.4396 8.39063 15.9096C10.4206 16.2496 12.3306 15.6296 13.7306 14.4296L14.0006 14.7096V15.4996L18.2506 19.7496C18.6606 20.1596 19.3306 20.1596 19.7406 19.7496C20.1506 19.3396 20.1506 18.6696 19.7406 18.2596L15.5006 13.9996ZM9.50063 13.9996C7.01063 13.9996 5.00063 11.9896 5.00063 9.49965C5.00063 7.00965 7.01063 4.99965 9.50063 4.99965C11.9906 4.99965 14.0006 7.00965 14.0006 9.49965C14.0006 11.9896 11.9906 13.9996 9.50063 13.9996Z"
                                        fill="#868B8F"
                                    />
                                </svg>
                            </span>

                            <input
                                className="text-xs text-[#868B8F] outline-none "
                                type="text"
                                placeholder="Search"
                            />
                        </div>
                        <div className="mt-3">
                            <div className=" w-full hover:bg-[#A4CD38] ">
                                <div className="text-[#192228] pl-10 py-3 ff-inter">
                                    Customer
                                </div>
                            </div>
                            <div className=" w-full hover:bg-[#A4CD38] ">
                                <div className="text-[#192228] pl-10 py-3 ff-inter">
                                    Add Customer
                                </div>
                            </div>
                            <div className=" w-full hover:bg-[#A4CD38] ">
                                <div className="text-[#192228] pl-10 py-3 ff-inter">
                                    Search Criteria
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-auto bg-[#FFFFFF] px-12 pt-5 ">
                        <nav class=" rounded-md w-full pb-5">
                            <ol class="list-reset flex">
                                <li class="inline-flex items-center">
                                    <a href="./docs" class="text-[#0C49A6] hover:text-blue-500">
                                        Help Desk
                                    </a>

                                    <svg class="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                                </li>

                                <li class="inline-flex items-center">
                                    <a href="./helpPos" class="text-[#0C49A6] hover:text-blue-500">
                                        Help Pos
                                    </a>

                                    <svg class="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                                </li>

                                <li class="inline-flex items-center">
                                    <a href="#" class="text-[#0C49A6] hover:text-blue-500 text-blue-500">
                                        Help Document
                                    </a>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="font-bold text-[#0C173A] text-[22px]  ff-inter mb-3">
                            General Settings
                        </h1>
                        <p className="text-[#192228]">
                            The Customer setup document will help you configure the settngs to add a customer to your database
                        </p>
                        <ul className="list-disc mt-5">
                            {
                                Data.map((data) => {
                                    return (
                                        <li key={data.ind} className="ff-inter mb-5">
                                            <div className="text-[#0A58CC] text-[18px] ff-inter">{data.title}</div>
                                            {data.pGraph}
                                        </li>
                                    )
                                })
                            }
                        </ul>


                    </div>
                </div>
            </div>


        </>
    )
}