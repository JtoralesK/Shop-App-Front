import { saveInvoiceAction } from "@/app/lib/actions/invoice";
import { User } from "@/app/utilities/users";
import { SubmitButton } from "@/app/UI/submitButton";
import { InvoiceArrayItem } from "../types";
type SaveInvoiceProp = {
  costumer: string;
  biller: User;
  products: InvoiceArrayItem[];
  paymentCondition: string;
  state: boolean;
  setState: (e: boolean) => void;
};
export const SaveInvoiceForm = (p: SaveInvoiceProp) => {
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
        name="Pay now"
        className=" bg-primary rounded-lg text-white w-full px-4 h-8 item"
      />
    </form>
  );
};
