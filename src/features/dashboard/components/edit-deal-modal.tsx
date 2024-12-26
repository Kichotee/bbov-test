/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useDeals } from "@/hooks/useDeals";
import ModifiedDialog from "@/shared/Dialog/ModifiedDialog";
import ControlledOutlineInput from "@/shared/Input/controlledOutlineInput";

type Props = {
  open: boolean;
  onClose: () => void;

};
export const EditDealModal = ({ open, onClose,   }: Props) => {
  const { deals, editDeal } = useDeals();
  const [searchParams] = useSearchParams();
  const deal = deals?.find((x) => {
    return x.id == Number(searchParams.get("id")!);
  });
  const defaultValues = useMemo(() => {
    console.log(deal)
    return {
      product: deal?.product,
      description: deal?.description,
      client: deal?.client,
      stage: deal?.stage,
    };
  }, [deal]);

 
  const { control, getValues, reset } = useForm({
    defaultValues,
  });
  useEffect(() => {
    if (deal) {
      reset(defaultValues);
    }
  }, [deal, reset]);
  const updateDeal=()=>{
    editDeal( {...deal,
        product: getValues("product") ?? defaultValues.product!,
        client:getValues("client") ?? defaultValues.client!,
        description:getValues("description"),
        stage:getValues("stage") ?? defaultValues.stage!,
        id:Number(searchParams.get("id")!),
        created:deal?.created as number
    } )
    toast.success("Deal updated")
    onClose()
  }

  return (
    <ModifiedDialog  open={open} onClose={onClose} actionText="Edit" onAction={updateDeal}>
      <div className="flex flex-col gap-2 ">
        <ControlledOutlineInput 
          defaultValue={deal?.product}
        
        control={control} name="product" fullWidth label="Product" />
        <ControlledOutlineInput
          control={control}
          defaultValue={deal?.client}
          name="client"
          fullWidth
          label="Client"
        />
        <ControlledOutlineInput
          control={control}
          defaultValue={deal?.description}

          name="description"
          fullWidth
          label="Description"
        />
        <ControlledOutlineInput 
          defaultValue={deal?.stage}
        
        control={control} name="stage" fullWidth label="Pipeline Stage" />
      </div>
    </ModifiedDialog>
  );
};
