import { GoDash } from "react-icons/go";
import { InvoiceArrayItem } from "./types";

type prop1 = {
  products: InvoiceArrayItem[];
  deleteProductInvoiceCard: (id: number, amount: number) => void;
  setTotal: (p: number) => void;
  typeComponent: "add" | "view";
};

export const InvoiceCardTable = (p: prop1) => {
  let cont = 0;
  let total = 0;
  if (p.products.length === 0) p.setTotal(0);
  return (
    <table className="w-full">
      <thead>
        <tr className="w-full text-xs border-b">
          <td className=" w-3/6 ">Product</td>
          <td className="text-center w-1/6">Rate</td>
          <td className="text-center w-1/6">amount</td>
          <td className="text-center w-1/6">Subtotal</td>
          <td className="text-center w-1/6"></td>
        </tr>
      </thead>
      <tbody className="text-xs">
        {p.products.map((invoiceItem) => {
          const { amount, item } = invoiceItem;
          const product = item;
          if (cont < 10) {
            total += product.price * amount;
            if (cont === p.products.length - 1) p.setTotal(total);
            cont++;
            return (
              <tr className="my-2" key={product.id}>
                <td>{product.name}</td>
                <td className="text-center">{product.price}</td>
                <td className="text-center">{amount}</td>
                <td className="text-center">{product.price * amount}</td>
                {p.typeComponent === "add" && (
                  <td className="hover:bg-secondary rounded">
                    <button
                      onClick={() => {
                        p.deleteProductInvoiceCard(invoiceItem.item.id, amount);
                      }}
                    >
                      <GoDash />
                    </button>
                  </td>
                )}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export const GetNowDate = () => {
  const fecha = new Date();
  const dia = fecha.getDate().toString().padStart(2, "0"); // Agregar un cero inicial si el día es menor que 10
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Agregar un cero inicial si el mes es menor que 10
  const año = fecha.getFullYear();
  return { dia, mes, año };
};
