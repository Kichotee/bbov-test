import React from "react";
// import { BackArrowIcon, ForwardArrowIcon } from "@/assets/svgs";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import SelectInput from "@/shared/Select/SelectInput";
import Button from "@/shared/Buttons/Button";
import { ITablePagination } from "./types";

const TablePagination = (props: ITablePagination) => {
  const { count, page, onPageChange, onRowsPerPageChange, rowsPerPageOptions, rowsPerPage } = props;

  const handleNextClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(evt, page + 1);
  };

  const handlePrevClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(evt, page - 1);
  };

  const getTotalData = () => {
    if (count - (page + 1) * rowsPerPage > rowsPerPage) {
      return (page + 1) * rowsPerPage;
    }
    return count;
  };
  return (
    <div
      data-testid="shared-table-pagination"
      className="bg-neutral-white px-2 first:px-3 z-30 relative last:px-3 py-3"
    >
      <div className="flex justify-end items-center gap-4">
        <div className="flex items-center justify-end">
          <div>Rows per page:</div>
          <div className="relative">
            <SelectInput
              onChange={(e) => {
                onRowsPerPageChange(e);
              }}
              value={rowsPerPage}
              className="border-0 p-0"
            >
              {rowsPerPageOptions.map((row, index) => {
                return (
                  <option
                    key={`${index}-list-select`}
                    value={
                      typeof row === "string" || typeof row === "number" ? `${row}` : row?.value
                    }
                  >
                    {typeof row === "string" || typeof row === "number" ? `${row}` : row?.label}
                  </option>
                );
              })}
            </SelectInput>
          </div>
        </div>
        <div>
          <span>{`${page * rowsPerPage + 1} - ${getTotalData()} of ${count}`}</span>
        </div>
        <div className=" grid grid-cols-2 gap-2">
          <Button onClick={handlePrevClick} disabled={page === 0} aria-label="back page">
            <PiCaretLeft />
          </Button>
          <Button
            onClick={handleNextClick}
            // disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
          >
            <PiCaretRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

TablePagination.defaultProps = {};

export default TablePagination;
