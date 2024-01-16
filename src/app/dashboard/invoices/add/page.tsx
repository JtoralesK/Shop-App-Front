"use client";
import { FaArrowRight } from "react-icons/fa";
import { AddProducts } from "./addProducts";
import { useState } from "react";
import { InvoiceCard } from "./invoiceCard";
import { Dropdown } from "@/app/UI/dropdown";
import { DatePickerLabel } from "@/app/UI/datespeaker";
import { DefaultLabel } from "@/app/UI/labelText";
import { LabelText } from "@/app/UI/labelText";
import { InvoiceArrayItem } from "./addProducts";
export default function AddInvoice() {
  const dropdownItems = ["Cash", "Credit Card", "Debit Card", "Paypal"];
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [products, setProducts] = useState<InvoiceArrayItem[]>([]);
  console.log(products, 2);
  const changeSection = () => {
    setShowAddProducts(!showAddProducts);
  };
  return (
    <>
      <div className="h-full w-full my-2 ">
        <div className="h-full w-full  rounded-lg flex flex-row gap-7">
          {!showAddProducts ? (
            <div className="w-7/12 h-2/3  bg-firstWhite p-4 flex flex-col gap-4">
              <p className="font-bold text-lg">Create Invoice</p>
              <div className="flex flex-row gap-3">
                <LabelText
                  text="Invoice Number"
                  value="F-03950285"
                  type="text"
                />
                <DatePickerLabel text="Start date:" />
              </div>
              <div className="flex flex-row gap-3">
                <LabelText
                  text="Customer*"
                  placeholder="Josef Martinez"
                  type="text"
                />
                <LabelText text="Biller*" placeholder="John Doe" type="text" />
              </div>
              <div className="pr-2 w-1/2">
                <DefaultLabel text="Payment Condition">
                  <Dropdown
                    items={dropdownItems}
                    placeholder="Select Condition"
                  />
                </DefaultLabel>
              </div>
              <div className="w-full pr-2 flex justify-end ">
                <button
                  onClick={changeSection}
                  className="bg-primary p-1 rounded-md text-firstWhite"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ) : (
            <AddProducts
              onClick={changeSection}
              addProduct={(e) => {
                setProducts(e);
              }}
            />
          )}

          <div className="w-5/12">
            <InvoiceCard products={products} />
            <div className="w-full h-[10%] "></div>
          </div>
        </div>
      </div>
    </>
  );
}
