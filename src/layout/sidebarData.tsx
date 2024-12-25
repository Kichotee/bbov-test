import React from "react";
import { FaBook, FaCashRegister, FaCreditCard, FaHouse, FaUpload, FaVideo } from "react-icons/fa6";
import {PiFileArchive, PiLightning, PiUsers} from "react-icons/pi"
import { BiGridAlt } from "react-icons/bi"

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
    path: "/dahboard/home",
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
    key: "dashboard",
    label: "Dashboard",
    path: "/auth/",
    icon: <FaHouse size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Uploads",
    label: "Library",
    path: "/auth/library",
    icon: <FaBook size={18} />,
    allowedRoles: [0],
    visible: true,
  },

  {
    key: "Uploads",
    label: "Uploads",
    path: "/auth/uploads",
    icon: <FaUpload size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Upload media",
    label: "Upload media",
    path: "/auth/upload-media",
    icon: <FaVideo size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Earnings",
    label: "Earnings",
    path: "/auth/earnings",
    icon: <FaCashRegister size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Withdrawal",
    label: "Withdrawal",
    path: "/auth/withdrawal",
    icon: <FaCreditCard size={18} />,
    allowedRoles: [0],
    visible: true,
  },
 
];
