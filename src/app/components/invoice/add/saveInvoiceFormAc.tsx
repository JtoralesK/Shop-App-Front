import { saveInvoiceAction } from "@/app/lib/actions/invoice";
import { User } from "@/app/utilities/users";
import { SubmitButton } from "@/app/UI/submitButton";
import { InvoiceArrayItem } from "../types";
import { showToastError } from "@/app/utilities/toastMessages";
type SaveInvoiceProp = {
  costumer: string;
  biller: User;
  products: InvoiceArrayItem[];
  paymentCondition: string;
  state: boolean;
  setState: (e: boolean) => void;
};
const action = (FormData: FormData) => {
  let { costumer, products, paymentCondition } = Object.fromEntries(FormData);
  console.log(costumer);
  if (!costumer || JSON.parse(paymentCondition.toString()) < 1) {
    showToastError("Complete customer name, payment, click right arrow. ");
    return;
  }

  if (JSON.parse(products.toString()).length === 0) {
    showToastError("You must add products to the invoice");
    return;
  }
  saveInvoiceAction(FormData);
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
    <form action={action}>
      <input type="hidden" name="costumer" value={costumer} />
      <input type="hidden" name="biller" value={JSON.stringify(biller.id)} />
      <input type="hidden" name="paymentCondition" value={paymentCondition} />
      <input
        type="hidden"
        name="products"
        value={JSON.stringify(newArrayProducts)}
      />
      <SubmitButton
        itemState={p.state}
        loadingSubmit={(loading: boolean) => p.setState(loading)}
        name="Pay now"
        className=" bg-primary rounded-lg text-white w-full px-4 h-8 item"
      />
    </form>
  );
};
