import { Invoice } from "@/app/utilities/invoices";
import { Product } from "@/app/utilities/products";
import { User } from "@/app/utilities/users";
import { Payment } from "@/app/utilities/invoices";
export type Prop = {
  invoice: Invoice;
};
export type AddInvoiceProp = {
  addTypeObj: { totalPages: number; currentPage: number; products: Product[] };
  invoice: Invoice;
};
export type InvoiceArrayItem = {
  item: Product;
  amount: number;
};
export type FirstFormSubmitObject = {
  costumer: string;
  biller: User;
  PaymentCondition: number;
  PaymentString: Payment;
};

export const dropdownItems = ["Cash", "Credit Card", "Debit Card", "Paypal"];
