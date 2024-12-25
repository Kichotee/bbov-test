import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "@/shared/Buttons/Button";
import InputBase from "@/shared/Input/InputBase";
export const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-wrap gap-8 md:gap-0 px-8 md:px-16 py-4 border-border-primary justify-between">
        <div className="">
          <img src="/qataloog.png" alt="" className="w-1/4 md:max-w-[16rem]" />
          <p className="max-w-[24rem] pt-8  leading-[1.625rem] text-[1rem] font-normal text-text-sub">
            Content sharing that drives active learning and builds community. Data-driven insights
            to optimize learner experiences in real-time.
          </p>
        </div>
        <div className="flex md:ml-[5.75rem] gap-8 text-text-main">
          <div className="flex  flex-col gap-4">
            <p className="text-brand-primary text-[0.875rem] font-semibold leading-[1.375rem]">
              Product
            </p>
            <ul className="flex flex-col gap-2">
              <li className="max-w-[13rem] font-normal md:font-medium leading-[1.625rem]">
                <Link target="top" to="/teachers">
                  Teachers, Professors & Instructors
                </Link>
              </li>
              <li className="max-w-[13rem] font-normal md:font-medium leading-[1.625rem]">
                <NavLink target="top" to="/">
                  University or College
                </NavLink>
              </li>
              <li className="max-w-[13rem] font-normal md:font-medium leading-[1.625rem]">
                <NavLink target="top" to="/">
                  For Publishers
                </NavLink>
              </li>
              <li className="max-w-[13rem] font-normal md:font-medium leading-[1.625rem]">
                <NavLink target="top" to="/tvet">
                  Tvet
                </NavLink>
              </li>
              <li className="max-w-[13rem] font-normal md:font-medium leading-[1.625rem]">K12</li>
            </ul>
          </div>
          <div className="flex  flex-col gap-4">
            <p className="text-brand-primary text-[0.875rem] font-medium md:font-semibold leading-[1.375rem]">
              Resources
            </p>
            <ul className="flex flex-col gap-2">
              <li className="max-w-[13rem] font-normal md:font-medium leading-[1.625rem]">
                <NavLink target="top" to="/pricing">
                  Pricing
                </NavLink>
              </li>
              <li className="max-w-[13rem] font-normal md:font-medium leading-[1.625rem]">
                <NavLink target="top" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="max-w-[13rem] font-normal md:font-medium leading-[1.625rem]">
                <NavLink target="top" to="/privacy">
                  Privacy Policy
                </NavLink>
              </li>
              <li className="max-w-[13rem] font-normal md:font-medium leading-[1.625rem]">
                <NavLink target="top" to="/termsandconditions">
                  Terms and Condition
                </NavLink>
              </li>
              <li className="max-w-[13rem] font-normal md:font-medium leading-[1.625rem]">
                Teachers
              </li>
            </ul>
          </div>
        </div>
        <div className="flex  flex-col gap-4">
          <p className="text-[0.875rem] text-brand-primary text-center font-medium md:font-semibold leading-[1.375rem]">
            Stay up to Date
          </p>
          <div className="flex items-center gap-8">
            {/* <input placeholder='Enter your Email' type="search" className='border-border-primary border-2 rounded focus:outline-none focus:border-border-primary' name="" id="" /> */}
            <InputBase variant="" sizes="x" fullWidth={false} />

            <Button variant="contained" themeColor="dark">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t px-8 md:px-16 py-8 md:py-4 flex md:flex-row gap-4 flex-col-reverse items-center justify-between">
        <p className="text-sm">© 2023 Qataloog. All rights reserved.</p>
        <ul className="text-text-sub flex gap-4">
          <li className="">
            <FaFacebook size={24} />
          </li>
          <li>
            <FaTwitter size={24} />
          </li>
          <li>
            <FaInstagram size={24} />
          </li>
          <li>
            <FaYoutube size={24} />
          </li>
        </ul>
      </div>
    </footer>
  );
};
