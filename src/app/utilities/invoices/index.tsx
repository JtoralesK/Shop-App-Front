export type PaymentMethod = "Cash" | "Credit Card" | "Debit Card" | "Paypal";
export type PaymentStatus = "Paid" | "Unpaid" | "Pending";
import { Product } from "../products";
import { User } from "../users";
export type Invoice = {
  id: number;
  createdAt: string;
  total: number;
  costumer: string;
  generatedBy: User;
  invoiceItems: Product[];
  totalProducts: number;
  active: boolean;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
};
export const dropdownItems = ["Cash", "Credit Card", "Debit Card", "Paypal"];
