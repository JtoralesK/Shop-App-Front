"use client";
import { productViewStore } from "@/app/store/viewProductContext";
import { ViewProductComponent } from "@/app/components/product/view";
export default function ProductId() {
  const { product } = productViewStore();
  return (
    <>
      <ViewProductComponent item={product} />
    </>
  );
}
