/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LandingHeader from "./layout/navbar";
import InputBase from "@/shared/Input/InputBase";
import { Footer } from "./layout/footer";
import Button from "@/shared/Buttons/Button";

const contactInfo = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_1868_12644)">
          <path
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="#F0F0F0"
          />
          <path
            d="M11.4805 11.9996H24.0022C24.0022 10.9165 23.8578 9.86725 23.5888 8.86914H11.4805V11.9996Z"
            fill="#D80027"
          />
          <path
            d="M11.4805 5.73787H22.2409C21.5063 4.53919 20.5671 3.47967 19.472 2.60742H11.4805V5.73787Z"
            fill="#D80027"
          />
          <path
            d="M12.0011 23.9993C14.8252 23.9993 17.421 23.0232 19.4709 21.3906H4.53125C6.58109 23.0232 9.17689 23.9993 12.0011 23.9993Z"
            fill="#D80027"
          />
          <path
            d="M1.76195 18.2594H22.2394C22.8291 17.2971 23.2865 16.2452 23.5873 15.1289H0.414062C0.714859 16.2452 1.17222 17.2971 1.76195 18.2594Z"
            fill="#D80027"
          />
          <path
            d="M5.55863 1.87397H6.65217L5.63498 2.61295L6.02353 3.80869L5.00639 3.0697L3.98925 3.80869L4.32487 2.7757C3.42928 3.52172 2.64431 4.39575 1.99744 5.36963H2.34783L1.70034 5.84002C1.59947 6.0083 1.50272 6.17925 1.41 6.35273L1.71919 7.30434L1.14234 6.88523C0.998953 7.18903 0.867797 7.49967 0.749906 7.81678L1.09055 8.86528H2.34783L1.33064 9.60427L1.71919 10.8L0.702047 10.061L0.0927656 10.5037C0.0317812 10.9939 0 11.4932 0 12H12C12 5.37262 12 4.59131 12 0C9.62944 0 7.41961 0.687656 5.55863 1.87397ZM6.02353 10.8L5.00639 10.061L3.98925 10.8L4.3778 9.60427L3.36061 8.86528H4.61789L5.00639 7.66955L5.39489 8.86528H6.65217L5.63498 9.60427L6.02353 10.8ZM5.63498 6.10861L6.02353 7.30434L5.00639 6.56536L3.98925 7.30434L4.3778 6.10861L3.36061 5.36963H4.61789L5.00639 4.17389L5.39489 5.36963H6.65217L5.63498 6.10861ZM10.3279 10.8L9.31073 10.061L8.29359 10.8L8.68214 9.60427L7.66495 8.86528H8.92223L9.31073 7.66955L9.69923 8.86528H10.9565L9.93933 9.60427L10.3279 10.8ZM9.93933 6.10861L10.3279 7.30434L9.31073 6.56536L8.29359 7.30434L8.68214 6.10861L7.66495 5.36963H8.92223L9.31073 4.17389L9.69923 5.36963H10.9565L9.93933 6.10861ZM9.93933 2.61295L10.3279 3.80869L9.31073 3.0697L8.29359 3.80869L8.68214 2.61295L7.66495 1.87397H8.92223L9.31073 0.678234L9.69923 1.87397H10.9565L9.93933 2.61295Z"
            fill="#0052B4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1868_12644">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    country: "USA",
    address: "8 The Green, Set R,Dover, DE 19901",
    email: "sales@qataloog.com",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_1870_58236)">
          <path
            d="M17.2165 1.19072C15.6389 0.427875 13.869 0 11.9991 0C10.1293 0 8.35939 0.427875 6.78177 1.19072L5.73828 12L6.78177 22.8093C8.35939 23.5721 10.1293 24 11.9991 24C13.869 24 15.6389 23.5721 17.2165 22.8093L18.26 12L17.2165 1.19072Z"
            fill="#FFDA44"
          />
          <path
            d="M11.998 7.82617L13.0339 11.0146H16.3868L13.6744 12.9854L14.7104 16.174L11.998 14.2033L9.28558 16.174L10.3218 12.9854L7.60938 11.0146H10.962L11.998 7.82617Z"
            fill="#496E2D"
          />
          <path
            d="M6.78262 1.19141C2.76872 3.13236 0 7.24278 0 12.0003C0 16.7577 2.76872 20.8682 6.78262 22.8091V1.19141Z"
            fill="#496E2D"
          />
          <path
            d="M17.2188 1.19141V22.8091C21.2327 20.8682 24.0014 16.7578 24.0014 12.0003C24.0014 7.24278 21.2327 3.13236 17.2188 1.19141Z"
            fill="#D80027"
          />
        </g>
        <defs>
          <clipPath id="clip0_1870_58236">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    country: "Senegal",
    address: "Point E, Rue Ambassades Immeuble Djaraf, DER Hub, Dakar",
    email: "sales@qataloog.com",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_1870_68157)">
          <path
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="#F0F0F0"
          />
          <path
            d="M0 11.9997C0 17.1593 3.2565 21.5578 7.82611 23.2533V0.746094C3.2565 2.44156 0 6.84013 0 11.9997Z"
            fill="#6DA544"
          />
          <path
            d="M24.0019 11.9997C24.0019 6.84013 20.7454 2.44156 16.1758 0.746094V23.2534C20.7454 21.5578 24.0019 17.1593 24.0019 11.9997Z"
            fill="#6DA544"
          />
        </g>
        <defs>
          <clipPath id="clip0_1870_68157">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    country: "Nigeria",
    address: "1A Akin Osiyemi Street, Allen AvenueIkeja - Lagos",
    email: "sales@qataloog.com",
  },
];

