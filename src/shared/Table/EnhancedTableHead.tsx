/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { IEnhancedTableHead, ITableContraint } from "./tableInterface";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

const EnhancedTableHead = <TField extends ITableContraint>(props: IEnhancedTableHead<TField>) => {
  const { columns, order, orderBy, checker, onFilter, onSort, stickyHead } = props;

  const handleSort = (property: string) => {
    const capitalizeKey = `${property.charAt(0).toUpperCase()}${property.slice(1)}`;
    return (event: React.MouseEvent<unknown>) => {
      if (onSort) {
        onSort(event, capitalizeKey);
      }
    };
  };

  const handleFilter = (property: string) => {
    return (event: React.MouseEvent<unknown>) => {
      if (onFilter) {
        onFilter(event, property);
      }
    };
  };

  return (
    <TableHead className={`${stickyHead && "sticky top-0"}`}>
      <TableRow>
        {columns.map((column, columnIndex) => {
          const { dataIndex, title, filter, sorter, renderFilter } = column;

          return (
            <TableCell
              key={`${dataIndex || columnIndex}-table-head-cell-${columnIndex}`}
              width={column?.width}
              className={`${column.className} whitespace-nowrap font-bold`}
              scope="col"
            >
              {title}
              {filter && renderFilter}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
