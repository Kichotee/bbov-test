import React from "react";
import {LuDatabase} from "react-icons/lu"
import {BsBarChartLine, BsBookmark, BsMegaphone, BsTag} from "react-icons/bs"
import {PiFileArchive, PiLightning, PiUsers} from "react-icons/pi"
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
  // {
  //   "menu":[{

  //   }]
  // },
  {
    key: "home",
    label: "Home",
    path: "/dashboard/home",
    icon: <BiGridAlt size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "clients",
    label: "Clients",
    path: "/dashboard/clients",
    icon: <PiUsers size={18} />,
    allowedRoles: [0],
    visible: true,
  },

  {
    key: "centers",
    label: "Centers",
    path: "/dashboard/centers",
    icon: <PiFileArchive size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "activity",
    label: "Activity",
    path: "/auth/activity",
    icon: <PiLightning size={18} />,
    allowedRoles: [0],
    visible: true,
  },
 
 
];
export const DASHBOARD_SIDEBAR_TOOLS_LINKS: SidebarLink = [
  // {
  //   "menu":[{

  //   }]
  // },
  {
    key: "pipeline",
    label: "Pipeline",
    path: "/auth/pipeline",
    icon: <LuDatabase size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Sales",
    label: "Sales",
    path: "/auth/sales",
    icon: <BsTag size={18} />,
    allowedRoles: [0],
    visible: true,
  },

  {
    key: "Atlas",
    label: "Atlas",
    path: "/auth/atlas",
    icon: <BsBookmark size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Finance",
    label: "Finance",
    path: "/auth/finance",
    icon: <BsBarChartLine size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Sendup",
    label: "Sendup",
    path: "/auth/send-up",
    icon: <BsMegaphone size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Atlas",
    label: "Atlas",
    path: "/auth/atlas",
    icon: <CiLocationOn size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Location",
    label: "Location",
    path: "/auth/location",
    icon: <LiaLocationArrowSolid size={18} />,
    allowedRoles: [0],
    visible: true,
  },
 
];
