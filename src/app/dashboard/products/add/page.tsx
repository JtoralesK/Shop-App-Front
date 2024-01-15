import { ProductComponent } from "@/app/components/product";
export default function AddProduct({ params }: any) {
  const id = parseInt(params.productId, 10);

  return (
    <>
      <ProductComponent typeComponent="add" productId={id} />
    </>
  );
}
