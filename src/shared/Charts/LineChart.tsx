/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
  PointElement,
  Legend,
  ChartOptions,
  Title,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, Tooltip, Legend, LinearScale, PointElement, Title, LineElement);

interface LineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

const data: LineProps["data"] = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Aug",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Noremic",
      data: [5, 7, 12, 10, 14, 12, 17, 28, 30, 32, 39, 41, 40],
      backgroundColor: "white",
      borderColor: "blue",
      pointBorderColor: "blue",
      tension: 0.2,
      borderWidth: 0.75,
      // showLine:false
    },
    {
      label: "John stone inventory",
      data: [8, 3, 9, 12, 16, 17, 24, 28, 34, 37, 42, 44, 43],
      backgroundColor: "white",
      borderColor: "red",
      pointBorderColor: "red",
      borderWidth: 0.75,

      tension: 0.2,
    },
  ],
};
const options: LineProps["options"] = {
  elements: {
    point: {
      radius: 2,
    },
  },
  plugins: {
    legend: {
      display: false,
    },

    title: {
      display: false,
      text: "Earnings",
      align: "start",
      // position:"left"
    },
  },
  maintainAspectRatio: false,

  scales: {
    y: {
      border: {
        display: false,
      },

      grid: {
        display: false,
      },
      display: false,
    },
    x: {
      display: false,
      grid: {
        // display: false,
        lineWidth: 0,
        tickWidth: 10,
        tickColor: "#fff",
      },
      border: {
        display: false,
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className="w-[100%]  h-[15rem]">
      <Line data={data} options={options} width="100%" />
    </div>
  );
};

export default LineChart;
