"use server";
import { invoiceSchema } from "../schemas";
import { saveInvoice } from "../../data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const saveInvoiceAction = async (FormData: FormData) => {
  let { costumer, biller, products, paymentCondition } =
    Object.fromEntries(FormData);
  products = JSON.parse(products.toString());
  biller = JSON.parse(biller.toString());
  paymentCondition = JSON.parse(paymentCondition.toString());
  let invoiceCreatedValidated = false;
  try {
    const invoiceObj = invoiceSchema.parse({
      costumer,
      biller,
      paymentMethodId: paymentCondition,
      invoiceItems: products,
    });
    const res = await saveInvoice(invoiceObj);
    console.log(res);
    if (res.data.errorResponse == null) invoiceCreatedValidated = true;
  } catch (err: any) {
    console.log(err.errors);
  }
  if (invoiceCreatedValidated) {
    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
  }
};
