"use client";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { Product, productsArray } from "@/app/utilities/products";
import { Theah } from "@/app/UI/table/thead";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
type Prop = {
  onClick: () => void;
  addProduct: (p: InvoiceArrayItem[]) => any;
};
export type InvoiceArrayItem = {
  newProductToBuy: Product;
  amount: number;
};

export function AddProducts(props: Prop) {
  const [amount, setAmount] = useState(0);
  const [products, setPInInvoiceList] = useState<InvoiceArrayItem[]>([]);
  const changeSection = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  const notExist = (id: number) => {
    const exist = products.find(
      (item) => item.newProductToBuy.productId === id
    );
    if (exist) {
      return false;
    } else {
      return true;
    }
  };
  const addProductToInvoice = (id: number, amount: number) => {
    if (amount === 0) return;
    const newProductToBuy = productsArray.find((item) => item.productId === id);
    if (newProductToBuy) {
      if (notExist(newProductToBuy.productId)) {
        newProductToBuy.stock -= amount;

        const obj = {
          newProductToBuy,
          amount,
        };
        setPInInvoiceList([...products, obj]);
        if (props.addProduct) {
          props.addProduct([...products, obj]);
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
type AddProductToInvoiceTableProp = {
  onClick: (id: number, amount: number) => any;
  onChange: (amount: number) => any;
  amount: number;
};

const AddProductToInvoiceTable = (p: AddProductToInvoiceTableProp) => {
  let con = 0;
  return (
    <div className="overflow-y-auto h-52 border">
      <table className="w-full ">
        <Theah
          files={[
            { title: "Title", wP: 4, id: 1 },
            { title: "Price", wP: 2, id: 2 },
            { title: "Stock", wP: 2, id: 3 },
            { title: "Amount", wP: 2, id: 4 },
            { title: "Add", wP: 2, id: 5 },
          ]}
        />
        <tbody className="bg-secondary">
          {productsArray.map((item) => {
            if (con < 10) {
              con++;
              return (
                <tr className="h-14" key={item.productId}>
                  <td className="">
                    <div className="flex justify-center  items-center px-4">
                      <div className="w-11/12 flex flex-row items-center justify-start gap-2  ">
                        <Image
                          className="w-8 rounded-3xl"
                          width={40}
                          height={40}
                          src={item.image}
                          alt=""
                        />
                        {item.name}
                      </div>
                    </div>
                  </td>
                  <td className="text-center ">{item.price}</td>
                  <td className="text-center ">{item.stock}</td>
                  <td className="text-center ">
                    <input
                      className="w-full rounded-md p-1 text-center "
                      type="number"
                      name=""
                      id=""
                      placeholder="0"
                      min={0}
                      max={item.stock}
                      onChange={(e) => p.onChange(Number(e.target.value))}
                    />
                  </td>
                  <td className="">
                    <div className="flex justify-center items-center ">
                      <button
                        onClick={() => {
                          p.onClick(item.productId, p.amount);
                        }}
                      >
                        <FaPlusCircle />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};
