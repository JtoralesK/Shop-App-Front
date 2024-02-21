"use client";
import { productViewStore } from "@/app/store/viewProductContext";
import { ProductComponent } from "@/app/components/product";
export default function ProductId() {
  const { product } = productViewStore();
  return (
    <>
      <ProductComponent item={product} typeComponent="view" />
    </>
  );
}
