import { getAllNewActiveProducts } from "@/app/lib/data";
import { Product } from "@/app/utilities/products";

export async function NewProductsSection() {
  let result = await getAllNewActiveProducts(1);
  const { content } = result.data;
  const productsArray = content as Product[];
  return (
    <>
      <div className="w-8/12 flex flex-row gap-7">
        {productsArray.map((item: Product) => {
          return (
            <MiniProductCard
              key={item.id}
              image={item.image}
              productName={item.name}
            />
          );
        })}
      </div>
    </>
  );
}
type Props = {
  image: string;
  productName: string;
};

const MiniProductCard = ({ image, productName }: Props) => {
  return (
    <div
      className={`relative w-1/5 h-44 border rounded-2xl overflow-hidden group`}
    >
      <img
        src={image}
        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        alt="product"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h2 className="text-lg">{productName}</h2>
      </div>
    </div>
  );
};
