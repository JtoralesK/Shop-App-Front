"use client";
import { LabelText } from "@/app/UI/labelText";
import { Dropdown } from "@/app/UI/dropdown";
import { Product } from "@/app/utilities/products";
import { Categories } from "@/app/utilities/products";
import { Genders } from "@/app/utilities/users";
type Props = {
  item: Product;
};

export function ContentForm({ item }: Props) {
  return (
    <>
      <LabelText
        text="Product name"
        placeholder={item.name}
        name="name"
        disabled={true}
      />
      <p className="text-gray-500 font-medium">Categories</p>
      <div className="flex flex-row gap-1  items-center">
        <Dropdown
          items={Categories}
          placeholder="Clothes Category"
          name="productCategoryId"
          itemSelected={item.productCategory.productCategory}
          disabled={true}
        />
        <Dropdown
          items={Genders}
          name="genderId"
          placeholder="Select Gender"
          itemSelected={item.gender.genderType}
          disabled={true}
        />
      </div>
      <LabelText
        name="description"
        placeholder={item.description}
        text="Describe the product"
        disabled={true}
      />
      <div className="flex flex-row gap-1  items-center">
        <LabelText
          placeholder={item.stock.toString()}
          text="Stock"
          name="stock"
          type="number"
          disabled={true}
        />
        <LabelText
          placeholder={item.price.toString()}
          text="Price"
          name="price"
          disabled={true}
          type="number"
        />
      </div>
    </>
  );
}
