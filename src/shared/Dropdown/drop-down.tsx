import React from "react";
import { Menu, Popover } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { FaEllipsisH } from "react-icons/fa";

interface ILinks {
  href: string;
  label: string;
}
type DropDownProps = {
  buttonText: string;
  links: ILinks[] | string;
  labelStyle?: string;
  buttonStyle?: string;
};

export const DropDown = ({ buttonText, links, labelStyle, buttonStyle }: DropDownProps) => {
  const [active, setActive] = React.useState<boolean>(true);
  const { t } = useTranslation();
  

  return (
    <Popover className="relative">
      <Popover.Button
        onClick={() => {
          return setActive(!active);
        }}
        className={`"font-medium outline-none flex justify-between  gap-2 items-center " ${buttonStyle}`}
      >
       <FaEllipsisH/>
      </Popover.Button>
      <Popover.Panel anchor="top" className="flex flex-col absolute gap-4 py-2 w-36 rounded-sm px-2 z-[1000] bg-white shadow left-0">
        {/* check if type is sring or  array */}
        {typeof links !== "string" ? (
          links.map((link) => {
            return (
              /* Use the `active` state to conditionally style the active item. */
              <div key={link.href + link.label}>
                <NavLink to={link.href} className={`${" text-black"} `}>
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
