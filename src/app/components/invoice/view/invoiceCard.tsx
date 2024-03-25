"use state";
import { InvoiceArrayItem } from "../types";
import { useState } from "react";
import { InvoiceCardTable } from "./invoiceCardTable";
import { Invoice } from "@/app/utilities/invoices";
type Props = {
  products: InvoiceArrayItem[];
  invoice: Invoice;
};

export function InvoiceCard({ invoice, products }: Props) {
  const [total, setTotal] = useState(0);
  return (
    <>
      <div className={`w-full h-[90%] bg-firstWhite`}>
        <div className="w-full h-5/6 flex flex-col px-12 pt-14 gap-2">
          <div className="h-12 flex flex-row justify-between items-center">
            <div>
              <h4 className="font-bold text-lg">Invoice</h4>

              <p className="text-xs">Invoice N°: {invoice.id}</p>
            </div>
          </div>
          <div className="h-24 flex flex-row w-full  justify-between">
            <div className="flex gap-2 flex-col">
              <div>
                <p className="text-sm ">Costumer</p>
                <p className="text-xs">{invoice.costumer}</p>
              </div>
              <div>
                <p className="text-sm">Biller</p>
                <p className="text-xs">
                  {invoice.biller.name + " " + invoice.biller.lastName}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm ">Payment</p>
              <p className="text-xs">{invoice.paymentMethod.paymentMethod}</p>
            </div>
          </div>

          <div className=" min-h-20">
            <InvoiceCardTable
              setTotal={(e) => {
                setTotal(e);
              }}
              products={products}
              typeComponent="view"
            />
          </div>
        </div>
        <div className="w-full h-1/6 bg-primary text-firstWhite px-12 py-2 flex justify-center  items-center">
          <div className="w-full  ">
            <div className="flex flex-row justify-between  text-xs">
              <p className="">Date</p>
              <p>Total</p>
            </div>
            <div className="flex flex-row justify-between  h-10 border-y items-center">
              <div className="">Bill</div>
              <div>{`${invoice.createdAt}`}</div>
              {total.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
