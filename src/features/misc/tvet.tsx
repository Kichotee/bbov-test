/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LandingHeader from "./layout/navbar";
import Button from "@/shared/Buttons/Button";
import { Footer } from "./layout/footer";
export const Tvet = () => {
  return (
    <div className="">
      <LandingHeader />
      <div className="pt-12">
        <div className="md:py-24  py-12 pl-[7.1rem] gap-6 flex flex-col items-center text-center pr-24">
          <p className="large-header-text">TVET shouldn’t be stressful</p>
          <p className="small-header-text max-w-[38rem] text-text-sub">
            Get frictionless access to learning and to quality lifelong skills to meet the needs of
            tomorrow's economy with Qataloog
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/students_tvet.png" alt="" />
        </div>
        <div className="py-24 pl-[7.1rem]  relative items-center flex">
          <div className="">
            <p className=" text-[2.25rem]  font-semibold leading-[2.75rem] tracking-[-0.045rem]">
              All the content you need for TVET curriculum-aligned training.
            </p>
            <p className="max-w-[30rem] mt-[1.5rem]  small-header-text text-text-sub absolute">
              Qataloog provides innovative digital solutions and professional development that make
              vocational education hassle-free.
            </p>
          </div>
          <img className="order-2" src="/mac_analytics-mockup.png" alt="" />
        </div>
        <div className=" text-center flex flex-col items-center gap-10 mb-[6rem]">
          <p className="max-w-[64.525rem]">
            We know that TVET is an essential driver of growth and employment, with support from
            partners, we have curated the best training content to help you succeed. Create a quick
            digital library from Qataloog’s wide range of TVET content from experts.
          </p>
          <div className="max-w-[64.525rem]">
            <Button variant="contained" className="text-white">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
