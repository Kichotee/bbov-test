/* eslint-disable @typescript-eslint/no-shadow */
import React from "react";
import { ITableMeta, ITablePagination, ITablePaginationFunction } from "@/types/base-table-interface";
import { Meta } from "@/types";

const useTableParams = () => {
  const [tableParams, setTableParams] = React.useState<ITablePagination>({
    search: "",
    q:"",
    sort: "-createdAt",

    pageNumber: 1,
    page: 1,
    page_size: 20,
    total: 0,
    totalPage: 1,
    current_page: 2,
  });
  return {
    tableParams,
    setTableParams,
  };
};
export const useHandleTableRemoteChange = ({
  setTableParams,
  isSuccess,
  meta,
}: {
  setTableParams?: ITablePaginationFunction;
  isSuccess?: boolean;
} & ITableMeta) => {
  React.useEffect(() => {
    if (isSuccess && meta) {
      if (setTableParams) {
        setTableParams((prev) => {
          return {
            ...prev,
            pagination: {
              ...prev,
              total: meta?.total || 0,
              // totalPage: meta?.pagination?.totalPages || 1,
            },
          };
        });
      }
    }
  }, [meta, isSuccess]);

  const handleTableRemoteChange = React.useCallback(
    (meta: Meta) => {
      if (isSuccess) {
        if (setTableParams) {
          setTableParams((prev) => {
            return {
              ...prev,
              pagination: {
                ...prev,
                total: meta?.total || 0,
                // totalPage: meta?.totalPages || 1,
              },
            };
          });
        }
      }
    },
    [isSuccess]
  );

  return {
    handleTableRemoteChange,
  };
};
export default useTableParams;