const Contacts = () => {
  return (
    <div className="">
      <LandingHeader />
      <div className="pb-24 md:pl-[6.8rem] md:pr-[6rem] pl-[1.5rem] pr-[1.5rem] ">
        <div className="flex flex-col items-center md:py-24 py-8 gap-[0.5rem] md:gap-[0.75rem]">
          <p className="text-brand-primary">Contact Us</p>
          <p className="md:text-[3rem] text-[1.5rem] text leading-[3.75rem]">
            We&apos;d love to hear from you
          </p>
          <p className="small-header-text  md:pt-[0.75rem] text-text-sub">
            Our friendly team is always here to chat.
          </p>
        </div>

        <div className="flex flex-col gap-8  md:flex-row justify-between">
          {contactInfo.map((data) => {
            return (
              <div
                key={data.country}
                className="flex shadow-md md:shadow-none py-4 flex-col gap-4 text-center items-center"
              >
                <div className="">{data.svg}</div>
                <div className=" basis-1/2">
                  <div className="">{data.country}</div>
                  <div className="text-text-sub max-w-[16rem]">{data.address}</div>
                </div>
                <div className="text-brand-primary">{data.email}</div>
              </div>
            );
          })}
        </div>
        <div className="py-16 md:py-24">
          <div className="flex flex-col items-center  md:gap-[0.75rem]">
            <p className="text-brand-primary">Contact Us</p>
            <p className="md:text-[3rem] text-[1.5rem] text leading-[2.75rem] md:[leading-[2.75rem]">
              Get in touch
            </p>
            <p className="small-header-text  md:pt-[0.75rem] text-text-sub">
              We'd love to hear from you
            </p>
          </div>

          <div className="px-4 py-8  max-w- gap-4 md:py-16 ">
            <form className="gap-4 mx-auto max-w-max  flex flex-col  w-full">
              <div className="flex md:gap-8 flex-col md:flex-row">
                <InputBase label="First name:" fullWidth className="px-8" />
                <InputBase label="Last name:" fullWidth className="px-8" />
              </div>
              <div className="flex  flex-col w-full">
                <label htmlFor="">Email</label>
                <input
                  placeholder="you@company.com"
                  className="border placeholder:text-neutral-bodyText border-border-primary py-2"
                  type="text"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-medium" htmlFor="">
                  Phone number
                </label>
                <input
                  placeholder="+1 (555) 000-0000"
                  className=" px-4 rounded-md border placeholder:text-neutral-bodyText border-border-primary py-2"
                  type="number"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-medium" htmlFor="">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Your message"
                  className=" px-4 rounded-md border placeholder:text-neutral-bodyText border-border-primary py-2"
                />
              </div>
              <div className="flex gap-2 ">
                <input type="checkbox" name="" className="border-border-primary px-2" id="" />
                <p>You agree to our friendly privacy policy.</p>
              </div>
              <Button variant="contained">Send message</Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
