import Image from "next/image";
import Link from "next/link";
import { ChangeEntityStateButton } from "@/app/UI/changeEntityStateButton";
import { productViewStore } from "@/app/store/viewProductContext";
import { Product } from "@/app/utilities/products";
type Prop = {
  product: Product;
  deleteItem: (id: number, state: boolean) => void;
};
export const TrBody = (p: Prop) => {
  const { deleteItem } = p;
  const { setProduct } = productViewStore();
  return (
    <>
      <tr className="h-14" key={p.product.id}>
        <td className="h-full ">
          <div className="flex justify-center  items-center px-4">
            <div className="w-11/12 flex flex-row items-center justify-start gap-2 h-full ">
              <Image
                className="w-8 rounded-3xl"
                width={40}
                height={40}
                src={p.product.image}
                alt=""
              />
              {p.product.name}
            </div>
          </div>
        </td>
        <td className="text-center ">{p.product.description}</td>
        <td className="text-center ">{p.product.price}</td>
        <td className="text-center ">{p.product.createdAt}</td>
        <td className="text-center ">{p.product.stock}</td>
        <td className="h-full  ">
          <div className="flex justify-center">
            <div className="flex flex-row gap-2">
              <Link href={"/dashboard/products/" + p.product.id}>
                <button
                  className="bg-green-400 p-2 h-10 rounded-lg"
                  onClick={() => {
                    setProduct(p.product);
                  }}
                >
                  View
                </button>
              </Link>
              <Link href={"/dashboard/products/edit/" + p.product.id}>
                <button
                  className="bg-orange-200 p-2 h-10 rounded-lg"
                  onClick={() => {
                    setProduct(p.product);
                  }}
                >
                  Edit
                </button>
              </Link>
              <ChangeEntityStateButton
                deleteItem={(id) => {
                  deleteItem(id, p.product.active);
                }}
                id={p.product.id}
                active={p.product.active}
              />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};
