"use client";
import { EditContentForm } from "./editContentForm";
import Image from "next/image";
import { Product } from "@/app/utilities/products";
import { editProductAction } from "@/app/lib/actions/product";
import { ProductSchema } from "../productSchemaComponent";
import { SubmitButton } from "@/app/UI/submitButton";
import { useState } from "react";
type Prop = {
  item: Product;
};
export function EditProductComponent({ item }: Prop) {
  const [state, setState] = useState(false);
  return (
    <ProductSchema
      form={
        <form
          action={editProductAction}
          className="w-7/12 h-full  flex flex-col p-3 gap-2"
        >
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
        <Image
          width={500}
          height={500}
          className="w-full h-full bg-cover "
          alt={item.name}
          src={item.image}
        />
      }
      title={`Product with id ${item.id}`}
    />
  );
}
