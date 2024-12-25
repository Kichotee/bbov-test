import React from "react";
import { TableFooterProps } from "./types";
import { cva } from "class-variance-authority";
import { classVariable } from "@/utils/classUtils";

export const tableFooterVariant = cva(
  " bg-neutral-white text-neutral-black dark:text-slate-900 hover:bg-slate-700   ",
  {
    variants: {
      sizes: {
        default: "",
      },
    },
  }
);

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ children, className, sizes, ...props }, ref) => {
    return (
      <tfoot
        data-testid="shared-table-foot"
        ref={ref}
        className={classVariable(tableFooterVariant({ className, sizes }))}
        {...props}
      >
        {children}
      </tfoot>
    );
  }
);

TableFooter.displayName = "TableFooter";

export default TableFooter;
