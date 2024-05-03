"use client";
import Image from "next/image";
import Link from "next/link";
import { productViewStore } from "@/app/store/viewProductContext";
import { Product } from "@/app/utilities/products";
type Props = {
  product: Product;
};

export function HorizontalCard({ product }: Props) {
  const { setProduct } = productViewStore();

  return (
    <>
      <div className="bg-white h-24 w-9/12 rounded-lg p-2 flex flex-row">
        <div className="w-14 bg-red-200">
          <Image
            className="h-full w-full"
            width={200}
            height={200}
            alt={product.name}
            src={product.image}
          />
        </div>
        <div className="w-4/5 flex flex-row justify-between ml-2">
          <div className="flex flex-col ">
            <p className="text-md">{product.name}</p>
            <p className="text-xs">Stock{product.stock}</p>
          </div>
          <Link href={`/dashboard/products/edit/` + product.id}>
            <button
              onClick={() => {
                setProduct(product);
              }}
              className="mt-8 bg-forth py-1 px-2  rounded-md text-firstWhite"
            >
              More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
