/* eslint-disable arrow-body-style */
import React from "react";
import { useTranslation } from "react-i18next";
const LibraryFeatures = () => {
  const [imageState, setImageState] = React.useState<number>(0);
  const { t } = useTranslation();
  const switchImage = (val: number) => {
    setImageState(val);
  };
  const textImageData = [
    {
      heading: "Data-Driven learning",
      text: "Real-time learning intelligence from actual study behaviour of your students that enables you track learning content that works.",
      imageLink: "/slide_image_1.png",
    },
    {
      heading: "In app reader",
      text: "Create your own reading selections. Find local and foreign e-texts, videos, and audiobooks from leading content brands.",
      imageLink: "/slide_image_2.png",
    },
    {
      heading: "Robust e-reader",
      text: "Interactive e-reader to highlight, make notes, record audio, search and look up words or phrases and create bookmarks as you learn.",
      imageLink: "/slide_image_3.png",
    },
    {
      heading: "No limits, read on the go",
      text: "Personalised library on your smartphone, tablet, or computer, and even offline. so you never carry, lose or damage your titles.",
      imageLink: "/slide_image_4.png",
    },
    {},
  ];
  return (
    <div className="pt-[6rem] flex flex-col px-8 items-center ">
      <h3 className="nd:max-w-[48rem] md:text-[1.875rem] text-xl font-semibold md:leading-[2.5rem] text-center">
        {t("features_header")}
      </h3>
      <div className=" max-w-[80rem] md:mt-[4rem] mt-8 md:px-[2rem] gap-[4rem] flex flex-row ">
        <ul className={`"basis-1/2 mt-4 h-max" `}>
          {textImageData.map((data, index) => (
            <li key={(data.text?.length as number) + 1}>
              <button
                onClick={() => {
                  switchImage(index);
                }}
                className={`"flex flex-col text-left gap-4  border-l-2 px-4 py-2" ${
                  imageState === index ? "border-brand-primary" : "border-border-primary "
                }`}
              >
                <h4 className="leading-[2em] text-[1.25rem] font-semibold ">{data.heading}</h4>
                <p className="text-[1rem] text-text-sub max-w-[32rem] leading-[1.625rem]">
                  {data.text}
                </p>
              </button>
            </li>
          ))}
        </ul>
        <div className="basis-1/2 hidden md:block relative">
          <img
            src={textImageData[imageState].imageLink}
            alt=""
            className={`"max-w-[32rem]" ${
              imageState === 3 ? "translate-x-[6rem] w-full right-0" : ""
            } `}
          />
        </div>
      </div>
    </div>
  );
};

export default LibraryFeatures;
