import React from "react";
import { FaCaretDown } from "react-icons/fa6";
import { initials } from "@/utils/initials";
// import { DropDown } from "../Dropdown/DropDown";

type AvatarProps = {
  src?: string;
  name: string;
};

const Avatar = ({ src, name }: AvatarProps) => {
  return (
    <div className="items-center cursor  flex">
      <div className=" w-8 h-8 flex items-center justify-center rounded-full  bg-gray-200">
        {src ? <img alt="" className="rounded-[50%] w-8 h-8 object-cover" src={src} /> : <div>{initials(name)}</div>}
      </div>
      {/* <FaCaretDown /> */}
      {/* <DropDown/> */}
    </div>
  );
};

export default Avatar;
