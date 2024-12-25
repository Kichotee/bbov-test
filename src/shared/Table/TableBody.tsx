/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { cva } from "class-variance-authority";
import { TableBodyProps } from "./types";
// import { classVariable } from "@/utils/classUtils";

export const tableBodyVariant = cva(" text-neutral-black dark:text-slate-900", {
  variants: {
    sizes: {
      default: "",
    },
  },
});

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, sizes, ...props }, ref) => {
    return (
      <tbody data-testid="shared-table-body" ref={ref} className={className} {...props}>
        {children}
      </tbody>
    );
  }
);

TableBody.displayName = "TableBody";

export default TableBody;
