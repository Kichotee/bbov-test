/* eslint-disable react/jsx-no-bind */
import { Switch } from "@headlessui/react";
import { useState } from "react";

const ThemeToggle = () => {
  const theme = localStorage.getItem("theme");
  const [enabled, setEnabled] = useState(theme);
  function handleChange() {
    if (theme === "theme-light") {
      localStorage.setItem("theme", "theme-dark");
      setEnabled("theme-dark");
      console.log(theme)
    } else {
      localStorage.setItem("theme", "theme-light");
      setEnabled("theme-light");
    }
  }
  return (
    <Switch
        checked={enabled == "theme-light"}
        onChange={handleChange}
        className={`${enabled == "theme-light" ? "bg-slate-100 shadow   border-transparent" : ""}
          relative inline-flex h-[22px] w-[44px] shrink-0  inset-0 cursor-pointer rounded-full border-2  transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled == "theme-light" ? "translate-x-5 bg-white" : "translate-x-0.5 bg-grey-100"}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
  );
};

export default ThemeToggle;
