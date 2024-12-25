import React from "react";

import { RouteObject, useRoutes } from "react-router-dom";
import { Landing } from "@/features/misc";
import { publicRoutes } from "./protected";
import Teachers from "@/features/misc/teachers";
import Privacy from "@/features/misc/privacy";
import Terms from "@/features/misc/terms";
import { Tvet } from "@/features/misc/tvet";
import Contacts from "@/features/misc/contact";
import Pricing from "@/features/misc/pricing";
import About from "@/features/misc/about";
import Careers from "@/features/misc/Careers/careers";
import RequireAuth from "@/shared/RequireAuth/require-auth";
import Layout from "@/layout/layout";
import { Login } from "@/features/auth/components/login";
import Dashboard from "@/features/dashboard/dashboard";
import { Signup } from "@/features/auth/components/signup";
import { SignupSuccess } from "@/features/auth/components/verify";


export default () => {
  // const auth = useAuth();
  const commonRoutes = [
    { path: "/", element: <Landing /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/login", element: <Login /> },
    { path: "/signup-successful", element: <SignupSuccess /> },
    { path: "/signup", element: <Signup /> },
    { path: "/teachers", element: <Teachers /> },
    { path: "/privacy", element: <Privacy /> },

    
  ];

  const routes = publicRoutes;
  const element = useRoutes([
    ...commonRoutes,
    ...routes.map((route: RouteObject) => {
      return {
        ...route,
        element: (
          <RequireAuth>
            <Layout>{route.element}</Layout>
          </RequireAuth>
        ),
      };
    }),
  ]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <> {element} </>;
};
