"use client";

import Image from "next/image";
import { Product } from "@/app/utilities/products";
import Link from "next/link";
import { Pagination } from "@/app/UI/pagination";
import { Theah } from "../thead";
import { Modal } from "../../modal";
import { useState } from "react";

type Props = {
  products: Product[];
  totalPages: number;
  currentPage: number;
};

export function TableProducts(p: Props) {
  const [isOpen, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const deleteItem = (id: number) => {
    setOpen(!isOpen);
    setId(id);
  };
  return (
    <>
      <Modal category="product" isOpen={isOpen} setOpen={setOpen} itemId={id} />
      <div className="overflow-hidden rounded-lg ">
        <table className="w-full">
          <Theah
            files={[
              { title: "Title", wP: 3, id: 1 },
              { title: "Description", wP: 4, id: 2 },
              { title: "Price", wP: 1, id: 3 },
              { title: "Created At", wP: 1, id: 4 },
              { title: "Stock", wP: 1, id: 5 },
              { title: "Action", wP: 2, id: 6 },
            ]}
          />
          <tbody className="bg-secondary">
            {p.products.map((item) => {
              return (
                <tr className="h-14" key={item.productId}>
                  <td className="h-full ">
                    <div className="flex justify-center  items-center px-4">
                      <div className="w-11/12 flex flex-row items-center justify-start gap-2 h-full ">
                        <Image
                          className="w-8 rounded-3xl"
                          width={40}
                          height={40}
                          src={""}
                          alt=""
                        />
                        {item.name}
                      </div>
                    </div>
                  </td>
                  <td className="text-center ">{item.description}</td>
                  <td className="text-center ">{item.price}</td>
                  <td className="text-center ">{item.createdAt}</td>
                  <td className="text-center ">{item.stock}</td>
                  <td className="h-full  ">
                    <div className="flex justify-center">
                      <div className="flex flex-row gap-2">
                        <Link href={"/dashboard/products/" + item.productId}>
                          <button className="bg-green-400 p-2 h-10 rounded-lg">
                            View
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            deleteItem(item.productId);
                          }}
                          className="bg-red-400 p-2 h-10 rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-6">
          <Pagination totalPages={p.totalPages} currentPage={p.currentPage} />
        </div>
      </div>
    </>
  );
}
