/* eslint-disable react/jsx-no-useless-fragment */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React from "react";
import { UserState } from "@/features/auth/store/userSlice";

type IRequireAuthProps = {
  children: React.ReactNode;
};

const RequireAuth = ({ children }: IRequireAuthProps) => {
  const { user } = useSelector((state: UserState) => {
    return state.user;
  });
  // console.log(user, isLoggedIn)

  const isAuthorized = user;

  // return isAuthorized ? <div className="">{children}</div> : <Navigate to="/" />;
  return <>{children}</>;
};

export default RequireAuth;
