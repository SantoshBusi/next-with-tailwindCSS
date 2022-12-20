import React, { useState } from "react";

const MobileProductsNav = () => {
    const [isShowRetail, setShowRetail] = useState(false);
    const [isShowEcommerce, setShowEcommerce] = useState(false);
    const [isShowResturant, setShowResturant] = useState(false);

    return (
        <>
            <div className="text-center my-3">
                <h4 className="text-base font-bold leading-normal text-gray-900 mb-3" onClick={() => setShowRetail(!isShowRetail)}>
                    RETAIL
                    {isShowRetail && (
                        <div>
                            <p className="text-base  text-gray-500 cursor-pointer mb-1">Point of Sale</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Payments</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">eCommerce</p>
                            <p className="w-48 text-base  text-gray-500 cursor-pointer mb-1">Inventory Management</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Marketing & Loyalty</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Advanced Reporting</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Accounting</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Hardware</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Integrations</p>
                        </div>
                    )}
                </h4>
                <h4 className="text-base font-bold leading-normal text-gray-900 mb-3" onClick={() => setShowEcommerce(!isShowEcommerce)}>
                    {" "}
                    ECOMMERCE
                    {isShowEcommerce && (
                        <div>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Instant Site</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Facebook</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Instagram</p>
                            <p className="text-base  text-gray-500 cursor-pointer mb-1">TikTok</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Google</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Products & Inventory</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Marketing</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Payments</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Shipping</p>
                        </div>
                    )}
                </h4>

                <h4 className="text-base font-bold leading-normal text-gray-900 mb-3" onClick={() => setShowResturant(!isShowResturant)}>
                    RESTAURANT{" "}
                    {isShowResturant && (
                        <div>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Point of Sale</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Order Delivery</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Order Anywhere</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Advanced Insights</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Inventory</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Loyalty</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Payments</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Accounting</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Kitchen Display System</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Customer Facing Display</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Hardware</p>
                            <p className=" text-base  text-gray-500 cursor-pointer mb-1">Integrations</p>
                        </div>
                    )}
                </h4>
            </div>
        </>
    );
};

export default MobileProductsNav;
