import React from "react";
export const LandingBanner = () => {
  return (
    <div className="">
      <div className="bg-brand-tertiary md:pl-[7.1rem]  md:pr-24 py-8 px-8 md:py-[6rem]">
        <div className="flex gap-[0.5625rem] items-center text-white justify-center">
          <p className="text-text-offWhite leading-[2.75rem] tracking-[-0.045rem] md:text-[2.25rem]">
            video content from
          </p>
          <img
            className="w-8 h-4 translate-y-[0.05rem]  md:h-4 md:translate-y-0 md:w-auto"
            alt="boclips logo"
            src="/boclips-logo.png"
          />
        </div>
        <div className="flex justify-between mt-4 items-center">
          <img className="w-16 md:w-auto" src="/pbs.png" alt="" />
          <img className="w-16 md:w-auto" src="/sh.png" alt="" />
          <img className="w-16 md:w-auto" src="/sci.png" alt="" />
          <img className="w-16 md:w-auto" src="/ted.png" alt="" />
          <img className="w-16 md:w-auto" src="/bloomberg.png" alt="" />
        </div>
      </div>
    </div>
  );
};
