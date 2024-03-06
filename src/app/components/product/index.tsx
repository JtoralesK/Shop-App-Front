"use client";
import { AddProductform } from "./form";
import Image from "next/image";
import { Product } from "@/app/utilities/products";
import { UploadImage } from "./UploadProductImage";
import { useState } from "react";
type ProductComponent = "add" | "edit" | "view";
type Prop = {
  item: Product;
  typeComponent: ProductComponent;
};
export function ProductComponent(p: Prop) {
  const [imageUrl, setImageUrl] = useState<string>("");
  return (
    <div className="flex justify-center">
      <div
        className={`w-8/12 h-[82vh] rounded-lg bg-firstWhite p-4 flex flex-col justify-center`}
      >
        <div className="w-full h-1/6 flex justify-center items-center">
          <div className="text-center">
            <p className={`text-md font-medium`}>
              {p.typeComponent === "view"
                ? "Product Id:" + p.item?.id
                : "Add new product"}
            </p>
            <p className="font-bold text-lg ">General Information</p>
          </div>
        </div>
        <div className="w-full flex flex-row h-5/6">
          <div className="w-5/12 h-full flex justify-center items-center justify-center ">
            <div className="w-11/12 h-4/5 border border-2 border-orange-200 border-dashed rounded-lg">
              {p.typeComponent === "view" ? (
                <Image
                  width={500}
                  height={500}
                  className="w-full h-full bg-cover "
                  alt={p.item.name}
                  src={p.item.image}
                ></Image>
              ) : (
                <UploadImage
                  setImage={(e) => {
                    setImageUrl(e);
                  }}
                />
              )}
            </div>
          </div>
          <AddProductform
            product={p.item}
            typeComponent={p.typeComponent}
            imageUrl={imageUrl}
          />
        </div>
      </div>
    </div>
  );
}
