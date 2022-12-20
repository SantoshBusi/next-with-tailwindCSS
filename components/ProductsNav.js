import React from "react";

const ProductsNav = () => {
    return (
        <>
            <div className="z-20 top-[45px] xl:absolute left-0 flex flex-col xl:flex-row space-x-16 items-start justify-end px-4 xl:px-12 pt-4 xl:pt-10 pb-6 bg-white shadow rounded xl:h-[700px]">
                <div className="flex flex-col justify-between xl:w-56 h-full">
                    <div className="flex flex-col space-y-5 items-start justify-start xl:w-56">
                        <h4 className="text-base font-bold leading-normal text-gray-900">RETAIL</h4>
                        <p className="w-1/2 text-base  text-gray-500 cursor-pointer">Point of Sale</p>
                        <p className="w-24 text-base  text-gray-500 cursor-pointer">Payments</p>
                        <p className="w-24 text-base  text-gray-500 cursor-pointer">eCommerce</p>
                        <p className="w-48 text-base  text-gray-500 cursor-pointer">Inventory Management</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Marketing & Loyalty</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Advanced Reporting</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Accounting</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Hardware</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Integrations</p>
                    </div>
                    <div className="mt-10">
                        <div className="w-full h-0.5 bg-gray-300" />
                        <p className="mt-5 text-base  text-gray-900">PRICING</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between xl:w-56 h-full">
                    <div className="flex flex-col space-y-5 items-start justify-start xl:w-56">
                        <h4 className="text-base font-bold leading-normal text-gray-900">ECOMMERCE</h4>
                        <p className="w-1/2 text-base  text-gray-500 cursor-pointer">Instant Site</p>
                        <p className="w-24 text-base  text-gray-500 cursor-pointer">Facebook</p>
                        <p className="w-24 text-base  text-gray-500 cursor-pointer">Instagram</p>
                        <p className="w-48 text-base  text-gray-500 cursor-pointer">TikTok</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Google</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Products & Inventory</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Marketing</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Payments</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Shipping</p>
                    </div>
                    <div className="mt-10">
                        <div className="w-full h-0.5 bg-gray-300" />
                        <p className="mt-5 text-base  text-gray-900">PRICING</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-56 h-full">
                    <div className="flex flex-col space-y-5 items-start justify-end w-56">
                        <h4 className="text-base font-bold leading-normal text-gray-900">RESTAURANT</h4>
                        <p className="w-1/2 text-base  text-gray-500 cursor-pointer">Point of Sale</p>
                        <p className="w-36 text-base  text-gray-500 cursor-pointer">Order Delivery</p>
                        <p className="w-40 text-base  text-gray-500 cursor-pointer">Order Anywhere</p>
                        <p className="w-48 text-base  text-gray-500 cursor-pointer">Advanced Insights</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Inventory</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Loyalty</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Payments</p>
                        <p className="w-3/4 text-base  text-gray-500 cursor-pointer">Accounting</p>
                        <p className="w-52 text-base  text-gray-500 cursor-pointer">Kitchen Display System</p>
                        <p className="w-52 text-base  text-gray-500 cursor-pointer">Customer Facing Display</p>
                        <p className="w-52 text-base  text-gray-500 cursor-pointer">Hardware</p>
                        <p className="w-52 text-base  text-gray-500 cursor-pointer">Integrations</p>
                    </div>
                    <div className="mt-10">
                        <div className="w-full h-0.5 bg-gray-300" />
                        <p className="mt-5 text-base  text-gray-900">PRICING</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsNav;
