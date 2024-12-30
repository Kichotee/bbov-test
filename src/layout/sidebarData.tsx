import React from "react";
import {LuDatabase} from "react-icons/lu"
import {BsBarChartLine, BsBookmark, BsMegaphone, BsTag} from "react-icons/bs"
import { PiGear,  PiUser} from "react-icons/pi"
import {CiLocationOn} from "react-icons/ci"
import {LiaLocationArrowSolid} from "react-icons/lia"
import {  BiGridAlt } from "react-icons/bi"

type SidebarLink = Array<{
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  allowedRoles: Array<number>;
  visible?: boolean;
}>;

export const DASHBOARD_SIDEBAR_LINKS: SidebarLink = [
  
  {
    key: "Deals",
    label: "Deals",
    path: "/dashboard/home",
    icon: <BiGridAlt size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Settings",
    label: "Settings",
    path: "/dashboard/settings/",
    icon: <PiGear size={18} />,
    allowedRoles: [0],
    visible: true,
  },

  {
    key: "profile",
    label: "profile",
    path: "/dashboard/Profile/",
    icon: <PiUser size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  // {
  //   key: "activity",
  //   label: "Activity",
  //   path: "/dashboard/home/",
  //   icon: <PiLightning size={18} />,
  //   allowedRoles: [0],
  //   visible: true,
  // },
 
 
];
export const DASHBOARD_SIDEBAR_TOOLS_LINKS: SidebarLink = [
  // {
  //   "menu":[{

  //   }]
  // },
  {
    key: "pipeline",
    label: "Pipeline",
    path: "/dashboard/home/",
    icon: <LuDatabase size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Sales",
    label: "Sales",
    path: "/dashboard/home/",
    icon: <BsTag size={18} />,
    allowedRoles: [0],
    visible: true,
  },

  {
    key: "Atlas",
    label: "Atlas",
    path: "/dashboard/home/",
    icon: <BsBookmark size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Finance",
    label: "Finance",
    path: "/dashboard/home/",
    icon: <BsBarChartLine size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Sendup",
    label: "Sendup",
    path: "/dashboard/home/",
    icon: <BsMegaphone size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Atlas",
    label: "Atlas",
    path: "/dashboard/home/",
    icon: <CiLocationOn size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Location",
    label: "Location",
    path: "/dashboard/home/",
    icon: <LiaLocationArrowSolid size={18} />,
    allowedRoles: [0],
    visible: true,
  },
 
];
