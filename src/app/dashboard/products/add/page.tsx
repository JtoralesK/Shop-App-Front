import { ProductComponent } from "@/app/components/product";
import { defaultProduct } from "@/app/utilities/products";
export default function AddProduct() {
  return (
    <>
      <ProductComponent typeComponent="add" item={defaultProduct} />
    </>
  );
}
