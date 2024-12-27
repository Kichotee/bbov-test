import React from "react";
// import Header from "./Header";
import { useSelector } from "react-redux";
import Sidebar from "./sidebar";
import { UserState } from "@/features/auth/store/userSlice";

type ILayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: ILayoutProps) {
  const { user } = useSelector((state: UserState) => {
    return state.user;
  });

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        <div className=" w-full flex flex-row">
          <Sidebar />
          <div className="flex flex-col flex-1">
            {/* <Header /> */}
            <main className="flex-1 md:px-7 bg-white dark:bg-neutral-black  text-white sm:px-2 px-5 pt-2 h-[calc(100vh-70px)] overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      }
    </>
  );
}

export default Layout;
