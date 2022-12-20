import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LeftArrow, ToggleIcon } from "./Icons";
import ProductsNav from "./ProductsNav";

const Navbar = ({ setSidebarOpen }) => {
  const [isShowProducts, setShowProducts] = useState(false);

  const yOffsetValue = typeof window !== "undefined" && window.pageYOffset;
  const [yOffset, setYOffset] = useState(yOffsetValue);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }

  return (
    <>
      <nav
        className={`px-3 xl:px-10   flex items-center bg-white py-3 justify-between ${
          visible && yOffset > 250 ? "top-0 sticky z-30 shadow-sm" : ""
        } transition-all duration-500 ease-linear`}
        onMouseLeave={() => setShowProducts(false)}
      >
        <div className="max-w-[90px] sm:max-w-[170px]">
          <Link href="/">
            <Image
              src="/images/cwsuite-logo.png"
              width={216}
              height={31}
              alt="LOGO"
            />
          </Link>
        </div>

        <ul className="ff-chivo text-sm hidden xl:flex items-center justify-between text-darkBlack">
          <li className="mx-5  transition-all duration-200 ease-in relative">
            <a href="">Home</a>
          </li>
          <li
            className="mx-5  transition-all duration-200 ease-in relative"
            onMouseOver={() => setShowProducts(true)}
          >
            <a href="">Products</a>
            {isShowProducts && <ProductsNav />}
          </li>
          <li className="mx-5  transition-all duration-200 ease-in relative">
            <a href="">Business Types</a>
          </li>
          <li className="mx-5  transition-all duration-200 ease-in relative">
            <a href="">Blog</a>
          </li>
          <li className="mx-5  transition-all duration-200 ease-in relative">
            <a href="">Contact</a>
          </li>
          <li className="mx-5  transition-all duration-200 ease-in relative ">
            <Link href="/pricing" passHref>
              {" "}
              Pricing
            </Link>
          </li>
        </ul>

        <div className="flex items-center">
          <Link
            href="/login"
            className="ff-chivo text-sm text-darkBlack mr-4 xl:mr-10 opacity-80 hidden sm:block"
          >
            {" "}
            Login
          </Link>

          <button className="bg-blue px-5 xl:px-8 py-3 xl:py-4 rounded-full  text-white text-base flex items-center free-trial-btn-hover  transition-all duration-200 ease-in hover:shadow-lg">
            Free Trial
            <LeftArrow />
          </button>

          <span
            className=" xl:hidden  cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            {" "}
            <ToggleIcon />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
