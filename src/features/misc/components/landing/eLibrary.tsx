import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@/shared/Buttons/Button";

const LandingELibrary = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center pt-[6rem] flex flex-col px-12 md:px-0 items-center text-text-blue">
      <div className="">
        <p className="md:text-[3rem] text-[2rem] font-semibold md:leading-[3.75rem] tracking-[-0.06em] ">
          {t("Interactive-eLibrary")}
        </p>
        <p className="md:pt-[1.25rem] pt-3 md:text-[1.25rem] font-medium md:font-semibold max-w-[48rem] text-[#475467]">
          {t("library_sub_text")}
        </p>
        <Button variant="contained" themeColor="main" className="md:mt-[3rem] mt-6 py-4">
          {t("Start_free_Trial")}
        </Button>
      </div>

      <div className="border-text-main mt-[5.31rem] border-x-4 border-t-4 rounded-xl">
        <img src="/dashboard_image.png" alt="" />
      </div>
    </div>
  );
};

export default LandingELibrary;
