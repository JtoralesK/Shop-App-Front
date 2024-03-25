"use client";
import { LabelText } from "@/app/UI/labelText";
import { Dropdown } from "@/app/UI/dropdown";
import { Product } from "@/app/utilities/products";
import { Categories } from "@/app/utilities/products";
import { Genders } from "@/app/utilities/users";
type Props = {
  item: Product;
};

export function EditContentForm({ item }: Props) {
  return (
    <>
      <input type="hidden" name="id" value={item.id} />
      <LabelText text="Product name" placeholder={item.name} name="name" />
      <p className="text-gray-500 font-medium">Categories</p>
      <div className="flex flex-row gap-1  items-center">
        <Dropdown
          items={Categories}
          placeholder="Clothes Category"
          name="productCategoryId"
          itemSelected={item.productCategory.productCategory}
        />
        <Dropdown
          items={Genders}
          name="genderId"
          itemSelected={item.gender.genderType}
          placeholder="Select Gender"
        />
      </div>
      <LabelText
        name="description"
        placeholder={item.description}
        text="Describe the product"
      />
      <div className="flex flex-row gap-1  items-center">
        <LabelText
          placeholder={item.stock.toString()}
          text="Stock"
          name="stock"
        />
        <LabelText
          placeholder={item.price.toString()}
          text="Price"
          name="price"
        />
      </div>
    </>
  );
}
