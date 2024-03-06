import { Product } from "@/app/utilities/products";
import { HorizontalCard } from "../../UI/horizontalCard";
import { getAllProducts } from "@/app/lib/data";

export async function HorizontalCardsSection() {
  let result = await getAllProducts(1);
  const { totalPages, content } = result.data;
  const productsArray = content as Product[];
  let cont = 0;
  return (
    <>
      <div className="w-5/12 h-full ">
        <h4>Lack of stock</h4>
        <div className="mt-3 flex flex-col gap-3 h-5/6 w-full">
          {productsArray.map((item: Product) => {
            if (cont < 3) {
              cont++;
              return (
                <HorizontalCard
                  key={item.id}
                  title={item.name}
                  stock={"Stock:" + item.stock}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
