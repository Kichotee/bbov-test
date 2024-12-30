import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { useDeals } from "@/hooks/useDeals";
import ModifiedDialog from "@/shared/Dialog/ModifiedDialog";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const DeleteDealModal = ({ open, onClose }: Props) => {
  const { removeDeals, deals } = useDeals();

  const [searchParams] = useSearchParams();

  const deal = deals?.find((x) => {
    return x.id == Number(searchParams.get("id")!);
  });

  const deleteDeal = () => {
    removeDeals(deal!);
    toast.success("Deal deleted")
    onClose()
  };

  return (
    <ModifiedDialog
      onAction={deleteDeal}
      onSeconAction={onClose}
      open={open}
      onClose={onClose}
      actionText="Delete deal"
      title="Delete this deal"
      secActionText="Cancel"
    >

        <p className="lg:text-base text-sm text-center">
            Are you sure you want to delete this deal
        </p>
    </ModifiedDialog>
  );
};
