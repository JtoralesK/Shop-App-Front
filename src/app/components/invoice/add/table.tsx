"use state";
import Image from "next/image";
import { Theah } from "@/app/UI/table/thead";
import { FaPlusCircle } from "react-icons/fa";
import { Product } from "@/app/utilities/products";
import { Pagination } from "@/app/UI/pagination";
import { useState } from "react";
import { InvoiceArrayItem } from "../types";
type prop = {
  onClick: (id: number, amount: number) => any;
  products: Product[];
  invoiceArrayItem: InvoiceArrayItem[];
  totalPages: number;
  currentPage: number;
};
export const AddProductToInvoiceTable = (p: prop) => {
  const [amount, setAmount] = useState(0);
  let con = 0;

  return (
    <div className=" h-52 ">
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
          {p.products.map((item) => {
            if (con < 10) {
              con++;
              if (item.active) {
                return (
                  <tr className="h-14" key={item.id}>
                    <td>
                      <div className="flex justify-center  items-center px-4">
                        <div className="w-11/12 flex flex-row items-center justify-start gap-2  ">
                          <Image
                            className="w-8 rounded-3xl"
                            width={40}
                            height={40}
                            src={item.image}
                            alt={item.description}
                          />
                          {item.name}
                        </div>
                      </div>
                    </td>
                    <td className="text-center ">{item.price}</td>
                    <td className="text-center ">{item.stock}</td>
                    <td className="text-center ">
                      <AmountInput setAmount={setAmount} item={item} />
                    </td>
                    <td>
                      <div className="flex justify-center items-center ">
                        <button
                          onClick={() => {
                            p.onClick(item.id, amount);
                          }}
                        >
                          <FaPlusCircle />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              }
            }
          })}
        </tbody>
      </table>
      <Pagination totalPages={p.totalPages} currentPage={p.currentPage} />
    </div>
  );
};
type AmountInputProp = {
  setAmount: (e: number) => void;
  item: Product;
};

const AmountInput = (p: AmountInputProp) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    p.setAmount(Number(e.target.value));
  };

  const handleClear = () => {
    setInputValue("");
  };
  return (
    <input
      className="w-full rounded-md p-1 text-center "
      type="number"
      id={p.item.id.toString()}
      placeholder="0"
      min={0}
      max={p.item.stock}
      value={inputValue}
      onChange={handleChange}
      onBlur={handleClear} //
    />
  );
};
