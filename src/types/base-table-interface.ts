export type Pagination = {
    total: number;
    pageNumber: number;
    current_page?:number;
    pageSize?: number;
    page_size?: number;
    page?:number;
    totalPage?: number;
  };
  
  export type Pagination_ = {
    total: number;
    pageNumber: number;
    pageSize: number;
    page_size?:number;
    totalPages?: number;
  };
  export interface ITablePagination extends Pagination {
    search: string;
    sort?: string;
    filterBy?: string | number;
    
  }
  
  export type ITablePaginationRemoteChange = ({
    // eslint-disable-next-line no-unused-vars
    total,
    // eslint-disable-next-line no-unused-vars
    totalPages,
  }: {
    total: number;
    totalPages: number;
  }) => void;
  export interface ITableMetaPagination {
    search: string;
    sort?: string;
    filterBy?: string | number;
    meta: { pagination: Pagination_ };
  }
  
  export interface ITableMeta {
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        // skip: number;
        total: number;
        numberOfPages: number;
        totalPages: number;
        nextPage: string;
        previousPage: string | null;
      };
    };
  }
  
  export type ITablePaginationModified<TTableValue extends Record<string, string>> = TTableValue &
    ITablePagination;
  
  export type ITablePaginationFunction = React.Dispatch<React.SetStateAction<ITablePagination>>;
  
  export type ITablePaginationFunctionModified<TTableValue extends Record<string, string>> =
    React.Dispatch<React.SetStateAction<ITablePaginationModified<TTableValue>>>;
  