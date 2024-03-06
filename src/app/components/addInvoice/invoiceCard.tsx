"use state";
import { InvoiceArrayItem, FirstFormSubmitObject } from "./types";
import { useState } from "react";
import { GetNowDate } from "./invoiceCardTable";
import { InvoiceCardTable } from "./invoiceCardTable";
import { saveInvoiceAction } from "@/app/lib/actions/invoice";
import { User } from "@/app/utilities/users";
import { Invoice } from "@/app/utilities/invoices";
import { SubmitButton } from "../product/form";
type Props = {
  products: InvoiceArrayItem[];
  typeComponent: "add" | "view";
  deleteProductInvoiceCard: (id: number, amount: number) => void;
  invoice: Invoice;
};

export function InvoiceCard(p: Props) {
  const { invoice } = p;
  const { typeComponent } = p;
  const [total, setTotal] = useState(0);
  const { dia, mes, año } = GetNowDate();
  const [state, setState] = useState(false);
  return (
    <>
      <div className={`w-full h-[90%] bg-firstWhite`}>
        <div className="w-full h-5/6 flex flex-col px-12 pt-14 gap-2">
          <div className="h-12 flex flex-row justify-between items-center">
            <div>
              <h4 className="font-bold text-lg">Invoice</h4>
              {p.typeComponent == "view" && (
                <p className="text-xs">
                  Invoice N°: {p.invoice && p.invoice.id}
                </p>
              )}
            </div>
            {typeComponent === "add" && (
              <SaveInvoiceForm
                costumer={invoice.costumer}
                products={p.products}
                biller={invoice.biller}
                paymentCondition={invoice.paymentMethod.id.toString()}
                state={state}
                setState={setState}
              />
            )}
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
              <p className="text-xs">
                {invoice.paymentMethod.paymentMethod
                  ? invoice.paymentMethod.paymentMethod
                  : invoice.paymentMethod.paymentMethod}
              </p>
            </div>
          </div>

          <div className=" min-h-20">
            <InvoiceCardTable
              setTotal={(e) => {
                setTotal(e);
              }}
              products={p.products}
              typeComponent={typeComponent}
              deleteProductInvoiceCard={p.deleteProductInvoiceCard}
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
              <div>{`${dia}/${mes}/${año}`}</div>
              {total.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type SaveInvoiceProp = {
  costumer: string;
  biller: User;
  products: InvoiceArrayItem[];
  paymentCondition: string;
  state: boolean;
  setState: (e: boolean) => void;
};
const SaveInvoiceForm = (p: SaveInvoiceProp) => {
  const { costumer, biller, products, paymentCondition } = p;
  let newArrayProducts = products.map((item) => {
    return {
      product: item.item.id,
      amount: item.amount,
    };
  });
  return (
    <form action={saveInvoiceAction}>
      <input type="hidden" name="costumer" value={costumer} />
      <input type="hidden" name="biller" value={JSON.stringify(biller.id)} />
      <input
        type="hidden"
        name="products"
        value={JSON.stringify(newArrayProducts)}
      />
      <input type="hidden" name="paymentCondition" value={paymentCondition} />
      <SubmitButton
        itemState={p.state}
        loadingSubmit={(loading: boolean) => p.setState(loading)}
        typeComponent="Pay now"
        className=" bg-primary rounded-lg text-white w-full px-4 h-8 item"
      />
    </form>
  );
};
