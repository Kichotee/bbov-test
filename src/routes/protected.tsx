import React from "react";
import { lazyImport } from "@/utils/lazyImport";

const { AuthRoutes } = lazyImport(() => {
  return import("@/features/auth/routes");
}, "AuthRoutes");

export const publicRoutes = [
  {
    path: "/dashboard/*",
    element: <AuthRoutes />,
  },
];
