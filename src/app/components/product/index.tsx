import { Product } from "@/app/utilities/products";
import { productsArray } from "@/app/utilities/products";
import { AddProductform } from "./form";
import Image from "next/image";
type ProductComponent = "add" | "edit" | "view";
type Prop = {
  productId: number;
  typeComponent: ProductComponent;
};
export function ProductComponent(p: Prop) {
  let obj: Product | {};
  const foundProduct = productsArray.find(
    (item) => item.productId === p.productId
  );
  console.log(foundProduct);
  if (foundProduct) {
    obj = foundProduct;
  }
  return (
    <div className="flex justify-center">
      <div
        className={`w-8/12 h-[82vh] rounded-lg bg-firstWhite p-4 flex flex-col justify-center`}
      >
        <div className="w-full h-1/6 flex justify-center items-center">
          <div className="text-center">
            <p className={`text-md font-medium`}>
              {p.typeComponent === "view"
                ? "Product Id:" + foundProduct?.productId
                : "Add new product"}
            </p>
            <p className="font-bold text-lg ">General Information</p>
          </div>
        </div>
        <div className="w-full flex flex-row h-5/6">
          <div className="w-5/12 h-full flex justify-center items-center justify-center ">
            <div className="w-11/12 h-4/5 border border-2 border-orange-200 border-dashed rounded-lg">
              <Image
                width={500}
                height={500}
                className="w-full h-full bg-cover "
                alt=""
                src={foundProduct ? foundProduct.image : "/drop.png"}
              ></Image>
            </div>
          </div>
          <AddProductform
            productId={p.productId}
            typeComponent={p.typeComponent}
          />
        </div>
      </div>
    </div>
  );
}
