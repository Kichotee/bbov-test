import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "@/shared/Buttons/Button";
const listItems = [
  "Multilingual Support",
  "Digital Rights Management",
  "Small groups Library",
  "Learning plan automation",
  "Reminders, Notifications & Messaging",
  "Offline Synchronization",
];
const LandingFeedback = () => {
  return (
    <>
      <div className=" px-8 md:px-0 ">
        <div className="relative gap-4 text-center  flex-col items-center py-[4rem] flex   ">
          <p className="common-text px-8 text-text-blue">Every user has a story to tell</p>
          <div className="bg-[#F9FAFB] rounded-xl">
            <img alt="" src="twitter_feedback.png" />
          </div>
        </div>
      </div>
      <div className="px-8 md:ox-0">
        <div className="relative gap-4   text-center  flex-col items-center py-[4rem] flex   ">
          <p className="common-text text-text-blue">Save and Share</p>
          <p className="small-header-text pb-[2rem] pb-0 px-4 text-text-sub">
            Create highlights, notes, and bookmarks for later, and share{" "}
            <br className="hidden md:block" /> research with others
          </p>
          <Button className="mb-[4rem] md:md-8 text-white" themeColor="main" variant="contained">
            Start a free trial
          </Button>
          <div className="">
            <img alt="" src="pdfreader.png" />
          </div>
        </div>
      </div>
      <div className="px-8 md:px-[4rem] py-[6rem] ">
        <div className="md:pb-[8rem] pb-8">
          <h2 className="common-text text-text-blue ">Syllabus Focused</h2>
          <p className="max-w-[48rem] mt-[1.25rem] small-header-text text-text-sub">
            Includes localized content from leading professors and publishing brands, you are sure
            to grasp concepts easier and faster.
          </p>
        </div>
        <div className="flex relative items-center">
          <div>
            <ul className="flex gap-8 flex-col">
              {listItems.map((data) => {
                return (
                  <li
                    className="small-header-text flex gap-1 items-center md:gap-2 leading-[2rem]"
                    key={data}
                  >
                    <div className="px-2 py-2 txet-text-main md:text-base text-sm rounded-full bg-brand-primary/50">
                      <FaCheck size={16} />
                    </div>
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border-y-4 border-l-4 absolute hidden md:block -right-20 overflow-hidden border-text-main rounded-xl">
            <img src="/cobess_mockup.png" alt="" />
          </div>
        </div>
      </div>
      <div className="md:px-16 md:py-24 px-8 pb-16">
        <div className="min-w-full bg-brand-primary py-3 md:py-[3.01rem] rounded-xl px-2 md:px-4 text-white flex items-center justify-between">
          <p className="text-sm md:text-base">Start your 7-day free trial</p>
          <Button variant="contained" themeColor="dark" className="rounded text-sm md:text-base">
            Get started
          </Button>
        </div>
      </div>
    </>
  );
};

export default LandingFeedback;
