import React from "react";
import { useTranslation } from "react-i18next";
const LandingPartners = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:pl-[10.8rem] md:pl-[6rem] md:pr-[6rem] px-12  md:pt-[12.44rem] pt-[2rem] pb-[] md:mb-[4.5rem] ">
      <p className="small-header-text !text-[1rem] pt-[1.5rem] !font-normal text-center">
        {t("trusted by")}
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 pt-[1.5rem] gap-y-8">
        <img className="md:justify-self-start w-24 md:w-auto " src="/cobess.png" alt="" />
        <img
          className="md:justify-self-center  justify-self-end  w-24 md:w-auto"
          src="/lasu.png"
          alt=""
        />
        <img className="  w-24 md:w-auto -translate-y-0" src="/achievers.png" alt="" />
        <img
          className="md:justify-self-end justify-self-end  w-24 md:w-auto"
          src="/abia_poly.png"
          alt=""
        />
        <img className=" md:translate-y-2 md:col-start-2  w-24 md:w-auto" src="/nitda.png" alt="" />
        <img
          className="md:justify-self-center justify-self-end md:col-start-3  w-24 md:w-auto"
          src="/noc.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPartners;
