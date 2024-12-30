import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from "react-redux";
import store from "@/store";
import "@/config/i18n";
import { DealsProvider } from "./deals-context";
// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import { Toaster } from "react-hot-toast";

// import Layout from "@/layout/layout";
// const {user} = useSelector(state=>{return state.user})
interface AppProviderProviderProps {
  children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProviderProps) => {
  localStorage.setItem(
    "Deals",
    JSON.stringify([
      {
        id: Math.random() * 10000,
        client: "Luxury travelers",
        product: "Package deals",
        created: Date.now(),
        stage: "Lead Generated",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
      },
      {
        id: Math.round(Math.random() * 10000),
        client: "Business travelers ",
        product: "Last minute deals",
        created: Date.now(),
        stage: "Completed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
      },
      {
        id: Math.round(Math.random() * 10000),
        client: "Group travelers",
        product: "Group Discounts",
        created: Date.now(),
        stage: "Application Submitted",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
      },
      {
        id: Math.round(Math.random() * 10000),
        client: "Business travelers ",
        product: "Seasonal Promotions",
        created: Date.now(),
        stage: "Application Under Review",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
      },
      {
        id: Math.round(Math.random() * 10000),
        client: "Group travelers",
        product: "Group Discounts",
        created: Date.now(),
        stage: "Contacted",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
      },
      {
        id: Math.round(Math.random() * 10000),
        client: "Group travelers ",
        product: "Group Discounts",
        created: Date.now(),
        stage: "Lost",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
      },
      {
        id: Math.round(Math.random() * 10000),
        client: "Business Travelers",
        product: "Supplements",
        created: Date.now(),
        stage: "Payment Confirmed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
      },
      {
        id: Math.round(Math.random() * 10000),
        client: "Leisure Travelers",
        product: "Last minute deals",
        created: Date.now(),
        stage: "Deal Finalized",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
      },
    ])
  );
  return (
    <Provider store={store}>
      <Toaster />
      <Router>
        <DealsProvider>{children}</DealsProvider>
        {/* <Layout >

      </Layout> */}
      </Router>
    </Provider>
  );
};
