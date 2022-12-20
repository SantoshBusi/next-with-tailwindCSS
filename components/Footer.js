import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./Icons";

const Footer = () => {
  return (
    <footer>
      <div className="container px-3 footer mx-auto my-12 sm:my-20">
        <div className="border-t-2 border-[#E4E7EC] max-w-[1434px] mx-3"></div>

        <div className="my-8 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5">
          <div className="mt-5">
            <p className="font-chivo font-normal text-md text-darkBlack">
              Contact
            </p>
            <ul>
              <Link href="#">
                <li className="h-[75px]">CW Suite LLC</li>
              </Link>
              <Link href="tel:(239) 555-0108">
                <li>(239) 555-0108</li>
              </Link>
              <Link href="mailto: contact@agon.com">
                <li>contact@agon.com</li>
              </Link>
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-chivo font-normal text-md text-darkBlack">
              About Us
            </p>
            <ul className="text-base ff-inter text-blueshade1">
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Mission & Vision
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Our Team
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Careers
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Press & Media
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Advertising
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Testimonials
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-chivo font-normal text-md text-darkBlack">
              Discover
            </p>
            <ul className="text-base ff-inter text-blueshade1">
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Our Blog
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Plans & Pricing
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Knowledge Base
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Cookie Policy
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Office Center
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  News & Events
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-chivo font-normal text-md text-darkBlack">
              Support
            </p>
            <ul className="text-base ff-inter text-blueshade1">
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  FAQs
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Editor Help
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Community
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Live Chatting
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Contact Us
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Support Center
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-5">
            <p className="font-chivo font-normal text-md text-darkBlack">
              Useful links
            </p>
            <ul className="text-base ff-inter text-blueshade1">
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Request an offer
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  How it works
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Pricing
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Reviews
                </li>
              </Link>
              <Link href="#">
                <li className="mt-[10px] transition-all ease-in duration-200 hover:text-blue">
                  Stories
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-[#E4E7EC] max-w-[1434px] mx-3"></div>
        <div className="mt-8 sm:mt-14 grid md:grid-cols-2 ">
          <div className="flex lg:block justify-center lg:justify-start">
            <div className="flex justify-between max-w-[603px]">
              <Link
                href="#"
                className="font-inter font-bold text-base text-[#98A2B3] mx-2 lg:mx-0 hidden lg:block"
              >
                ©Agon Official 2022
              </Link>
              <Link
                href="#"
                className="font-inter font-normal text-base text-[#98A2B3] mx-2 lg:mx-0"
              >
                Privacy policy
              </Link>
              <Link
                href="#"
                className="font-inter font-normal text-base text-[#98A2B3] mx-2 lg:mx-0"
              >
                Cookies
              </Link>
              <Link
                href="#"
                className="font-inter font-normal text-base text-[#98A2B3] mx-2 lg:mx-0"
              >
                Terms of service
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:mt-0 mt-5 lg:justify-end">
            <div className="flex justify-between max-w-[188px]">
              <a className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer">
                <FacebookIcon />
              </a>
              <a className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer">
                <InstagramIcon />
              </a>
              <a className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer">
                <TwitterIcon />
              </a>
              <a className="mx-2 transition-all duration-200 ease-in hover:-translate-y-[6px] cursor-pointer">
                <LinkedinIcon />
              </a>
            </div>
          </div>
          <span
            href="#"
            className="font-inter font-bold text-base text-[#98A2B3] text-center mt-4 lg:hidden"
          >
            ©Agon Official 2022
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
