"use client";
import { productViewStore } from "@/app/store/viewProductContext";
import { EditProductComponent } from "@/app/components/product/edit";
export default function EditProduct() {
  const { product } = productViewStore();
  return (
    <>
      <EditProductComponent item={product} />
    </>
  );
}
