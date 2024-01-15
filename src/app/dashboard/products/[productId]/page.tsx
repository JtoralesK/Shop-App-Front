import { ProductComponent } from "@/app/components/product";
export default function ProductId({ params }: any) {
  const id = parseInt(params.productId, 10);
  console.log(id);

  return (
    <>
      <ProductComponent typeComponent="view" productId={id} />
    </>
  );
}
