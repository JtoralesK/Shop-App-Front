import { Product } from "@/app/utilities/products";
import { HorizontalCard } from "../../UI/horizontalCard";
import { getAllProductsLowStock } from "@/app/lib/data";

export async function ProductsLackOfStock() {
  let result = await getAllProductsLowStock(1);
  const { content } = result.data;
  const productsArray = content as Product[];
  let cont = 0;
  return (
    <>
      <div className="min-w-[500px] h-full ">
        <h4>Lack of stock</h4>
        <div className="mt-3 flex flex-col gap-3 h-5/6 w-full">
          {productsArray.map((item: Product) => {
            if (cont < 3) {
              cont++;
              return <HorizontalCard key={item.id} product={item} />;
            }
          })}
        </div>
      </div>
    </>
  );
}
