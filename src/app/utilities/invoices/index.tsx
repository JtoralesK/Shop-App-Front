export type Payment = "Cash" | "Credit Card" | "Debit Card" | "Paypal";
import { Product } from "../products";
import { User } from "../users";
export type Invoice = {
  id: number;
  createdAt: string;
  total: number;
  costumer: string;
  biller: User;
  invoiceItems: InvoiceArrayItem[];
  active: boolean;
  paymentMethod: PaymentMethod;
};
export type PaymentMethod = {
  id: number;
  paymentMethod: Payment;
};
export type InvoiceArrayItem = {
  item: Product;
  amount: number;
};
export const dropdownItems = ["Cash", "Credit Card", "Debit Card", "Paypal"];

export type InvoiceComplete = {
  invoice: Invoice;
};
export const DefaultInvoice: Invoice = {
  id: 0,
  createdAt: "",
  total: 0,
  costumer: "Costumer Name",
  biller: {} as User,
  invoiceItems: [],
  active: false,
  paymentMethod: { id: 0, paymentMethod: "Cash" },
};
