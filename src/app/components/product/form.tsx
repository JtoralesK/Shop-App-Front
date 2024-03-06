"use client";
import { LabelText } from "@/app/UI/labelText";
import { Dropdown } from "@/app/UI/dropdown";
import { Product } from "@/app/utilities/products";
import { DatePickerLabel } from "@/app/UI/datespeaker";
import { Categories } from "@/app/utilities/products";
import { Genders } from "@/app/utilities/users";
import { saveProductAction } from "@/app/lib/actions/product";
import { useState } from "react";
import { MiniLoading } from "@/app/UI/modal/miniSpinner";
import { useFormStatus } from "react-dom";
type Props = {
  product: Product;
  typeComponent: "add" | "edit" | "view";
  imageUrl: string;
};

export function AddProductform(p: Props) {
  const [state, setState] = useState(false);
  return (
    <form
      action={saveProductAction}
      className="w-7/12 h-full  flex flex-col p-3 gap-2"
    >
      <input name="image" type="hidden" value={p.imageUrl} />
      <LabelText
        text="Product name"
        placeholder={p.product.name}
        name="name"
        required
      />
      <p className="text-gray-500 font-medium">Categories</p>
      <div className="flex flex-row gap-1  items-center">
        <Dropdown
          items={Categories}
          placeholder="Clothes Category"
          name="productCategoryId"
          itemSelected={p.product.productCategory.productCategory}
        />
        <Dropdown
          items={Genders}
          name="genderId"
          itemSelected={p.product.gender.genderType}
          placeholder="Select Gender"
        />
      </div>
      <LabelText
        name="description"
        placeholder={p.product.description}
        text="Describe the product"
        required
      />
      <div className="flex flex-row gap-1  items-center">
        <LabelText
          placeholder={p.product.stock.toString()}
          text="Stock"
          name="stock"
          required
        />
        <LabelText
          placeholder={p.product.price.toString()}
          text="Price"
          name="price"
          required
        />
      </div>
      {p.typeComponent === "view" && (
        <DatePickerLabel value={p.product.createdAt} text="Date" />
      )}
      <div className="w-full">
        <SubmitButton
          itemState={state}
          loadingSubmit={(loading: boolean) => setState(loading)}
          typeComponent={p.typeComponent}
        />
      </div>
    </form>
  );
}
type Prop = {
  itemState: boolean;
  loadingSubmit: (loading: boolean) => void;
  typeComponent: String;
  className?: string;
};
export function SubmitButton(p: Prop) {
  const { pending } = useFormStatus();
  p.loadingSubmit(pending);
  if (p.itemState)
    return (
      <button
        type="submit"
        aria-disabled={pending}
        className={
          p.className
            ? p.className
            : `mt-4  bg-primary rounded-lg text-white w-full px-12 py-2 "h-10"`
        }
      >
        <span className="mr-2">
          <MiniLoading />
        </span>
        Loading...
      </button>
    );
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className={
        p.className
          ? p.className
          : `mt-4  bg-primary rounded-lg text-white w-full px-12 py-2 "h-10"`
      }
    >
      {p.typeComponent}
    </button>
  );
}
