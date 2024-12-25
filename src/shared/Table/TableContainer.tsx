import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { cva } from "class-variance-authority";
import { ITableContainerProps } from "./types";
// import { classVariable } from "@/utils/classUtils";

export const tableContainerVariant = cva(
  "grid bg-neutral-white relative text-neutral-black dark:text-slate-900  min-w-full overflow-y-auto ",
  {
    variants: {
      sizes: {
        default: "",
      },
    },
  }
);

const TableContainer = React.forwardRef<HTMLDivElement, ITableContainerProps>(
  ({ children, sizes, className, ...props }, ref) => {
    return (
      <div
        data-testid="shared-table-container"
        ref={ref}
        className={`rounded ${ className }`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TableContainer.displayName = "TableContainer";

export default TableContainer;
