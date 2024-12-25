/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import { VariantProps } from "class-variance-authority";
import React from "react";
import { tableRowVariants } from "./TableRow";
import { tableCellVariants } from "./TableCell";
import { tableHeadVariants } from "./TableHead";
import { tableFooterVariant } from "./TableFooter";
import { tableBodyVariant } from "./TableBody";
import { tableHeadCellVariants } from "./TableHeadCell";
import { tableVariant } from "./Table";
// import { IChildren } from "@/@types/baseInterface";
import { tableContainerVariant } from "./TableContainer";
import { OptionType } from "@/@types/baseInterface";

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariant> {}

export interface TableHeaderProps
  extends React.ThHTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableHeadVariants> {}
export interface TableHeaderCellProps
  extends React.TableHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableHeadCellVariants> {}

export interface TableFooterProps
  extends React.TableHTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableFooterVariant> {}

export interface TableBodyProps
  extends React.TableHTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableBodyVariant> {}

export interface TableRowProps
  extends React.TableHTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {}

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableCellVariants> {}

export type TableCaptionProps = React.TableHTMLAttributes<HTMLTableCaptionElement>;

export interface ITableContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableContainerVariant> {}


 export type   IDateSelectRangeProps = {
      created_at_before: Date | null | string;
      created_at_after: Date | null | string;
    };
    
export interface ITablePagination {
  count: number;
  rowsPerPageOptions: (number | string | OptionType)[];
  rowsPerPage: number;
  page: number;
  onPageChange: (event: unknown, value: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  colSpan: number;
}

export interface IModifiedSearchAndFIlter<
  P extends Record<string, string[] | string | IDateSelectRangeProps[] | Date[]>
> {
  tableParams?: ITablePagination;
  setTableParams: ITablePaginationFunction;
  options: Array<IModifiedOptionType<P>>;
  placeholder?: string;
  label?: string;
  filterLabel?: string;
  filterValue: P;
  onChangeFilter?: (value: P) => void;
}
