"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { LineComponent } from "./line";
import { DemoComponent } from "./bar";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";
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
interface UploadedAssetData {
  public_id: string;
  width: number;
  height: number;
  id: string;
}
/*
export function UploadImageComponent() {
  const [result, setResult] = useState<UploadedAssetData | null>(null);
  console.log(result, "result");
  return (
    <>
      <main>
        <div className="flex flex-row items center">
          <div className="border rounded-full w-20 h-20 border-2 border-orange-200">
            {" "}
            {result ? (
              <CldImage
                src={result.public_id}
                width={300}
                height={300}
                alt="Uploaded Image"
                className="w-full h-full rounded-full"
              />
            ) : null}
          </div>
          <CldUploadWidget
            signatureEndpoint="/api/sign-image"
            onSuccess={(result) => {
              setResult(result?.info as UploadedAssetData);
            }}
          >
            {({ open }) => (
              <button
                className="bg-indigo-500 rounded py-2 px-4 mb-4 text-white"
                onClick={() => open()}
              >
                Upload an Image
              </button>
            )}
          </CldUploadWidget>
        </div>
      </main>
    </>
  );
}
*/
