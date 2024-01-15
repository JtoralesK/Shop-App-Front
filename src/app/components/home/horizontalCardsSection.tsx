import { HorizontalCard } from "../../UI/horizontalCard";
import { productsArray } from "@/app/utilities/products";
export function HorizontalCardsSection() {
  let cont = 0;
  return (
    <>
      <div className="w-5/12 h-full ">
        <h4>Lack of stock</h4>
        <div className="mt-3 flex flex-col gap-3 h-5/6 w-full">
          {productsArray.map((item) => {
            if (cont < 3) {
              cont++;
              return (
                <HorizontalCard
                  key={item.productId}
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
