"use client";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const LineComponent: React.FC<{}> = () => {
  const [data, setData] = useState({
    labels: ["Red", "Blue", "Yellow", "Green", "T-shirts"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 10, 20, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });
  const options = {
    maintainAspectRatio: false,
  };
  return (
    <div className="flex items-center w-full h-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};
