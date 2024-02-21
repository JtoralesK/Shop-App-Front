import { LabelText } from "@/app/UI/labelText";
import { Dropdown } from "@/app/UI/dropdown";
import { Product } from "@/app/utilities/products";
import { DatePickerLabel } from "@/app/UI/datespeaker";
import { Categories } from "@/app/utilities/products";
import { Genders } from "@/app/utilities/users";
type Props = {
  product: Product;
  typeComponent: "add" | "edit" | "view";
};

export function AddProductform(p: Props) {
  return (
    <form className="w-7/12 h-full flex flex-col p-3 gap-2">
      <LabelText text="Product name" placeholder={p.product.name} />
      <p className="text-gray-500 font-medium">Categories</p>
      <div className="flex flex-row gap-1  items-center">
        <Dropdown
          items={Categories}
          placeholder="Clothes Category"
          itemSelected={p.product.productCategory.productCategory}
        />
        <Dropdown
          items={Genders}
          itemSelected={p.product.gender.genderType}
          placeholder="Select Gender"
        />
      </div>
      <LabelText
        placeholder={p.product.description}
        text="Describe the product"
      />
      <div className="flex flex-row gap-1  items-center">
        <LabelText placeholder={p.product.stock.toString()} text="Stock" />
        <LabelText placeholder={p.product.price.toString()} text="Price" />
      </div>
      <DatePickerLabel value={p.product.createdAt} text="Date" />
      <div className="w-full flex justify-center items-center">
        <button className="mt-4 h-10 bg-primary rounded-lg text-white px-12 py-2">
          {p.typeComponent === "view" ? "Edit" : "Add product"}
        </button>
      </div>
    </form>
  );
}
