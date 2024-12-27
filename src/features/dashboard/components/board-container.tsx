import { useState } from "react";
import { Deals, LeadStatus } from "@/types";
import { Board } from "./board";
// eslint-disable-next-line no-unused-vars
import { DealsProvider } from "@/provider/deals-context";
import { useDeals } from "@/hooks/useDeals";
type IProps = {
  cards: Deals[];
};
export type DragState = {
  cardId: null | number;
  sourceBoard: null | LeadStatus;
  targetBoard: null | LeadStatus;
};
export const leadStatuses :LeadStatus[] = [
  "Lead Generated",
  "Contacted",
  "Application Submitted",
  "Application Under Review",
  "Deal Finalized",
  "Payment Confirmed",
  "Completed",
  "Lost",
];
const BoardContainer = ({ cards }: IProps) => {
  // const leadGeneratedCards = cards.filter((deal) => {
  //   return deal.stage === "Lead Generated";
  // });
  const { editDeal } = useDeals();

  const [dragState, setDragState] = useState<DragState>({
    cardId: null,
    sourceBoard: null,
    targetBoard: null,
  });

  const handleDragStart = (cardId: number, sourceBoard: LeadStatus) => {
    setDragState({
      cardId: cardId as number,
      sourceBoard,
      targetBoard: null,
    });
  };

  const handleDrop = () => {
    const { cardId, targetBoard } = dragState;

    if (!cardId || !targetBoard) return;

    const cardToUpdate = cards.find((card) => {
      return card.id === cardId;
    });
    if (cardToUpdate && cardToUpdate.stage !== targetBoard) {
      editDeal({
        ...cardToUpdate,
        stage: targetBoard,
      });
    }

    // Reset drag state
    setDragState({
      cardId: null,
      sourceBoard: null,
      targetBoard: null,
    });
  };

  const handleDragOver = (e: React.DragEvent, boardId: LeadStatus) => {
    e.preventDefault(); // This is crucial - enables dropping

    if (boardId !== dragState.targetBoard) {
      setDragState((prev) => {
        return {
          ...prev,
          targetBoard: boardId,
        };
      });
    }
  };
  // const handleDragEnter = (cId: number, bId: LeadStatus) => {

  //   setTarget({
  //     cId,
  //     bId,
  //   });
  // };
  // const handleDragEnd = (cId: number) => {
  //   let cardIndex;

  //   // eslint-disable-next-line prefer-const
  //   cardIndex = cards.findIndex((item, i) => {
  //     return item.id === cId;
  //   });
  //   console.log(cId, target?.bId);
  //   const tempCards = [...cards];

  //   tempCards[cardIndex].stage = target!.bId;

  //   editDeal(tempCards[cardIndex]);
  //   setTarget(null)
  //   console.log(tempCards[cardIndex].stage)
  // };
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto min-h-[20rem]">
        {leadStatuses.sort().map((data) => {
          return (
            <Board
              dragStart={handleDragStart}
              dragState={dragState}
              dragOver={handleDragOver}
              handleDrop={handleDrop}
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
