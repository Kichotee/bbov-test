import React from "react";
import { Menu, Popover } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaEllipsisH } from "react-icons/fa";

interface ILinks {
  href: string;
  label: string;
}
type DropDownProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  buttonText: string;
  links: ILinks[] | string;
  labelStyle?: string;
  buttonStyle?: string;
};

export const DropDown = ({  links, labelStyle, buttonStyle }: DropDownProps) => {
  const [active, setActive] = React.useState<boolean>(true);
  const { t } = useTranslation();
  

  return (
    <Popover className="relative z-50">
      <Popover.Button
        onClick={() => {
          return setActive(!active);
        }}
        className={`"font-medium outline-none relative z-50 flex justify-between  gap-2 items-center " ${buttonStyle}`}
      >
       <FaEllipsisH/>
      </Popover.Button>
      <Popover.Panel  className="flex flex-col absolute -top-20 left-10 lg:-top-20 gap-2 lg:gap-4 py-2 lg:w-36 w-24  px-2 z-[1000] dark:bg-[#1d1d1d] dark:border dark:border-slate-600 rounded bg-white shadow lg:-left-24 ">
        {/* check if type is sring or  array */}
        {typeof links !== "string" ? (
          links.map((link) => {
            return (
              /* Use the `active` state to conditionally style the active item. */
              <div key={link.href + link.label} className="hover:underline duration-200">
                <NavLink to={link.href} className={`${" text-black text-xs font-semibold  dark:text-white/80"} `}>
                  {link.label}
                </NavLink>
              </div>
            );
          })
        ) : (
          <Menu.Item className={`${labelStyle || ""}`} as="article">
            {t(links)}
          </Menu.Item>
        )}
      </Popover.Panel>
    </Popover>
  );
};
