import React from "react";
import { TableRowProps } from "./types";
import { cva } from "class-variance-authority";
import { classVariable } from "@/utils/classUtils";

export const tableRowVariants = cva(
  " bg-neutral-white text-neutral-black dark:text-slate-900 hover:bg-[#fafbfd] cursor-pointer mb-1 border-b  ",
  {
    variants: {
      sizes: {
        default: "",
      },
    },
  }
);

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, sizes, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={`bg-neutral-white text-sm  text-neutral-black dark:text-slate-900  hover:bg-[#fafbfd]  cursor-pointer mb-1 border-b   ${className}`}
        {...props}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = "TableRow";

export default TableRow;
