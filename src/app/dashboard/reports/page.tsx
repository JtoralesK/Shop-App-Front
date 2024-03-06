"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { LineComponent } from "./line";
import { DemoComponent } from "./bar";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Reports() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[88%] gap-5">
        <div
          className={`flex flex-row justify-center items-center h-[54%] w-full  gap-5`}
        >
          <div className="bg-orange-200 h-full w-7/12 rounded-lg">
            <DemoComponent />
          </div>
          <div className=" h-full w-5/12 p-3 bg-white rounded-lg">
            <LineComponent />
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
