import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from "react-redux";
import store from "@/store";
import "@/config/i18n";
import { DealsProvider } from "./deals-context";

// import Layout from "@/layout/layout";
// const {user} = useSelector(state=>{return state.user})
interface AppProviderProviderProps {
  children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProviderProps) => {
  return (
    <Provider store={store}>
      <Router>
        <DealsProvider>{children}</DealsProvider>
        {/* <Layout >

      </Layout> */}
      </Router>
    </Provider>
  );
};
