import React from "react";
import { useSelector } from "react-redux";

import { UserState } from "@/features/auth/store/userSlice";
import Avatar from "@/shared/Avatar/Avatar";
import LanguageSwitcher from "@/features/misc/components/languageSwitch";
import ThemeToggle from "@/shared/theme-switch/light-dark-mode";
import { BiBell } from "react-icons/bi";

const Header = () => {
  const { user } = useSelector((state: UserState) => {
    return state.user;
  });

  return (
    <header className="sticky z-10 top-0 bg-white h-16 base-theme-container flex items-center border-b border-gray-200 justify-between">
      {/* left side */}
      <div className=" w-full flex gap-4 justify-between items-center">
     
        <input
          type="search"
          
          className="border-none border-border-primary min-w-[45%] py-2  !outline-none px-3"
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
