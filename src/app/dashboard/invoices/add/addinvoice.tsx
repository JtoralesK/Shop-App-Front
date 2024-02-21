"use client";
import { AddProducts } from "./addProducts";
import { useState } from "react";
import { InvoiceCard } from "./invoiceCard";
import { InvoiceArrayItem } from "./addProducts";
import { CreateInvoiceForm } from "./CreateInvoiceForm";
import { User } from "@/app/utilities/users";
import { Product } from "@/app/utilities/products";
type Prop = {
  user: User;
  products: Product[];
};
export function AddInvoice(p: Prop) {
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [products, setProducts] = useState<InvoiceArrayItem[]>([]);
  const [costumer, setCostumer] = useState<string>("");
  const changeSection = () => {
    setShowAddProducts(!showAddProducts);
  };
  return (
    <>
      <div className="h-full w-full my-2 ">
        <div className="h-full w-full  rounded-lg flex flex-row gap-7">
          {!showAddProducts ? (
            <CreateInvoiceForm
              changeSection={changeSection}
              user={p.user}
              costumerOnChange={(e) => {
                setCostumer(e);
              }}
            />
          ) : (
            <AddProducts
              products={p.products}
              onClick={changeSection}
              addProduct={(e) => {
                setProducts(e);
              }}
            />
          )}

          <div className="w-5/12">
            <InvoiceCard products={products} costumer={costumer} />
            <div className="w-full h-[10%] "></div>
          </div>
        </div>
      </div>
    </>
  );
}
