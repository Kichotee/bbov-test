import React from "react";

import { RouteObject, useRoutes } from "react-router-dom";
import { Landing } from "@/features/misc";
import { publicRoutes } from "./protected";

import RequireAuth from "@/shared/RequireAuth/require-auth";
import Layout from "@/layout/layout";



export default () => {
  // const auth = useAuth();
  const commonRoutes = [
    { path: "/", element: <Landing /> },
    // { path: "/dashboard", element: <Dashboard /> },
    // { path: "/login", element: <Login /> },
    // { path: "/signup-successful", element: <SignupSuccess /> },
    // { path: "/signup", element: <Signup /> },
    // { path: "/teachers", element: <Teachers /> },
    // { path: "/privacy", element: <Privacy /> },

    
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
