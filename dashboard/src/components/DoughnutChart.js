// src/components/DoughnutChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ data }) => {
  return (
    <div className="w-full h-64">
      <Doughnut
        data={data}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    </div>
  );
};
