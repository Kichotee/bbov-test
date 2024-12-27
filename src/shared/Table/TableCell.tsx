/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { cva } from "class-variance-authority";
import { TableCellProps } from "./types";
// import { classVariable } from "@/utils/classUtils";

export const tableCellVariants = cva(
  " bg-transparent text-neutral-black dark:text-slate-900 py-3 px-2 first:px-3 last:px-3",
  {
    variants: {
      sizes: {
        default: "",
      },
    },
  }
);

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, className, sizes, width, ...props }, ref) => {
    return (
      <td
        data-testid="shared-table-cell"
        ref={ref}
        width={width}
        className={`bg-transparent text-neutral-black py-3 dark:!text-white max-h-6 px-2 first:px-3 last:px-3 ${className}`}
        {...props}
      >
        {children}
      </td>
    );
  }
);

TableCell.displayName = "TableCell";

export default TableCell;
