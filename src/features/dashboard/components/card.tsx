import { useSearchParams } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { LeadStatus } from "@/types";

type Props = {
  // eslint-disable-next-line no-unused-vars
  dragStart: (id: number, sourceBoard: LeadStatus) => void;
  client: string;
  product: string;
  id: number;
  boardTitle: LeadStatus;
};
export const BoardCard = ({ dragStart, client, product, boardTitle, id }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const currentModal = searchParams.get("action");
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const openEditCard = (id: number) => {
    setSearchParams({ action: "edit", id: id.toString() });
  };
  return (
    <div
        draggable
        onDragEnter={() => {
          dragStart(id, boardTitle);
        }}
        // onDragEnd={() => {
        //   return dragEnd(card.id);
        // }}
        className="cursor-pointer w-full dark:bg-neutral-black bg-white py-2 px-3 relative z-10 flex rounded-md flex-col gap-2 lg:gap-3 border dark:border-slate-500 "
      >
        <div className="flex justify-between items-center">
          <h2 className="lg:text-xs text-[10px] leading-3  dark:text-white/80 text-text-sub">{client}</h2>
          <button
            onClick={() => {
              openEditCard(id);
            }}
          >
            <BiPencil className="text-text-sub dark:text-white/80" />
          </button>
        </div>
        <h2 className="lg:text-sm text-xs dark:text-white/80 text-text-main">{product}</h2>
      </div>
  );
};
