/* eslint-disable no-unused-vars */
import { type DragEvent } from "react";
import { BiPen, BiPencil } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import { Deals, LeadStatus } from "@/types";
import { getColorScheme } from "@/utils/color-scheme";
import { DragState } from "./board-container";
import { EditDealModal } from "./edit-deal-modal";
import { BoardCard } from "./card";

type Props = {
  title: LeadStatus;
  cards: Deals[];

  dragOver: (e: DragEvent, boradId: LeadStatus) => void;
  handleDrop: () => void;
  dragStart: (id: number, sourceBoard: LeadStatus) => void;
  dragState: DragState;
};
export const Board = ({ title, cards, dragStart, dragOver, handleDrop, dragState }: Props) => {
  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => {
        // console.log(dragState);
        return dragOver(e, title);
      }}
      className={`rounded-xl ${
        dragState.targetBoard == title && "bg-gray-300 z-50"
      } bg-white duration-500 border relative  overflow-hidden h-full min-w-[16rem]`}
    >
      <div className={`rounded-t-xl ${getColorScheme(title)} py-4 px-3 bg- flex items-center`}>
        {title}
      </div>
      <div className=" border-x px-4   py-2 overflow-y-auto  border-b border-stroke flex flex-col gap-2.5 h-[20rem]">
        {cards.map((card, i) => {
          return (
            <BoardCard
              dragStart={dragStart}
              client={card.client}
              product={card.product}
              boardTitle={title}
              id={card.id}
              key={card.id}
            />
          );
        })}
      </div>
    </div>
  );
};
