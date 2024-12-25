import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

import { Menu, Transition } from "@headlessui/react";
import i18n from "@/config/i18n";
// import { Language } from "./constants";
const lngs = {
  en: { nativeName: "english" },
  fr: { nativeName: "french" },
};
const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const lng = localStorage.getItem("language");
    if (lng) {
      setLanguage(lng);
    }
  }, [language]);

  const handleChange = (lng: string) => {
    setLanguage(lng);
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
    // console.log(lng)
  };
  const langKeys = Object.entries(lngs);
  return (
    <Menu>
      <div className="flex gap-4 items-center relative">
        <Menu.Button>
          <button>
            {language !== "en" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_1865_45653)">
                  <path
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                    fill="#F0F0F0"
                  />
                  <path
                    d="M19.9983 9.9991C19.9983 5.69945 17.2846 2.03402 13.4766 0.621094V19.3772C17.2846 17.9642 19.9983 14.2988 19.9983 9.9991Z"
                    fill="#D80027"
                  />
                  <path
                    d="M0 10.0011C0 14.3007 2.71379 17.9661 6.52176 19.3791V0.623047C2.71379 2.03598 0 5.70141 0 10.0011Z"
                    fill="#0052B4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1865_45653">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <img src="/flag_of_the_united_kingdom.svg" alt="" />
            )}
          </button>
        </Menu.Button>
        <Transition
          className="absolute top-2  bg-white -right-24 duration-300 gap-4 z-[200000]"
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="px-2 bg-white shadow-2xl gap-2 pb-2 flex flex-col ">
            {langKeys.map((lng) => {
              return (
                // <Menu.Button className="font-medium">{buttonText}</Menu.Button>
                <button
                  key={lng[0]}
                  type="submit"
                  className="flex "
                  onClick={() => {
                    return handleChange(lng[0]);
                  }}
                >
                  {lng[1].nativeName !== "english" ? (
                    <div className="flex gap-1  items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1865_45653)">
                          <path
                            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                            fill="#F0F0F0"
                          />
                          <path
                            d="M19.9983 9.9991C19.9983 5.69945 17.2846 2.03402 13.4766 0.621094V19.3772C17.2846 17.9642 19.9983 14.2988 19.9983 9.9991Z"
                            fill="#D80027"
                          />
                          <path
                            d="M0 10.0011C0 14.3007 2.71379 17.9661 6.52176 19.3791V0.623047C2.71379 2.03598 0 5.70141 0 10.0011Z"
                            fill="#0052B4"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1865_45653">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="text-xs">French</p>
                    </div>
                  ) : (
                    <div className="flex gap-1 items-center">
                      <img src="/flag_of_the_united_kingdom.svg" alt="" />
                      <p className="text-xs">English</p>
                    </div>
                  )}
                </button>
              );
            })}
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};

export default LanguageSwitcher;
