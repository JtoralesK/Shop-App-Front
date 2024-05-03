"use client";
import { EditContentForm } from "./editContentForm";
import { Product } from "@/app/utilities/products";
import { editProductAction } from "@/app/lib/actions/product";
import { ProductSchema } from "../productSchemaComponent";
import { SubmitButton } from "@/app/UI/submitButton";
import { useState } from "react";
import { UploadImage } from "../UploadProductImage";
import { showToastError } from "@/app/utilities/toastMessages";
type Prop = {
  item: Product;
};
export function EditProductComponent({ item }: Prop) {
  const [state, setState] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const action = async (FormData: any) => {
    const {
      name,
      description,
      price,
      stock,
      genderId,
      productCategoryId,
      image,
    } = Object.fromEntries(FormData);
    let cont = 0;

    if (name != "") cont++;
    if (description != "") cont++;
    if (price != "") cont++;
    if (stock != "") cont++;
    if (genderId > 0) cont++;
    if (productCategoryId > 0) cont++;
    if (image != "") cont++;
    if (cont < 1) {
      showToastError("You have to change at least one field");
      return;
    }
    editProductAction(FormData);
  };
  console.log(item.id);
  return (
    <ProductSchema
      form={
        <form
          action={action}
          className="w-7/12 h-full  flex flex-col p-3 gap-2"
        >
          <input name="image" type="hidden" value={imageUrl} />

          <EditContentForm item={item} />
          <div className="w-full">
            <SubmitButton
              itemState={state}
              loadingSubmit={(loading: boolean) => setState(loading)}
              name="Edit Product"
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
      title={`Product with id ${item.id}`}
    />
  );
}
