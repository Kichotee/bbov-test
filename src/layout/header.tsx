import React from "react";
import { BiBell } from "react-icons/bi";
import Avatar from "@/shared/Avatar/Avatar";
// import LanguageSwitcher from "@/features/misc/components/languageSwitch";
import ThemeToggle from "@/shared/theme-switch/light-dark-mode";

const Header = () => {


  return (
    <header className="sticky z-10 top-0 dark:bg-neutral-black bg-white h-16 base-theme-container flex items-center border-b border-gray-200 justify-between">
      {/* left side */}
      <div className=" w-full flex gap-4 justify-between items-center">
     
        <input
          type="search"
          
          className="border-none dark:bg-neutral-black  border-border-primary min-w-[45%] py-2  !outline-none px-3 placeholder:dark:text-white/80"
          placeholder="What are you looking for?"
        />
        <div className="flex gap-3 items-center text-text-sub">

            <ThemeToggle/>
          <BiBell/>
          <div className="flex gap-2  border-l pl-4 items-center">
          <Avatar name="John doe"  src="/timi-3.png"/>
            
          </div>


        </div>
      </div>
      {/* right side */}
    </header>
  );
};

export default Header;
