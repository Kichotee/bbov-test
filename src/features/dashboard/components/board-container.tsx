import { Deals, LeadStatus } from "@/types";
import { Board } from "./board";
import { DealsProvider } from "@/provider/deals-context";
import { useState } from "react";
import { useDeals } from "@/hooks/useDeals";
type IProps = {
  cards: Deals[];
};

const BoardContainer = ({ cards }: IProps) => {
  const leadStatuses = [
    "Lead Generated",
    "Contacted",
    "Application Submitted",
    "Application Under Review",
    "Deal Finalized",
    "Payment Confirmed",
    "Completed",
    "Lost",
  ];
  const leadGeneratedCards = cards.filter((deal) => {
    return deal.stage === "Lead Generated";
  });
  const { editDeal} = useDeals();

  const [target, setTarget] = useState({ cId: 0, bId: "" });

  const handleDragEnter = (cId:number, bId:LeadStatus) => {

    
    setTarget({
      cId,
      bId,
    });
  };
  const handleDragEnd = (cId:number, bId:LeadStatus) => {
    let cardIndex;
    console.log(bId)
    // eslint-disable-next-line prefer-const
    cardIndex = cards.findIndex((item,i) => {
      
      return i === cId;
    });
    // console.log(cId,cardIndex)
    const tempCards= [...cards];

    
    tempCards[cardIndex].stage=bId;

    editDeal(tempCards[cardIndex])

    
  };
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4 overflow-x-auto min-h-[20rem]">
        {leadStatuses.sort().map((data, i) => {
          return (
            <Board
            dragEnter={handleDragEnter}
            dragEnd={handleDragEnd}
              title={data}
              cards={cards.filter((card) => {
                return card.stage === data;
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BoardContainer;
