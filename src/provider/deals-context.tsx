/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useCallback, useState } from "react";
import { Deals, IChildren } from "@/types";
export type LeadStatus =
  | "Lead Generated"
  | "Contacted"
  | "Application Submitted"
  | "Application Under Review"
  | "Deal Finalized"
  | "Payment Confirmed"
  | "Completed"
  | "Lost";

interface DealsContextProps {
  deals: Deals[] | null;
  addDeals: (deal: Deals) => void;
  editDeal: (deal: Deals) => void;
  removeDeals: (deal: Deals) => void;
}

export const DealContext = createContext<DealsContextProps>({
  deals: [],
  addDeals: (deal: Deals) => {},
  editDeal: (deal: Deals) => {},
  removeDeals: (deal: Deals) => {},
});

export const DealsProvider = ({ children }: IChildren) => {
  const [deals, setDeals] = useState<Deals[]>([
    {
      id: Math.random() * 10000,
      client: "John stone Hotel",
      product: "John stone inventory",
      created: Date.now(),
      stage: "Lead Generated",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
    },
    {
      id: Math.round(Math.random() * 10000),
      client: "Noremic ",
      product: "SteelWorks product",
      created: Date.now(),
      stage: "Completed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
    },
    {
      id: Math.round(Math.random() * 10000),
      client: "John stone Hotel",
      product: "John stone inventory",
      created: Date.now(),
      stage: "Application Submitted",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
    },
    {
      id: Math.round(Math.random() * 10000),
      client: "Noremic ",
      product: "SteelWorks product",
      created: Date.now(),
      stage: "Application Under Review",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
    },
    {
      id: Math.round(Math.random() * 10000),
      client: "John stone Hotel",
      product: "John stone inventory",
      created: Date.now(),
      stage: "Contacted",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
    },
    {
      id: Math.round(Math.random() * 10000),
      client: "Noremic ",
      product: "SteelWorks product",
      created: Date.now(),
      stage: "Lost",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
    },
    {
      id: Math.round(Math.random() * 10000),
      client: "Prolife",
      product: "Supplements",
      created: Date.now(),
      stage: "Payment Confirmed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
    },
    {
      id: Math.round(Math.random() * 10000),
      client: "Traile",
      product: "SteelWorks product",
      created: Date.now(),
      stage: "Deal Finalized",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quis alias placeat, reiciendis eligendi eaque laborum ipsam eos enim laudantium voluptate nesciunt! Hic pariatur assumenda iste in eligendi voluptatem voluptatibus.",
    },
  ]);

  const pushDeal = (deal: Deals) => {
    setDeals((prev) => {
      return [deal, ...prev];
    });
  };
  const removeDeal = (oldDeal: Deals) => {
    setDeals((prev) => {
      return deals.filter((deal) => {
        return deal.id !== oldDeal.id;
      });
    });
  };
  const editDeal = (deal: Deals) => {
    setDeals((prev) => {
      // eslint-disable-next-line array-callback-return
      return prev.map((lead) => {
        // eslint-disable-next-line no-unused-expressions
        return lead.id === deal.id ? deal : lead;
      });
    });
  };

  const contextValue = {
    deals,
    addDeals: useCallback((deal: Deals) => {
      return pushDeal(deal);
    }, []),
    removeDeals: useCallback((deal: Deals) => {
      return removeDeal(deal);
    }, []),
    editDeal: useCallback((deal: Deals) => {
      return editDeal(deal);
    }, []),
  };

  return <DealContext.Provider value={contextValue}>{children}</DealContext.Provider>;
};
