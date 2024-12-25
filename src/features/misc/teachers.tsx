import React from "react";
import { useTranslation } from "react-i18next";
import LandingHeader from "./layout/navbar";
import Button from "@/shared/Buttons/Button";
import { Footer } from "./layout/footer";

const Teachers = () => {

  const { t } = useTranslation()

  return (
    <div className="">
      <LandingHeader />

      {/* Hero container */}
      <section className="w-auto flex flex-col items-center gap-8     md:w-auto lg:w-auto">
        <div className="flex flex-col items-center gap-12 self-stretch">
          <div className="flex flex-col items-center gap-6 w-96 md:w-[60rem]">
            <div className="flex flex-col items-center justify-center gap-4 self-stretch">
              <h1 className="pt-24 text-center font-sans leading-10 flex flex-col self-stretch text-3xl font-semibold md:text-6xl md:leading-[5rem]">
                {t("Teachers-heading")}
              </h1>
              <div className="flex flex-col font-sans text-lg items-center font-medium   md:text-xl md:font-normal">
                <p>
                  {t("Teachers-heading-text")}
                </p>
              </div>
            </div>

            <Button
              variant="contained"
              themeColor="main"
              className="font-medium text-white flex w-[12rem] mt-4"
            >
              {t("Teachers-heading-cta")}
            </Button>
          </div>
        </div>
      </section>

      <section className="w-auto flex flex-col items-center gap-8 pt-8 mt-14     md:w-auto lg:w-auto">
        <div className="flex flex-col items-center justify-items-center md:flex md:flex-col md:items-center md:justify-center">
          <img
            src="/MacBook.png"
            alt=""
            className="h-48 md:h-96 md:flex md:flex-col md:items-center md:justify-center"
          />
          <img
            src="/screenMockup.png"
            alt=""
            className="w-96 -mt-[11.2rem]  md:w-[48rem] md:-mt-[22.4rem]"
          />
        </div>
      </section>

      <section className="w-auto flex flex-col items-center gap-8 pt-8 mt-14     md:w-auto lg:w-auto">
        <div className="flex flex-col items-center gap-12 self-stretch">
          <div className="flex flex-col items-center gap-6 w-96 md:w-[60rem]">
            <div className="flex flex-col items-center justify-center gap-4 self-stretch">
              <h1 className="text-center font-sans leading-10 flex flex-col self-stretch text-xl font-semibold md:text-6xl md:leading-[5rem]">
                {t("Teachers-hero-heading")}
              </h1>
              <div className="flex flex-col font-sans text-lg items-center font-medium   md:text-xl md:font-normal">
                <p>
                  {t("Teachers-hero-text1")}
                </p>
                <p>{t("Teachers-hero-text2")} </p>
              </div>
            </div>

            <div />
          </div>
        </div>
        {/*container div */}

        <div className="flex flex-col items-center w-96 md:flex md:flex-row md:w-[80rem] md:m-auto">
          {/*text div */}
          <div className="flex flex-col items-center justify-center md:items-start">
            <img
              src="./yellowIcon.svg"
              alt=""
              className="flex flex-col items-center justify-center mb-4"
            />
            <div className="flex flex-col items-center font-sans md:items-start">
              <h2 className="font-semibold md:text-3xl">{t("Group-library")}</h2>
              <p className="px-4 m-2 text-lg  md:px-0 md:m-0 md:mt-4 md:text-xl">
                {t("Group-library-text")}
              </p>
            </div>
          </div>

          {/*image div */}
          <div>
            <div className="mt-6 md:w-[30rem]">
              <img
                src="/yellow1.png"
                alt=""
                className="border-[1.5rem] border-[#FFC107] rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-96 md:flex md:flex-row-reverse md:gap-20 md:w-[80rem] md:m-auto">
          {/*text div */}
          <div className="flex flex-col items-center justify-center md:items-start">
            <img
              src="./greenIcon.svg"
              alt=""
              className="flex flex-col items-center justify-center mb-4"
            />
            <div className="flex flex-col items-center font-sans md:items-start">
              <h2 className="font-semibold md:text-3xl">
                {t("Create-lib-90")}
              </h2>
              <p className="px-4 m-2 text-lg  md:px-0 md:m-0 md:mt-4 md:text-xl">
                {t("Create-lib-90-text")}
              </p>
            </div>
          </div>

          {/*image div */}
          <div>
            <div className="mt-6 md:w-[30rem]">
              <img
                src="/green1.png"
                alt=""
                className="border-[1.5rem] border-[#27B3AA] rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-96 md:flex md:flex-row md:w-[80rem] md:m-auto">
          {/*text div */}
          <div className="flex flex-col items-center justify-center md:items-start">
            <img
              src="./blueIcon.svg"
              alt=""
              className="flex flex-col items-center justify-center mb-4"
            />
            <div className="flex flex-col items-center font-sans md:items-start">
              <h2 className="font-semibold md:text-3xl">
                {t("Create-lib-90")}
              </h2>
              <p className="px-4 m-2 text-lg   md:px-0 md:m-0 md:mt-4 md:text-xl">
                {t("Purple-text")}
              </p>
            </div>
          </div>

          {/*image div */}
          <div>
            <div className="mt-6 md:w-[30rem]">
              <img
                src="/blue1.png"
                alt=""
                className="border-[1.5rem] border-[#4C6FFF] rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-auto flex flex-col items-center gap-8 pt-8 mt-20  md:w-auto lg:w-auto">
        <div className="flex flex-col items-start w-96 gap-8 font-sans  md:w-[80rem]">
          <div>
            <h2 className="text-xl font-semibold md:leading-10 md:text-3xl">
              {t("Effect-teach")}
            </h2>
          </div>
          <div className="-mt-6">
            <p className="text-lg font-normal   md:text-xl">
              {t("Effect-teach-text")}
            </p>
          </div>
        </div>

        {/* Do the grid on the div below */}
        <div className="flex flex-col items-start w-96 gap-8 font-sans md:w-[80rem] md:flex md:flex-row">
          {/*text div */}
          <div className="flex flex-col items-center md:grid md:grid-rows-2 md:grid-flow-col md:gap-6 md:items-start">
            <div className="flex flex-col items-center mt-4 md:flex md:items-start">
              <img src="/yellowIcon.svg" alt="" />
              <div className="flex flex-col items-center md:flex md:items-start">
                <h3 className="font-semibold text-xl m-2"> {t("Grid-header-1")}  </h3>
                <p className="text-lg">
                  {t("Grid-text-1")}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center mt-4 md:flex md:items-start">
              <img src="/yellowIcon.svg" alt="" />
              <div className="flex flex-col items-center md:flex md:items-start">
                <h3 className="font-semibold text-xl m-2"> {t("Grid-header-2")}  </h3>
                <p className="text-lg">
                  {t("Grid-text-2")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-4 md:flex md:items-start">
              <img src="/yellowIcon.svg" alt="" />
              <div className="flex flex-col items-center md:flex md:items-start">
                <h3 className="font-semibold text-xl m-2">{t("Grid-header-3")}</h3>
                <p className="text-lg">
                  {t("Grid-text-3")}
                </p>
              </div>
            </div>
          </div>

          {/*image div */}
          <div className="md:mt-20 md:-mr-72 md:w-[200rem]">
            <img
              src="/screenMockup.png"
              alt=""
              className="border-4 border-black rounded-xl bg-cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Teachers;
