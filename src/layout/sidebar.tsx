import React from "react";
import SidebarLink from "./sidebarLink";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_TOOLS_LINKS } from "./sidebarData";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 left-0 border-b shadow-md bg-white h-screen hidden w-[80px] p-3 sm:flex flex-col pl-8  lg:w-[256px] items-start transition-all duration-300">
      <div className="flex items-center gap-2 px-1 py-3  ">
        <h4>Axis Travels</h4>
        {/* <img src="/qataloog.png" className="w-1/4 md:w-[10rem]" alt="" /> */}
      </div>
      <div className="py-8 w-full border-b ">
      <h4 className="px-3.5 text-xs pb-3 text-text-sub uppercase">
          Menu
        </h4>
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
      <div className=" py-4">
        <h4 className="px-3.5 pb-3 text-xs text-text-sub uppercase">
          Tools
        </h4>
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
  );
};

export default Sidebar;
