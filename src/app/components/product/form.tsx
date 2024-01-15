import { LabelText } from "@/app/UI/labelText";
import { Dropdown } from "@/app/UI/dropdown";
import { Product } from "@/app/utilities/products";
import { productsArray } from "@/app/utilities/products";
import { DatePickerLabel } from "@/app/UI/datespeaker";
import { Categories, Gender } from "@/app/utilities/products";
type Props = {
  productId: number;
  typeComponent: "add" | "edit" | "view";
};

export function AddProductform(p: Props) {
  const items = ["Female pant", "Man cloth", "Sport short", "Sport Shoes"]; // Aquí tus elementos de dropdown
  const clothesCategories: (keyof typeof Categories)[] = Object.values(
    Categories
  ).filter((value) => typeof value === "string") as (keyof typeof Categories)[];

  const genreCategories: (keyof typeof Gender)[] = Object.values(Gender).filter(
    (value) => typeof value === "string"
  ) as (keyof typeof Gender)[];

  let obj: Product | {};
  const foundProduct = productsArray.find(
    (item) => item.productId === p.productId
  );
  if (foundProduct) {
    obj = foundProduct;
  }
  return (
    <form className="w-7/12 h-full flex flex-col p-3 gap-2">
      <LabelText
        text="Product name"
        placeholder={foundProduct ? foundProduct.name : "Your product name"}
      />
      <p className="text-gray-500 font-medium">Categories</p>
      <div className="flex flex-row gap-1  items-center">
        <Dropdown
          items={clothesCategories}
          placeholder="Clothes Category"
          itemSelected={
            foundProduct ? Categories[foundProduct.category] : undefined
          }
        />
        <Dropdown
          items={genreCategories}
          itemSelected={foundProduct ? Gender[foundProduct.Gender] : undefined}
          placeholder="Select Gender"
        />
      </div>
      <LabelText
        placeholder={foundProduct ? foundProduct.description : "Description"}
        text="Describe the product"
      />
      <div className="flex flex-row gap-1  items-center">
        <LabelText
          placeholder={foundProduct ? "" + foundProduct.stock : "$100"}
          text="Stock"
        />
        <LabelText
          placeholder={foundProduct ? "$" + foundProduct.price : "$100"}
          text="Price"
        />
      </div>
      <DatePickerLabel value={foundProduct?.createdAt} text="Date" />
      <div className="w-full flex justify-center items-center">
        <button className="mt-4 h-10 bg-primary rounded-lg text-white px-12 py-2">
          {p.typeComponent === "view" ? "Edit" : "Add product"}
        </button>
      </div>
    </form>
  );
}
