/* eslint-disable no-unused-vars */
import React from "react";
import { ITablePagination, ITablePaginationFunction } from "@/types/baseTableInterface";
import { MenuOption } from "@/shared/Menu/type";

export type PrimitiveType = string | number | boolean | Date | null | undefined;

export type RecurviePrimitiveType =
  | PrimitiveType
  | RecurviePrimitiveType[]
  | { [key: string]: RecurviePrimitiveType };

export type ITableLenType = string | number | null | boolean | Date;

export type RecuresiveTableType = Record<
  string,
  RecurviePrimitiveType | { [key: string | number]: RecuresiveTableType }
>;

// export type ITableContraint = Record<string, RecuresiveTableType>;
export type ITableContraint = RecuresiveTableType;

export type DataSourceObjType<P extends ITableContraint> = P;

export type TypeColumns<TField extends ITableContraint> = {
  dataIndex: string;
  title: string;
  filter: boolean;
  renderFilter?: React.ReactNode;
  sorter?: boolean;
  render?: (
    row: RecurviePrimitiveType,
    col?: DataSourceObjType<TField>,
    index?: number,
    onClick?: (_row: RecurviePrimitiveType, _col: DataSourceObjType<TField>) => void
  ) => JSX.Element;
  width?: number | string;
  className?: string;
  onMenuClick?: (_row: RecurviePrimitiveType, _col: TField) => void;
};

export interface IDataTable<TField extends ITableContraint> {
  columns: TypeColumns<TField>[];
  dataSource: DataSourceObjType<TField>[];
  tableParams: ITablePagination;
  setTableParams: ITablePaginationFunction;
  emptyState?: React.ReactNode;
  loading?: boolean;
  handleFilter?: (event: React.MouseEvent<unknown>, property: string) => void;
  onRowClick?: (x: DataSourceObjType<TField>) => void;
  stickyHeader?: boolean;
  onMenuClick?: (x: DataSourceObjType<TField>) => void;
  menuOptions?: MenuOption[];
  menuIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
    title?: string | undefined;
  };
  menuAction?: "default" | "none";
}

export interface IEnhancedTableHead<TField extends ITableContraint> {
  columns: TypeColumns<TField>[];
  order: OrderType;
  orderBy: string;
  rowCount?: number;
  onSort?: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter?: (event: React.MouseEvent<unknown>, property: string) => void;
  checker?: boolean;
  stickyHead?: boolean;
}

export type OrderType = "asc" | "desc";

export interface ITableFooter {
  tableParams: ITablePagination;
  setTableParams: ITablePaginationFunction;
}
