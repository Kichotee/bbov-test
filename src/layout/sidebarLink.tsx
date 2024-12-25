// import classNames from "classnames";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from "styled-components";
import { Link, useLocation, LinkProps } from "react-router-dom";
// import { IRoleObject } from "@/utils/constants";

type ModifiedLinkProps = {
  isActive?: boolean;
  isChildren?: boolean;
} & LinkProps;

const StyledLink = styled(Link)<ModifiedLinkProps>`
  display: flex;
  height: 42px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  justify-content: flex-start;
  align-items: center;
  &:before {
    content: ".";
    position: "absolute";
    width: 5px;
    left: 0;
    top: 0;
    height: 42px;
    background-color: #78c2ed;
    display: ${(prop) => {
      return prop.isActive ? "block" : "none";
    }};
  }
`;

type ILink = {
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  // allowedRoles: IRoleObject[keyof IRoleObject][];
};
type ISidebarProps = {
  link: ILink;
};

function SidebarLink({ link }: ISidebarProps) {
  const { pathname } = useLocation();
  return (
    <StyledLink
      to={link.path}
      className={` ${
        pathname === link.path
          ? " border-brand-primary border rounded-md text-brand-primary/20"
          : `text-text-sub  rounded hover:bg-grey-100/10`
      }    flex items-center gap-4  duration-200   pl-8 py-2 text-[14px] leading-[150%] `}
    >
      <span className="">{link.icon}</span>
      <span className="hidden  lg:flex">{link.label}</span>
    </StyledLink>
  );
}

export default SidebarLink;
