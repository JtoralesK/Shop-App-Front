import { AddProductComponent } from "@/app/components/product/addProduct";
import { defaultProduct } from "@/app/utilities/products";
export default function AddProduct() {
  return (
    <>
      <AddProductComponent item={defaultProduct} />
    </>
  );
}
