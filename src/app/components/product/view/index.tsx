"use client";
import { ContentForm } from "./viewContentForm";
import Image from "next/image";
import { Product } from "@/app/utilities/products";
import { DatePickerLabel } from "@/app/UI/datespeaker";
import { ProductSchema } from "../productSchemaComponent";
type Prop = {
  item: Product;
};
export function ViewProductComponent({ item }: Prop) {
  return (
    <ProductSchema
      form={
        <form className="w-7/12 h-full  flex flex-col p-3 gap-2">
          <ContentForm item={item} />
          <DatePickerLabel value={item.createdAt} text="Date" disabled={true} />
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
