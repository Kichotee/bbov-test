import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from "react-i18next";

const LandingHero = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-12 ">
      <div className="  md:pt-[8rem] m:pb-[7rem] md:py-0 py-12 lg:flex md:pl-[6.8rem] pl-8 md:pr-[6rem] relative  z-[5]  ">
        <div className="">
          <p className="large-header-text max-w-[39.75rem]">
            <span className="text-brand-primary">{`${t("Content ")}`}</span>
            {t("header-text")}
            <span className="text-brand-primary">{`${t(" community.")}`}</span>
          </p>
          <p className="max-w-[39.75rem] small-header-text">{t("header-sub-text")}</p>
          {/* {t("Pre-school")} */}
        </div>
        <div className="lg:absolute top-[6rem] right-0   ">
          <img className="" src="/table.png" alt="" />
          <img className="absolute bottom-8 -left-20 scale-90 " src="/graph.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
