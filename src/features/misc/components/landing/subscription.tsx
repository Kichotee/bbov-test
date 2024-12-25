import React from "react";
import { FaCheck } from "react-icons/fa6";
import Button from "@/shared/Buttons/Button";
const LandingSubscription = () => {
  const monthly: string[] = [
    "Unlimited access to Qataloog’s library of Millions of etextbooks, videos, and audiobooks",
    "Set Interest of your core subject focus",
    "Create a group learning library and invite peers",
    "Save time with advanced search and reference features",
    "Offline reading and sync across devices",
    "Flexible pricing, no contract",
  ];
  const yearly: string[] = [
    "Unlimited access to curriculum-curated",
    "Unlimited access to Qataloog’s library of Millions of etextbooks, videos, and audiobooks",
    "flexible Payment",
    "Set Interest of your core subject focus",
    "Create a group learning library and invite peers",
    "Save time with advanced search and reference features",
    "Offline reading and sync across devices",
    "Multiple DRM-free eTexts or Video every month to keep",
    "Exclusive print discounts",
  ];

  return (
    <div className="md:pt-[6rem] pt-12 bg-[#F9FAFB] px-8   flex flex-col items-center">
      <div className="text-center pb-6 md:pb-0 ">
        <h2 className="md:text-[3rem] text-2xl font-semibold leading-[3.75rem] tracking-[-0.05em] ">
          All <span className="text-brand-primary">{`${"  Content "}`}</span> needs for a little
          subscription
        </h2>
        <p className="text-text-sub md:text-[1.25rem] leading-4  ">
          Unlimited access to curriculum-curated content from the leading publishers
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-8 md:pt-[12rem] ">
        <div className="bg-white shadow-md rounded md:px-6 px-4  py-2 pb-4 md:py-4 flex justify-between flex-col  gap-4 ">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="md:text-[3rem] text-2xl  gap-[1rem] font-semibold leading-[] tracking-[-0.05em]">
              $6/month
            </h2>
            <p className="text-text-sub md:text-md text-sm">Billed monthly, cancel any time</p>
            <div className="flex flex-col justify-between gap-3 md:gap-4">
              {monthly.map((data) => {
                return (
                  <div
                    key={data}
                    className="flex gap-2 justify-start max-w-[14rem] md:max-w-[21rem]"
                  >
                    <div className="bg-green-100  w-6 h-6 grid place-items-center rounded-full">
                      <FaCheck />
                    </div>
                    <p className="md:w-[21.1rem] w-[14rem] text-sm leading-[1.625rem] text-text-sub">
                      {data}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <Button
            className="justify-self-end mx-2 md:translate-y-2 text-white"
            variant="contained"
            themeColor="main"
          >
            Start 7-day free trial
          </Button>
        </div>
        <div className="bg-white shadow-md rounded md:px-6 px-4 py-2 pb-4 flex flex-col justify-between gap-4 ">
          <div className="flex flex-col gap-[1rem] items-center">
            <h2 className="md:text-[3rem]  text-2xl  font-semibold leading-[] tracking-[-0.05em]">
              $66/year
            </h2>
            <div className="">
              <p className="text-text-sub text-sm">Billed yearly, cancel any time</p>
              <p className="text-success-500 text-center">(Save 8+%) monthly</p>
            </div>
            <div className="flex flex-col justify-between gap-3 md:gap-4">
              {yearly.map((data) => {
                return (
                  <div
                    key={data}
                    className="flex gap-2 justify-start items-center max-w-[18rem] md:max-w-[21rem]"
                  >
                    <div className="bg-green-100  w-6 h-6 grid place-items-center rounded-full">
                      <FaCheck />
                    </div>
                    <p className="md:w-[21.1rem] w-[14rem] text-sm leading-[1.625rem] text-text-sub">
                      {data}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <Button
            className="flex-end mx-2 md:translate-y-2  text-white"
            variant="contained"
            themeColor="main"
          >
            Start 7-day free trial
          </Button>
        </div>
      </div>

      <p className="max-w-[39.8rem] pt-[4.1rem] pb-[6rem] text-sm md:text-md text-center">
        After your free trial, you will auto-enroll in your selected plan.Change or cancel anytime
        during your trial to not be charged.
      </p>
    </div>
  );
};

export default LandingSubscription;
