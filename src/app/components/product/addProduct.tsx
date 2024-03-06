"use client";
import { ContentForm } from "./contentForm";
import { Product } from "@/app/utilities/products";
import { UploadImage } from "./UploadProductImage";
import { useState } from "react";
import { SubmitButton } from "@/app/UI/submitButton";
import { saveProductAction } from "@/app/lib/actions/product";
type ProductComponent = "add" | "edit" | "view";
type Prop = {
  item: Product;
};
export function AddProductComponent({ item }: Prop) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [state, setState] = useState(false);

  return (
    <div className="flex justify-center">
      <div
        className={`w-8/12 h-[82vh] rounded-lg bg-firstWhite p-4 flex flex-col justify-center`}
      >
        <div className="w-full h-1/6 flex justify-center items-center">
          <div className="text-center">
            <p className={`text-md font-medium`}>Add new product</p>
            <p className="font-bold text-lg ">General Information</p>
          </div>
        </div>
        <div className="w-full flex flex-row h-5/6">
          <div className="w-5/12 h-full flex justify-center items-center justify-center ">
            <div className="w-11/12 h-4/5 border border-2 border-orange-200 border-dashed rounded-lg">
              <UploadImage
                setImage={(e) => {
                  setImageUrl(e);
                }}
              />
            </div>
          </div>
          <form
            action={saveProductAction}
            className="w-7/12 h-full  flex flex-col p-3 gap-2"
          >
            <input name="image" type="hidden" value={imageUrl} />
            <ContentForm item={item} />
            <div className="w-full">
              <SubmitButton
                itemState={state}
                loadingSubmit={(loading: boolean) => setState(loading)}
                name="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
