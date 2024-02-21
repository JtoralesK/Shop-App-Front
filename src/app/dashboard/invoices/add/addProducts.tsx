"use client";
import { FaArrowLeft } from "react-icons/fa";
import { Product } from "@/app/utilities/products";
import { useState } from "react";
import { AddProductToInvoiceTable } from "./table";
type Prop = {
  onClick: () => void;
  addProduct: (p: InvoiceArrayItem[]) => any;
  products: Product[];
};
export type InvoiceArrayItem = {
  newProductToBuy: Product;
  amount: number;
};

export function AddProducts(p: Prop) {
  const [amount, setAmount] = useState(0);
  const [products, setPInInvoiceList] = useState<InvoiceArrayItem[]>([]);
  const changeSection = () => {
    if (p.onClick) {
      p.onClick();
    }
  };
  const notExist = (id: number) => {
    const exist = products.find((item) => item.newProductToBuy.id === id);
    if (exist) {
      return false;
    } else {
      return true;
    }
  };
  const addProductToInvoice = (id: number, amount: number) => {
    if (amount === 0) return;
    const newProductToBuy = p.products.find((item) => item.id === id);
    if (newProductToBuy) {
      if (notExist(newProductToBuy.id)) {
        newProductToBuy.stock -= amount;

        const obj = {
          newProductToBuy,
          amount,
        };
        setPInInvoiceList([...products, obj]);
        if (p.addProduct) {
          p.addProduct([...products, obj]);
        }
      }
    }
    setAmount(0);
  };
  return (
    <>
      <div className="w-7/12  bg-firstWhite flex flex-col gap-4">
        <div className={`w-full h-[90%] p-3`}>
          <div>
            <button
              onClick={changeSection}
              className="bg-primary p-1 rounded-md text-firstWhite"
            >
              <FaArrowLeft />
            </button>
            <AddProductToInvoiceTable
              products={p.products}
              onChange={(e) => {
                setAmount(e);
              }}
              onClick={(id, amount) => {
                addProductToInvoice(id, amount);
              }}
              amount={amount}
            />
          </div>
        </div>
        <div className="w-full h-[10%] bg-secondary border"></div>
      </div>
    </>
  );
}
/*
 */
