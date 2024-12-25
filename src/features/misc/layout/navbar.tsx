import React from "react";
import { NavLink } from "react-router-dom";
import { FaCaretDown, FaCaretUp, FaBars, FaXmark } from "react-icons/fa6";
import Button from "@/shared/Buttons/Button";
import { SolDropDown } from "../components/solutionsDropDown";
import { DropDown } from "@/shared/Dropdown/drop-down";
import LanguageSwitcher from "../components/languageSwitch";
// import { Login } from "@/features/auth/routes/Login";
// import { LoginModal } from "@/features/auth/components/login";

const qataloogDropdownContent = [
  { href: "/teachers", label: "Teachers, Professors & Instructors" },
  { href: "/", label: " University Or College" },
  { href: "/publishers", label: "For Publishers" },
];
const companyDropdownContent = [
  { href: "/about", label: "About" },
  { href: "/", label: "Press " },
  { href: "/careers", label: " Careers" },
];

const LandingHeader = () => {
  const [showDropDown, setShowDropDown] = React.useState<boolean>(false);
  const [showSolutions, setShowSolutions] = React.useState<boolean>(false);
  // const [isOpen, setIsOpen] = React.useState(false)

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const toggleSolutions = () => {
    setShowSolutions(!showSolutions);
  };
  return (
    <div className="fixed min-w-full bg-white z-[200]">
      <div className="w-full border-b shadow overflow-hidden border-gray-100 md:pl-[6rem] md:pr-[6rem] pl-[1.5rem] pr-[1.5rem] text-text-main py-[1.25rem] flex lg:justify-center justify-between items-center">
        <div className="basis-1/2  ">
          <NavLink to="/">
            <img src="/qataloog.png" alt="" className="w-3/4 md:w-[12rem] " />
          </NavLink>
        </div>
        {!showDropDown ? (
          <nav
            className="flex-row hidden   duration-300 md:flex md:static 
         gap-[1rem]"
          >
            <ul className="flex gap-[1.45rem] md:flex-row flex-col">
              <li>
                <Button
                  onClick={() => {
                    return toggleSolutions();
                  }}
                  className="font-medium flex items-center gap-2"
                  variant="text"
                >
                  Solutions <span>{showSolutions ? <FaCaretDown /> : <FaCaretUp />}</span>
                </Button>
              </li>

              <li>
                <Button className="font-medium" variant="text">
                  Pricing
                </Button>
              </li>

              <li>
                <Button className="font-medium" variant="text">
                  Start Free Trial
                </Button>
              </li>
            </ul>
            <NavLink to="/login">
              <Button className="font-medium text-white" variant="contained" themeColor="main">
                Sign in
              </Button>
            </NavLink>

            <LanguageSwitcher />
          </nav>
        ) : (
          <nav
            data-toggled={Boolean(showDropDown)}
            className="md:flex-row flex-col duration-300 
        flex md:static absolute w-full md:w-auto data-[toggled=true]:bg-white data-[toggled=false]:hidden
        data-[toggled=true]:top-24 px-4 py-2 md:px-0 md:py-0 data-[toggled=true]:right-0 
        z-10  gap-[2rem] pb-4 shadow-md"
          >
            <ul className="flex gap-[1rem] text-[0.875rem] md:flex-row flex-col">
              <li className="pl-4">
                <DropDown
                  labelStyle="text-[0.675rem] font-normal leading-4"
                  links={qataloogDropdownContent}
                  buttonText="Who is Qataloog for?"
                />
              </li>

              <li>
                <Button className="font-medium" variant="text">
                  Pricing
                </Button>
              </li>

              <li>
                <Button className="font-medium" variant="text">
                  Start Free Trial
                </Button>
              </li>
              <li className="pl-4">
                <DropDown
                  labelStyle="text-[0.675rem] font-normal leading-4"
                  links={companyDropdownContent}
                  buttonText="Company"
                />
              </li>
            </ul>

            <NavLink to="/login">
              <Button className="font-medium text-white" variant="contained" themeColor="main">
                Sign in
              </Button>
            </NavLink>
          </nav>
        )}
        <div className="md:hidden">
          {!showDropDown ? (
            <FaBars
              onClick={() => {
                return toggleDropDown();
              }}
            />
          ) : (
            <FaXmark
              onClick={() => {
                return toggleDropDown();
              }}
            />
          )}
        </div>
      </div>
      <SolDropDown showContent={showSolutions} />
    </div>
  );
};

export default LandingHeader;
