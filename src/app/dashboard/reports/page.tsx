"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { LineComponent } from "./line";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Reports() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[88%] gap-5">
        <div
          className={`flex flex-row justify-center items-center h-[54%] w-full  gap-5`}
        >
          <div className="bg-orange-200 h-full w-7/12 rounded-lg">
            <LineComponent />
          </div>
          <div className=" h-full w-5/12 p-3 bg-white rounded-lg">
            <Doughnut data={data} options={options} />
          </div>
        </div>
        <div className="flex flex-row  items-center h-[46%] w-full  gap-5">
          <div className="bg-orange-200 h-full w-7/12 p-3 bg-white rounded-lg"></div>
          <div className=" h-full w-5/12 bg-white rounded-lg"></div>
        </div>
      </div>
    </>
  );
}
export const data = {
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
};
const options = {
  maintainAspectRatio: false,
  Animation: {
    duration: 0,
  },
};
