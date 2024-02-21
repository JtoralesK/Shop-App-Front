import Image from "next/image";
import { Theah } from "@/app/UI/table/thead";
import { FaPlusCircle } from "react-icons/fa";
import { Product } from "@/app/utilities/products";

type prop = {
  onClick: (id: number, amount: number) => any;
  onChange: (amount: number) => any;
  amount: number;
  products: Product[];
};
export const AddProductToInvoiceTable = (p: prop) => {
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
          {p.products.map((item) => {
            if (con < 10) {
              con++;
              return (
                <tr className="h-14" key={item.id}>
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
                          p.onClick(item.id, p.amount);
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
