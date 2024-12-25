/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { randomNumber } from "@/utils/randomGenerator";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
type IProps = {
  showContent: boolean;
};

// const youtubeLinks:string[] =[

//   "https://www.youtube.com/embed/9fKgwwuiFEk",
//   "https://www.youtube.com/embed/j4PehJKXpew"
// ]
export const SolDropDown = ({ showContent }: IProps) => {
  return (
    showContent && (
      <div className="absolute bg-white top-20 w-full z-[100] shadow-md border-t border-border-primary">
        <div className="flex justify-evenly  pl-24">
          <div className="flex flex-col py-8  gap-8">
            <p className="text-[1.25rem]  font-medium leading-[2rem] ">Who is Qataloog for</p>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 grid-rows-3">
              <li className="pl-2 text-[1rem]  leading-[1.875rem]">
                <Link to="/teachers" className="flex items-center  gap-2 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
                      stroke="#F4623A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Teachers, Professors &Instructors
                </Link>
              </li>
              <li className="pl-2 text-[1rem]  leading-[1.875rem]">
                <Link className="flex items-center  gap-2 font-medium" to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.5 12.5C8.5 12.5 9.8125 14 12 14C14.1875 14 15.5 12.5 15.5 12.5M14.75 7.5H14.76M9.25 7.5H9.26M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM15.25 7.5C15.25 7.77614 15.0261 8 14.75 8C14.4739 8 14.25 7.77614 14.25 7.5C14.25 7.22386 14.4739 7 14.75 7C15.0261 7 15.25 7.22386 15.25 7.5ZM9.75 7.5C9.75 7.77614 9.52614 8 9.25 8C8.97386 8 8.75 7.77614 8.75 7.5C8.75 7.22386 8.97386 7 9.25 7C9.52614 7 9.75 7.22386 9.75 7.5Z"
                      stroke="#F4623A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  University Or College
                </Link>
              </li>
              <li className="pl-2 text-[1rem]  leading-[1.875rem]">
                <Link className="flex items-center  gap-2 font-medium" to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.5 14.6667C8.5 15.9553 9.54467 17 10.8333 17H13C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12H11C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7H13.1667C14.4553 7 15.5 8.04467 15.5 9.33333M12 5.5V7M12 17V18.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#F4623A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  For Publishers
                </Link>
              </li>
              <li className="justify-self-start flex gap-2 text-[1rem] col-start-2 row-start-1 font-medium leading-[1.875rem]">
                <Link className="flex items-center  gap-2 font-medium" to="/tvet">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M20.334 19V16H7.33398C5.67713 16 4.33398 17.3431 4.33398 19M9.13398 22H17.134C18.2541 22 18.8141 22 19.242 21.782C19.6183 21.5903 19.9243 21.2843 20.116 20.908C20.334 20.4802 20.334 19.9201 20.334 18.8V5.2C20.334 4.07989 20.334 3.51984 20.116 3.09202C19.9243 2.71569 19.6183 2.40973 19.242 2.21799C18.8141 2 18.2541 2 17.134 2H9.13398C7.45383 2 6.61375 2 5.97201 2.32698C5.40753 2.6146 4.94858 3.07354 4.66096 3.63803C4.33398 4.27976 4.33398 5.11984 4.33398 6.8V17.2C4.33398 18.8802 4.33398 19.7202 4.66096 20.362C4.94858 20.9265 5.40753 21.3854 5.97201 21.673C6.61375 22 7.45383 22 9.13398 22Z"
                      stroke="#F4623A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  TVET
                </Link>
              </li>
              <li className="justify-self-start flex gap-2 text-[1rem] col-start-2 row-start-2 font-medium leading-[1.875rem]">
                <Link className="flex items-center  gap-2 font-medium" to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M4.83398 22V17M4.83398 7V2M2.33398 4.5H7.33398M2.33398 19.5H7.33398M13.334 3L11.5998 7.50886C11.3178 8.24209 11.1768 8.60871 10.9575 8.91709C10.7632 9.1904 10.5244 9.42919 10.2511 9.62353C9.94269 9.8428 9.57608 9.98381 8.84284 10.2658L4.33398 12L8.84285 13.7342C9.57608 14.0162 9.94269 14.1572 10.2511 14.3765C10.5244 14.5708 10.7632 14.8096 10.9575 15.0829C11.1768 15.3913 11.3178 15.7579 11.5998 16.4911L13.334 21L15.0682 16.4911C15.3502 15.7579 15.4912 15.3913 15.7105 15.0829C15.9048 14.8096 16.1436 14.5708 16.4169 14.3765C16.7253 14.1572 17.0919 14.0162 17.8251 13.7342L22.334 12L17.8251 10.2658C17.0919 9.98381 16.7253 9.8428 16.4169 9.62353C16.1436 9.42919 15.9048 9.1904 15.7105 8.91709C15.4912 8.60871 15.3502 8.24209 15.0682 7.50886L13.334 3Z"
                      stroke="#F4623A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  For High school
                </Link>
              </li>
            </ul>
          </div>
          <div className=" max-w-[20rem] py-8  flex flex-col  gap-4">
            <p className="text-[1.25rem]  font-medium leading-[2rem] ">Company</p>
            <ul className="flex flex-col  gap-2">
              <li className="pl-2 text-[1rem] flex flex-row gap-2  font-medium leading-[1.875rem]">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M4.66602 21L4.66602 4M4.66602 13H12.066C12.6261 13 12.9061 13 13.12 12.891C13.3082 12.7951 13.4611 12.6422 13.557 12.454C13.666 12.2401 13.666 11.9601 13.666 11.4V4.6C13.666 4.03995 13.666 3.75992 13.557 3.54601C13.4611 3.35785 13.3082 3.20487 13.12 3.10899C12.9061 3 12.6261 3 12.066 3H6.26602C5.70596 3 5.42594 3 5.21203 3.10899C5.02386 3.20487 4.87088 3.35785 4.77501 3.54601C4.66602 3.75992 4.66602 4.03995 4.66602 4.6V13ZM13.666 5H20.066C20.6261 5 20.9061 5 21.12 5.10899C21.3082 5.20487 21.4611 5.35785 21.557 5.54601C21.666 5.75992 21.666 6.03995 21.666 6.6V13.4C21.666 13.9601 21.666 14.2401 21.557 14.454C21.4611 14.6422 21.3082 14.7951 21.12 14.891C20.9061 15 20.6261 15 20.066 15H15.266C14.706 15 14.4259 15 14.212 14.891C14.0239 14.7951 13.8709 14.6422 13.775 14.454C13.666 14.2401 13.666 13.9601 13.666 13.4V5Z"
                      stroke="#F4623A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <span className="-translate-y-2">
                  <Link to="/about">About</Link>
                  <span className="text-text-sub inline-block text-[0.875rem] text-normal leading-[1.375rem]">
                    Learn about our story and our mission statement.
                  </span>
                </span>
              </li>
              <li className="pl-2 text-[1rem] flex flex-row gap-2  font-medium leading-[1.875rem]">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M21.6666 11.5C21.6666 16.1944 17.861 20 13.1666 20C12.0898 20 11.0598 19.7998 10.1118 19.4345C9.93844 19.3678 9.85177 19.3344 9.78285 19.3185C9.71506 19.3029 9.66599 19.2963 9.59648 19.2937C9.5258 19.291 9.44826 19.299 9.29318 19.315L4.17216 19.8444C3.68392 19.8948 3.43979 19.9201 3.29579 19.8322C3.17036 19.7557 3.08494 19.6279 3.06219 19.4828C3.03609 19.3161 3.15274 19.1002 3.38605 18.6684L5.02171 15.6408C5.15641 15.3915 5.22376 15.2668 5.25427 15.1469C5.2844 15.0286 5.29168 14.9432 5.28204 14.8214C5.27229 14.6981 5.21819 14.5376 5.10999 14.2166C4.82246 13.3636 4.66662 12.45 4.66662 11.5C4.66662 6.80558 8.4722 3 13.1666 3C17.861 3 21.6666 6.80558 21.6666 11.5Z"
                      stroke="#F4623A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="-translate-y-2">
                  <NavLink to="/press" className="pointer-events-none">
                    Press
                  </NavLink>
                  <span className="text-text-sub inline-block text-[0.875rem] text-normal leading-[1.375rem]">
                    News and writings, press releases, and press resources.
                  </span>
                </span>
              </li>
              <li className="pl-2 text-[1rem] flex flex-row gap-2  font-medium leading-[1.875rem]">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M22.666 21V19C22.666 17.1362 21.3912 15.5701 19.666 15.126M16.166 3.29076C17.6319 3.88415 18.666 5.32131 18.666 7C18.666 8.67869 17.6319 10.1159 16.166 10.7092M17.666 21C17.666 19.1362 17.666 18.2044 17.3615 17.4693C16.9556 16.4892 16.1769 15.7105 15.1967 15.3045C14.4617 15 13.5298 15 11.666 15H8.66602C6.80225 15 5.87037 15 5.13528 15.3045C4.15517 15.7105 3.37647 16.4892 2.9705 17.4693C2.66602 18.2044 2.66602 19.1362 2.66602 21M14.166 7C14.166 9.20914 12.3752 11 10.166 11C7.95688 11 6.16602 9.20914 6.16602 7C6.16602 4.79086 7.95688 3 10.166 3C12.3752 3 14.166 4.79086 14.166 7Z"
                      stroke="#F4623A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <span className="-translate-y-2">
                  <NavLink to="/careers">Careers</NavLink>

                  <span className="text-text-sub inline-block text-[0.875rem] text-normal leading-[1.375rem]">
                    We’re always looking for talented people. Join our team!
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className=" pl-5 pr-16 py-8 bg-gray-50">
            <div className="min-w-[17rem] flex flex-col  gap-2">
              <iframe
                width="360"
                height="240"
                src="https://www.youtube.com/embed/9fKgwwuiFEk"
                title="YouTube video player"
                allowFullScreen
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
              <h4 className="leading-[1.625rem] font-semibold">Watch video</h4>
              <p className="text-text-sub text-[0.875rem] max-w-[17rem]">
                Check out the all new dashboard view. Pages now load faster.
              </p>
              <small className="flex gap-2 text-brand-primary items-center">
                <span className="mr-2 ">
                  <FaPlayCircle />
                </span>{" "}
                Watch video
              </small>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
