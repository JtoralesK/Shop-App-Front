"use client";
import { ContentForm } from "../contentForm";
import { Product } from "@/app/utilities/products";
import { UploadImage } from "../UploadProductImage";
import { useState } from "react";
import { SubmitButton } from "@/app/UI/submitButton";
import { saveProductAction } from "@/app/lib/actions/product";
import { ProductSchema } from "../productSchemaComponent";
type Prop = {
  item: Product;
};
export function AddProductComponent({ item }: Prop) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [state, setState] = useState(false);

  return (
    <ProductSchema
      form={
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
