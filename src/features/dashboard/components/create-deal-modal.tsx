/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { useDeals } from "@/hooks/useDeals";
import ModifiedDialog from "@/shared/Dialog/ModifiedDialog";
import ControlledOutlineInput from "@/shared/Input/controlledOutlineInput";
import ModifiedControlledSelect from "@/shared/Select/ControlledSelect";
import { LeadStatus } from "@/types";

type Props = {
  open: boolean;
  onClose: () => void;
};
export const CreateDeal = ({ open, onClose }: Props) => {
  const { deals, addDeals } = useDeals();

  const products = deals?.map((data) => {
    return data.product;
  });
  const clients = deals?.map((data) => {
    return data.client;
  });

  const { control, getValues, reset } = useForm({});

  useEffect(() => {
    reset();
  }, [reset]);

  const createDeal = () => {
    addDeals({
      product: getValues("product") as string,
      client: getValues("client") as string,
      description: getValues("description") as string,
      stage: "Lead Generated" as LeadStatus,
      id: Math.random() * 1000,
      created: Date.now() as number,
    });
    toast.success("Deal updated");
    onClose();
  };
 
  return (
    <ModifiedDialog open={open} onClose={onClose} actionText="Add Deal" onAction={createDeal}>
      <div className="flex flex-col gap-2 ">
        <ModifiedControlledSelect
          options={[...new Set(products)]?.map((data) => {
            return {
              label: data,
              value: data,
            };
          })}
          control={control}
          name="product"
          label="Product"
        />
        <ModifiedControlledSelect
          options={[...new Set(clients)]?.map((data) => {
            return {
              label: data,
              value: data,
            };
          })}
          control={control}
          name="client"
          label="Client"
        />

        <ControlledOutlineInput
          control={control}
          name="description"
          fullWidth
          label="Description"
        />
        <ModifiedControlledSelect
          defaultValue="Lead Generated"
          options={[{
            label: "Lead Generated",
            value:"Lead Generated"
          }]}
          control={control}
          disabled
          name="stage"
          label="Pipeline Stage"
        />
      </div>
    </ModifiedDialog>
  );
};
