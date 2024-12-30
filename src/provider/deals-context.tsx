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
  const [deals, setDeals] = useState<Deals[]>(JSON.parse(localStorage.getItem("Deals") as string));

 

  const pushDeal = (deal: Deals) => {
    setDeals((prev) => {
      return [deal, ...prev];
    });
    localStorage.setItem("Deals", JSON.stringify(deals));
  };
  const removeDeal = (oldDeal: Deals) => {
    setDeals((prev) => {
      return deals.filter((deal) => {
        return deal.id !== oldDeal.id;
      });
    });
    localStorage.setItem("Deals", JSON.stringify(deals));
  };
  const editDeal = (deal: Deals) => {
    setDeals((prev) => {
      // eslint-disable-next-line array-callback-return
      return prev.map((lead) => {
        // eslint-disable-next-line no-unused-expressions
        return lead.id === deal.id ? deal : lead;
      });
    });
    localStorage.setItem("Deals", JSON.stringify(deals));
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
