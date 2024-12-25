import React from "react";
import LandingHeader from "./layout/navbar";
import Button from "@/shared/Buttons/Button";
import { Footer } from "./layout/footer";
//import InputBase from '@/shared/Input/InputBase';

const Pricing = () => {
  const free: string[] = [
    "Limited access to Qataloog’s library of Millions of etextbooks, videos, and audiobooks",
    "Flexible pricing, no contract",
  ];

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
    <div>
      <LandingHeader />

      <div>
        <section className="flex flex-col items-center py-14">
          <div className="w-auto flex flex-col items-center gap-8 font-sans">
            <div>
              <h2 className="font-sans text-brand-primary text-xl font-medium md:text-3xl md:font-semibold">
                Pricing
              </h2>
            </div>

            <div className="-mt-28">
              <h1 className="pt-24 text-center font-sans leading-10 flex flex-col self-stretch text-3xl font-semibold md:text-6xl md:leading-[5rem]">
                All your learning needs for a little <br /> subscription
              </h1>
            </div>

            <div className="w-96 md:w-[50rem]">
              <p className="md:text-xl">
                We know your budget is a concern. Get unlimited access to all of your tailored
                learning content, at a pocket-friendly price that works for you. Choose a flexible
                monthly plan, or save money on an annual subscription.
              </p>
            </div>

            {/*  <div className='px-2 py-2 bg-[#F2F4F7] m-auto mt-5 md:mt-10 space-x-1 flex justify-center items-center rounded-lg'>
                        <Button variant='pricingToggle' themeColor='pricingToggle'>
                            Monthly billing
                        </Button> 
                        <Button variant='pricingToggle' themeColor='pricingToggle'>
                            Annual billing
                        </Button>
                    </div> */}
          </div>
        </section>

        <section className="mb-40">
          <div className=" flex flex-col  gap-8 w-96 mx-auto md:w-[81rem] md:flex md:flex-row md:gap-[4rem] md:mx-auto ">
            {/*card 1 */}
            <div className="bg-white  border-2 shadow-md rounded px-6 py-4 flex justify-between flex-col  gap-4 ">
              <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-[3rem]  gap-[1rem] font-semibold leading-[] tracking-[-0.05em]">
                  Free
                </h2>
                <p className="text-text-sub ">Billed monthly, cancel any time</p>
                <div className="flex flex-col justify-between gap-4">
                  {free.map((data) => {
                    return (
                      <div className="flex gap-2 justify-start max-w-[21rem]">
                        <div className="bg-green-100 text-green-900 w-6 h-6 grid place-items-center rounded-full">
                          &#x2713;
                        </div>
                        <p className="w-[21.1rem] leading-[1.625rem] text-text-sub">{data}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <Button
                className="justify-self-end translate-y-2 text-white"
                variant="contained"
                themeColor="main"
              >
                Start 7-day free trial
              </Button>
            </div>
            {/*card 2 */}
            <div className="bg-white   border-2 shadow-md rounded px-6 py-4 flex justify-between flex-col  gap-4 ">
              <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-[3rem]  gap-[1rem] font-semibold leading-[] tracking-[-0.05em]">
                  $6/Month
                </h2>
                <p className="text-text-sub ">Billed monthly, cancel any time</p>
                <div className="flex flex-col justify-between gap-4">
                  {monthly.map((data) => {
                    return (
                      <div className="flex gap-2 justify-start max-w-[21rem]">
                        <div className="bg-green-100 text-green-900 w-6 h-6 grid place-items-center rounded-full">
                          &#x2713;
                        </div>
                        <p className="w-[21.1rem] leading-[1.625rem] text-text-sub">{data}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <Button
                className="justify-self-end translate-y-2 text-white"
                variant="contained"
                themeColor="main"
              >
                Start 7-day free trial
              </Button>
            </div>
            {/*card 3 */}
            <div className="bg-white  border-2 shadow-md rounded px-6 py-4 flex justify-between flex-col  gap-4 ">
              <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-[3rem]  gap-[1rem] font-semibold leading-[] tracking-[-0.05em]">
                  $66/Yearly
                </h2>
                <p className="text-text-sub ">Billed monthly, cancel any time</p>
                <div className="flex flex-col justify-between gap-4">
                  {yearly.map((data) => {
                    return (
                      <div className="flex gap-2 justify-start max-w-[21rem]">
                        <div className="bg-green-100 text-green-900 w-6 h-6 grid place-items-center rounded-full">
                          &#x2713;
                        </div>
                        <p className="w-[21.1rem] leading-[1.625rem] text-text-sub">{data}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <Button
                className="justify-self-end translate-y-2 text-white"
                variant="contained"
                themeColor="main"
              >
                Start 7-day free trial
              </Button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center py-14 -mt-40">
          <div className="w-auto flex flex-col items-center justify-center  gap-8 font-sans">
            <div className="w-96 flex items-center justify-center md:w-[50rem]">
              <p className="md:text-xl">
                After your free trial, you will auto-enroll in your selected plan. <br /> Change or
                cancel anytime during your trial to not be charged.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
