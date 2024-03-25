"use client";
import { InvoiceCard } from "./invoiceCard";
import { CreateInvoiceForm } from "./CreateInvoiceForm";
import { Prop } from "../types";
export function ViewInvoiceComponent({ invoice }: Prop) {
  return (
    <>
      <div className="h-full w-full my-2 ">
        <div className="h-full w-full  rounded-lg flex flex-row gap-7">
          <CreateInvoiceForm invoice={invoice} />
          <div className="w-5/12">
            <InvoiceCard products={invoice.invoiceItems} invoice={invoice} />
            <div className="w-full h-[10%] "></div>
          </div>
        </div>
      </div>
    </>
  );
}
