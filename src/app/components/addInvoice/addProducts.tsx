"use client";
import { FaArrowLeft } from "react-icons/fa";
import { Product } from "@/app/utilities/products";
import { AddProductToInvoiceTable } from "./table";
import { SearchInput } from "@/app/UI/searchInput";
import { InvoiceArrayItem } from "./types";
import { FirstFormSubmitObject } from "./types";
import { Invoice } from "@/app/utilities/invoices";
type Prop = {
  onClick: () => void;
  addProduct: (p: InvoiceArrayItem[]) => any;
  products: Product[];
  invoice: Invoice;
  totalPages: number;
  currentPage: number;
};

export function AddProducts(p: Prop) {
  const { products, invoice } = p;
  const changeSection = () => {
    p.onClick();
  };

  const addProductToInvoice = (id: number, amount: number) => {
    if (amount === 0) return;
    const productExist = p.products.find((item) => item.id === id);
    const invoiceRepeated = invoice.invoiceItems.find(
      (item) => item.item.id === id
    );
    if (productExist && !invoiceRepeated) {
      productExist.stock -= amount;
      const obj = {
        item: productExist,
        amount,
      };
      if (p.addProduct) {
        const a = [...invoice.invoiceItems, obj];
        console.log("lo quee llega:", invoice);
        console.log("lo quee se agrega:", obj);
        p.addProduct([...invoice.invoiceItems, obj]);
      }
    }
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
            <div className="my-2">
              <div className="w-1/3">
                <SearchInput placeholder="Search name" />
              </div>
            </div>
            <AddProductToInvoiceTable
              products={p.products}
              invoiceArrayItem={invoice.invoiceItems}
              totalPages={p.totalPages}
              currentPage={p.currentPage}
              onClick={(id, amount) => {
                addProductToInvoice(id, amount);
              }}
            />
          </div>
        </div>
        <div className="w-full h-[10%] bg-secondary border"></div>
      </div>
    </>
  );
}
