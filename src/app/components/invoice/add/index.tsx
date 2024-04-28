"use client";
import { useState } from "react";
import { InvoiceCard } from "./invoiceCard";
import { AddInvoiceProp, InvoiceArrayItem } from "../types";
import { Invoice } from "@/app/utilities/invoices";
import { SectionToAddComponent } from "./sectionToAddComponent";
import { Product } from "@/app/utilities/products";
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
  const { deleteProductInvoiceCard } = useInvoiceManagement(
    p.addTypeObj.products,
    setInvoice,
    invoice
  );

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

const useInvoiceManagement = (
  productsToBuy: Product[],
  setListInvoices: (e: any) => void,
  invoice: Invoice
) => {
  const deleteProductInvoiceCard = (id: number, amount: number) => {
    //se crea una nueva lista de productos sin el producto eliminado
    const invListWithoutInvDeleted = invoice.invoiceItems.filter(
      (product) => product.item.id !== id
    );
    //se resetea el stock del producto eliminado
    productsToBuy.map((product: any) => {
      if (product.id === id) {
        product.stock += amount;
      }
    });
    setListInvoices({ ...invoice, invoiceItems: invListWithoutInvDeleted });
  };
  return { deleteProductInvoiceCard };
};
