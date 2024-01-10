"use client";
import Dropdown from "@/app/UI/dropdown";
import { SearchInput } from "@/app/UI/searchInput";
import { FaArrowRight } from "react-icons/fa";
import { AddProducts } from "./addProducts";
import { useState } from "react";
import { productsArray } from "@/app/utilities/products";
import { InvoiceCard } from "./invoiceCard";
export default function AddInvoice() {
  const dropdownItems = ["Cash", "Credit Card", "Debit Card", "Paypal"];
  const [showAddProducts, setShowAddProducts] = useState(false);
  const changeSection = () => {
    setShowAddProducts(!showAddProducts);
  };
  let cont = 0;
  return (
    <>
      <div className="h-full w-full my-2 ">
        <div className="h-full w-full  rounded-lg flex flex-row gap-7">
          {!showAddProducts ? (
            <div className="w-7/12 h-2/3  bg-firstWhite p-4 flex flex-col gap-4">
              <p className="font-bold text-lg">Create Invoice</p>
              <div className="flex flex-row gap-3">
                <InvoiceLabel
                  text="Invoice Number"
                  value="F-03950285"
                  type="text"
                />
                <InvoicePickerLabel text="Start date:" />
              </div>
              <div className="flex flex-row gap-3">
                <InvoiceLabel
                  text="Customer*"
                  placeholder="Josef Martinez"
                  type="text"
                />
                <InvoiceLabel
                  text="Biller*"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="pr-3">
                <InvoiceDefaultLabel text="Payment Condition">
                  <Dropdown
                    items={dropdownItems}
                    placeholder="Select Condition"
                  />
                </InvoiceDefaultLabel>
              </div>
              <div className="w-full pr-2 flex justify-end ">
                <button
                  onClick={changeSection}
                  className="bg-primary p-1 rounded-md text-firstWhite"
                >
                  {" "}
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ) : (
            <AddProducts onClick={changeSection} />
          )}

          <div className="w-5/12">
            <InvoiceCard />
            <div className="w-full h-[10%] "></div>
          </div>
        </div>
      </div>
    </>
  );
}
type Prop = {
  text: string;
  placeholder?: string;
  type: string;
  value?: string;
};
const InvoiceLabel = (p: Prop) => {
  return (
    <InvoiceDefaultLabel text={p.text}>
      <input
        className="w-full py-1 border-2 bg-gray-100 rounded-md p-2 "
        type={p.type}
        placeholder={p.value ? "" : p.placeholder}
        value={p.value}
      />
    </InvoiceDefaultLabel>
  );
};

type Prop2 = {
  text: string;
  children: React.ReactNode;
};
const InvoiceDefaultLabel = (p: Prop2) => {
  return (
    <div className="w-1/2 min-h-6 ">
      <label>
        <p className="my-1 text-gray-500 font-medium">{p.text}</p>
        {p.children}
      </label>
    </div>
  );
};
type PickerProp = {
  text: string;
};
const InvoicePickerLabel = (p: PickerProp) => {
  return (
    <InvoiceDefaultLabel text={p.text}>
      <input
        className="w-full py-1 border-2 bg-gray-100 rounded-md p-2"
        type="date"
        id="start"
        min="2023-01-01"
        max="2025-12-31"
      />
    </InvoiceDefaultLabel>
  );
};
