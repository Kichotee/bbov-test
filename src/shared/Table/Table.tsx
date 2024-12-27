import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { cva } from "class-variance-authority";
import { TableProps } from "./types";
// import { classVariable } from "@/utils/classUtils";
import "./index.css";

export const tableVariant = cva(
  " bg-neutral-white text-neutral-black relative dark:text-slate-900 min-w-full table-border-spacing  ",
  {
    variants: {
      sizes: {
        default: "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        outlined:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        // link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        text: "bg-transparent text-black",
        contained: "bg-brand-primary",
      },
    },
  }
);

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, sizes, ...props }, ref) => {
    const sizeFn = (style = "default") => {
      switch (style) {
        case "default":
          return " bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900";

        case "outlined":
          return " bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100";

        case "text":
          return " bg-transparent text-black";
        case "contained":
          return "bg-brand-primary";

        default:
          break;
      }
    };
    return (
      <table ref={ref} className={`bg-neutral-white dark:bg-black rounded-md overflow-hidden shadow-none text-neutral-black relative dark:text-slate-900 min-w-full table-border-spacing  ${sizeFn(sizes!)} ${className} `} {...props}>
        {children}
      </table>
    );
  }
);

Table.displayName = "Table";

export default Table;
