import { useSearchParams } from "react-router-dom";
import { useDeals } from "@/hooks/useDeals";
import ModifiedDialog from "@/shared/Dialog/ModifiedDialog";
import { getColorScheme } from "@/utils/color-scheme";
import { LeadStatus } from "@/types";

type Props = {
  open: boolean;
  onClose: () => void;
};
export const ViewDeal = ({ open, onClose }: Props) => {
  
  const [searchParams] = useSearchParams();
  const { deals } = useDeals();
  const deal = deals?.find((x) => {
    // eslint-disable-next-line eqeqeq, @typescript-eslint/no-non-null-assertion
    return x.id == Number(searchParams.get("id")!);
  });
  return (
    <ModifiedDialog onClose={onClose} actionText="Close" onAction={onClose} open={open}>
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">{deal?.product}</h2>
            <p className="text-text-sub text-sm">{deal?.client}</p>
        </div>
        <div className="flex gap-3 text-sm items-start text-text-sub/80 ">
            <p className="max-w-lg ">
                {deal?.description}
            </p>
            <div className="flex gap-2 items-center">
                <div className={`${getColorScheme(deal?.stage as LeadStatus)} w-2 h-2 rounded-full`} />
                <p className={`  !bg-transparent`}>{deal?.stage}</p>
            </div>
        </div>
      </div>
    </ModifiedDialog>
  );
};
