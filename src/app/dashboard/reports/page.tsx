"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { DoughnutComponent } from "./doughnut";
import { DemoComponent } from "./bar";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Reports() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[88%] gap-5">
        <div
          className={`flex flex-row justify-center items-center h-[58%] w-full  gap-5`}
        >
          <div className="bg-orange-200 h-full w-7/12 rounded-lg">
            <DemoComponent />
          </div>
          <div className=" h-full w-5/12 p-3 bg-white rounded-lg">
            <h2 className="h-[8%] text-center">Stock&apos;s products</h2>
            <div className="w-full h-[92%]">
              <DoughnutComponent />
            </div>
          </div>
        </div>
        <div className="flex flex-row  items-center h-[42%] w-full  gap-5">
          <div className="bg-orange-200 h-full w-7/12 p-3 bg-white rounded-lg"></div>
          <div className=" h-full w-5/12 bg-white rounded-lg p-2">
            <p className="text-xl">
              <b className="text-orange-200">$ Sales</b> this day
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
