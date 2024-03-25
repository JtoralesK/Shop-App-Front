import { AddProductComponent } from "@/app/components/product/add";
import { defaultProduct } from "@/app/utilities/products";
export default function AddProduct() {
  return (
    <>
      <AddProductComponent item={defaultProduct} />
    </>
  );
}
