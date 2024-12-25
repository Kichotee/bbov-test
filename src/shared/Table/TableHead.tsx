import React from "react";
import { TableHeaderProps } from "./types";
import { cva } from "class-variance-authority";
// import { classVariable } from "@/utils/classUtils";

export const tableHeadVariants = cva(
  " bg-neutral-white text-neutral-black dark:text-slate-900 hover:bg-slate-700 font-medium capitalize",
  {
    variants: {
      sizes: {
        default: "",
      },
    },
  }
);

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ children, className, sizes, ...props }, ref) => {
    return (
      <thead
        data-testid="shared-table-head"
        ref={ref}
        className={ ` bg-neutral-white text-neutral-black dark:text-slate-900 hover:bg-slate-700 font-medium capitalize ${className}` }
        {...props}
      >
        {children}
      </thead>
    );
  }
);

TableHead.displayName = "TableHead";

export default TableHead;
