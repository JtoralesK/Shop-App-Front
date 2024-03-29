"use client";
import { useState } from "react";
import { InvoiceCard } from "./invoiceCard";
import { AddInvoiceProp, InvoiceArrayItem } from "../types";
import { Invoice } from "@/app/utilities/invoices";
import { SectionToAddComponent } from "./sectionToAddComponent";
export function AddInvoiceComponent(p: AddInvoiceProp) {
  const { addTypeObj } = p;
  const [showAddProducts, setShowAddProducts] = useState(true);
  const [invoice, setInvoice] = useState<Invoice>(p.invoice);
  const setInvoiceItems = (e: InvoiceArrayItem[]) => {
    setInvoice({ ...invoice, invoiceItems: e });
  };
  const changeSection = () => {
    setShowAddProducts(!showAddProducts);
  };

  const deleteProductInvoiceCard = (id: number, amount: number) => {
    const newProducts = invoice.invoiceItems.filter(
      (product) => product.item.id !== id
    );
    addTypeObj.products.map((product: any) => {
      if (product.id === id) {
        product.stock += amount;
      }
    });
    setInvoiceItems(newProducts);
  };
  return (
    <>
      <div className="h-full w-full my-2 ">
        <div className="h-full w-full  rounded-lg flex flex-row gap-7">
          <SectionToAddComponent
            invoice={invoice}
            addTypeObj={addTypeObj}
            changeSection={changeSection}
            setInvoice={(e: any) => {
              setInvoice(e);
            }}
            showAddProducts={showAddProducts}
            setInvoiceItems={(e: any) => {
              setInvoiceItems(e);
            }}
          />

          <div className="w-5/12">
            <InvoiceCard
              deleteProductInvoiceCard={deleteProductInvoiceCard}
              products={invoice.invoiceItems}
              invoice={invoice}
            />
            <div className="w-full h-[10%] "></div>
          </div>
        </div>
      </div>
    </>
  );
}
