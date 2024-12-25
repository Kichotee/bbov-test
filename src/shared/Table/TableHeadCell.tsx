import React from "react";
import { TableHeaderCellProps } from "./types";
import { cva } from "class-variance-authority";
import { classVariable } from "@/utils/classUtils";

export const tableHeadCellVariants = cva(
  " bg-neutral-white text-neutral-black dark:text-slate-900",
  {
    variants: {
      sizes: {
        default: "",
      },
    },
  }
);

const TableHeadCell = React.forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ children, className, sizes, ...props }, ref) => {
    return (
      <th
        ref={ref}
        className={classVariable(tableHeadCellVariants({ className, sizes }))}
        {...props}
      >
        {children}
      </th>
    );
  }
);

TableHeadCell.displayName = "TableHeadCell";

export default TableHeadCell;
