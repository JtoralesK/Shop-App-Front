import { LabelText } from "@/app/UI/labelText";
import Dropdown from "@/app/UI/dropdown";
import CustomDatPicker from "@/app/UI/datespeaker";
import Image from "next/image";
export function ProductComponent() {
  const items = ["Female pant", "Man cloth", "Sport short", "Sport Shoes"]; // Aquí tus elementos de dropdown

  return (
    <div className="flex justify-center">
      <div
        className={`w-8/12 h-[75vh] rounded-lg bg-firstWhite p-4 flex flex-col`}
      >
        <div className="w-full h-1/5  p-3 flex justify-center items-center">
          <div className="text-center">
            <p className="text-md font-medium">Add new product</p>
            <p className="font-bold text-lg ">General Information</p>
          </div>
        </div>
        <div className="w-full h-4/5 flex flex-row ">
          <div className="w-7/12 h-full p-1 flex flex-col  p-3">
            <div className="h-1/4">
              <LabelText placeholder="Your product name" label="Product name" />
            </div>
            <div className="flex flex-row gap-1 h-1/4 items-center">
              <Dropdown items={items} placeholder="Select Category" />
              <Dropdown items={items} placeholder="Select Category" />
            </div>
            <div className="h-1/4">
              <LabelText
                placeholder="Description"
                label="Describe the product"
              />
            </div>
            <div className="flex flex-row gap-1 h-1/4 items-center">
              <LabelText placeholder="100" label="Stock" />
              <LabelText placeholder="$500" label="Price" />
            </div>
          </div>
          <div className="w-5/12 h-full flex justify-center items-center ">
            <div className="w-11/12 h-5/6 border border-2 border-orange-200 border-dashed rounded-lg">
              <Image
                width={100}
                height={100}
                className="w-full h-full bg-cover"
                alt=""
                src={"/drop.png"}
              ></Image>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-16 items-center">
          <div className="w-7/12  px-3 ">
            <div className="w-1/2 text-left">
              <p className="text-gray-700 text-sm">Select a date</p>
              <CustomDatPicker />
            </div>
          </div>
          <div className="w-5/12 h-full px-3 flex justify-center flex items-center ">
            <button className="w-1/2 h-10 bg-primary rounded-lg text-white ">
              Add product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
