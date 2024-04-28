"use client";
import { ContentForm } from "./addContentForm";
import { Product } from "@/app/utilities/products";
import { UploadImage } from "../UploadProductImage";
import { useState } from "react";
import { SubmitButton } from "@/app/UI/submitButton";
import { saveProductAction } from "@/app/lib/actions/product";
import { ProductSchema } from "../productSchemaComponent";
import { showToastError } from "@/app/utilities/toastMessages";

type Prop = {
  item: Product;
};
export function AddProductComponent({ item }: Prop) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [state, setState] = useState(false);
  const action = async (FormData: any) => {
    const { productCategoryId, genderId } = Object.fromEntries(FormData);

    if (productCategoryId < 1) {
      showToastError("You have to choose a clothes Category");
      return;
    }
    if (genderId < 1) {
      showToastError("You have to choose a gender");
      return;
    }
    if (!imageUrl) {
      showToastError("You have to choose a image for the product");
      return;
    }
    saveProductAction(FormData);
  };
  return (
    <ProductSchema
      form={
        <form
          action={action}
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
      }
      image={
        <UploadImage
          setImage={(e) => {
            setImageUrl(e);
          }}
        />
      }
      title="Add new product"
    />
  );
}
