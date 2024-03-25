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
import { Categories } from "@/app/utilities/products";
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

export const DoughnutComponent: React.FC<{}> = () => {
  const [data, setData] = useState({
    labels: Categories,
    datasets: [
      {
        label: "# of Votes",
        data: [10, 100, 20, 5, 2, 3, 5, 6, 7, 8, 9, 8],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(127, 255, 0, 1)", // Amarillo-verde
          "rgba(255, 69, 0, 1)", // Rojo oscuro
          "rgba(255, 0, 255, 1)", // Magenta
          "rgba(255, 215, 0, 1)", // Oro
          "rgba(0, 0, 255, 1)", // Azul puro
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(127, 255, 0, 1)", // Amarillo-verde
          "rgba(255, 69, 0, 1)", // Rojo oscuro
          "rgba(255, 0, 255, 1)", // Magenta
          "rgba(255, 215, 0, 1)", // Oro
          "rgba(0, 0, 255, 1)", // Azul puro
        ],
        borderWidth: 1,
      },
    ],
  });
  const options = {
    maintainAspectRatio: false,
  };
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};
