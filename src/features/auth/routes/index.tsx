import React from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "@/features/dashboard/dashboard";
// import { Login } from "./";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<Dashboard />} />
    </Routes>
  );
};
