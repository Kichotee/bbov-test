/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { BiBell, BiX, BiXCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import Avatar from "@/shared/Avatar/Avatar";
// import LanguageSwitcher from "@/features/misc/components/languageSwitch";
import ThemeToggle from "@/shared/theme-switch/light-dark-mode";
import Sidebar from "./sidebar";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_TOOLS_LINKS } from "./sidebarData";
import SidebarLink from "./sidebarLink";
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <header className="lg:sticky relative md:px-7 px-2 w-full overflow-hidden z-50 top-0 dark:bg-neutral-black bg-white h-16 base-theme-container flex items-center border-b border-gray-200 justify-between">
      {/* left side */}
      <div className=" w-full flex gap-4 justify-between items-center">
        <span
          className="lg:hidden  text-text-main dark:text-warmGray-300 "
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        >
          <RxHamburgerMenu />
        </span>
        <input
          type="search"
          className="border-none dark:bg-neutral-black  border-border-primary min-w-[45%] py-2  !outline-none px-3 placeholder:dark:text-white/80"
          placeholder="What are you looking for?"
        />
        <div className="flex gap-3 items-center text-text-sub">
          <ThemeToggle />
          <BiBell />
          <div className="flex gap-2  border-l pl-4 items-center">
            <Avatar name="John doe" src="/timi-3.png" />
          </div>
        </div>
      </div>
     { <div className={`fixed  top-0 left-0 z-50 -translate-x-[100vw] duration-200 ${sidebarOpen && "translate-x-[0] mobile-nav "} min-h-[120vh]`}>
        <aside className="sticky top-0 left-0 border-b shadow-md  z-[100]   h-[100vh] bg-white dark:bg-neutral-black   w-[100vw] p-3 flex flex-col pl-8   items-start transition-all  duration-300">
          <div className="flex items-center  w-full justify-between gap-2 px-1 py-4  ">
            <h4 className="text-text-main font-semibold dark:text-white/80">Axis Travels</h4>
            <button onClick={()=>{
              setSidebarOpen(false)
            }}>
              <BiXCircle size={24} className="text-text-main"/>
            </button>
            {/* <img src="/qataloog.png" className="w-1/4 md:w-[10rem]" alt="" /> */}
          </div>
          <div className="py-8 w-full border-b ">
            <h4 className="px-3.5 text-xs pb-3 dark:text-white/80 text-text-sub uppercase">Menu</h4>
            <div className=" flex flex-col gap-1.5 ">
              {DASHBOARD_SIDEBAR_LINKS.map((link) => {
                if (link.visible) {
                  return <SidebarLink key={link.key} link={link} />;
                }
                // eslint-disable-next-line react/jsx-no-useless-fragment
                return <></>;
              })}
            </div>
          </div>
          <div className=" py-4 w-full">
            <h4 className="px-3.5 pb-3 text-xs text-text-sub uppercase">Tools</h4>
            <div className="flex flex-col gap-1.5 pt-2 ">
              {DASHBOARD_SIDEBAR_TOOLS_LINKS.map((link) => {
                return <SidebarLink key={link.key} link={link} />;
              })}
              {/* <div
              className={classNames(linkClass, "cursor-pointer text-red-500 hIAIln")}
              // onClick={() => handleLogout()}
              onClick={() => {
                removeToken(navigate);
              }}
            >
              <span className="text-[40px]">
                <LogOutIcon />
              </span>
              <span className="hidden lg:flex">Logout</span>
            </div> */}
            </div>
          </div>
        </aside>
      </div>}
      {/* right side */}
    </header>
  );
};

export default Header;
