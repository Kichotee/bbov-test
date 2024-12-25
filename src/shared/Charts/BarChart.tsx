/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  PointElement,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, Tooltip, Legend, LinearScale, PointElement, BarElement);

interface LineProps {
  options: ChartOptions<"bar">;
  data: ChartData<"bar">;
}

const data: LineProps["data"] = {
  labels: ["Jan", "Feb", "Mar", "April", "May"],
  datasets: [
    {
      label: "Reading habit",
      data: [4, 3, 9],
      backgroundColor: "blue",
      borderColor: "blue",
    },
    {
      label: "Reading habit",
      data: [8, 6, 12],
      backgroundColor: "red",
      borderColor: "red",
    },
  ],
};
const options: LineProps["options"] = {
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 12,
    },
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};

const BarChart = () => {
  return (
    <div className="w-[32rem] min-h-[20rem]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
