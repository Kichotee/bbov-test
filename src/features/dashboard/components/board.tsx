/* eslint-disable no-unused-vars */
import { Deals, LeadStatus } from "@/types";
import { getColorScheme } from "@/utils/color-scheme";

type Props = {
  title: LeadStatus;
  cards: Deals[];
  dragEnter: (cId: number, bId: LeadStatus) => void;
  dragEnd: (cId: number, bId: LeadStatus) => void;
};
export const Board = ({ title, cards, dragEnter, dragEnd }: Props) => {
  return (
    <div className="rounded-xl  border overflow-hidden h-full min-w-[16rem]">
      <div className={`rounded-t-xl ${getColorScheme(title)} py-4 px-3 bg- flex items-center`}>
        {title}
      </div>
      <div className="bg-white border-x px-2 py-2 overflow-y-auto border-b border-stroke flex flex-col gap-2.5 h-[20rem]">
        {cards.map((card, i) => {
          return (
            <div
              draggable
              onDragEnter={() => {
                dragEnter(i, card.stage);
              }}
              onDragEnd={() => {
                return dragEnd(i, card.stage);
              }}
              className="cursor-pointer py-2 px-3 flex rounded-md flex-col gap-3 border "
            >
              <h2 className="text-xs text-text-sub">{card.client}</h2>
              <h2 className="text-sm text-text-main">{card.product}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
