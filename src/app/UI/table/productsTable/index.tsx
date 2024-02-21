"use client";
import { deleteProductAction } from "@/app/lib/actions";
import { TrBody } from "./trBody";
import { Product } from "@/app/utilities/products";
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
  const [stateModal, setStateModal] = useState(false);

  const changeUserState = (id: number, state: boolean) => {
    setOpen(!isOpen);
    setId(id);
    setStateModal(state);
  };
  return (
    <>
      <Modal
        category="product"
        isOpen={isOpen}
        closeModal={setOpen}
        itemId={id}
        itemState={stateModal}
        action={deleteProductAction}
      />
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
                <TrBody
                  key={item.id}
                  product={item}
                  deleteItem={changeUserState}
                />
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
