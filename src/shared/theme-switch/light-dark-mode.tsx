/* eslint-disable react/jsx-no-bind */
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggle = () => {
  const theme = localStorage.getItem("theme");
  const [enabled, setEnabled] = useState(theme);
  function handleChange() {
    console.log(theme);
    if (theme === "theme-light") {
      localStorage.setItem("theme", "theme-dark");
      setEnabled("theme-dark");
      document.documentElement.classList.add("dark");

      // console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "theme-light");
      setEnabled("theme-light");
    }
  }
  return (
    <Switch
      checked={enabled == "theme-dark"}
      onChange={handleChange}
      className={`${
        enabled == "theme-light" ? "bg-slate-200 shadow   border-transparent" : "bg-slate-600"
      }
          relative inline-flex h-[22px] w-[44px] shrink-0  inset-0 cursor-pointer rounded-full border-2  transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${
          enabled == "theme-light" ? "translate-x-5 bg-white" : "translate-x-0.5 border shadow-sm"
        }
            pointer-events-none grid grid-cols-1 grid-rows-1 relative place-items-center bg-white h-[18px] w-[18px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
      >
        <BiSun
          className={`col-span-1 absolute  duration-300 ${
            enabled == "theme-light" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
        <BiMoon
          className={`col-span-1  duration-300 ${
            enabled == "theme-dark" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      </span>
    </Switch>
  );
};

export default ThemeToggle;
