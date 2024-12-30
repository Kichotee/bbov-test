import React from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "@/features/dashboard/dashboard";
import ProfileEdit from "@/features/profile/profileEdit";
import ProfileView from "@/features/profile/profileView";
// import { Login } from "./";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<Dashboard />} />
      <Route path="Settings" element={<ProfileEdit />} />
      <Route path="profile" element={<ProfileView />} />
    </Routes>
  );
};
