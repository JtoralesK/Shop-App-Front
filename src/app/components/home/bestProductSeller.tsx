"use client";
import { Product } from "@/app/utilities/products";
import Image from "next/image";
import { productViewStore } from "@/app/store/viewProductContext";
import Link from "next/link";
type Prop = {
  product: Product;
};

export const BestProductSeller = ({ product }: Prop) => {
  const { setProduct } = productViewStore();

  return (
    <div className="w-full h-full  ">
      <h5>Best product</h5>
      <div className="mt-3  bg-firstWhite rounded-lg h-72 flex flex-row py-4 px-8 justify-around">
        <div className="w-2- mr-6 flex flex-col justify-around">
          <div>
            <h6 className="font-bold text-2xl">{product.name}</h6>
            <p className="mt-2 text-forth">{product.description}</p>
          </div>
          <Link href={`/dashboard/products/` + product.id}>
            <button
              onClick={() => {
                setProduct(product);
              }}
              className="mt-24 bg-primary rounded-2xl px-8 py-2"
            >
              See more
            </button>
          </Link>
        </div>
        <Image
          className="rounded-lg w-1-3 flex justify-end shadow"
          src={product.image}
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};
