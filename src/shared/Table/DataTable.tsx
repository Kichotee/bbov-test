/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-extraneous-dependencies */
import { format, isValid } from "date-fns";
import React from "react";
// import { ThreeDotIcon } from "@/assets/svgs";
import useMenu from "@/hooks/useMenu";
// import IconButton from "@/shared/Button/IconButton";
import { SortOrder } from "@/utils/constants";
import CircularProgress from "../circular-progress";
// import DropDownMenu from "../Menu/DropDownMenu";
import EnhancedTableHead from "./EnhancedTableHead";
import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableContainer from "./TableContainer";
import TablePagination from "./TablePagination";
import TableRow from "./TableRow";
import "./index.css";
import {
  DataSourceObjType,
  IDataTable,
  ITableContraint,
  OrderType,
  RecurviePrimitiveType,
  TypeColumns,
} from "./tableInterface";
import Button from "../Buttons/Button";
import { BiMenu } from "react-icons/bi";

const DataTable = <TField extends ITableContraint>(props: IDataTable<TField>) => {
  const {
    tableParams,
    setTableParams,
    dataSource,
    columns,
    emptyState,
    loading,
    onRowClick,
    handleFilter,
    stickyHeader,
    menuOptions,
    onMenuClick,
    menuIcon: MenuIcon,
    menuAction,
  } = props;
  const { open, anchorEl, handleClose, toggleMenu } = useMenu();
  const [order, setOrder] = React.useState<OrderType>(() => {
    if (tableParams.sort?.startsWith("+")) {
      return SortOrder.ASC;
    }
    if (tableParams.sort?.startsWith("-")) {
      return SortOrder.DESC;
    }
    return SortOrder.DESC;
  });

  const [orderBy, setOrderBy] = React.useState<string>(tableParams.sort?.slice(1) || "");
  type SortMapper = {
    asc: "+";
    desc: "-";
  };

  const renderCellData = (
    column: TypeColumns<TField>,
    row: DataSourceObjType<TField>,
    index: number,
    _onClick?: (_row: RecurviePrimitiveType, _col: DataSourceObjType<TField>) => void
  ): React.ReactNode => {
    const dataValue = row[column?.dataIndex];
    // type ff = keyof DataSourceObjType
    if (column.dataIndex === "date") return isValid(row?.updatedAt) ? "" : format(new Date(), "Pp");
    if (column.dataIndex === "menu-icon") {
      return (
        <Button
          onClick={
            menuAction === "default"
              ? (e) => {
                  if (onMenuClick) {
                    onMenuClick(row);
                  }
                  toggleMenu(e);
                }
              : () => {}
          }
        >
          {MenuIcon ? <MenuIcon /> : <BiMenu />}
        </Button>
      );
    }
    if (column.render) return column.render(row?.[column.dataIndex], row, index, _onClick);
    if (typeof row[column?.dataIndex] === "string" || typeof row[column?.dataIndex] === "number") {
      return <div>{`${row[column?.dataIndex]}`}</div>;
    }
    if (dataValue instanceof Date) {
      return (
        <div className="m-o">{`${format(
          dataValue ? new Date(dataValue) : new Date(),
          "dd-MMM-yyyy"
        )}`}</div>
      );
    }
    return "-";
  };

  const sortMapping: SortMapper = {
    asc: "+",
    desc: "-",
  };

  const handleSort = (e: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === SortOrder.ASC;
    const changeOrder = isAsc ? SortOrder.DESC : SortOrder.ASC;
    setOrder(changeOrder);
    setOrderBy(property);
    setTableParams({
      ...tableParams,
      sort: changeOrder ? `${sortMapping[changeOrder]}${property}` : "",
    });
  };
  const renderDataItems = () => {
    return dataSource?.map((row, rowIndex) => {
      // const key = dataKeys()[rowIndex];

      return (
        <TableRow
          key={`${row?.id}-${rowIndex}-table-body`}
          onClick={(e) => {
            e.stopPropagation();
            if (onRowClick) {
              onRowClick(row);
            }
          }}
        >
          {columns?.map((column, columnIndex) => {
            return (
              <TableCell
                width={column?.width}
                key={`${column.dataIndex}-${columnIndex}`}
                className="whitespace-nowrap"
              >
                {renderCellData(column, row, rowIndex, column?.onMenuClick)}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    tableParams?.pageNumber > 0
      ? Math.max(
          0,
          (1 + Number(tableParams?.page)) * Number(tableParams?.pageSize) - tableParams?.total
        )
      : 0;

  const handleRowPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTableParams((prev) => {
      return {
        ...prev,
        page_size: Number(event.target.value),
        page: 0,
      };
    });
  };

  const handlePageChange = (event: unknown, newPage: number) => {
    setTableParams((prev) => {
      return {
        ...prev,
        page: newPage,
      };
    });
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <div className="inline-block min-w-full relative z-10 ">
            <div className="shadow rounded-lg">
              <TableContainer>
                <Table className=" relative">
                  <EnhancedTableHead
                    columns={columns}
                    order={order}
                    orderBy={orderBy}
                    onSort={handleSort}
                    onFilter={handleFilter}
                    stickyHead={stickyHeader}
                  />
                  {dataSource?.length > 0 ? (
                    <TableBody>
                      {loading ? (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={columns?.length || 1}>
                            <div className="grid items-center place-items-center p-4">
                              <CircularProgress />
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        <>
                          {renderDataItems()}
                          {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                              <TableCell colSpan={columns?.length || 1} />
                            </TableRow>
                          )}
                          <TableRow className="!bg-white"/>
                        </>
                      )}
                    </TableBody>
                  ) : (
                    <TableBody>
                      {loading ? (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={columns?.length || 1}>
                            <div className="grid items-center place-items-center p-4">
                              <CircularProgress size={60} />
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={columns?.length || 1}>
                            <div className="m-0 flex justify-center">{emptyState}</div>
                          </TableCell>
                        </TableRow>
                      )}
                      <TableRow
                        className="!bg-white h-8 !hover:bg-white"
                        style={{ height: 53  }}
                      >
                        <TableCell />
                        
                      </TableRow>
                     
                    </TableBody>
                  )}
                </Table>
              </TableContainer>

              {/* {dataSource && dataSource.length > 0 && (
                <TablePagination
                  count={tableParams.total || dataSource?.length}
                  // rowsPerPageOptions={[5, 10, { label: "all", value: "All" }]}
                  rowsPerPageOptions={[5, 10, 20, 40, 50]}
                  rowsPerPage={tableParams.page_size as number}
                  page={tableParams.page as number}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleRowPerPageChange}
                  colSpan={columns?.length}
                />
              )} */}
            </div>
          </div>
        </div>
      </div>
      {/* <DropDownMenu
        options={menuOptions || []}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
      /> */}
    </>
  );
};
DataTable.defaultProps = {
  stickyHeader: true,
  menuAction: "default",
};

export default DataTable;
