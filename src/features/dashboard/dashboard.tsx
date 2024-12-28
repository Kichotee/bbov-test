/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
// import Sidebar from "@/layout/sidebar";
// import ReactApexChart from "react-apexcharts";
import { BiCalendar, BiCaretDown, BiCaretUp, BiChevronDown } from "react-icons/bi";
import { format } from "date-fns";
import { useLocation, useSearchParams } from "react-router-dom";
import Header from "@/layout/header";
import LineChart from "@/shared/Charts/LineChart";
import DataTable from "@/shared/Table/DataTable";
import useTableParams from "@/hooks/use-table-params";
import { DropDown } from "@/shared/Dropdown/drop-down";
import BoardContainer from "./components/board-container";
import Button from "@/shared/Buttons/Button";
import { useDeals } from "@/hooks/useDeals";
import { Deals } from "@/types";
import { ViewDeal } from "./components/view-deal-modal";
import { EditDealModal } from "./components/edit-deal-modal";
import { TypeColumns } from "@/shared/Table/tableInterface";

interface ColumnProps {
  label: string | number;
  className?: string | string[];
}
const Column: React.FC<ColumnProps> = React.memo(({ label, className }: ColumnProps) => {
  return <p className={`text-sm text-neutral-bodyText py-4 ${className}`}>{label}</p>;
});

const Dashboard = () => {
  const location = useLocation();
  const finances = [
    {
      name: "SteelWorks Hotel",
      amount: "2345",
      quantity: "245",
      profit: "credit",
    },
    {
      name: "Jackes",
      amount: "2345",
      quantity: "245",
      profit: "credit",
    },
    {
      name: "SteelWorks Hotel",
      amount: "2345",
      quantity: "245",
      profit: "debit",
    },
  ];

  const columns: TypeColumns<Deals>[] = [
    {
      dataIndex: "client",
      filter: false,
      title: "Client",
      sorter: false,
      render: (_, col) => {
        return <Column label={col?.client as string} className="text-sm" />;
      },
    },
    {
      dataIndex: "product",
      filter: false,
      title: "Product",
      sorter: false,
      render: (_, col) => {
        return <Column label={col?.product as string} className="text-sm" />;
      },
    },
    {
      dataIndex: "stage",
      filter: false,
      title: "Stage",
      sorter: false,
      render: (_, col) => {
        return <Column label={col?.stage as string} className="text-sm" />;
      },
    },
    {
      dataIndex: "created",
      filter: false,
      title: "Created-at",
      sorter: false,
      render: (_, col) => {
        return <Column label={format(col?.created as number, "yyyy-MM-dd")} className="text-sm" />;
      },
    },
    {
      dataIndex: "",
      filter: false,
      title: "Action",
      sorter: false,
      render: (_, col) => {
        return (
          <DropDown
            links={[
              { href: `${location.pathname}?action=view&id=${col?.id}`, label: "View" },
              { href: `${location.pathname}?action=edit&id=${col?.id}`, label: "Edit" },
              { href: `${location.pathname}?action=delete`, label: "Delete" },
            ]}
            buttonText="action"
          />
        );
      },
    },
  ];
  const { deals } = useDeals();
  // const cardArrangement=deals.
  const { tableParams, setTableParams } = useTableParams();
  const [board, setBoard] = React.useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentModal = searchParams.get("action");

  return (
    <>
      <div className=" bg-white dark:bg-neutral-black">
        <div className="flex flex-col flex-1 mb-2">
          <Header />

          <div className="lg:grid flex flex-col gap-3 grid-cols-1 lg:grid-rows-auto lg:grid-cols-[3fr_1fr]  w-full justify-between">
            <div className="border-b w-full">
              <div className="flex w-full flex-col pr-4 pt-3 gap-4">
                <div className="flex w-full  justify-between items-center">
                  <h5 className="font-semibold text-text-main dark:text-neutral-white/80 lg:text-lg ">
                    Clients
                  </h5>
                  <p className="text-xs dark:text-white/80 text-neutral-bodyText">View all</p>
                </div>
                <div className="flex flex-wrap justify-between dark:text-white/90 text-neutral-bodyText items-center">
                  <div className="flex gap-2 items-center">
                    <div className="flex lg:text-sm text-xs items-center gap-3">
                      <BiCalendar />
                      <p>5 Jun, 2022 - 5 Jul,2022</p>
                      <BiChevronDown />
                    </div>
                    <div className="flex text-sm items-center gap-3">
                      <p>Daily</p>
                      <BiChevronDown />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex gap-3 items-center">
                      <div className="w-3 h-3 border-red-500 border rounded-full" />
                      <p>Germany</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="w-3 h-3 border-blue-700 border rounded-full" />
                      <p>Nigeria</p>
                    </div>
                  </div>
                </div>
                <LineChart />
              </div>
            </div>
            <div className="lg:border border-b px-4 py-3">
              <div className="flex flex-col gap-4">
                <div className="flex w-full justify-between items-center">
                  <h5 className="font-semibold  ">Recent Finances</h5>
                  <p className="text-xs text-neutral-bodyText">View all</p>
                </div>
                <div className="bg-[#ddd]/20  p-1.5 flex gap-6  rounded-lg ">
                  <div className="rounded-full w-14 h-14 bg-gradient-to-l flex justify-center items-center  from-purple-800 to-blue-900 ">
                    <div className="w-12 grid  text-text-main dark:bg-gray-500 dark:text-white/80 place-items-center h-12 rounded-full bg-white">
                      <p className="font-medium">
                        32<sup>%</sup>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text text-text-main dark:text-white/80 text-sm">
                    <p className="">Total commissions,</p>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">$12,813</p>
                      <div className="flex  items-center dark:text-green-300 text-green-400">
                        <BiCaretUp size={24} />
                        <p>12%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="flex flex-col w-full gap-4 text-sm font-poppins">
                  {finances.map((data) => {
                    return (
                      <li className="grid grid-cols-3  *:whitespace-nowrap text-xs dark:text-white/80 text-text-sub justify-between items-center gap-2">
                        <p className="whitespace-nowrap font-semibold dark:text-white text-text-main">
                          {data.name}
                        </p>
                        <p className="justify-self-end">{data.quantity}</p>
                        <p className="flex items-center justify-self-end font-bold gap-2">
                          <p>{data.amount}</p>
                          {data.profit == "credit" ? (
                            <BiCaretUp className="text-green-500" />
                          ) : (
                            <BiCaretDown className="text-red-500" />
                          )}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-span-2 py-4">
              <div className="flex flex-col gap-3">
                <div className="flex w-full text-text-main dark:text-white/80 justify-between items-center">
                  <h5 className="font-semibold text-text-main dark:text-neutral-white/80 ">
                    Pipelines
                  </h5>
                  <Button
                    onClick={() => {
                      return setBoard(!board);
                    }}
                  >
                    Switch
                  </Button>
                </div>
                {board ? (
                  <BoardContainer cards={deals as Deals[]} />
                ) : (
                  <div className="max-w-[90vw] overflow-x-scroll lg:max-w-[85vw] lg:overflow-x-hidden ">
                    <DataTable
                      dataSource={deals as Deals[]}
                      columns={columns}
                      tableParams={tableParams}
                      setTableParams={setTableParams}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ViewDeal
        open={currentModal == "view"}
        onClose={() => {
          setSearchParams();
        }}
      />
      <EditDealModal
        open={currentModal === "edit"}
        onClose={() => {
          setSearchParams();
        }}
      />
    </>
  );
};

export default Dashboard;
